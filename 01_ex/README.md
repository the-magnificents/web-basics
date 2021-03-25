# Todo:
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
Events tags and functions


## Step 4 Simple templates
Make a template with some variables (isolated in a function)
```js
function mkContentBlock(head, subhead, body){
    return "<h1>" + head + "</h1><h3>" + subhead + "</h3><p>"  + body + "</p>"
}
```

## Step 5 Templates and objects
Make an object in javascript as an instance with its own state