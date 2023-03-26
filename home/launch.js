window.onload = () => {
  let currentWindow = null;

  $('#launch').click(() => {
    if (firstExternalWindow) {
      firstExternalWindow.window.close();
      firstExternalWindow = null;
    };

    if (currentWindow) {
      currentWindow.window.close();
      currentWindow = null;
    };

    currentWindow = window.open('about:blank');
    currentWindow.document.write(`<head><title>404</title></head><body><style>body {margin: 0;}</style><iframe style="border: none;" src="https://${location.hostname}/home" width="100%" height="100%"></body>`);
  });

  document.getElementsByTagName('body')[0].onbeforeunload = function(e) {
    e.preventDefault();
    try { firstExternalWindow.window.close(); } catch {};
    try { currentWindow.window.close(); } catch {};
    return 'Closed all external windows.';
  };
};
