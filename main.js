var iframe = document.getElementById( 'ifrm' );
	var content = document.getElementById("iframeContent").innerHTML;
	var frameDoc = iframe.document;
	if (iframe.contentWindow)
		frameDoc = iframe.contentWindow.document;

	frameDoc.open();
	frameDoc.writeln(content);
	frameDoc.close();

function input() {
      const userInput = prompt("Please enter your name:");
      return userInput;

  }
