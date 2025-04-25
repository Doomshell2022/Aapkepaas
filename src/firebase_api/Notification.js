import {NativeModules, Platform, Alert, AppState, Linking} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

const {NotificationSettings} = NativeModules;

const checkNotificationEnabled2 = async () => {
  try {
    if (Platform.OS === 'ios') {
      // Check current notification settings
      PushNotificationIOS.checkPermissions(permissions => {
        const isEnabled =
          permissions.alert === 1 ||
          permissions.badge === 1 ||
          permissions.sound === 1;

        if (isEnabled) {
          console.log('Notifications are enabled');
        }
      });
    } else {
      const checkPermission = async () => {
        const authorizationStatus = await messaging().hasPermission();
        if (authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED) {
          console.log('Notifications are enabled');
        } else {
          Alert.alert(
            'Enable Notifications',
            'Please enable notifications to receive Notifications',
            [
              {
                text: 'Allow',
                onPress: () => {
                  NotificationSettings.openNotificationSettings();
                },
              },
            ],
          );
        }
      };

      // Check the permission status on Android
      checkPermission();

      // Add AppState listener
      // AppState.addEventListener('change', nextAppState => {
      //   if (nextAppState === 'active') {
      //     checkPermission();
      //   }
      // });
    }
  } catch (error) {
    console.log('Error checking notification status:', error);
  }
};

export default checkNotificationEnabled2;
