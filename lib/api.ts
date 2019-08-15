import { Axios } from "./axios";

const API_BASE_URL = "https://ws.infotbm.com/ws/1.0/";

export class TBMApi {

	static axios: Axios = new Axios(API_BASE_URL);

	static listLines() {
		return this.axios.get(`/network/get-lines-informations`);
	}

	static line(id: string) {
		return this.axios.get(`/network/line-informations/${id}`);
	}

	static search(query: string) {
		return this.axios.get(`/get-schedule/${query}`);
	}

	static stopArea(id: string) {
		return this.axios.get(`/network/stoparea-informations/${id}`);
	}

	static getNextPass(stopId: number, lineName: string) {
		return this.axios.get(`/get-realtime-pass/${stopId}/${lineName}`);
	}

	static alerts(maxResults: number = 5) {
		//TODO: add priority and types in arguments
		return this.axios.get(`/alerts/?maxResults=${maxResults}&order=priority,start_date&type=2,3,4`);
	}

}