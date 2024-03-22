import PushNotification from 'react-native-push-notification';
import BackgroundTimer from 'react-native-background-timer';

const AlarmManager = (timeInSeconds, message) => {
  const currentTime = Math.floor(Date.now() / 1000);
  const triggerTime = currentTime;

  const channelId = 'alarm_channel'; // Define your channel ID here

  PushNotification.createChannel(
    {
      channelId,
      channelName: 'Alarm Channel',
    },
    (created) => console.log(`Channel created: ${created}`)
  );

  BackgroundTimer.runBackgroundTimer(() => {
    const now = Math.floor(Date.now() / 1000);
    if (now == triggerTime) {
      PushNotification.localNotification({
        channelId, // Pass the channel ID here
        title: 'Alarm',
        message: message,
      });
      BackgroundTimer.stopBackgroundTimer(); // Stop the timer after triggering the alarm
    }
  }, 1000);
};

export default AlarmManager;
