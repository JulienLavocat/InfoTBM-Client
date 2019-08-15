import { Vehicle } from "./vehicle";

export class NextPass {

	vehicle: Vehicle;
	waitTimeText: string;
	tripId: string;
	scheduleId: string;
	destinationId: string;
	destinationName: string;
	departure: Date | null;
	departureCommand: Date | null;
	departureTheorical: Date | null;
	arrival: Date | null;
	arrivalCommand: Date | null;
	arrivalTheorical: Date | null;
	comment: string;
	realtime: boolean;
	waitTime: string;	//TODO: Better type
	updatedAt: Date | null;

	constructor(opts: any) {
		this.waitTimeText = opts.waittime_text;
		this.tripId = opts.trip_id;
		this.scheduleId = opts.schedule_id;
		this.destinationId = opts.destination_id;
		this.destinationName = opts.destination_name;
		this.departure = opts.departure ? new Date(opts.departure) : null;
		this.departureCommand = opts.departure_command ? new Date(opts.departure_command) : null;
		this.departureTheorical = opts.departure_theorical ? new Date(opts.departure_theorical) : null;
		this.arrival = opts.arrival ? new Date(opts.arrival) : null;
		this.arrivalCommand = opts.arrival_command ? new Date(opts.arrival_command) : null;
		this.arrivalTheorical = opts.arrival_theorical ? new Date(opts.arrival_theorical) : null;
		this.vehicle = new Vehicle(opts);
		this.comment = opts.comment;
		this.realtime = opts.realtime === "1";
		this.waitTime = opts.waittime;
		this.updatedAt = opts.updated_at;
	}

	static parse(raw: any[]): NextPass[] {
		return raw.map(e => new NextPass(e));
	}

}