import axios, { AxiosInstance, AxiosResponse } from "axios";
import {CardsAPIError} from "./error";

//TODO: use baseUrl property

export class Axios {

	axios: AxiosInstance;

	constructor(url: string) {
		this.axios = axios.create({
			baseURL: url
		});
	}

	async get(url: string, config?: any): Promise<any> {
		url = encodeURI(url);
		try {
			const result = await this.axios.get(url, config);
			delete result.data.success;
			return result.data;
		} catch (error) {
			if (error.response) {
				const errorData = error.response.data.error;
				throw new CardsAPIError(errorData.status, errorData.message, errorData.details);
			} else if (error.request) {
				console.log(error);

				throw new CardsAPIError("EMPTY_RESPONSE", "No response received");
			} else {
				throw error;
			}
		}
	}
}
