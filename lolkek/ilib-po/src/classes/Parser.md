[**ilib-mono**](../../../README.md) • **Docs**

***

[ilib-mono](../../../modules.md) / [ilib-po/src](../README.md) / Parser

# Class: Parser

Parse a PO file
Represents a GNU PO resource file.

## Constructors

### new Parser()

> **new Parser**(`options`): [`Parser`](Parser.md)

Create a new PO file with the given path name.

#### Parameters

• **options**: `ParserOptions`

#### Returns

[`Parser`](Parser.md)

#### Defined in

[packages/ilib-po/src/Parser.ts:132](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-po/src/Parser.ts#L132)

## Methods

### parse()

> **parse**(`data`): `TranslationSet`

Parse the data string looking for the localizable strings and add them to the
project's translation set. This function uses a finite state machine to
handle the parsing.

#### Parameters

• **data**: `string`

the string to parse

#### Returns

`TranslationSet`

the set of resources extracted from the file

#### Throws

SyntaxError if there is a syntax error in the file

#### Defined in

[packages/ilib-po/src/Parser.ts:170](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-po/src/Parser.ts#L170)
