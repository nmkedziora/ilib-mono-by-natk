[**ilib-mono**](../../../README.md) • **Docs**

***

[ilib-mono](../../../modules.md) / [ilib-po/src](../README.md) / POFileOptions

# Interface: POFileOptions

Options for the POFile constructor

## Properties

### contextInKey?

> `optional` **contextInKey**: `boolean`

whether the context should be included as part of the key or not

#### Default

```ts
false
```

#### Defined in

[packages/ilib-po/src/POFile.ts:69](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-po/src/POFile.ts#L69)

***

### datatype?

> `optional` **datatype**: `string`

the type of the data in the po file

This might be something like "python" or "javascript" to
indicate the type of the code that the strings are used in.

#### Default

```ts
"po"
```

#### Defined in

[packages/ilib-po/src/POFile.ts:62](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-po/src/POFile.ts#L62)

***

### pathName

> **pathName**: `string`

the path to the po file

#### Defined in

[packages/ilib-po/src/POFile.ts:31](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-po/src/POFile.ts#L31)

***

### projectName?

> `optional` **projectName**: `string`

the name of the project that this po file is a part of

By default, this will be set to the base name of [pathName](POFileOptions.md#pathname) without the `.po` extension

#### Defined in

[packages/ilib-po/src/POFile.ts:38](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-po/src/POFile.ts#L38)

***

### sourceLocale?

> `optional` **sourceLocale**: `string`

the source locale of the file

#### Default

```ts
"en-US"
```

#### Defined in

[packages/ilib-po/src/POFile.ts:45](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-po/src/POFile.ts#L45)

***

### targetLocale?

> `optional` **targetLocale**: `string`

the target locale of the file

#### Default

```ts
undefined
```

#### Defined in

[packages/ilib-po/src/POFile.ts:52](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-po/src/POFile.ts#L52)
