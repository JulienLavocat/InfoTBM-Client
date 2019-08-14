import { TBMApi } from "./api";
import { Line } from "..";
import { LineInformation } from "./models";

export class TBMClient {


	static async listLines(): Promise<Line[]> {
		const raw = await TBMApi.listLines();
		return TBMClient.generateListLinesView(raw);
	}
	static async getLine(id: string) {
		const raw = await TBMApi.line(id);
		return TBMClient.generateGetLinesView(raw);
	}

	private static generateListLinesView(raw: any[]): Line[] {
		return raw.map(e => new Line(e));
	}
	private static generateGetLinesView(raw: any) {
		return new LineInformation(raw);
	}

}