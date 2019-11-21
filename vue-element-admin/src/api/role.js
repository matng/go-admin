import request, { httphost } from '@/utils/request'

export function getRoutes() {
  return request({
    url: '',
    method: 'get',
    baseURL: httphost + '/routes'
  })
}
export function getRoles() {
  return request({
    url: '',
    method: 'get',
    baseURL: httphost + '/roles'
  })
}

export function addRole(data) {
  return request({
    url: '/role',
    method: 'post',
    data
  })
}

export function updateRole(id, data) {
  return request({
    url: ``,
    method: 'post',
    data,
    baseURL: httphost + '/updaterole'
  })
}

export function deleteRole(id) {
  return request({
    url: `/role/${id}`,
    method: 'delete'
  })
}
