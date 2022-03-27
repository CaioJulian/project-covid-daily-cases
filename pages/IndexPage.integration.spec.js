import { mount, createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import IndexPage from '.'
import MapCase from '@/components/MapCase.vue'
import RangeDate from '@/components/RangeDate.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('IndexPage - unit', () => {
  let store, caseManager

  beforeEach(() => {
    caseManager = {
      namespaced: true,
      state: {
        mapData: {},
      },
      actions: {
        fetchCases: jest.fn(),
      },
    }

    store = new Store({
      modules: {
        caseManager,
      },
    })
  })

  const mountIndexPage = () => {
    const wrapper = mount(IndexPage, {
      stubs: {
        MapCase,
        RangeDate,
      },
      store,
      localVue,
    })

    return wrapper
  }

  it('should mount component page index', () => {
    const wrapper = mountIndexPage()
    expect(wrapper.vm).toBeTruthy()
  })

  it('should mount the components', () => {
    const wrapper = mountIndexPage()
    expect(wrapper.findComponent(MapCase)).toBeDefined()
    expect(wrapper.findComponent(RangeDate)).toBeDefined()
  })
})
