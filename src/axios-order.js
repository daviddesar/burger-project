import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-fc000.firebaseio.com/'
})
export default instance