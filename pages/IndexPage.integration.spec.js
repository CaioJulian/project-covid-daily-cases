import { mount } from '@vue/test-utils'
import IndexPage from '.'
import MapCase from '@/components/MapCase.vue'
import RangeDate from '@/components/RangeDate.vue'

describe('IndexPage - unit', () => {
  const mountIndexPage = () => {
    const wrapper = mount(IndexPage, {
      stubs: {
        MapCase,
        RangeDate,
      },
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
