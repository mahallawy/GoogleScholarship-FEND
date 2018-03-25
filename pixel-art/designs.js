
const button = document.querySelector('#submitButton');
const table = document.querySelector('table');


// Function to determine width & height for the table as per user input
button.addEventListener('click', function (makeGrid) {
  let width = document.querySelector('#inputWidth').value;
  let height = document.querySelector('#inputHeight').value;
    //For statement to draw the table from the entered data
    for (let n = 0; n < height; n++) {

      const cellwidth = document.createElement('tr');
      table.appendChild(cellwidth);
        for (let m = 0; m < width; m++) {
          const cellheight = document.createElement('td');
            cellwidth.appendChild(cellheight);
          }
    }
});

//This function required to prevent to reload after clicking submit
button.addEventListener('click', function (evt) {
    evt.preventDefault();
});


//Color picker & Draw in the cell
table.addEventListener("click", function(e) {
  if (e.target && e.target.nodeName == "TD") {
    let colorCode = document.querySelector('#colorPicker').value;
    this.style.backgroundColor = colorCode;
  }
});

//Double Click to remove the color
table.addEventListener("dblclick", function(e) {
  if (e.target && e.target.nodeName == "TD") {
    this.style.backgroundColor = 'white';
  }
});
