## Instruction notes Todo:
- Make a simple form and input some code that will print a result in the console

## Step 1
Write a document empty with the simple id and the template
(Explain what happens here from http or ftp)


## Step 2
Make a function showing how to modify the DOM and the document inside the browser
```js
var list = ["Susan", "Manuel","Ashley","Niket", "Amir", "Maurits"]

for (item = 0; item < list.length; item++) {document.write('<h3>Hello '+ list[item] + '</h3>')};
```
Discuss a bit what is going here

## Step 3 Reusing the function in HTML documents
Events tags and functions, see how they are handled, show simple examples.


## Step 4 Simple templates
Make a template with some variables (isolated in a function) Explain how to alter the dom and what does that mean.
```js
function mkContentBlock(title, subtitle, content){
    return "<h1>" + title +  "</h1><h3>" + subtitle +  "</h3><p>"  + content +  "</p>"
}
```