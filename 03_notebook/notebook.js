let cells = [];
let listeners = [];

class Cell {
    constructor(cells) {
      if (cells.length) { this.id = cells.length } else { this.id = 0 }
      this.content = '';
      this.isEditing = true // Substitutes the element and puts a form
      this.template = `
      <div id="cell__`+ this.id +`">
        <form style="padding:1rem 1rem 0rem 0rem">
            <textarea 
                class="code"
                id="cell__text__`+ this.id +`" 
                name="" rows="4" cols="50" 
                style="width:100%;align-content:center; overflow:auto;">
            `+ this.content +`
            </textarea>
            <br><br>
         </form>
        <button class="mdc-button mdc-button--outlined"
            onclick="run(cell__text__`+ this.id +`)"
        >
            Run
        </button>
        <button class="mdc-button mdc-button--outlined"
            onclick="removeCell('cell__`+ this.id + `')"
        >
            Delete
        </button>
        <p></p>
        </div>
        `
    }
  }

function addCell(elementId){
    cell = new Cell(cells);
    cells.push(cell);
    element = document.getElementById(elementId)
    element.insertAdjacentHTML('beforebegin', cell.template);
    console.log('cellId is ' + cell.id);
}

function run(cell){
    console.log("Working fine " + cell.id);
    let code = document.getElementById(cell.id).value;
    eval(code)
}

function removeCell(id){
    let cell_element = document.getElementById(id)
    cell_element.remove()
}
  
