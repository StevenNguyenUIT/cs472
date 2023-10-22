window.onload = display;

async function display() {
    let response = await fetch("http://localhost:5000/students");
    let json;
    if (response.ok) {
        json = await response.json();
        console.log(json);
        for (let e of json) {
            addRowToTable(e.id, e.name, e.program)
            addStudentIdRemove(e.id);
            addStudentIdUpdate(e.id)
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
function addStudentIdRemove(id) {
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
    } else alert("Error " + response.status);
    let element = document.querySelectorAll("option[value='" + id + "']")[0];
    element.remove();
}

//update student

function addStudentIdUpdate(id) {
    let option = document.createElement('option');
    option.setAttribute("value", id);
    option.appendChild(document.createTextNode(id));
    document.getElementById('ddlStudentForUpdate').appendChild(option);
}

document.getElementById('btnUpdate').addEventListener("click", () => {
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let program = document.getElementById('program').value;
    updateStudent(id, name, program);
});

async function updateStudent(id, name, program) {
    let obj = { id, name, program };
    let setting = {
        method: "PUT",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch("http://localhost:5000/students/" + id, setting);
    if (response.ok) {
        document.getElementById(id).remove();
        addRowToTable(id, name, program);
    } else alert("Error " + response.status);

    let element = document.querySelectorAll("option[value='" + id + "']")[0];
    element.remove();
    addStudentIdRemove(id);
    addStudentIdUpdate(id);
}