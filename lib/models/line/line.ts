import { LineTypes } from "./lineTypes";
import { LineSchedule } from "./lineSchedule";
import { LineMap } from "./lineMap";

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
		this.schedule = LineSchedule.fromRawSchedule(opts.lineSchedules);
		this.map = LineMap.fromRawMap(opts.lineMaps);
		this.bgColor= opts.bgColor;
	}

	static fromRawListLines(raw: any[]): Line[] {
		return raw.map(e => new Line(e));
	}

}