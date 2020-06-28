import axios from 'axios';

export default axios.create({
    method: "GET",
    baseURL: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyAhl-udsfuljI2qKsfevLpO7iAAW1CDxqE&part=snippet&maxResults=50'
})