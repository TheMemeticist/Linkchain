


var link = document.createElement('a');
link.setAttribute('href', 'https://github.com/TheMemeticist/Cellular-Defense-Automata');
var parent = document.getElementById('container');
parent.insertBefore(link, parent.firstChild);


function copyAddress() {
  /* Get the text field */
  var copyText = " 0x867a7076296Bf3d3FdFae03fBBA2d82F7F8383b3";

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText);

  /* Alert the copied text */
  alert("Copied ETH Address To Clipboard: " + copyText);
}
