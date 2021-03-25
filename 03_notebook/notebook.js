let cells = []
let listeners = []

class Cell {
    constructor(cells) {
      if (cells.length) { this.id = cells.length } else { this.id = 0 }
      this.content = 'console.log("Hello World")';
      this.isEditing = true // Substitutes the element and puts a form
      this.template = `
        <form style="padding:1rem 1rem 0rem 0rem">
            <textarea id="`+ this.id +`" name="" rows="4" cols="50" style="text-align:left;">
            `+ this.content +`
            </textarea>
            <br><br>
         </form>
        <button id=add__`+ this.id +` onclick="run(add__`+ this.id +`)">Run</button>
      `
    //   this.click = document.getElementById('add__' + this.id)
    //   .addEventListener('click',function(){
    //       console.log("Testing event listener in: cell " + this.id  )
    //    });
    }

    run(){
        console.log("Cell responding")
        eval(this.content)
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
    element.insertAdjacentHTML('beforebegin', cell.template)
    console.log('cellId is ' + cell.id)
}

function run(cell){
    console.log("Working fine " + cell.id)
    // cells[cell.id].run()
}
  
