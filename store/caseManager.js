import codes from '@/server/codes.json'

export const state = () => ({
  cases: [],
  countries: [],
  mapData: {},
})

export const mutations = {
  setCases(state, payload) {
    payload.forEach((ca) => {
      codes.forEach((element) => {
        if (element.country === ca.location) {
          ca.code = element.code
        }
      })
    })
    state.cases = payload
  },

  setCountries(state) {
    const { cases } = state
    let countries = cases.filter((e) => e.code)
    countries = [...new Set(countries.map((e) => e.code))]
    state.countries = countries
  },

  setMapData(state) {
    const { cases, countries } = state
    let data = {}

    countries.forEach((element) => {
      data = {
        ...data,
        [element]: 0,
      }
    })

    cases.forEach((e) => {
      if (e.code) {
        data[e.code] += e.num_sequences_total
      }
    })

    state.mapData = data
  },
}

export const getters = {
  getCountries(state) {
    const { cases } = state
    let countries = cases.filter((e) => e.code)
    countries = [...new Set(countries.map((e) => e.code))]
    return countries
  },
}

export const actions = {
  async fetchCases({ commit }) {
    const { data } = await this.$axios.get('/cases')

    await commit('setCases', data)

    await commit('setCountries')

    commit('setMapData')
  },
}
