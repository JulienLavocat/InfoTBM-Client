export class SearchResult {

	id: string;
	name: string;
	type: string;
	mode: string;
	city: string;
	insee: number | null;
	url: string;

	constructor(opts: any) {
		this.id = opts.id;
		this.name = opts.name;
		this.type = opts.type;
		this.mode = opts.mode;
		this.city = opts.city ? opts.city : null;
		this.insee = opts.insee ? Number(opts.insee) : null;
		this.url = opts.url;
	}

	static parse(raw: any[]): SearchResult[] {
		return raw.map(e => new SearchResult(e));
	}

}