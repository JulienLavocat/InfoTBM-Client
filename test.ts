import {TBMClient} from "./index";

test();

async function test() {

	try {


		const lines = await TBMClient.listLines();
		console.log(lines[0]);


	} catch (error) {
		console.error(error);
	}

}