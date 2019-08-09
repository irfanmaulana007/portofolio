import axios from 'axios';
import { API_URL } from './config'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
const apiService = {
	get (resource) {
		return axios
			.get(API_URL + resource)
	},

	put (resource, params) {
		return axios
			.put(API_URL + resource, params)
	},

	post (resource, params) {
		return axios
			.post(API_URL + resource, params)
	},

	delete (resource) {
		return axios
			.delete(API_URL + resource)
	}
}

export const authService = {
	login (payload) {
		return apiService
			.post('login', payload)
	}
}

export const profileService = {
	get () {
		return apiService
			.get('get-profile')
	}
}

export const projectService = {
	get () {
		return apiService
			.get('get-project')
	}
}

export const contactService = {
	get () {
		return apiService
			.get('contact')
	},

	send (payload) {
		return apiService
			.post('contact', payload)
	}
}