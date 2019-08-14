import {TBMApi} from "./index";

test();

async function test() {

	try {
		console.log(await TBMApi.stopArea("stop_area:TBC:SA:STMERI"));
	} catch (error) {
		console.error(error);
	}

}