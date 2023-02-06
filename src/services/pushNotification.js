import { Button, notification, Space } from 'antd';
const close = () => {
  console.log(
    'Notification was closed. Either the close button was clicked or duration time elapsed.',
  );
};
const PushNotification = ({id, title, message, placement}) => {
    console.log('Notification was' + id);
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Space>
        <Button type="primary" size="small" onClick={() => api.destroy(key)}>
          Confirm
        </Button>
      </Space>
    );
    api.open({
      message: title,
      description: message,
      btn,
      key,
      placement,
      onClose: close,
    });
  };
  return (
    <>
      {contextHolder}
      <Button id={id} style={{display: 'none'}} onClick={openNotification}>
        Open the notification box
      </Button>
    </>
  );
};
export default PushNotification;