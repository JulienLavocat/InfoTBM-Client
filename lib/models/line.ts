import {Route} from "./route";

export class Line {

	id: string;
	name: string;
	code: string;
	type: LineTypes;
	special: boolean;
	chartered: boolean;
	hidden: boolean;
	textColor: string;
	picto: string;
	schedule: LineSchedule[];
	map: LineMap[];
	bgColor: string;


	constructor(opts: any) {
		this.id = opts.id;
		this.name = opts.name;
		this.code = opts.code;
		this.type = opts.type;
		this.special = opts.isSpecial;
		this.chartered = opts.isChartered;
		this.hidden = opts.isHidden;
		this.textColor = opts.textColor;
		this.picto = opts.picto;
		this.schedule = LineSchedule.parse(opts.lineSchedules);
		this.map = LineMap.parse(opts.lineMaps);
		this.bgColor= opts.bgColor ? opts.bgColor : null;
	}

	static parse(raw: any[]): Line[] {
		return raw.map(e => new Line(e));
	}

}

export class LineMap {

	title: string;
	start: Date | null;
	end: Date | null;
	thermometer: string;
	thermometerImage: string;
	kml: string;

	constructor(opts: any) {
		this.title = opts.title ? opts.title : null;	//Not all endpoints return a title
		this.start = opts.start ? new Date(opts.start) : null;
		this.end = opts.end ? new Date(opts.end) : null;
		this.thermometer = opts.thermometer;
		this.thermometerImage = opts.thermometerImage;
		this.kml = opts.kml;
	}

	static parse(raw: any[]): LineMap[] {
		if(raw && raw.length > 0)
			return raw.map(e => new LineMap(e));
		else
			return [];
	}

}

export class LineSchedule {

	title: string;
	begin: Date | null;
	end: Date | null;
	frequency: string;
	navigationAmplitude: string;
	pdf: string;

	constructor(opts: any) {
		this.title = opts.title;
		this.begin = opts.begin ? new Date(opts.begin) : null;
		this.end = opts.end ? new Date(opts.end) : null;
		this.frequency = opts.frequency;
		this.navigationAmplitude = opts.navigationAmplitude;
		this.pdf = opts.pdf;
	}

	static parse(raw: any[]): LineSchedule[] {
		if(raw && raw.length > 0)
			return raw.map(e => new LineSchedule(e));
		else
			return [];
	}

}

export class LineInformation {

	id: string;
	name: string;
	code: string;
	type: LineTypes;
	routes: Route[];
	special: boolean;
	chartered: boolean;
	hidden: boolean;
	textColor: string;
	picto: string;
	pictoFile: string;
	schedule: LineSchedule[];
	map: LineMap[];
	bgColor: string;
	futureLineMaps: LineMap[];

	constructor(opts: any) {
		this.id = opts.id;
		this.name = opts.name;
		this.code = opts.code;
		this.type = opts.type;
		this.routes = Route.parse(opts.routes);
		this.special = opts.isSpecial;
		this.chartered = opts.isChartered;
		this.hidden = opts.isHidden;
		this.textColor = opts.textColor;
		this.picto = opts.picto;
		this.pictoFile = opts.pictoFile;
		this.schedule = LineSchedule.parse(opts.lineSchedules);
		this.map= LineMap.parse(opts.lineMaps);
		this.bgColor= opts.bgColor;
		this.futureLineMaps = LineMap.parse(opts.futureLineMaps);
	}

}

export enum LineTypes {
}