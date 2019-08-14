import { TBMApi } from "./api";
import { Line } from "..";

export class TBMClient {


	static async listLines(): Promise<Line[]> {
		const raw = await TBMApi.listLines();
		return TBMClient.generateListLinesView(raw);
	}

	static async getLine(id: string) {

	}

	private static generateListLinesView(raw: any[]): Line[] {
		const lines: Line[] = [];
		raw.forEach(e => lines.push(new Line(e)));
		return lines;
	}

}