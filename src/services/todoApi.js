import { HttpClient } from './httpClient'
import constants from '../config/config'

const API = constants.API_URL

const TODO_API = `${API}/todos`

const createTodo = todo => {
    return HttpClient.post(TODO_API, todo)
}

const getTodo = () => {
    return HttpClient.get(TODO_API)
}

const updateTodo = todo => {
    return HttpClient.put(TODO_API, todo)
}

const removeTodo = todo => {
    return HttpClient.delete(`${TODO_API}/${todo._id}`)
}

const TodoApi = { createTodo, getTodo, updateTodo, removeTodo }

export { TodoApi }