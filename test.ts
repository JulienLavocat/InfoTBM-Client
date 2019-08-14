import {TBMClient} from "./index";

test();

async function test() {

	try {

		const lines = await TBMClient.getLine("line:TBC:01");
		console.log(lines.routes[0].stopPointsOrder);

	} catch (error) {
		console.error(error);
	}

}