import axios from 'axios'

export default axios.create({ baseURL: 'https://api.github.com/graphql', timeout: 6000 }) // 6 secs timeout
