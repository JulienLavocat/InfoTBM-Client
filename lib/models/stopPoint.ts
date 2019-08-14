export class StopPoint {

	id: string;
	name: string;
	fullLabel: string;
	latitude: number;
	longitude: number;
	city: string;

	constructor(opts: any) {
		this.id = opts.id;
		this.name = opts.name;
		this.fullLabel = opts.fullLabel;
		this.latitude = Number(opts.latitude);
		this.longitude = Number(opts.longitude);
		this.city = opts.city;
	}

	static fromRawStopPoints(raw: any[]): StopPoint[] {
		return raw.map(e => new StopPoint(e));
	}

}