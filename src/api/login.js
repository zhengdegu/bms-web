import request from '@/utils/request'
import config from '@/settings'
export function login(username, password, code, uuid) {
  return request({
    url: config.loginUrl,
    method: 'post',
    data: {
      username,
      password,
      code,
      uuid
    }
  })
}

export function getInfo() {
  return request({
    url: config.userInfoUrl,
    method: 'get'
  })
}

export function getCodeImg() {
  return request({
    url: config.codeUrl,
    method: 'get'
  })
}

export function logout() {
  return request({
    url: config.logoutUrl,
    method: 'delete'
  })
}
