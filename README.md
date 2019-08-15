# InfoTBM-Client

Promsise-based NodeJS Client for Bordeaux's public transports API (https://infotbm.com)

## Install

```bash
npm i infotbm-client
```

## Exemple usages

```javascript
const TBMClient = require("infotbm-client").TBMClient;

try {

	//List all lines
	await TBMClient.listLines();

	//Search for a line, bus stop, tram stop, etc...
	await TBMClient.search("Quinconces", {type: "line", mode: "Bus"});

	//Get details about a stop area
	await TBMClient.stopArea("stop_area:TBT:SA:FRROBI");

	//Get details about a specific line
	await TBMClient.getLine("line:TBC:01");

	//Get next passes for a specific stop area (/!\ using it's code) and line
	await TBMClient.nextPass(7333, "A");

	//Get n trafic alerts (defaults to 5)
	await TBMClient.alerts(6);

} catch (err) {
	console.error(err);
}
```
