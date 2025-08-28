import { describe } from 'node:test';
import { expect, test, vi } from 'vitest';
import { useChat } from '../../src/composables/useChat';

describe('useChat', () => {
  test('add message correctly when onMessage is called', async () => {
    const text = 'Hola Mundo!';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    expect(messages.value.length).toBe(1);
    expect(messages.value[0]).toEqual({
      id: expect.any(Number),
      itsMine: true,
      message: text,
    });
  });

  test('do nothing if text is empty', async () => {
    const text = '';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    expect(messages.value.length).toBe(0);
  });

  test('gets him response correctly when message ends with ?', async () => {
    const text = 'Quieres café?';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    await new Promise((r) => setTimeout(r, 2000));

    const [myMessage, himMessage] = messages.value;

    expect(messages.value.length).toBe(2);
    expect(himMessage.itsMine).toBeFalsy();
    expect(himMessage).toEqual({
      id: expect.any(Number),
      image: expect.any(String),
      message: expect.any(String),
      itsMine: false,
    });

    expect(myMessage).toEqual({
      id: expect.any(Number),
      message: text,
      itsMine: true,
    });
  });

  test('mock response - fetch api', async () => {
    const mockResponse = { answer: 'yes', image: 'example.gif' };

    (window as any).fetch = vi.fn(async () => ({
      json: async () => mockResponse,
    }));

    const text = '¿Quieres café?';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    await new Promise((r) => setTimeout(r, 1600));
    const [, himMessage] = messages.value;

    expect(himMessage).toEqual({
      id: expect.any(Number),
      image: mockResponse.image,
      message: mockResponse.answer,
      itsMine: false,
    });
  });
});
