const baseUrl = process.env.VUE_APP_BASE_API
const api = {
  state: {
    // grafana
    grafanaApi: 'http://10.1.2.4:3000/?search=open',
    // baseUrl，
    baseApi: baseUrl
  }
}

export default api
