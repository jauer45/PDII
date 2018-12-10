// used for connection to pure-data audio(server).
// REsult: TCP-net message sent but SLIP not being read, (bad)
// Ref:  https://gist.github.com/tedmiston/5935757
//


var net = require('net');

var client = new net.Socket();

client.connect(3334, '127.0.0.1', function() {
	console.log('Connected');
	client.write('/Start /200 /152 /100 /56 /15');
	client.end();
});

client.on('data', function(data) {
	console.log('Received: ' + date);
	client.destroy();
});

client.on('close', function() {
	console.log('Connection closed');
});
