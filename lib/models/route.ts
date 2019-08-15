import { StopPoint } from "./stopPoint";

export class Route {

	id: string;
	name: string;
	start: string;
	end: string;
	stopPoints: StopPoint[];
	externalCode: string;
	stopPointsOrder: string[];

	constructor(opts: any) {
		this.id = opts.id;
		this.name = opts.name;
		this.start = opts.start;
		this.end = opts.end;
		this.stopPoints = StopPoint.fromRawStopPoints(opts.stopPoints);
		this.externalCode = opts.externalCode;
		this.stopPointsOrder = opts.stopPointOrder;
	}

	static parse(raw: any[]): Route[] {
		return raw.map(e => new Route(e));
	}

}
