[**ilib-mono**](../../README.md) • **Docs**

***

## Index

### Namespaces

- [JSUtils](namespaces/JSUtils.md)
- [MathUtils](namespaces/MathUtils.md)
- [SearchUtils](namespaces/SearchUtils.md)
- [Utils](namespaces/Utils.md)

## Classes

### ISet

A polyfill for Set in older browsers.

#### Constructors

##### new ISet()

```ts
new ISet(elements): ISet
```

Create a new set with elements in the given array. The type of
the set is gleaned from the type of the first element in the
elements array, or the first element added to the set. The type
may be "string" or "number", and all elements will be returned
as elements of that type.

###### Parameters

• **elements**: (`string` \| `number`)[]

initial elements to add to the set

###### Returns

[`ISet`](README.md#iset)

#### Methods

##### add()

```ts
add(element): boolean
```

Adds the specified element or array of elements to this set if it is or they are not
already present.

###### Parameters

• **element**: `any`

element or array of elements to add

###### Returns

`boolean`

true if this set did not already contain the specified element[s]

##### asArray()

```ts
asArray(): any[]
```

Return the set as a javascript array.

###### Returns

`any`[]

the set represented as a javascript array

##### clear()

```ts
clear(): void
```

Removes all of the elements from this set.

###### Returns

`void`

##### contains()

```ts
contains(element): boolean
```

Returns true if this set contains the specified element.

###### Parameters

• **element**: `any`

the element to test

###### Returns

`boolean`

##### fromJS()

```ts
fromJS(obj): ISet
```

Convert from a js representation to an internal one.

###### Parameters

• **obj**: `any`

###### Returns

[`ISet`](README.md#iset)

the current object, or undefined if the conversion did not work

##### isEmpty()

```ts
isEmpty(): boolean
```

Returns true if this set contains no elements.

###### Returns

`boolean`

##### remove()

```ts
remove(element): boolean
```

Removes the specified element from this set if it is present.

###### Parameters

• **element**: `any`

the element to remove

###### Returns

`boolean`

true if the set contained the specified element

##### toJS()

```ts
toJS(): any
```

Convert to a javascript representation of this object.
In this case, it is a normal JS array.

###### Returns

`any`

the JS representation of this object

##### toJson()

```ts
toJson(): string
```

Represents the current set as json.

###### Returns

`string`

the current set represented as json

#### Properties

##### elements

```ts
elements: object;
```

##### has()

```ts
has: (element) => boolean;
```

Returns true if this set contains the specified element.

###### Parameters

• **element**: `any`

the element to test

###### Returns

`boolean`

##### type

```ts
type: 
  | "string"
  | "number"
  | "bigint"
  | "boolean"
  | "symbol"
  | "undefined"
  | "object"
  | "function";
```

***

### Path

#### Constructors

##### new Path()

```ts
new Path(): Path
```

###### Returns

[`Path`](README.md#path)

#### Methods

##### basename()

```ts
static basename(pathname, extension): string
```

Return the base file name of the path. If the extension is given,
with or without the leading dot, then the extension is removed from
the base name.

###### Parameters

• **pathname**: `string`

the path to take the base name of

• **extension**: `string`

the optional extension to remove

###### Returns

`string`

the base name of the file without the extension

##### dirname()

```ts
static dirname(pathname): string
```

Return the parent directory of the given pathname
similar to the dirname shell function.

###### Parameters

• **pathname**: `string`

path to check

###### Returns

`string`

the parent dir of the given pathname

###### Static

##### fileUriToPath()

```ts
static fileUriToPath(uri): string
```

###### Parameters

• **uri**: `any`

###### Returns

`string`

##### join()

```ts
static join(...args): string
```

Return a path that is the concatenation of all the of the arguments
which each name a path segment.

###### Parameters

• ...**args**: `any`

###### Returns

`string`

the concatenated pathname

###### Static

##### normalize()

```ts
static normalize(pathname): string
```

Return the normalized version of the given pathname. This
cleans up things like double directory separators and such.

###### Parameters

• **pathname**: `string`

path to check

###### Returns

`string`

the normalized version of the given pathname

###### Static
