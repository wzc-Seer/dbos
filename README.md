# DBOS
### How to setup
Rename config.json.example > config.json
Then fill in these values:
```
{
	"bot": {
		"prefix": "?",
		"token": "BOT TOKEN",
		"secret": "CLIENT SECRET",
		"id": "CLIENT ID",
		"commandLogging": true,
		"messageLogging": true,
		"status": {
			"mode": "dnd"
		}
	},
	"server": {
		"invite": "TJY6Xyg"
	},
	  "siteUrl": "SITE URL",
	  "port": "3000",
	  "db": {
		  "mongodb": "MONGODB"
	  }
}
```
### Console explainations:
ML -> Message Log - Enabled with `"messageLogging": true`
CL -> Command Log - Enabled with `"commandLogging": true`