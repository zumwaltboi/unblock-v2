function cleanCode(code) {
  return code.trim()
}

function generateBookmarklet() {
  var title = document.getElementById("title-input").value;
  var code = document.getElementById("code-textarea").value;
  var link = document.getElementById("bookmarklet-a");

  var output = "javascript:var ifrm = document.createElement('iframe');ifrm.setAttribute('src', '" + code + "');ifrm.style.width = '1200px';ifrm.style.height = '600px';document.body.appendChild(ifrm);";

  link.text = title;
  link.href = output;

  document.getElementById("nothing").innerHTML = "Just drag the above URL to the Bookmarks ^^^ bar to open the site!";

  clearCode();
}

function clearCode() {
  document.getElementById("title-input").value = "";
  document.getElementById("code-textarea").value = "";
}