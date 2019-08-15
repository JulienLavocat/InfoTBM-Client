import { TBMApi } from "./api";
import * as utils from "./utils";
import { LineInformation, Line, SearchResult, StopPoint, StopArea } from "./models";

export class TBMClient {
	static async listLines(): Promise<Line[]> {
		return Line.fromRawListLines(await TBMApi.listLines());
	}
	static async getLine(id: string): Promise<LineInformation> {
		return new LineInformation(await TBMApi.line(id));
	}
	static async search(query: string, filter?: any): Promise<SearchResult[]> {
		const result: any[] = await TBMApi.search(query);
		if (filter)
			return SearchResult.fromRawResults(result.filter(v => utils.compareProperties(v, filter)));
		return SearchResult.fromRawResults(result);
	}
	static async stopArea(id: string): Promise<StopArea> {
		const res = await TBMApi.stopArea(id);
		return new StopArea(res);
	}
}
