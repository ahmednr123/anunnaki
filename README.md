# Libraries
Basic DOM Library - <http://lib.qett.in/dom/vanilla.js>

# DOM Library

| Name | Functionality |
|------|--------------|
| **$**    | Element Selector |
| **$forEach** | Executing instructions for all selected elements |
| **xhrRequest** | Perform Ajax GET request |

## $ ( [element] , [index] )

***[element]*** can be selected using the usual css selectors.
* `#id` : For selecting an element using its id. [index] value doesn't matter.
* `.class` : For selecting elements using its class. ***[index]*** is used to select a particular class. ***[index]** is set to 0 by default.*
* `tag` : For selecting elements using its tag name. ***[index]*** is used to select a particular class. ***[index]** is set to 0 by default.*

*If **[element]** left empty, the function returns `document`*

```javascript
let id_element = $('#id01')
$('#id02').addEventListener('click', () => console.log('yolo'))


// Third element with class: classname
let class_element = $('.classname', 2) 

// Can also be used this way
let class_element_again = $('.classname')[2]

// [0] First element with class: classname
$('.classname').addEventListener('click', () => console.log('yolo'))
```
