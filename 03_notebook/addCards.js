// Manage simple state of the document
idCounter = 0

// Add element with a certain format
function mkContentBlock(id, title, subtitle, content) {
    idCounter += 1
    element = document.getElementById(id)
    template = `
    <div class="mdc-card myCard" id=`+ idCounter +`>
            <div class="">
                <div class="mdc-title">
                    <h1>`+ title +`</h1>
                    <h2>`+ subtitle +`</h2> 
                    <p>`+ content +`</p> 
                </div>
            </div>
        </div>
        
        `
    element.insertAdjacentHTML('afterend', template)
    console.log("Count of elements: " + idCounter)
}

// Remove element using an id
function rmLastElement(id) {
    if(id <= 0){ return alert("There are no elements to erase")}
    else {
        document.getElementById(id).remove();
        idCounter = idCounter - 1
    }
}