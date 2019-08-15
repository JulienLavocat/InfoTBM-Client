export class Vehicle {
	id: string;
	latitude: number | null;
	longitude: number | null;
	destinationId: number;
	destinationName: string;
	positionUpdatedAt: Date | null;
	origin: string;

	constructor(opts: any) {
		this.id = opts.vehicle_id;
		this.latitude = opts.vehicle_lattitude
			? Number(opts.vehicle_lattitude)
			: null;
		this.longitude = opts.vehicle_longitude
			? Number(opts.vehicle_longitude)
			: null;
		this.destinationId = opts.destination_id;
		this.destinationName = opts.destination_name;
		this.positionUpdatedAt = opts.vehicle_position_updated_at
			? new Date(opts.vehicle_position_updated_at)
			: null;
		this.origin = opts.origin;
	}
}
