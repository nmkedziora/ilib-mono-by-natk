[**ilib-mono**](../../../../../README.md) • **Docs**

***

[ilib-mono](../../../../../modules.md) / [ilib-common/src](../../../README.md) / [Utils](../README.md) / getLocFiles

# Function: getLocFiles()

> **getLocFiles**(`locale`, `name`): `string`[]

Return an array of relative path names for the
files that represent the data for the given locale.<p>

Note that to prevent the situation where a directory for
a language exists next to the directory for a region where
the language code and region code differ only by case, the
plain region directories are located under the special
"undefined" language directory which has the ISO code "und".
The reason is that some platforms have case-insensitive
file systems, and you cannot have 2 directories with the
same name which only differ by case. For example, "es" is
the ISO 639 code for the language "Spanish" and "ES" is
the ISO 3166 code for the region "Spain", so both the
directories cannot exist underneath "locale". The region
therefore will be loaded from "und/ES" instead.<p>

<h4>Variations</h4>

With only language and region specified, the following
sequence of paths will be generated:<p>

<pre>
language
und/region
language/region
</pre>

With only language and script specified:<p>

<pre>
language
language/script
</pre>

With only script and region specified:<p>

<pre>
und/region
</pre>

With only region and variant specified:<p>

<pre>
und/region
region/variant
</pre>

With only language, script, and region specified:<p>

<pre>
language
und/region
language/script
language/region
language/script/region
</pre>

With only language, region, and variant specified:<p>

<pre>
language
und/region
language/region
region/variant
language/region/variant
</pre>

With all parts specified:<p>

<pre>
language
und/region
language/script
language/region
region/variant
language/script/region
language/region/variant
language/script/region/variant
</pre>

## Parameters

• **locale**: `Locale`

load the files for this locale

• **name**: `string`

the file name of each file to load without
any path

## Returns

`string`[]

An array of relative path names
for the files that contain the locale data

## Static

## Defined in

[packages/ilib-common/src/Utils.js:250](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/Utils.js#L250)
