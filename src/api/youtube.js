import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/search',
    headers: {
        Authorization: 'Bearer AIzaSyAhl-udsfuljI2qKsfevLpO7iAAW1CDxqE'
    }
})