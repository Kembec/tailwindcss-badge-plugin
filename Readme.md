# Tailwind CSS Badge Plugin

This simple plugin for Tailwind CSS allows you to easily create badge components with various sizes and color schemes. It's designed to integrate seamlessly with your Tailwind projects, providing a straightforward way to include badges without needing extensive custom configurations.

## Features

- **Dynamic Color Schemes**: Automatically adjusts badge text color based on the background for optimal readability.
- **Size Variants**: Includes a range of size options from `none` to `full`, allowing you to choose the perfect fit for your badges.
- **Opacity Variants**: Supports opacity variations for each color, offering more flexibility in badge styling.

## Installation

To install the plugin, add it to your project using npm or yarn:

```bash
npm install @kembec/tailwindcss-badge-plugin
# or
yarn add @kembec/tailwindcss-badge-plugin
```

## Usage

After installation, require it in your `tailwind.config.js` file:

```js
const badgePlugin = require('@kembec/tailwindcss-badge-plugin');

module.exports = {
  //...
  plugins: [
    badgePlugin,
    // other plugins...
  ],
};
```

## Configuration

The plugin works out of the box with the default Tailwind CSS colors and can be customized through the Tailwind theme configuration. Here's an example of extending your theme colors:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        customColor: '#abcdef',
      },
    },
  },
  plugins: [
    require('@kembec/tailwindcss-badge-plugin'),
    // other plugins...
  ],
};
```

## Contributing

Contributions are welcome! If you'd like to help improve this plugin, please feel free to submit a pull request or open an issue on the [GitHub repository](https://github.com/Kembec/tailwindcss-badge-plugin).

## License

This plugin is available under the AGPL-3.0 license. For more information, please refer to the LICENSE file in the repository.
