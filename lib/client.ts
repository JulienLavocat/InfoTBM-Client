import { TBMApi } from "./api";
import * as utils from "./utils";
import { LineInformation, Line, SearchResult, StopPoint, StopArea } from "./models";
import { NextPass } from "./models/nextPass";
import { Alert } from "./models/alert";

export class TBMClient {
	static async listLines(): Promise<Line[]> {
		return Line.parse(await TBMApi.listLines());
	}
	static async getLine(id: string): Promise<LineInformation> {
		return new LineInformation(await TBMApi.line(id));
	}
	static async search(query: string, filter?: any): Promise<SearchResult[]> {
		const result: any[] = await TBMApi.search(query);
		if (filter)
			return SearchResult.parse(result.filter(v => utils.compareProperties(v, filter)));
		return SearchResult.parse(result);
	}
	static async stopArea(id: string): Promise<StopArea> {
		return new StopArea(await TBMApi.stopArea(id));
	}
	static async nextPass(stopId: number, lineName: string) {
		const res = await TBMApi.getNextPass(stopId, lineName);
		const nextPasses: any = {};
		for(let pass of Object.entries<any>(res.destinations).values()) {
			nextPasses[pass[0]] = NextPass.parse(pass[1]);
		}
		return nextPasses;
	}
	static async alerts(maxResults: number = 5) {
		return Alert.parse((await TBMApi.alerts(maxResults)).items);
	}
}
