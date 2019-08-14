import {TBMClient} from "./index";

test();

async function test() {

	try {

		const lines = await TBMClient.getLine("line:TBC:02");
		console.log(lines.routes[0].stopPoints);

	} catch (error) {
		console.error(error);
	}

}