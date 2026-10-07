
# react-native-jam-icons
[![package version](https://img.shields.io/npm/v/react-native-jam-icons.svg?style=flat-square)](https://npmjs.org/package/react-native-jam-icons)
[![package downloads](https://img.shields.io/npm/dm/react-native-jam-icons.svg?style=flat-square)](https://npmjs.org/package/react-native-jam-icons)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/react-native-jam-icons.svg?style=flat-square)](https://npmjs.org/package/react-native-jam-icons)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Jam icons as React Native Components

## Table of Contents

- [About](#about)
- [Icon set compatibility](#icon-set-compatibility)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## About

handcrafted & pixel perfect icons form [Jam icons](http://jam-icons.com/) as React components. Created using [SVGR](https://github.com/smooth-code/svgr)

## Icon set compatibility

This package bundles 422 components from the Jam Icons v1 generation. The source submodule is pinned to [upstream revision 3c0c551](https://github.com/nordeio/jam-icons/tree/3c0c551cdf6633cecd7baec0aeb77ce8b83dd3c7), whose [README documents v1.0.72](https://github.com/nordeio/jam-icons/blob/3c0c551cdf6633cecd7baec0aeb77ce8b83dd3c7/README.md).

Jam Icons v2 [redrew the icon shapes](https://github.com/nordeio/jam-icons/blob/4c148783c30645d0987496f614bb8374f52bd3cf/README.md#compatibility), so previews on the newer Jam Icons website can differ from this package. Use the bundled [components](src/icons) and [exports](src/index.js) to check which icons are available. This package does not download or automatically track upstream icon updates.

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

First install [react-native-svg](https://github.com/react-native-community/react-native-svg) (Not needed when using Expo). Then:

```sh
$ npm install react-native-jam-icons
$ # OR
$ yarn add react-native-jam-icons
```

## Usage

```js
import { Amazon } from 'react-native-jam-icons'

const Example = (props) => <View>
    <Amazon width={40} height={40} color={'pink'}/>
</View>
```

See the [bundled icon components](src/icons) and [exports](src/index.js) for available icons.

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3.Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    