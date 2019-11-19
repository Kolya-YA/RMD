---
title: "RMD Service 3"
date: 2019-11-01
draft: false
tags: []
categories: ["service"]

menu:
  main:
    parent: "Leistungen"
    name: "RMD Service 3 DE"
    weight: 3
---


## What a Shortcode is

Hugo loves Markdown because of its simple content format, but there are times when Markdown falls short. Often, content authors are forced to add raw HTML (e.g., video `<iframes>`) to Markdown content. We think this contradicts the beautiful simplicity of Markdown's syntax.

Hugo created **shortcodes** to circumvent these limitations.

A shortcode is a simple snippet inside a content file that Hugo will render using a predefined template. Note that shortcodes will not work in template files. If you need the type of drop-in functionality that shortcodes provide but in a template, you most likely want a [partial template][partials] instead.

In addition to cleaner Markdown, shortcodes can be updated any time to reflect new classes, techniques, or standards. At the point of site generation, Hugo shortcodes will easily merge in your changes. You avoid a possibly complicated search and replace operation.

More details: https://gohugo.io/content-management/shortcodes/

<!--more-->


## gist

We can embed the gist in our content via username and gist ID pulled from the URL:

```
{{</* gist spf13 7896402 */>}}
```

Display:

{{< gist spf13 7896402 >}}

## expand
The Expand shortcode displays an expandable/collapsible section of text on your page. Here is an example

{{< expand "Is this learn theme rocks ?" >}}
Yes !.
{{< /expand >}}

### Usage
this shortcode takes exactly one optional parameter to define the text that appears next to the expand/collapse icon. (default is “Click to expand”)

```
{{</* expand "Is this learn theme rocks ?" */>}}
Yes !.
{{</* /expand */>}}
```

## youtube

{{< youtube w7Ft2ymGmfc >}}


## vimeo

{{< vimeo 146022717 >}}
