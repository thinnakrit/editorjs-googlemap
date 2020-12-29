# editorjs-googlemap
Editor.js Google map inline tools

![](https://badgen.net/badge/Editor.js/v2.0/blue)
## Features

Allows adding google map previews to your articles.

## Installation

### Install via NPM

Get the package

```shell
npm i --save-dev editorjs-googlemap
```

Include module at your application

```javascript
const GoogleMap = require('editorjs-googlemap');
```

ES2015

```javascript
import GoogleMap from 'editorjs-googlemap'
```

### Download to your project's source dir

1. Download folder `dist` from repository
2. Add `dist/bundle.js` file to your page.

## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
const editor = EditorJS({
  ...

  tools: {
    ...
    googleMap: {
      class: GoogleMap,
      place: 'Bangkok thailand',
      config: {
        placeholder: 'Place name or lat and long eg: 15.23999,-87.393993'
        searchValue: 'Search'
      }
    }
  },

  ...
});
```

## Config Params

Link Tool supports these configuration parameters:

| Field    | Type        | Description                                    |
| ---------|-------------|------------------------------------------------|
| placeholder | `string`    | **Required:** Placeholder on search input |
| searchValue | `string`    | **Required:** Search button name |

## Output data

This Tool returns `data` with following format

| Field          | Type      | Description                     |
| -------------- | --------- | ------------------------------- |
| place           | `string`  | Place name             |

```json
{
    "type" : "googleMap",
    "data" : {
        "place": "Bangkok thailand"
    }
}
```

Also, it can contain any additional fields you want to store.