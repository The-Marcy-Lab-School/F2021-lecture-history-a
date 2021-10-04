# Unit 1 Lesson 3 - Tables
## Code-a-long Guide

1. Adjust width and height of rows and columns.
  ```css
  td {
    width: 100px;
  }

  tr {
    height: 100px;
  }
  ```
2. Mark up the table with `<thead>`, `<tbody>`, `<tfoot>`. Talk over the accessibility benefits.

3. Which tables elements can have a border? What about padding and margin in our table cells? 
`border-spacing` property on the `<table>` element is like margins

4. Add and collapse borders by targeting table and all of it's descendants. 
The default `border-collapse` property is `seperate` and has some thin white space seperating each cell. 
The `border-spacing` property determines how much space separtes each cell.

  ```css
  table, table * {
    border: 1px solid black;
    border-collapse: collapse;
  }
  ```
5. Play around with text alignment by targeting the `text-align` property of the `td` element.
  ```css
  td {
    text-align: center;
  }
  ```
  
6. Play around with background colors.
  ```css
  thead {
    background-color: gray;
  }
  ```

7. Add `scope` attributes to `<th>`s and then target those attributes for styling using an attribute selector.
  ```css
    th[scope="row"] {
    background-color: darkgray;
    color: #ffffff;
  }
  ```

8. Use the `:nth-child` **pseudo-class** to target another row or.
  ```css
    tr:nth-child(3) {
    background-color: lightgray;
  }
  ```


9. Demonstrate`colspan` attribute.
  ```html
   <tfoot>
      <tr>
        <td colspan="6">This is the footer</td>
      </tr>
   </tfoot>
  ```

10. Target the `<tfoot>` element to give the footer a common background color.
  ```css
  tfoot {
    background-color: beige;
  }
  ```

11. Demonstrate`rowspan` attribute.
  ```html
  <th rowspan="2" scope="row">3rd Period</th>
  ```

## Styling columns (if time permits)

1. Add `<colgroup>` elements and demonstrate how that facilitates styling targeted at table _columns_.
  ```html
   <colgroup>
      <col>
      <col>
      <col>
      <col>
      <col>
      <col>
    </colgroup>
  ```

2. Add an ID or classes to a `<col>` and target it for styling that way.
