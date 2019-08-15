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

	static fromRawMap(raw: any[]): LineMap[] {
		if(raw && raw.length > 0)
			return raw.map(e => new LineMap(e));
		else
			return [];
	}

}