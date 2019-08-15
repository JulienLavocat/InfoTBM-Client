import { StopPoint } from "./stopPoint";
import { Line } from "./line/line";

export class StopArea {

	id: string;
	name: string;
	latitude: number;
	longitude: number;
	stopPoints: StopAreaPoints[];

	constructor(opts: any) {
		this.id = opts.id;
		this.name = opts.name;
		this.latitude = opts.latitude;
		this.longitude = opts.longitude;
		this.stopPoints = StopAreaPoints.fromRawRoutes(opts.stopPoints);
	}

}

export class StopAreaPoints {

	id: string;
	name: string;
	routes: any[];

	constructor(opts: any) {
		this.id = opts.id;
		this.name = opts.name;
		this.routes = StopAreaRoutes.fromRawStopAreaRoutes(opts.routes);
	}

	static fromRawRoutes(raw: any[]): StopAreaPoints[] {
		return raw.map(e => new StopAreaPoints(e));
	}

}

export class StopAreaRoutes {

	id: string;
	name: string;
	line: any;

	constructor(opts: any) {
		this.id = opts.id;
		this.name = opts.name;
		this.line = new StopAreaLine(opts.line);
	}

	static fromRawStopAreaRoutes(raw: any[]): StopAreaRoutes[] {
		return raw.map(e => new StopAreaRoutes(e));
	}

}

export class StopAreaLine {

	id: string;
	name: string;
	special: boolean;
	chartered: false;
	hidden: false;

	constructor(opts: any) {
		this.id = opts.id;
		this.name = opts.name;
		this.special = opts.isSpecial;
		this.chartered = opts.isChartered;
		this.hidden = opts.isHidden;
	}

}