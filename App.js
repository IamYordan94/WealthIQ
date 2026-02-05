import React, { useState, useEffect } from 'react';
import { View, BackHandler, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { getItem, KEYS } from './src/core/storage';
import NotificationService from './src/services/NotificationService';
import SyncService from './src/services/SyncService';

import OnboardingScreen from './src/screens/OnboardingScreen';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import PrivacyPolicyScreen from './src/screens/PrivacyPolicyScreen';
import TermsScreen from './src/screens/TermsScreen';

import CourseListScreen from './src/features/curriculum/ui/CourseListScreen';
import ModuleListScreen from './src/features/curriculum/ui/ModuleListScreen';
import ModuleDetailScreen from './src/features/curriculum/ui/ModuleDetailScreen';
import LessonScreen from './src/features/curriculum/ui/LessonScreen';

import PremiumScreen from './src/features/subscription/ui/PremiumScreen';

import ToolsScreen from './src/features/tools/ui/ToolsScreen';
import CalculatorScreen from './src/features/tools/ui/CalculatorScreen';

import InfoScreen from './src/features/info/ui/InfoScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Loading');
  const [screenParams, setScreenParams] = useState({});
  const [navigationStack, setNavigationStack] = useState(['Home']);
  const [backPressCount, setBackPressCount] = useState(0);

  useEffect(() => {
    checkOnboarding();
    initializeServices();
  }, []);

  const initializeServices = async () => {
    await SyncService.initialize();
    const hasPermission = await NotificationService.requestPermissions();
    if (hasPermission) {
      await NotificationService.scheduleDailyReminder(18, 0);
    }
  };

  const checkOnboarding = async () => {
    try {
      const completed = await getItem(KEYS.ONBOARDING_COMPLETE);
      const initialScreen = completed === 'true' ? 'Home' : 'Onboarding';
      setCurrentScreen(initialScreen);
      setNavigationStack([initialScreen]);
    } catch (e) {
      setCurrentScreen('Onboarding');
      setNavigationStack(['Onboarding']);
    }
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (currentScreen === 'Home' || currentScreen === 'Onboarding') {
        if (backPressCount === 0) {
          setBackPressCount(1);
          Alert.alert('Press back again to exit');
          setTimeout(() => setBackPressCount(0), 2000);
          return true;
        }
        return false;
      } else {
        navigation.goBack();
        return true;
      }
    });
    return () => backHandler.remove();
  }, [currentScreen, backPressCount]);

  const navigation = {
    navigate: (screen, params = {}) => {
      setNavigationStack(prev => [...prev, screen]);
      setScreenParams(params);
      setCurrentScreen(screen);
    },
    replace: (screen, params = {}) => {
      setNavigationStack(prev => {
        const newStack = [...prev];
        newStack[newStack.length - 1] = screen;
        return newStack;
      });
      setScreenParams(params);
      setCurrentScreen(screen);
    },
    goBack: () => {
      if (navigationStack.length > 1) {
        const newStack = [...navigationStack];
        newStack.pop();
        setNavigationStack(newStack);
        setCurrentScreen(newStack[newStack.length - 1]);
      } else {
        setCurrentScreen('Home');
      }
    },
  };

  const route = { params: screenParams };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Loading':
        return <View style={{ flex: 1, backgroundColor: '#0a0a0f' }} />;
      case 'Onboarding':
        return <OnboardingScreen navigation={navigation} />;
      case 'Home':
        return <HomeScreen navigation={navigation} />;
      case 'CourseList':
        return <CourseListScreen navigation={navigation} />;
      case 'ModuleList':
        return <ModuleListScreen navigation={navigation} route={route} />;
      case 'ModuleDetail':
        return <ModuleDetailScreen navigation={navigation} route={route} />;
      case 'Lesson':
        return <LessonScreen navigation={navigation} route={route} />;
      case 'Premium':
        return <PremiumScreen navigation={navigation} />;
      case 'Tools':
        return <ToolsScreen navigation={navigation} />;
      case 'Calculator':
        return <CalculatorScreen navigation={navigation} />;
      case 'Info':
        return <InfoScreen navigation={navigation} />;
      case 'Settings':
        return <SettingsScreen navigation={navigation} />;
      case 'PrivacyPolicy':
        return <PrivacyPolicyScreen navigation={navigation} />;
      case 'Terms':
        return <TermsScreen navigation={navigation} />;
      default:
        return <HomeScreen navigation={navigation} />;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#0a0a0f' }}>
      <StatusBar style="light" />
      {renderScreen()}
    </View>
  );
}
