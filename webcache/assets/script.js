const config = {
  version: '1.0.0',
  build: 'Production'
}

let isFrame = false;

document.head = document.head || document.getElementsByTagName('head')[0];

function changeFavicon(src) {
  let link = document.createElement('link');
  let oldLink = document.getElementById('dynamic-fav');
  
  link.id = 'dynamic-fav';
  link.rel = 'shortcut icon';
  link.href = src;
  
  if (oldLink) document.head.removeChild(oldLink);
  document.head.appendChild(link);
};

document.getElementsByClassName("urlBox")[0].addEventListener('input', function(event) {
  if (isFrame) document.getElementById('iframe').remove();
  let frameURL = document.getElementsByClassName("urlBox")[0].value;
  
  let ifrm = document.createElement('iframe');
  
  if (frameURL.startsWith('http')) ifrm.setAttribute('src', 'https://webcache.googleusercontent.com/search?q=cache:' + frameURL);
  else ifrm.setAttribute('src', 'https://webcache.googleusercontent.com/search?q=cache:' + 'https://' + frameURL);
  
  ifrm.style.width = '100%';
  ifrm.style.height = '600px';
  ifrm.id = 'iframe';
  document.body.appendChild(ifrm);

  document.getElementById("note").classList.add("bottomBorder");
  
  isFrame = true;
});

function reset() {
  if (!isFrame) return;
  
  document.getElementById("note").classList.remove("bottomBorder");
  document.getElementById('iframe').remove();
  isFrame = false;
};

function docs() {
  // INTERCHANGEABLE between DOCS/DRIVE
  // tbf idek why I did this
  
  /* GOOGLE DOCS:
  let name = prompt('Enter your full name:');
  let assignment = prompt('Enter an assignment name:');
  document.title = `${name} - ${assignment} - Google Docs`;
  */
  
  // /* GOOGLE DRIVE:
  changeFavicon("https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png");
  document.title = `My Drive - Google Drive`;
  // */
};

function gmail() {
  let unread = prompt('Enter a number of unread emails:');
  let email = prompt('Enter your email:');
  changeFavicon("https://ssl.gstatic.com/images/branding/product/1x/gmail_2020q4_32dp.png");
  document.title = `Inbox (${unread}) - ${email}`;
};

function khan() {
  changeFavicon('https://www.khanacademy.org/favicon.ico');
  document.title = `* READ: ${prompt('Enter the assignment name')} (article) | Khan Academy`;
};

function kahoot() {
  changeFavicon('https://cdn.glitch.global/a300bc83-1349-40d5-8dc8-60619ca5027c/kahoot.icon?v=1673558357629');
  document.title = `Kahoot!`;
};

document.getElementById('metadata.name').addEventListener('input', function(event) {
    document.title = document.getElementById('metadata.name').value;
});

document.getElementById('metadata.ico').addEventListener('input', function(event) {
    changeFavicon(document.getElementById('metadata.ico').value);
});

// changeFavicon('https://cdn-icons-png.flaticon.com/512/3308/3308395.png');
changeFavicon('https://cdn.glitch.global/a300bc83-1349-40d5-8dc8-60619ca5027c/annotate.png?v=1673970874349');
document.getElementsByClassName('version')[0].innerHTML = `${config.build} v${config.version}`;
