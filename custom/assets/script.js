// my css is messy lo :skull:
if (window.innerWidth < 1100 || window.innerWidth > 1200 || window.innerHeight < 500 || window.innerHeight > 550) alert('Hey!\n\nUnblockrr/Annotate Custom v5.0.0 is coded for a very specific screen size.\n\nYour screen doesn\'t fit this. Your page will likely look mangled.\n\nConsider using another unblocker.')

// tab functions
function showUnblocker() {
  document.getElementById('iframeDiv').style.display = 'block';
  document.getElementById('metaDiv').style.display = 'none';
};

function showMetadata() {
  document.getElementById('iframeDiv').style.display = 'none';
  document.getElementById('metaDiv').style.display = 'block';
};

// metadata functions
function changeFavicon(src) {
  if ($('#dynamic-fav')) $('#dynamic-fav').remove();
  $(`head:first`).append(`<link id="dynamic-fav" rel="shortcut icon" href=${src}>`)
};

function drive() {
  changeFavicon('https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png');
  document.title = `My Drive - Google Drive`;
};

function gmail() {
  changeFavicon("https://ssl.gstatic.com/images/branding/product/1x/gmail_2020q4_32dp.png");
  document.title = `Inbox (${prompt('Enter a number of unread emails:')}) - ${prompt('Enter your email:')}`;
};

// metadata listeners
document.getElementById('nameField').addEventListener('input', function(event) {
    document.title = document.getElementById('nameField').value;
});

document.getElementById('icoField').addEventListener('input', function(event) {
    changeFavicon(document.getElementById('icoField').value);
});

// site icon (normally setting does nothing?)
changeFavicon('https://cdn.glitch.global/a300bc83-1349-40d5-8dc8-60619ca5027c/annotate.png?v=1673970874349');
