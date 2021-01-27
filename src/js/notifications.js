import * as PNotify from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css'
import 'material-design-icons/iconfont/material-icons.css';
import '@pnotify/core/dist/Material.css';
PNotify.defaults.styling = 'material';
PNotify.defaults.icons = 'material';

function notificationsSuccess(text) {
  const notificationsSuccess = PNotify.success({
    text: `Your request: ${text}`,
    delay: 1000,
  });

  notificationsSuccess.on('click', () => {
    notificationsSuccess.close();
  });
}

function notificationsNotice() {
  const notificationsNotice = PNotify.info({
    text: 'Enter your request!',
    delay: 1000,
  });

  notificationsNotice.on('click', () => {
    notificationsNotice.close();
  });
}
export {notificationsSuccess,notificationsNotice};
