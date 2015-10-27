

module.exports = function(io, config) {
	var users = [];
	io.on('connect', function(socket) {
		users.push(socket.id);
		console.log(users.length);
		io.sockets.emit("news", {title: "Users online: " + users.length});
	
		socket.on('disconnect', function() {
			users.splice(users.indexOf(socket.id), 1);
			io.sockets.emit("news", {title: "Users online: " + users.length});
		});
	});
}