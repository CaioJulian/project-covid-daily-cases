import { mount, createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import MapCase from '@/components/MapCase.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('MapCase - unit', () => {
  let store, caseManager

  beforeEach(() => {
    caseManager = {
      namespaced: true,
      state: {
        mapData: {},
      },
    }

    store = new Store({
      modules: {
        caseManager,
      },
    })
  })

  const mountMapCase = () => {
    const wrapper = mount(MapCase, {
      store,
      localVue,
    })
    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountMapCase()
    expect(wrapper.vm).toBeTruthy()
  })
})
