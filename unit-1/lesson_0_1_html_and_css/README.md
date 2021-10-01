# Unit 1 - Lesson 0: Semantic HTML/CSS

## Objectives
Fellows will...
* Structure HTML using HTML5 semantic tags
* Understand the difference between semantic and non-semantic HTML and CSS
* Be able to articulate the benefits of writing semantic code.
* Open, edit, and preview and HTML file their browsers

## HTML Vocabulary
* HTML tag
* HTML element
* semantic
* non-semantic
* structural elements

## The Why?
* _Semantic_ in HTML and CSS refers to code that gives the page meaning based on **content** as opposed to it's physical appearance on the page.
* The release of HTML5 in 2014 came with new semantic tags that allow devs to better define the structure of the page and to group related elements.
* Structurally semantic tags include: `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`, `<aside>`, `<main>`
* Other new semantic tags include: `<figure>`, `<figcaption>`, `<blockquote>`
* Non-semantic tags: `<div>`, `<span>`, `<b>`, `<i>`
* Why Semantics are dope:
  1. More readable code. Very helpful when working on teams.
  2. Accessibility. Screen readers can better navigate websites written in semantic HTML
  3. Semantic HTML is search-engine optimized. Search engines can better recognize key parts of your website when they are signaled with semantic HTML. This could help in the search rankings.
  4. Makes styling easier/more efficient. When you target elements based on the structure and meaning of their content _instead_ of how it appears, it will be easier to make uniform style changes to like elements in the future.

## Lecture: Code-a-Long - Our Landing Page Mockup
* We will recreate [our Tribute Page](https://codepen.io/freeCodeCamp/full/zNqgVx) together! But we can make some fun styling changes along the way!
* We will download the [Page Ruler Redux Chrome Extension](https://chrome.google.com/webstore/detail/page-ruler-redux/giejhjebcalaheckengmchjekofhhmal) to get precise pixel measurements.
* We will also download the [Eye Dropper Chrome Extension](https://chrome.google.com/webstore/detail/eye-dropper/hmdcmlfkchdmnmnmheododdhjedfccka) to find exact colors.

### Our Process
0. We will name our file index.html
1. Structure page with HTML. We will use:
  * `body`
    * `main`
      * `h1`
      * `p`
      * `figure`
        * `img`      
        * `figcaption`
      * `section`
        * `h3`
        * `ul`
          * `li`
      * `blockquote`
        * `p`
        * `cite`
      * `h3` and `a`
      
2. Style the page
  * Set the background colore of the `body`
  * Set width of `main`
  * Set `section` and `article` to `display: inline-block`
  * Set `section` and `article` to `max-height: fill-available`
  * Set background colors
   
  
## CSS Vocabulary
  * CSS Selector
  * Type selector
  * Class selector
  * ID selector
  * specificity
  * attribute selectors
  * combinators
  * child selector
  * descendant selector
  * sibling selector

## CSS Essential Questions
* What is a CSS selector?
* What is "the cascade" and how does this impact the way styling is applied to HTML elements?
* What is specificity and how is it calculated?
* How do specificity and the cascade work together to determine styling of HTML elements?
* What is the benefit of keeping our specificity weights low?

### CSS Specificity Resources
- [Pseudo Classes and Pseudo Elements](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements) on MDN
- [Combinators](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators) on MDN
- [CSS Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

## Wrap Up: Git push and publish the webpage
