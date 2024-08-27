import { mount } from '@vue/test-utils';
import Parent from '../components/Parent.vue';
import Child from '../components/Child.vue';

describe('Parent.vue', () => {
  it('recibe texto desde Child', async () => {
    const wrapper = mount(Parent, {
      global: {
        components: { Child }
      }
    });

    const childComponent = wrapper.findComponent(Child);
    await childComponent.setData({ inputText: 'Hello' });
    await childComponent.vm.$emit('send-text', 'Hello');

    expect(wrapper.text()).toContain('Received Text: Hello');
  });
});
