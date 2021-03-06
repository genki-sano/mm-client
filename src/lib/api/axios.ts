import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_URI || 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default instance
