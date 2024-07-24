import { toast } from 'react-toastify';
import axios from 'axios';

function NotificationButton() {
  const sendNotification = async () => {
    try {
      const response = await axios.post('http://localhost:3000/notification/send', {
        title: "Hello World",
        body: "My first send notification",
        token: ""
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };

  const handleClick = () => {
    toast('Notification Clicked');
    sendNotification();
  };

  return (
    <button onClick={handleClick}>
      Click for notification
    </button>
  );
}

export default NotificationButton;
