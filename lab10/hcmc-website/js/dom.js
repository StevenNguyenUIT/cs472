//load for all pages
window.onload = (event) => {
    document.getElementById("formSubmit").addEventListener("submit", function (e) {
        e.preventDefault();
    });
    
    //add patient event
    document.getElementById("btnRegisterPatient").addEventListener("click",addPatient);
    
    //filter show elderly Patients only
    document.getElementById("chkElderlyPatients").addEventListener("click", function (e){
        let rowDatas = document.getElementsByClassName("rowData");
        let checkedOutPatient = document.getElementById("chkShowOutPatients").checked;
        showTable(rowDatas, e.target.checked, checkedOutPatient);
    })

    //filter show Out-Patients only
    document.getElementById("chkShowOutPatients").addEventListener("click", function (e){
        let rowDatas = document.getElementsByClassName("rowData");
        let checkedElder = document.getElementById("chkElderlyPatients").checked;
        showTable(rowDatas, checkedElder, e.target.checked);
    })
};

//display table when filter show elderly Patients or Out-Patients
function showTable(rowDatas, checkedElder, checkedOutPatient){
    let currentYear = new Date().getFullYear();

    //iterate each row to filter data
    for(let row of rowDatas){
        let isOutPatient = row.childNodes[6].innerHTML;
        let patientYear = row.childNodes[4].innerHTML.split("-")[0];
        let age = currentYear - patientYear;

        if(checkedElder && checkedOutPatient && (age < 65 || isOutPatient === "No")){
        // Case Both Elder and Out-Patients was Check then no Elderly or no Out-Patients => Hidden.
            row.setAttribute("hidden",true);
            // row.setAttribute("class","rowData d-none");
        }  else if(checkedElder && !checkedOutPatient){
            // Case only Elderly Patient was checked.
            (age < 65)?row.setAttribute("hidden", true):row.removeAttribute("hidden");
            // (age < 65)?row.setAttribute("class","rowData d-none"):row.setAttribute("class","rowData");
        } else if(!checkedElder && checkedOutPatient){ 
            // Case only Out-Patient was checked.
            (isOutPatient === "No")? row.setAttribute("hidden", true): row.removeAttribute("hidden");
            // (isOutPatient === "No")?row.setAttribute("class","rowData d-none"):row.setAttribute("class","rowData");
        } else {
            // Case both was unchecked
            row.removeAttribute("hidden");
            // row.setAttribute("class","rowData");
        }
    }
  }

//get value from submit then call addNewPatient function
function addPatient(){
    let patientId = document.getElementById("patientIdNumber").value;
    let firstName = document.getElementById("firstName").value;
    let middleInitials = document.getElementById("middleInitials").value;
    let lastName = document.getElementById("lastName").value;
    let dateOfBirth = document.getElementById("dateOfBirth").value;
    let ddlDepartment = document.getElementById("ddlDepartment").value;
    let radioIsOutPatientYes = document.getElementById("radioIsOutPatientYes").checked;
    let tbodyPatientsList = document.getElementById("tbodyPatientsList");
    // let arr = [patientId, firstName, middleInitials, lastName, dateOfBirth, ddlDepartment, radioIsOutPatientYes, tbodyPatientsList]
    // console.log(arr);
    let radioIsOutPatient = radioIsOutPatientYes?"Yes" : "No";

    //validate the input before add new row
    if(!patientId || !firstName || !lastName || !dateOfBirth || !ddlDepartment || !radioIsOutPatient) return;
    addNewPatient(patientId, firstName, middleInitials, lastName, dateOfBirth, ddlDepartment, radioIsOutPatient, tbodyPatientsList);
}

//function to addNewPatient
function addNewPatient(patientId, firstName, middleInitials, lastName, dateOfBirth, ddlDepartment, radioIsOutPatient, tbodyPatientsList){
    
    //create row 
    let newRow = document.createElement("tr");
    newRow.setAttribute("class", "rowData");

    //create new col
    let patientIdCol = document.createElement("td");
    let firstNameCol = document.createElement("td");
    let middleInitialsCol = document.createElement("td");
    let lastNameCol = document.createElement("td");
    let dateOfBirthCol = document.createElement("td");
    let ddlDepartmentCol = document.createElement("td");
    let radioIsOutPatientCol = document.createElement("td");

    //add data for each col
    patientIdCol.innerHTML = patientId;
    firstNameCol.innerHTML = firstName;
    middleInitialsCol.innerHTML = middleInitials;
    lastNameCol.innerHTML = lastName;
    dateOfBirthCol.innerHTML = dateOfBirth;
    ddlDepartmentCol.innerHTML = ddlDepartment;
    radioIsOutPatientCol.innerHTML = radioIsOutPatient;

    //add all cols for row
    newRow.appendChild(patientIdCol);
    newRow.appendChild(firstNameCol);
    newRow.appendChild(middleInitialsCol);
    newRow.appendChild(lastNameCol);
    newRow.appendChild(dateOfBirthCol);
    newRow.appendChild(ddlDepartmentCol);
    newRow.appendChild(radioIsOutPatientCol);

    //add row into table
    tbodyPatientsList.appendChild(newRow);
}
  