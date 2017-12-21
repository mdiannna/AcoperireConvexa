// TODO:scroll

class Status 
{
	constructor() {
		this.set = 3;
		this.statusDiv = document.getElementById("status");
	}

	write(message) {
		var text = document.createTextNode(message);
		this.statusDiv.appendChild(text);
	}

	writeLine(message) {
		this.write(message);
		this.statusDiv.appendChild(document.createElement('br'));
	}

	clearMessages() {
		this.statusDiv.innerHTML = "";
	}
}



var statusObj = new Status();

function updateStatus(message) {
	statusObj.writeLine(message);	
}

function updateStatusInline(message) {
	statusObj.write(message);	
}


function clearStatus() {
	statusObj.clearMessages();
}