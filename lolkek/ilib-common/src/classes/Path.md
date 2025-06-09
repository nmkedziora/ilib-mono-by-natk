[**ilib-mono**](../../../README.md) • **Docs**

***

[ilib-mono](../../../modules.md) / [ilib-common/src](../README.md) / Path

# Class: Path

## Constructors

### new Path()

> **new Path**(): [`Path`](Path.md)

#### Returns

[`Path`](Path.md)

#### Defined in

[packages/ilib-common/src/Path.js:26](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/Path.js#L26)

## Methods

### basename()

> `static` **basename**(`pathname`, `extension`): `string`

Return the base file name of the path. If the extension is given,
with or without the leading dot, then the extension is removed from
the base name.

#### Parameters

• **pathname**: `string`

the path to take the base name of

• **extension**: `string`

the optional extension to remove

#### Returns

`string`

the base name of the file without the extension

#### Defined in

[packages/ilib-common/src/Path.js:103](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/Path.js#L103)

***

### dirname()

> `static` **dirname**(`pathname`): `string`

Return the parent directory of the given pathname
similar to the dirname shell function.

#### Parameters

• **pathname**: `string`

path to check

#### Returns

`string`

the parent dir of the given pathname

#### Static

#### Defined in

[packages/ilib-common/src/Path.js:49](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/Path.js#L49)

***

### fileUriToPath()

> `static` **fileUriToPath**(`uri`): `string`

#### Parameters

• **uri**: `any`

#### Returns

`string`

#### Defined in

[packages/ilib-common/src/Path.js:28](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/Path.js#L28)

***

### join()

> `static` **join**(...`args`): `string`

Return a path that is the concatenation of all the of the arguments
which each name a path segment.

#### Parameters

• ...**args**: `any`

#### Returns

`string`

the concatenated pathname

#### Static

#### Defined in

[packages/ilib-common/src/Path.js:87](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/Path.js#L87)

***

### normalize()

> `static` **normalize**(`pathname`): `string`

Return the normalized version of the given pathname. This
cleans up things like double directory separators and such.

#### Parameters

• **pathname**: `string`

path to check

#### Returns

`string`

the normalized version of the given pathname

#### Static

#### Defined in

[packages/ilib-common/src/Path.js:62](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/Path.js#L62)
