import axios from 'axios'

const API_URL = 'http://localhost:5000/api'

const setAuthHeader = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

export const register = async (email, password, name) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, {
      email,
      password,
      name,
    })
    console.log('User registered:', response.data)
    return response.data // Returns token and user info
  } catch (error) {
    console.error('Error registering:', error.response?.data || error.message)
    throw error
  }
}

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    })
    console.log('User logged in:', response.data)
    return response.data // Returns token and user info
  } catch (error) {
    console.error('Error logging in:', error.response?.data || error.message)
    throw error
  }
}

export const createTask = async (token, title, description) => {
  try {
    const response = await axios.post(
      `${API_URL}/tasks`,
      { title, description },
      setAuthHeader(token)
    )
    console.log('Task created:', response.data)
    return response.data // Returns task details
  } catch (error) {
    console.error('Error creating task:', error.response?.data || error.message)
    throw error
  }
}

export const updateTaskStatus = async (token, taskId, status) => {
  try {
    const response = await axios.put(
      `${API_URL}/tasks/${taskId}`,
      { status },
      setAuthHeader(token)
    )
    console.log('Task status updated:', response.data)
    return response.data // Returns updated task
  } catch (error) {
    console.error('Error updating task status:', error.response?.data || error.message)
    throw error
  }
}

export const getUserTasks = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/tasks`, setAuthHeader(token))
    console.log('User tasks:', response.data)
    return response.data // Returns array of tasks
  } catch (error) {
    console.error('Error fetching tasks:', error.response?.data || error.message)
    throw error
  }
}

export const getUserStamps = async (token, period) => {
  try {
    const response = await axios.get(
      `${API_URL}/stamps`,
      {
        params: { period },
        ...setAuthHeader(token),
      }
    )
    console.log('User stamps:', response.data)
    return response.data // Returns stamps
  } catch (error) {
    console.error('Error fetching stamps:', error.response?.data || error.message)
    throw error
  }
}

export const editTask = async (token, taskId, title, description) => {
  try {
    const response = await axios.patch(
      `${API_URL}/tasks/${taskId}`,
      { title, description },
      setAuthHeader(token)
    )
    console.log('Task edited:', response.data)
    return response.data // Returns updated task
  } catch (error) {
    console.error('Error editing task:', error.response?.data || error.message)
    throw error
  }
}

export const deleteTask = async (token, taskId) => {
  try {
    const response = await axios.delete(
      `${API_URL}/tasks/${taskId}`,
      setAuthHeader(token)
    )
    console.log('Task deleted:', response.data)
    return response.data // Returns success message
  } catch (error) {
    console.error('Error deleting task:', error.response?.data || error.message)
    throw error
  }
}