# @vickvasquez/ts-match
> @vickvasquez/ts-match is a `switch` alternative, but more cleaned and elegant, inspired in php match https://www.php.net/manual/es/control-structures.match.php

## Installation
```ts
  npm install @vickvasquez/ts-match
```

## Usage
ES6
```ts
import match from '@vickvasquez/ts-match'
```
CommonJS

```ts
const match = require('vickvasquez/ts-match').default
```
## Example
```ts
import match from '@vickvasquez/ts-match'

const result = match('foo', {
  foo: 'foo',
  bar: 'bar'
})

console.log(result) // foo
```

## Default value
```ts
import match from '@vickvasquez/ts-match'

const result = match('unknow', {
  foo: 'foo',
  bar: 'bar',
  default: 'default'
})

console.log(result) // default
```

## Use as factory

```ts
import match from '@vickvasquez/ts-match'

interface Print {
  print(): string
}

class A implements Print {
  print() {
    return 'foo'
  }
}

class B implements Print {
  print() {
    return 'bar'
  }
}

class Printer {
  print(printer: Print) {
    return printer.print()
  }
}

const cases = {
  a: new A(),
  b: new B(),
}

const printer = match('a', cases)
const printerB = match('b', cases)

console.log(new Printer().print(printer)) // foo
console.log(new Printer().print(printerB)) // bar
```

## Using Map

```ts
import match from '@vickvasquez/ts-match'

const map = new Map([[foo, 'foo'], [bar, 'bar']])

const bar = match('bar', map)

console.log(bar) // bar
```

## Options
### `skipFunctionsExecution` (default: `false`)
Indicates whether cases that are of type function should be executed or not, when is `true`, the function is not executed instead a reference to the function is returned giving the developer the option to execute it manually. *(closure)*

```ts
import match from '@vickvasquez/ts-match'

const cases = {
  foo: () => 'foo',
  bar: 'bar',
  default: 'default'
}

const foo = match('foo', cases)
const fooFn = match('foo', cases, { skipFunctionsExecution: true })

console.log(foo) // foo

console.log(fooFn) // Function
console.log(fooFn()) // foo
```
