[**ilib-mono**](../README.md) • **Docs**

***

## Classes

### Generator

Generate a PO file from a set of resources.

#### Constructors

##### new Generator()

```ts
new Generator(options): Generator
```

Create a new PO file generator

###### Parameters

• **options**: [`GeneratorOptions`](src.md#generatoroptions)

###### Returns

[`Generator`](src.md#generator)

#### Methods

##### generate()

```ts
generate(set): string
```

Generate the PO file again from the resources. Each resource in the set
should have the same target locale. If a resource has a target locale
that is different from the target locale of this PO file, it will be
ignored.

###### Parameters

• **set**: `TranslationSet`

the set of resources to generate the PO file from

###### Returns

`string`

the generated PO file as a string

***

### Parser

Parse a PO file
Represents a GNU PO resource file.

#### Constructors

##### new Parser()

```ts
new Parser(options): Parser
```

Create a new PO file with the given path name.

###### Parameters

• **options**: `ParserOptions`

###### Returns

[`Parser`](src.md#parser)

#### Methods

##### parse()

```ts
parse(data): TranslationSet
```

Parse the data string looking for the localizable strings and add them to the
project's translation set. This function uses a finite state machine to
handle the parsing.

###### Parameters

• **data**: `string`

the string to parse

###### Returns

`TranslationSet`

the set of resources extracted from the file

###### Throws

SyntaxError if there is a syntax error in the file

***

### POFile

Represents a GNU PO resource file.

#### Constructors

##### new POFile()

```ts
new POFile(options): POFile
```

Create a new PO file with the given path name.

###### Parameters

• **options**: [`POFileOptions`](src.md#pofileoptions)

###### Returns

[`POFile`](src.md#pofile)

#### Methods

##### generate()

```ts
generate(set): string
```

Generate the PO file again from the resources. Each resource in the set
should have the same target locale. If a resource has a target locale
that is different from the target locale of this PO file, it will be
ignored.

###### Parameters

• **set**: `TranslationSet`

the set of resources to generate the PO file from

###### Returns

`string`

the generated PO file

##### getContextInKey()

```ts
getContextInKey(): boolean
```

Get whether the context is part of the key in this PO file.

###### Returns

`boolean`

whether the context is part of the key in this PO file

##### getDatatype()

```ts
getDatatype(): string
```

Get the datatype of this PO file.

###### Returns

`string`

the datatype of this PO file

##### getPathName()

```ts
getPathName(): string
```

Get the path name of this PO file.

###### Returns

`string`

the path name of this PO file

##### getProjectName()

```ts
getProjectName(): string
```

Get the project name of this PO file.

###### Returns

`string`

the project name of this PO file

##### getSourceLocale()

```ts
getSourceLocale(): string
```

Get the source locale of this PO file.

###### Returns

`string`

the source locale of this PO file

##### getTargetLocale()

```ts
getTargetLocale(): string
```

Get the target locale of this PO file.

###### Returns

`string`

the target locale of this PO file

##### parse()

```ts
parse(data): TranslationSet
```

Parse the data string looking for the localizable strings and add them to the
project's translation set. This function uses a finite state machine to
handle the parsing.

###### Parameters

• **data**: `string`

the string to parse

###### Returns

`TranslationSet`

the set of resources extracted from the file

###### Throws

when there is a syntax error in the file

***

### SyntaxError

Error thrown when there was a syntax error in the input file

#### Extends

- `Error`

#### Constructors

##### new SyntaxError()

```ts
new SyntaxError(filename, message): SyntaxError
```

Create a new instance of the error

###### Parameters

• **filename**: `string`

the name of the file where the syntax error occurred

• **message**: `string`

a description of the syntax error

###### Returns

[`SyntaxError`](src.md#syntaxerror)

###### Overrides

`Error.constructor`

#### Properties

##### message

```ts
message: string;
```

###### Inherited from

`Error.message`

##### name

```ts
name: string;
```

###### Inherited from

`Error.name`

##### stack?

```ts
optional stack: string;
```

###### Inherited from

`Error.stack`

## Interfaces

### GeneratorOptions

Options for the generator constructor

#### Properties

##### contextInKey?

```ts
optional contextInKey: boolean;
```

whether the context should be included as part of the key or not

###### Default

```ts
false
```

##### datatype?

```ts
optional datatype: string;
```

The default data type of the resources

##### pathName

```ts
pathName: string;
```

the path to the po file

##### projectName?

```ts
optional projectName: string;
```

The name of the project that the resources belong to

##### targetLocale?

```ts
optional targetLocale: any;
```

the target locale of the file

###### Default

```ts
"en"
```

***

### POFileOptions

Options for the POFile constructor

#### Properties

##### contextInKey?

```ts
optional contextInKey: boolean;
```

whether the context should be included as part of the key or not

###### Default

```ts
false
```

##### datatype?

```ts
optional datatype: string;
```

the type of the data in the po file

This might be something like "python" or "javascript" to
indicate the type of the code that the strings are used in.

###### Default

```ts
"po"
```

##### pathName

```ts
pathName: string;
```

the path to the po file

##### projectName?

```ts
optional projectName: string;
```

the name of the project that this po file is a part of

By default, this will be set to the base name of [pathName](src.md#pathname-1) without the `.po` extension

##### sourceLocale?

```ts
optional sourceLocale: string;
```

the source locale of the file

###### Default

```ts
"en-US"
```

##### targetLocale?

```ts
optional targetLocale: string;
```

the target locale of the file

###### Default

```ts
undefined
```
