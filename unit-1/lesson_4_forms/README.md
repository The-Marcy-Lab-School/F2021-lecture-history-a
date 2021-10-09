# HTML Forms - Lecture Notes

### The Why
* **_Forms_** are the way that we send and retrieve information on the web.
  * Whenever you log in to Facebook, search for a video on YouTube, or add something to your cart on UberEats, you are submitting a form!
*  **_HTTP** (or Hypertext Transfer Protocol)_is a set of rules that determine how messages are formatted and transmitted over the Web.
* Forms are wrapped in a `<form>` tag. This tag contains a `method` attribute that indcates the HTTP method to be used and an `action` attribute that determines the location where the form information should be sent.
* There are a number of different `<input>` types that one can use to place hard or soft boundaries on the type of data that a user submits.
* Forms, by default, are relatively unstructured. We can use semantic elements such as `<fieldset>`, `<legend>`, and even `<section>`, `<ul>`, and `<li>` to structure our form.

## Code-a-long

### Draw out what we want to make first

1. `<form>`
2. `<fieldset>`
3. `<legend>`

4. `<input type="text">`
    * `value` as a way to pre-fill
    * `placeholder` as an alternative
5. `<label for="full-name">`

6. `<input type="email">`
7. `<label>` wrapped around `<input type="email">`. When the `input` is nested inside `label`, you don't need the `for` or `id` attribute.

8. `<textarea>`
   Demonstrate the following:
     * White space when `<textarea>` expands two lines

9. New `<fieldset>`
10. New `<legend>`

11. `<input type="checkbox">`

12. One more `<fieldset>` + `<legend>` for `<input type=radio>` to select hotsause spiciness.

13. `<select name="favorite-hotsauce" id="hotsauce-brands">` 
14. `<label for="hotsauce-brands">`
15. `<option value="tobasco">Tobasco</option>

Finally...
16. `<input type="submit" value="Fire Away!" />`

#### Now on to styling...
