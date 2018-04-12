
# react-native-jam-icons
[![package version](https://img.shields.io/npm/v/react-native-jam-icons.svg?style=flat-square)](https://npmjs.org/package/react-native-jam-icons)
[![package downloads](https://img.shields.io/npm/dm/react-native-jam-icons.svg?style=flat-square)](https://npmjs.org/package/react-native-jam-icons)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/react-native-jam-icons.svg?style=flat-square)](https://npmjs.org/package/react-native-jam-icons)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Jam icons as React Native Components

## Table of Contents

- [About](#about)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## About

handcrafted & pixel perfect icons form [Jam icons](http://jam-icons.com/) as React components. Created using [SVGR](https://github.com/smooth-code/svgr)

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

See [icons](src/icons) and [jam-icons](http://jam-icons.com/) for available icons.

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3.Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    