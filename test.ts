import {TBMClient, TBMApi} from "./index";
import * as utils from "./lib/utils";

test();

async function test() {

	try {

		//console.log(await TBMClient.search("freres"));
		//console.log((await TBMClient.stopArea("stop_area:TBT:SA:FRROBI")));
		//console.log((await TBMClient.nextPass(7333, "A"))[7337][0]);
		console.log((await TBMClient.alerts()));

	} catch (error) {
		console.error(error);
	}

}