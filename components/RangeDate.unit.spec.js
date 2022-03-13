import { mount } from '@vue/test-utils'
import RangeDate from '@/components/RangeDate.vue'
describe('RangeDate - unit', () => {
  const mountRangeDate = () => {
    const wrapper = mount(RangeDate)
    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountRangeDate()
    expect(wrapper.vm).toBeTruthy()
  })
})
