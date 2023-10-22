window.onload = display;

async function display() {
    let response = await fetch("http://localhost:5000/students");
    let json;
    if (response.ok) {
        json = await response.json();
        console.log(json);
        addOptionToDropdown();
        for (let e of json) {
            addRowToTable(e.id, e.name, e.program)
            addOptionStudentIdRemove(e.id);
            addOptionStudentIdUpdate(e.id)
        }
    }
    else alert("Error" + response.status);

}

function addRowToTable(id, name, program) {
    let row = document.createElement('tr');
    row.setAttribute("id", id);
    for (let e of arguments) {
        let cell = document.createElement('td');
        cell.appendChild(document.createTextNode(e));
        row.appendChild(cell);
    }
    document.getElementById('tbodyStudentList').appendChild(row);

}

async function addStudent(id, name, program) {
    let obj = { id, name, program };
    let setting = {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch("http://localhost:5000/students", setting);
    if (response.ok) {
        addRowToTable(id, name, program);
        addOptionStudentIdRemove(id);
        addOptionStudentIdUpdate(id);
    } else alert("Error " + response.status);

}

document.getElementById('btnRegister').addEventListener("click", () => {
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let program = document.getElementById('program').value;
    addStudent(id, name, program);
    document.getElementById('myform').reset()
});

//show student id list remove in dropdown
function addOptionStudentIdRemove(id) {
    let option = document.createElement('option');
    option.setAttribute("value", id);
    option.appendChild(document.createTextNode(id));
    document.getElementById('ddlStudent').appendChild(option);
}

//remove student in dropdown
document.getElementById('btnDelete').addEventListener("click", () => {
    let id = document.getElementById('ddlStudent').value;
    removeStudent(id);
});

async function removeStudent(id) {
    let setting = {
        method: "DELETE"
    }
    let response = await fetch("http://localhost:5000/students/" + id, setting);
    if (response.ok) {
        document.getElementById(id).remove();
        alert("Deleted Successfully");
        removeOptionStudentIdUpdate(id);
    } else alert("Error " + response.status);
    let element = document.querySelectorAll("option[value='" + id + "']")[0];
    element.remove();
}

//update student

document.getElementById('btnUpdate').addEventListener('click', () =>{
    let id = document.getElementById('idForUpdate').value;
    let name = document.getElementById('nameForUpdate').value;
    let program = document.getElementById('programForUpdate').value;
    if (id == "" || name == "" || program == "") {
        alert("Please fill all the fields");
        return;
    }
    let optionValues = document.getElementById('ddlStudentForUpdate');
    for(let e of optionValues){
        if(e.value == id) {
            updateStudent(id, name, program);
            document.getElementById('myform').reset()
            return;
        }
    }
    alert("Please select student id from dropdown or input valid id");
});

async function updateStudent(id, name, program) {
    let obj = { id, name, program };
    console.log(id, name, program);
    let setting = {
        method: "PUT",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch("http://localhost:5000/students/" + id + '?name=' + name +'&program=' + program, setting);
    if (response.ok) {
        document.getElementById(id).childNodes[1].innerHTML = name;
        document.getElementById(id).childNodes[2].innerHTML = program;
        alert("Updated Successfully");
    } else alert("Error " + response.status);

}

//show list id in dropdown for remove and update


document.getElementById('ddlStudentForUpdate').addEventListener("click", () => {
    let id = document.getElementById('ddlStudentForUpdate').value;
    console.log(id);
    if (id != "") getStudent(id);
});

async function getStudent(id) { 
    let response = await fetch("http://localhost:5000/students/" + id);
    let json;
    if (response.ok){
        json = await response.json();
        console.log(json);
        document.getElementById('idForUpdate').value = json.id;
        document.getElementById('nameForUpdate').value = json.name;
        document.getElementById('programForUpdate').value = json.program;
    }
}


function addOptionToDropdown(){
    let option = document.createElement('option');
    option.setAttribute("value", "");
    option.appendChild(document.createTextNode("Select Student Id"));
    document.getElementById('ddlStudentForUpdate').appendChild(option);
}
function addOptionStudentIdUpdate(id) {
    let option = document.createElement('option');
    option.setAttribute("value", id);
    option.appendChild(document.createTextNode(id));
    document.getElementById('ddlStudentForUpdate').appendChild(option);
}

//function to remove dropdown list from id
function removeOptionStudentIdUpdate(id) {
    let element = document.querySelectorAll("option[value='" + id + "']")[0];
    element.remove();
}


