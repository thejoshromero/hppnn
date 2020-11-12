import feathers from '@feathersjs/feathers'
import rest from '@feathersjs/rest-client'
import axios from 'axios'


const api = feathers()
const rc = rest('http://localhost:3030')
api.configure(rc.axios(axios))


export default api