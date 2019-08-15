import { Line } from "./line/line";

const stripHtml = require("string-strip-html");

export class Alert {
	id: number;
	event: any;
	impacts: AlertImpact[];
	alertUpdates: any[];
	title: string;
	type: number;
	cause: number;
	workingNetwork: boolean;
	descriptionHtml: string;
	description: string;
	typeName: string;
	causeName: string;

	constructor(opts: any) {
		this.id = Number(opts.id);
		this.event = opts.event;
		this.impacts = AlertImpact.parse(opts.impacts);
		this.alertUpdates = opts.alertUpdates;
		this.title = opts.title;
		this.cause = Number(opts.cause);
		this.type = Number(opts.type);
		this.workingNetwork = opts.workingNetwork;
		this.descriptionHtml = opts.description;
		this.description = stripHtml(opts.description);
		this.typeName = opts.typeName;
		this.causeName = opts.causeName;
	}

	static parse(raw: any[]): Alert[] {
		return raw.map(e => new Alert(e));
	}
}

export class AlertImpact {
	id: number;
	line: Line | null;
	vcubStopPoint: any;
	parkAndRide: any;
	transportMode: number;
	transportModeName: string;

	constructor(opts: any) {
		this.id = Number(opts.id);
		this.line = opts.line ? new Line(opts.line) : null;
		this.vcubStopPoint = opts.vcubStopPoint;
		this.parkAndRide = opts.parkAndRide;
		this.transportMode = Number(opts.transportMode);
		this.transportModeName = opts.transportModeName;
	}

	static parse(raw: any[]): AlertImpact[] {
		return raw.map(e => new AlertImpact(e));
	}
}
