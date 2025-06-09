[**ilib-mono**](../../../../../README.md) • **Docs**

***

[ilib-mono](../../../../../modules.md) / [ilib-common/src](../../../README.md) / [Utils](../README.md) / getSublocales

# Function: getSublocales()

> **getSublocales**(`locale`): `string`[]

Return an array of locales that represent the sublocales of
the given locale. These sublocales are intended to be used
to load locale data. Each sublocale might be represented
separately by files on disk in order to share them with other
locales that have the same sublocales. The sublocales are
given in the order that they should be loaded, which is
least specific to most specific.<p>

For example, the locale "en-US" would have the sublocales
"root", "en", "und-US", and "en-US".<p>

<h4>Variations</h4>

With only language and region specified, the following
sequence of sublocales will be generated:<p>

<pre>
root
language
und-region
language-region
</pre>

With only language and script specified:<p>

<pre>
root
language
language-script
</pre>

With only script and region specified:<p>

<pre>
root
und-region
</pre>

With only region and variant specified:<p>

<pre>
root
und-region
region-variant
</pre>

With only language, script, and region specified:<p>

<pre>
root
language
und-region
language-script
language-region
language-script-region
</pre>

With only language, region, and variant specified:<p>

<pre>
root
language
und-region
language-region
und-region-variant
language-region-variant
</pre>

With all parts specified:<p>

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

## Parameters

• **locale**: `any`

the locale to find the sublocales for

## Returns

`string`[]

An array of locale specifiers that
are the sublocales of the given on

## Defined in

[packages/ilib-common/src/Utils.js:114](https://github.com/nmkedziora/ilib-mono-by-natk/blob/a47642fa21fb490f54d70f6b6ce240cd9e95d955/packages/ilib-common/src/Utils.js#L114)
