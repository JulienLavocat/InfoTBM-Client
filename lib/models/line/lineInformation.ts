import { LineTypes } from "./lineTypes";
import { LineSchedule } from "./lineSchedule";
import { LineMap } from "./lineMap";
import { Route } from "../route";

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
		this.schedule = this.parseLineSchedule(opts.lineSchedules);
		this.map= this.parseLineMap(opts.lineMaps);
		this.bgColor= opts.bgColor;
	}

	private parseLineSchedule(raw: any[]): LineSchedule[] {
		const schedule: LineSchedule[] = [];
		raw.forEach(e => schedule.push(new LineSchedule(e)));
		return schedule;
	}
	private parseLineMap(raw: any[]): LineMap[] {
		const map: LineMap[] = [];
		raw.forEach(e => map.push(new LineMap(e)));
		return map;
	}

}