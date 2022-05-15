import { removeKeys } from '../commons/utils'
const token = process.env.token

export const state = () => ({
  // key: value (optionally from local storage)
})

export const getters = {
  // get{StateKeyName}(state){}
}

export const mutations = {
  // functionName(state, payload{optional}{}
}

export const actions = {
  // functionName(context, payload{optional}){}
  fetchContent (context, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('/' + payload.page, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: removeKeys(payload, ['page'])
        })
       .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  fetchImages (context, payload) {
      const imageURL = process.env.mediaURL + '/upload/files'
    return new Promise((resolve, reject) => {
      this.$axios.$get(imageURL, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: removeKeys(payload, ['page'])
        })
       .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

   fetchProject(content, payload) {
    const projectURL = process.env.baseURL + '/projects?filters[slug]='
    return new Promise((resolve, reject) => {
      this.$axios
        .$get(projectURL + payload.slug + '&populate=*', {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: removeKeys(payload, ['slug'])
        })
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

}
