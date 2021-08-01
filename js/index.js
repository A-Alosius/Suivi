let rows = document.querySelector("#rows");
let cols = document.querySelector("#columns");
let create = document.querySelector("#tableFields");
let container = document.querySelector("#container");
let button = document.querySelector('#makepdf');
let col = 0;
let row = 0;
let save = document.querySelector('#save');
create.addEventListener('click', (e) => {
    container.innerHTML = "";
    col = cols.value;
    row = rows.value;
    let table = document.createElement('table');

    for (let i=0; i<row; i++){
        let rw = document.createElement('tr');
        rw.id = i+ "a";
        for (let j=0; j<col; j++){
            let cl = document.createElement('td');
            let inp = document.createElement('input');
            inp.type = 'text';
            cl.appendChild(inp);
            inp.id = j;
            rw.appendChild(cl);
        }
        table.appendChild(rw);
    }
    container.appendChild(table);
    button.style.display = 'block';
})

button.addEventListener('click', () => {
    let table = document.createElement('table');
    let fields = document.querySelectorAll("#container table input");
    Array.from(fields);
    console.log(fields);
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < row){
        let rw = document.createElement('tr');
        j = 0;
        while (j < col){
            let cl = document.createElement('td');
            cl.innerHTML = fields[k].value;
            j++;
            k++;
            rw.appendChild(cl);
        }
        i++;
        table.appendChild(rw);
    }
    container.innerHTML = "";
    container.appendChild(table);
    button.style.display = 'none';
    save.style.display = 'block';
})

save.addEventListener('click', () => {
    window.print();
})