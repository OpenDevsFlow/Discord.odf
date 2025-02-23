<p align="center">
  <strong> Discord.odf </strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/discord.odf">
    <img src="https://img.shields.io/npm/v/discord.odf.svg" alt="NPM Version">
  </a>
  <a href="https://www.npmjs.com/package/discord.odf">
    <img src="https://img.shields.io/npm/dm/discord.odf.svg" alt="NPM Downloads">
  </a>
  <a href="https://discord.gg/6UGYjhSS5v">
    <img src="https://img.shields.io/discord/123456789012345678.svg" alt="Discord">
  </a>
</p>

A comprehensive wrapper package for discord.js that provides seamless support for both ESM and CommonJS modules with complete TypeScript type definitions.

## Features

- 🔄 Dual module support (ESM and CommonJS)
- 📝 Complete TypeScript type definitions
- 🛠 Utility functions for common Discord.js operations
- 📊 Enhanced embed creation and management
- 🎮 Message component utilities (buttons, select menus)
- 🔐 Permission handling utilities
- 🎯 Event handling with type safety
- ✨ Zero additional runtime dependencies

## Installation

```bash
npm install discord.odf@latest
```

## Usage

### ESM Import
```typescript
import { Client } from 'discord.odf';

const client = new Client({
  intents: ['GuildMessages', 'MessageContent']
});
```

### CommonJS Require
```javascript
const { Client } = require('discord.odf');

const client = new Client({
  intents: ['GuildMessages', 'MessageContent']
});
```

## Features

### Enhanced Embeds
Create beautiful embeds with our utility functions:

```typescript
import { EmbedBuild } from 'discord.odf';

// Basic embed
const embed = EmbedBuild({
  title: 'Welcome',
  description: 'Welcome to our server!',
  type: 'success' // Predefined color scheme
});
```

### Message Components
Create interactive message components with type-safe builders:

```typescript
import { 
  ButtonBuild, 
  StringSelectMenuBuild,
  ActionRowBuild,
  ButtonStyles 
} from 'discord.odf';

// Create a button
const button = ButtonBuild({
  label: 'Click Me',
  style: ButtonStyles.PRIMARY,
  customId: 'my-button'
});

// Create a select menu
const menu = StringSelectMenuBuild({
  customId: 'select-option',
  placeholder: 'Choose an option',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]
});

// Create an action row with components
const row = ActionRowBuild([button]);
```

## API Documentation

### Component Utilities
- `ButtonBuild(options)`: Create a button with predefined styles
- `StringSelectMenuBuild(options)`: Create a string select menu
- `UserSelectMenuBuild(options)`: Create a user select menu
- `RoleSelectMenuBuild(options)`: Create a role select menu
- `ChannelSelectMenuBuild(options)`: Create a channel select menu
- `ActionRowBuild(components)`: Create an action row with components

### Embed Utilities
- `EmbedBuild(options)`: Create a basic embed with specified options
- `EmbedColors`: Predefined color schemes for embeds

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Discord.js](https://discord.js.org/) - The awesome library we're wrapping
- All the contributors who helped make this package better

---

<p align="center">
  <strong> Made with ❤️ by the OpenDevsFlow </strong>
</p>

<p align="center">
  <a href="https://discord.gg/6UGYjhSS5v">
    <img src="https://api.weblutions.com/discord/invite/a2c3QTWkuk" alt="Join our Discord">
  </a>
</p>