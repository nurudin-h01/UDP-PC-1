// import dependecies
const dgram = require("dgram");
const HOST = "0.0.0.0";
const PORT = 30000;

// function to send data to server
function sendData() {
	const data = {
		data1: Math.random() * 100,
		data2: Math.random() * 100,
	};
	const message = new Buffer.from(JSON.stringify(data));
	const client = dgram.createSocket("udp4");
	client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
		if (err) throw err;
		console.log("UDP message sent to " + HOST + ":" + PORT);
		client.close();
	});
}

// Send data to server every second
setInterval(sendData, 1000);
