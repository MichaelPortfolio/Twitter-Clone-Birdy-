-open the python folder and run py -m server.py
-open the birdy folder and run py -m SimpleHTTPServer 8080 (or port of your chooosing)

-You'll need to sign in to be able to chirp.
	On the birdy.db in sqlite is the tables are login and chirps.
	login contains two profiles that can be signed in to. The users are (name: adam, password:pass) and (name:michael, password: secret)
-Once you chirp the chirps will be stored on the database in the chirps table.
-All chirps appear in the scroll area.


-Running requirements
	I have a test environment set up for things like this, but all that's needed in the prowser is a plugin that will "Allow-access-origin:*" 
	The plugin I use is https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi
