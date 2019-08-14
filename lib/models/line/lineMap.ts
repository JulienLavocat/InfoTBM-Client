export class LineMap {

	title: string;
	start: Date | null;
	end: Date | null;
	thermometer: string;
	thermometerImage: string;
	kml: string;

	constructor(opts: any) {
		this.title = opts.title;
		this.start = opts.start ? new Date(opts.start) : null;
		this.end = opts.end ? new Date(opts.end) : null;
		this.thermometer = opts.thermometer;
		this.thermometerImage = opts.thermometerImage;
		this.kml = opts.kml;
	}

}