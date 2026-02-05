# Upgrade to Expo SDK 54 (Expo Go)

The project is configured for **Expo SDK 54** so you can use **Expo Go** on your device.

## Steps

1. **Clean install** (recommended if you had SDK 51 before):
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```
   On Windows PowerShell:
   ```powershell
   Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
   Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
   npm install
   ```

2. **Or** if you prefer to keep the lockfile and only upgrade:
   ```bash
   npm install
   ```
   (`.npmrc` has `legacy-peer-deps=true` to avoid peer dependency conflicts during the upgrade.)

3. **Align all Expo packages to SDK 54**:
   ```bash
   npx expo install --fix
   ```

4. **Run with Expo Go**:
   ```bash
   npx expo start
   ```
   Then scan the QR code with the **Expo Go** app (make sure Expo Go is updated to support SDK 54).

## Notes

- **expo-dev-client** was removed so the app runs in the standard Expo Go app. If you need custom native code later, add it back and use a development build.
- SDK 54 uses **React 19.1** and **React Native 0.81**. If any library warns about compatibility, check for updates or alternatives.
- Minimum Node version for SDK 54: **20.19.4**.
