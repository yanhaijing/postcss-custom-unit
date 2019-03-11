# PostCSS Custom Unit [![Build Status][ci-img]][ci]

[PostCSS] plugin custom unit, custom convert function.

```css
.foo {
    width: 100munit;
    padding: 100munit 200munit;
}
```

```css
.foo {
    width: 200rem;
    padding: 200rem 400rem;
}
```

## Usage

```js
postcss([ require('postcss-custom-unit') ])
```

See [PostCSS] docs for examples for your environment.

## Option

- includePath custom include path
- units custom unit and convert function

```js
var customUnit = require("postcss-custom-unit")

module.exports = ctx => ({
    plugins: [
        customUnit({
            includePath: /xxxx/,
            units: [{ from: 'munit', convert: function (val) { return val * 2 + 'rem' }}]
        })
    ]
})
```

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/yanhaijing/postcss-custom-unit.svg
[ci]:      https://travis-ci.org/yanhaijing/postcss-custom-unit
