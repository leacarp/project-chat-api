import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import MessageBox from '../../src/components/chat/MessageBox.vue';

describe('<MessageBox />', () => {
  const wrapper = mount(MessageBox);
  test('renders input and button elements correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button svg').exists()).toBe(true);
  });

  test('emits sendMessage event when button is clicked with message value', async () => {
    const message = 'Hola Mundo!';

    await wrapper.find('input[type="text"]').setValue(message);
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);

    expect((wrapper.vm as any).message).toBe('');
  });

  test('emits sendMessage event when keypress.enter is triggered with message value', async () => {
    const message = 'Hola Mundo!';

    const input = wrapper.find('input');

    await input.trigger('keypress.enter');
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
  });

  test('don´t emits sendMessage event when keypress.enter is triggered and button is clicked with message value is empty', async () => {
    const wrapper = mount(MessageBox);

    const input = wrapper.find('input');

    await input.trigger('keypress.enter');
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('sendMessage')).toBeFalsy();
  });
});
