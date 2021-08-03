let rows = document.querySelector("#rows");
let cols = document.querySelector("#columns");
let create = document.querySelector("#tableFields");
let container = document.querySelector("#container");
let button = document.querySelector('#makepdf');
let col = 0;
let row = 0;
let save = document.querySelector('#save');
let dpt = document.querySelector('#department');
let dpt_field = document.querySelector('#department_field');

create.addEventListener('click', (e) => {
    container.innerHTML = "";
    col = cols.value;
    row = rows.value;
    let table = document.createElement('table');
    let department = document.createElement('input');
    let author = document.createElement('input');
    author.id = 'auth';
    author.type = 'text';
    department.type = 'text';
    department.id = 'dptval';

    for (let i=0; i<row; i++){
        let rw = document.createElement('tr');
        rw.id = i+ "a";
        for (let j=0; j<col; j++){
            let cl = document.createElement('td');
            let inp = document.createElement('input');
            inp.classList.add('shift')
            inp.type = 'text';
            cl.appendChild(inp);
            inp.id = j;
            rw.appendChild(cl);
        }
        table.appendChild(rw);
    }
    container.appendChild(table);
    dpt_field.innerHTML = 'Department: ';
    dpt_field.appendChild(department);
    dpt_field.innerHTML += '<br/>';
    dpt_field.innerHTML += 'Author   : ';
    dpt_field.appendChild(author);

    button.style.display = 'block';
})

button.addEventListener('click', () => {
    let dptval = document.querySelector('#dptval').value;
    let table = document.createElement('table');
    let fields = document.querySelectorAll("#container table input");
    let auth = document.querySelector('#auth').value;
    console.log(auth);
    let autheur = document.querySelector('#author');
    autheur.innerHTML += auth;
    autheur.style.display = 'block';
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
            if (i==0){
                cl.style.fontWeight = 'bold';
            }
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
    dpt.innerHTML += " " + dptval;
    dpt_field.style.display = 'none';
    
})

save.addEventListener('click', () => {
    save.style.display = 'none';
    window.print();
})
