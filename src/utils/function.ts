import { notification } from 'antd';

export const showNotificationPopup = (
  notificationType: string,
  notificationMessage: string,
  notificationDescription: string,
) =>
  notification[notificationType]({
    message: notificationMessage,
    description: notificationDescription,
  });
