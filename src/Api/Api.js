import axios from 'axios'
import HandleError from '@/Utils/HandleError'

const instance = axios.create({
    baseURL:'https://aknbid-interns-task.herokuapp.com/',
  headers: {
    crossDomain: true,
    withCredentials: true,
    credentials: 'include',
  },
  timeout: 3000,
})

instance.interceptors.request.use(config => {
  console.log(config);
 return config
}
)

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.message === 'Network Error') {
      // go to network error screen
      return HandleError({ message: 'Network Error' })
    }
    return HandleError({
      status: error.response.status,
      data: error.response.data,
    })
  },
)

export default instance