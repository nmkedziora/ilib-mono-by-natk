[**ilib-mono**](../../../README.md) • **Docs**

***

## Functions

### getLocFiles()

```ts
function getLocFiles(locale, name): string[]
```

Return an array of relative path names for the
files that represent the data for the given locale. 

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
therefore will be loaded from "und/ES" instead. 

<h4>Variations</h4>

With only language and region specified, the following
sequence of paths will be generated: 

<pre>
language
und/region
language/region
</pre>

With only language and script specified: 

<pre>
language
language/script
</pre>

With only script and region specified: 

<pre>
und/region
</pre>

With only region and variant specified: 

<pre>
und/region
region/variant
</pre>

With only language, script, and region specified: 

<pre>
language
und/region
language/script
language/region
language/script/region
</pre>

With only language, region, and variant specified: 

<pre>
language
und/region
language/region
region/variant
language/region/variant
</pre>

With all parts specified: 

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

#### Parameters

• **locale**: `Locale`

load the files for this locale

• **name**: `string`

the file name of each file to load without
any path

#### Returns

`string`[]

An array of relative path names
for the files that contain the locale data

#### Static

***

### getSublocales()

```ts
function getSublocales(locale): string[]
```

Return an array of locales that represent the sublocales of
the given locale. These sublocales are intended to be used
to load locale data. Each sublocale might be represented
separately by files on disk in order to share them with other
locales that have the same sublocales. The sublocales are
given in the order that they should be loaded, which is
least specific to most specific. 

For example, the locale "en-US" would have the sublocales
"root", "en", "und-US", and "en-US". 

<h4>Variations</h4>

With only language and region specified, the following
sequence of sublocales will be generated: 

<pre>
root
language
und-region
language-region
</pre>

With only language and script specified: 

<pre>
root
language
language-script
</pre>

With only script and region specified: 

<pre>
root
und-region
</pre>

With only region and variant specified: 

<pre>
root
und-region
region-variant
</pre>

With only language, script, and region specified: 

<pre>
root
language
und-region
language-script
language-region
language-script-region
</pre>

With only language, region, and variant specified: 

<pre>
root
language
und-region
language-region
und-region-variant
language-region-variant
</pre>

With all parts specified: 

<pre>
root
language
und-region
language-script
language-region
und-region-variant
language-script-region
language-region-variant
language-script-region-variant
</pre>

#### Parameters

• **locale**: `any`

the locale to find the sublocales for

#### Returns

`string`[]

An array of locale specifiers that
are the sublocales of the given on
