import axios from 'axios'
import env from '../../env.json'


const githubService = (data: any) => axios({
    headers: { Authorization: `Bearer ${env.bearer_github_token}` },
    baseURL: 'https://api.github.com/graphql',
    timeout: 6000, // 6 secs timeout
    method: 'post',
    data: data
})

export default githubService
