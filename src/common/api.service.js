import axios from 'axios';
import { API_URL } from './config'
import swal from 'sweetalert/dist/sweetalert.min.js'
import _ from 'lodash'

axios.defaults.baseURL = API_URL
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.interceptors.request.use(
	(config) => {
	  let token = localStorage.getItem('TOKEN_KEY')
  
	  if (token) {
		config.headers['Authorization'] = `Bearer ${ token }`
	  }
  
	  return config
	}, 
  
	(error) => {
	  return Promise.reject(error)
	}
);

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
			.then((res) => {
				const response = _.get(res, 'data', [])
				return response
			})
			.catch((err) => {
				swal({
					title: 'Login ' + err.response.statusText,
					text: err.response.data,
					icon: 'error',
					timer: 5000
				})

				throw err
			})
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
	},

	logout () {
		return apiService
			.get('logout')
	}
}

export const profileService = {
	get () {
		return apiService
			.get('profile')
	}
}

export const projectService = {
	get () {
		return apiService
			.get('project')
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