const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://www.miapp.app'
})

module.exports = axios;