# WealthIQ Build & Deployment Guide

## Accessing Your Builds

Your app was built using **EAS Build** (Expo Application Services). Here's how to access your builds:

### 1. Expo Dashboard (Primary Method)

1. **Go to Expo Dashboard**: https://expo.dev
2. **Sign in** with your Expo account (the one used to create the project)
3. **Navigate to your project**: Look for "WealthIQ" or project ID `de00f772-e518-408a-bcbb-f1b343cfabf0`
4. **Click on "Builds"** in the left sidebar
5. **View all builds**: You'll see a list of all builds (development, preview, production)
6. **Download APK**: Click on any build to see details and download the APK file

### 2. Build Email Notifications

- When a build completes, Expo sends an email to the account owner
- The email contains:
  - Build status (success/failed)
  - Direct download link
  - QR code for easy installation
  - Build details and logs

### 3. Using EAS CLI

If you have the EAS CLI installed, you can list and download builds:

```bash
# Install EAS CLI (if not already installed)
npm install -g eas-cli

# Login to your Expo account
eas login

# List all builds
eas build:list

# Download a specific build
eas build:download [build-id]
```

### 4. Direct Build URLs

Builds are hosted at URLs like:
```
https://expo.dev/artifacts/eas/[build-id].apk
```

You can find the exact URL in:
- The build email notification
- The Expo dashboard build details page
- The build logs

## Building a New Version

After making the improvements, you'll want to build a new version:

### Prerequisites

1. **Install EAS CLI**:
   ```bash
   npm install -g eas-cli
   ```

2. **Login to Expo**:
   ```bash
   eas login
   ```

3. **Configure your project** (already done - eas.json exists):
   ```bash
   eas build:configure
   ```

### Build Commands

#### For Testing (Preview Build)
```bash
# Build APK for Android (preview/internal distribution)
eas build --platform android --profile preview
```

#### For Production
```bash
# Build production APK
eas build --platform android --profile production
```

#### For Development (with dev client)
```bash
# Build development client
eas build --platform android --profile development
```

### Build Options

- **APK**: For direct installation (preview builds)
- **AAB**: For Google Play Store submission (production builds)

To build AAB for Play Store:
```bash
eas build --platform android --profile production
# Then modify eas.json to use "appBundle" instead of "apk"
```

## Installing the APK

### Method 1: Direct Download
1. Download the APK from Expo dashboard or email
2. Transfer to your Android device
3. Enable "Install from Unknown Sources" in Android settings
4. Open the APK file and install

### Method 2: QR Code
1. Open the build details page in Expo dashboard
2. Scan the QR code with your phone
3. Download and install directly

### Method 3: ADB (Android Debug Bridge)
```bash
# Connect device via USB with USB debugging enabled
adb install path/to/your-app.apk
```

## Updating the App Version

Before building a new version, update the version in `app.json`:

```json
{
  "expo": {
    "version": "1.0.1",  // Increment this
    "android": {
      "versionCode": 2  // Add this - increment for each build
    }
  }
}
```

## Google Play Store Submission

### 1. Build Production AAB

First, update `eas.json` to build AAB instead of APK:

```json
{
  "build": {
    "production": {
      "android": {
        "buildType": "app-bundle"  // Changed from "apk"
      }
    }
  }
}
```

Then build:
```bash
eas build --platform android --profile production
```

### 2. Submit to Play Store

```bash
# Submit the latest production build
eas submit --platform android
```

Or manually:
1. Download the AAB from Expo dashboard
2. Go to Google Play Console
3. Create new release
4. Upload the AAB file
5. Fill in release notes
6. Submit for review

## Troubleshooting

### Can't Find Builds?
- Check you're logged into the correct Expo account
- Verify the project ID matches: `de00f772-e518-408a-bcbb-f1b343cfabf0`
- Check build emails in your inbox

### Build Failed?
- Check build logs in Expo dashboard
- Common issues:
  - Missing assets (icon.png, etc.)
  - Invalid app.json configuration
  - Dependency conflicts
  - Build quota exceeded (free tier limits)

### Can't Install APK?
- Enable "Install from Unknown Sources"
- Check Android version compatibility
- Verify APK wasn't corrupted during download

## Build Status

Check build status:
- **In Progress**: Building on Expo servers
- **Finished**: Build complete, ready to download
- **Error**: Build failed, check logs
- **Canceled**: Build was canceled

## Quick Reference

**Expo Dashboard**: https://expo.dev  
**Project ID**: `de00f772-e518-408a-bcbb-f1b343cfabf0`  
**Package Name**: `com.yordanskiii.WealthIQ`

## Next Steps

1. **Access your existing builds**: Go to https://expo.dev and check the Builds section
2. **Build new version**: After our improvements, run `eas build --platform android --profile preview`
3. **Test the new build**: Download and install on your device
4. **Submit to Play Store**: When ready, build production AAB and submit

## Notes

- Free Expo accounts have build limits (check current quota)
- Builds expire after a certain time (download while available)
- Production builds require proper signing (EAS handles this automatically)
- Keep your EAS credentials secure
