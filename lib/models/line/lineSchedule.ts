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

	static fromRawSchedule(raw: any[]): LineSchedule[] {
		return raw.map(e => new LineSchedule(e));
	}

}