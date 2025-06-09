[**ilib-mono**](../../../README.md) • **Docs**

***

[ilib-mono](../../../modules.md) / [ilib-common/src](../README.md) / ISet

# Class: ISet

A polyfill for Set in older browsers.

## Constructors

### new ISet()

> **new ISet**(`elements`): [`ISet`](ISet.md)

Create a new set with elements in the given array. The type of
the set is gleaned from the type of the first element in the
elements array, or the first element added to the set. The type
may be "string" or "number", and all elements will be returned
as elements of that type.

#### Parameters

• **elements**: (`string` \| `number`)[]

initial elements to add to the set

#### Returns

[`ISet`](ISet.md)

#### Defined in

[packages/ilib-common/src/ISet.js:35](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/ISet.js#L35)

## Properties

### elements

> **elements**: `object`

#### Defined in

[packages/ilib-common/src/ISet.js:36](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/ISet.js#L36)

***

### has()

> **has**: (`element`) => `boolean`

Returns true if this set contains the specified element.

#### Parameters

• **element**: `any`

the element to test

#### Returns

`boolean`

#### Defined in

[packages/ilib-common/src/ISet.js:168](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/ISet.js#L168)

***

### type

> **type**: `"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"`

#### Defined in

[packages/ilib-common/src/ISet.js:43](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/ISet.js#L43)

## Methods

### add()

> **add**(`element`): `boolean`

Adds the specified element or array of elements to this set if it is or they are not
already present.

#### Parameters

• **element**: `any`

element or array of elements to add

#### Returns

`boolean`

true if this set did not already contain the specified element[s]

#### Defined in

[packages/ilib-common/src/ISet.js:70](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/ISet.js#L70)

***

### asArray()

> **asArray**(): `any`[]

Return the set as a javascript array.

#### Returns

`any`[]

the set represented as a javascript array

#### Defined in

[packages/ilib-common/src/ISet.js:127](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/ISet.js#L127)

***

### clear()

> **clear**(): `void`

Removes all of the elements from this set.

#### Returns

`void`

#### Defined in

[packages/ilib-common/src/ISet.js:87](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/ISet.js#L87)

***

### contains()

> **contains**(`element`): `boolean`

Returns true if this set contains the specified element.

#### Parameters

• **element**: `any`

the element to test

#### Returns

`boolean`

#### Defined in

[packages/ilib-common/src/ISet.js:96](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/ISet.js#L96)

***

### fromJS()

> **fromJS**(`obj`): [`ISet`](ISet.md)

Convert from a js representation to an internal one.

#### Parameters

• **obj**: `any`

#### Returns

[`ISet`](ISet.md)

the current object, or undefined if the conversion did not work

#### Defined in

[packages/ilib-common/src/ISet.js:163](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/ISet.js#L163)

***

### isEmpty()

> **isEmpty**(): `boolean`

Returns true if this set contains no elements.

#### Returns

`boolean`

#### Defined in

[packages/ilib-common/src/ISet.js:105](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/ISet.js#L105)

***

### remove()

> **remove**(`element`): `boolean`

Removes the specified element from this set if it is present.

#### Parameters

• **element**: `any`

the element to remove

#### Returns

`boolean`

true if the set contained the specified element

#### Defined in

[packages/ilib-common/src/ISet.js:114](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/ISet.js#L114)

***

### toJS()

> **toJS**(): `any`

Convert to a javascript representation of this object.
In this case, it is a normal JS array.

#### Returns

`any`

the JS representation of this object

#### Defined in

[packages/ilib-common/src/ISet.js:155](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/ISet.js#L155)

***

### toJson()

> **toJson**(): `string`

Represents the current set as json.

#### Returns

`string`

the current set represented as json

#### Defined in

[packages/ilib-common/src/ISet.js:146](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/ISet.js#L146)
