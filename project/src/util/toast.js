const SHOW_TIME = 5000;

const toast = (message, isTimeout = true) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#4481c3';
  alertContainer.style.color = 'white';

  alertContainer.textContent = message;

  document.body.append(alertContainer);


  if (isTimeout) {
    setTimeout(() => {
      alertContainer.remove();
    }, SHOW_TIME);
  }
};

export {toast};
