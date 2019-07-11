import axios from "axios";

export const post = (data) => {
  return axios.post('http://localhost:3001/persons', data)
}

export const get = () => {
  return axios.get('http://localhost:3001/persons')
}