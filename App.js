import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';

// Screens
import OnboardingScreen from './src/screens/OnboardingScreen';
import HomeScreen from './src/screens/HomeScreen';
import ModuleDetailScreen from './src/screens/ModuleDetailScreen';
import LessonScreen from './src/screens/LessonScreen';
import PremiumScreen from './src/screens/PremiumScreen';
import CalculatorScreen from './src/screens/CalculatorScreen';
import ActionPlanScreen from './src/screens/ActionPlanScreen';
import ReportScreen from './src/screens/ReportScreen';
import BadgesScreen from './src/screens/BadgesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Onboarding"
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#0a0a0f' },
          }}
        >
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ModuleDetail" component={ModuleDetailScreen} />
          <Stack.Screen name="Lesson" component={LessonScreen} />
          <Stack.Screen name="Premium" component={PremiumScreen} />
          <Stack.Screen name="Calculator" component={CalculatorScreen} />
          <Stack.Screen name="ActionPlan" component={ActionPlanScreen} />
          <Stack.Screen name="Report" component={ReportScreen} />
          <Stack.Screen name="Badges" component={BadgesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
