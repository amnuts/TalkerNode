exports.command = {
	name: "wizlist", 			// Name of command to be executed (Max 10 chars)
	autoload: true,				// Should the command be autoloaded at startup
	unloadable: true,			// Can the command be unloaded dynamically
	min_rank: 0,				// Minimum rank to use to execute the command
	display: "List of Wizzards",// Summary help text to show in the .help command (Max 60 chars)
	help: "List of Wizzards", 	// Full help text when .help <command> is used

	// Function to execute the command
	execute: function(socket, command, command_access) {
		var users = command_access.getUsersList();
		var toShow = command_access.ranks.list.length;
		if (toShow > 3) toShow = 3;
		socket.write("+----------------------------------------------------------------------------+\r\n");
		for (var level = command_access.ranks.list.length-1; level > command_access.ranks.list.length-1-toShow; level--) {
			socket.write(command_access.ranks.list[level] + "\t: ");
			for (var u = 0; u < users.length; u++) {
				if (users[u].rank === level) socket.write(users[u].username + "\t");
			}
			socket.write("\r\n");
		}
		socket.write("+----------------------------------------------------------------------------+\r\n");
	}
}
