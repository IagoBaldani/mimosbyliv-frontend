import axios from 'axios'
import Cookie from 'js-cookie'

export const http = axios.create({
  baseURL: 'https://mimosbyliv-api.herokuapp.com/api/',
  headers: {
    Authorization: `Bearer ${Cookie.get('api_token')}`
  }
})
