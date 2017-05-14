import sqlite3


def getUser(n,p):
	conn = sqlite3.connect('birdy.db')
	cursor = conn.execute("SELECT id,name,password from login")

	rows = [x for x in cursor]
	cols = [x[0] for x in cursor.description]
	data = []
	for row in rows:
	  entry = {}
	  for prop, val in zip(cols, row):
		entry[prop] = val
	  data.append(entry)

	print ("Operation done successfully");
	conn.close()

	return data

	
def getChirps(p):
	conn = sqlite3.connect('birdy.db')

	print (p);

	cursor = conn.execute("SELECT user,datetime,msg from chirps")

	rows = [x for x in cursor]
	cols = [x[0] for x in cursor.description]
	data = []
	for row in rows:
	  entry = {}
	  for prop, val in zip(cols, row):
		entry[prop] = val
	  data.append(entry)

	print ("Operation done successfully");
	conn.close()

	return data

def putOne(name,datetime,msg):
	conn = sqlite3.connect('birdy.db')
	c = conn.cursor()
	c.execute("INSERT INTO chirps (user, datetime, msg) VALUES(?,?,?)", (name,datetime,msg))
	#num = c.execute("SELECT id FROM clients ORDER BY id DESC LIMIT 1")
	conn.commit()
	#rows = [x for x in num]
	#print ("Operation done successfully "+str(rows[0][0]));
	c.close()
	conn.close()
	
	return 
