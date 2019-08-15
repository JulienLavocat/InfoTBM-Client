import {TBMClient, TBMApi} from "./index";
import * as utils from "./lib/utils";

test();

async function test() {

	try {

		//console.log(await TBMApi.search("olympiades"));
		console.log((await TBMApi.stopArea("stop_area:TBC:SA:STMERI")));
		console.log((await TBMClient.stopArea("stop_area:TBC:SA:STMERI")));


	} catch (error) {
		console.error(error);
	}

}