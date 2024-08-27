import { mount } from '@vue/test-utils';
import Counter from '../components/Counter.vue';
import store from '@/store';

describe('Counter.vue', () => {
  it('verifica valor inicial del contador', () => {
    const wrapper = mount(Counter, { global: { plugins: [store] } });
    expect(wrapper.text()).toContain('Count: 0');
  });

  it('incrementa y decrementa el contador', async () => {
    const wrapper = mount(Counter, { global: { plugins: [store] } });

    await wrapper.find('button').trigger('click'); // Incrementa
    expect(wrapper.text()).toContain('Count: 1');

    await wrapper.findAll('button')[1].trigger('click'); // Decrementa
    expect(wrapper.text()).toContain('Count: 0');
  });
});
