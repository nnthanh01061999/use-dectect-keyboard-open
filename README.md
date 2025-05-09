# use-detect-keyboard-open

A React hook that detects when the virtual keyboard is open on mobile devices.

## Features

- 📱 Reliably detects keyboard open/close states on mobile devices
- 🔄 Works with both iOS and Android devices
- ⚛️ Simple React hook implementation
- 📏 Multiple detection methods for better accuracy
- 💪 TypeScript support
- 📚 Storybook documentation for components

## Installation

```bash
npm install use-detect-keyboard-open
# or
yarn add use-detect-keyboard-open
# or
pnpm add use-detect-keyboard-open
```

## Usage

```jsx
import { useDetectKeyboardOpen } from 'use-detect-keyboard-open';

function App() {
  const isKeyboardOpen = useDetectKeyboardOpen();

  return (
    <div>
      <p>Keyboard is {isKeyboardOpen ? 'open' : 'closed'}</p>
      <input type="text" placeholder="Type something..." />
    </div>
  );
}
```

## How It Works

The hook uses multiple detection methods to reliably detect when the virtual keyboard is open:

1. **Window Size Method**: Detects significant changes in window height which typically occur when the keyboard opens
2. **Focus Events Method**: Tracks input and textarea focus/blur events to determine keyboard state

## API

### useDetectKeyboardOpen

```tsx
const isKeyboardOpen = useDetectKeyboardOpen();
```

Returns a boolean value indicating whether the virtual keyboard is currently open.

## Common Use Cases

- Adjusting UI layout when keyboard appears
- Hiding elements when keyboard is visible
- Implementing custom scroll behavior for inputs
- Creating responsive forms optimized for mobile

## Development

### Setup

```bash
# Clone the repository
git clone https://github.com/nnthanh01061999/use-detect-keyboard-open.git
cd use-detect-keyboard-open

# Install dependencies
npm install
# or
yarn
# or
pnpm install
```

### Development with Storybook

```bash
npm run storybook
# or
yarn storybook
# or
pnpm storybook
```

### Building the library

```bash
npm run build
# or
yarn build
# or
pnpm build
```

## Browser Support

- iOS Safari (9+)
- Android Chrome (50+)
- Other modern mobile browsers

## License

MIT

## Acknowledgements

- Created by [nnthanh01061999](https://github.com/nnthanh01061999)
