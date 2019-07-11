import axios from "axios";

const post = (data) => {
  return axios.post('http://localhost:3001/persons', data)
}

const get = () => {
  return axios.get('http://localhost:3001/persons')
}

const deleteLine = (data) => {
  return axios.delete(`http://localhost:3001/persons/${data}`)
}

const put = (num, data) => {
  return axios.put(`http://localhost:3001/persons/${num}`, data)
}

export {post, get, deleteLine, put}