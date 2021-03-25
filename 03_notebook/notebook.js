var cells = []

class Cell {
    constructor(cells) {
      if (cells.length) { this.id = cells.length + 1 } else { this.id = 0 }
      this.content = 'console.log("Hello World")';
      this.isEditing = true // Substitutes the element and puts a form
      this.template = `
        <form >
            <textarea id="`+ this.id +`" name="" rows="4" cols="50" style="text-align:left;">
            `+ this.content +`
            </textarea>
            <br><br>
         </form>
        <button onclick="console.log('HelloWorld')">Add</button>
        <button id=add__`+ this.id +`>Run</button>
      `
    }

    run(){
        let cell = document.getElementById(this.id)
        console.log(cell)
        // eval(this.content)
    }

    setId(id){
        this.id = id
    }
  }

// function makeCellTemplate(cell=""){
    
// }

function addCell(elementId){
    cell = new Cell(cells)
    cells.push(cell)
    element = document.getElementById(elementId)
    element.insertAdjacentHTML('afterend', cell.template)
    cellId = cells.length
    cell.setId(cellId)
    document.addEventListener('click',function(e){
        if(e.target.id == 'add__' + cellId){
              console.log("Testing event listener")
         }
     });
}

function run(cellId){
    cells[cellId].run()
}
  
