import { mount } from '@vue/test-utils'
import MapCase from '@/components/MapCase.vue'
describe('MapCase - unit', () => {
  const mountMapCase = () => {
    const wrapper = mount(MapCase)
    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountMapCase()
    expect(wrapper.vm).toBeTruthy()
  })
})
