import { TBMApi } from "./api";
import { Line } from "..";
import { LineInformation } from "./models";

export class TBMClient {

	static async listLines(): Promise<Line[]> {
		return Line.fromRawListLines(await TBMApi.listLines());
	}
	static async getLine(id: string): Promise<LineInformation> {
		return new LineInformation(await TBMApi.line(id));
	}

}