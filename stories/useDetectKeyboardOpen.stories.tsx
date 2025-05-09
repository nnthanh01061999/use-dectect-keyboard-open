import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { useDetectKeyboardOpen } from '../src/hooks/useDetectKeyboardOpen';
import { fn } from '@storybook/test';

// Demo component that uses the hook
const KeyboardDetectorDemo = () => {
  const isKeyboardOpen = useDetectKeyboardOpen({
    onOpen: fn(),
    onClose: fn(),
  });
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="flex flex-col items-center space-y-6 p-4 max-w-md mx-auto">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Keyboard Detector Demo</h1>
        <p className="text-gray-600">Focus on the input below to open your virtual keyboard</p>
      </div>

      <div
        className={`
        w-full p-4 rounded-lg transition-all duration-300
        ${
          isKeyboardOpen
            ? 'bg-green-100 border-2 border-green-500'
            : 'bg-gray-100 border-2 border-gray-300'
        }
      `}
      >
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div
            className={`
            w-3 h-3 rounded-full 
            ${isKeyboardOpen ? 'bg-green-500' : 'bg-gray-400'}
          `}
          ></div>
          <p className="font-medium">
            Keyboard is{' '}
            <span className={isKeyboardOpen ? 'text-green-600 font-bold' : 'text-gray-600'}>
              {isKeyboardOpen ? 'OPEN' : 'CLOSED'}
            </span>
          </p>
        </div>

        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Type something..."
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div
        className={`
        p-4 rounded-lg bg-blue-100 border border-blue-300
        transition-all duration-300
        ${isKeyboardOpen ? 'opacity-100' : 'opacity-50'}
      `}
      >
        <h2 className="font-semibold mb-2">How it works:</h2>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Detects window height changes when keyboard opens</li>
          <li>Monitors input/textarea focus events</li>
          <li>Works on iOS and Android devices</li>
          <li>Adapts to device orientation changes</li>
        </ul>
      </div>

      {isKeyboardOpen && (
        <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-300 animate-bounce">
          <p className="text-yellow-800 font-medium">
            Keyboard detected! Adjust your UI accordingly.
          </p>
        </div>
      )}
    </div>
  );
};

const meta: Meta<typeof KeyboardDetectorDemo> = {
  title: 'Hooks/useDetectKeyboardOpen',
  component: KeyboardDetectorDemo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A hook that detects when the virtual keyboard is open on mobile devices.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KeyboardDetectorDemo>;

export const Demo: Story = {
  render: () => <KeyboardDetectorDemo />,
};
