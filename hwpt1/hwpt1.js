addDriverYearField()
addSubmitButton()
createTable()
addDriverRoundField


function addDriverYearField(){
    input=document.createElement('input');
    input.placeholder="Enter a yearhere";
    input.name="year";
    input.classList.add("form-control");
    document.body.appendChild(input);
}

function addDriverRoundField(){
    inputR = document.createElement('input');
    inputR.placeholder="Enter round";
    inputR.name = "round";
    inputR.classList.add("form-control");
    document.body.appendChild(inputR);
}

function handleSubmit(event){
    event.stopPropagation(); 
    event.preventDefault();
    console.log(document.getElementsByName('year')[0].value, document.getElementsByName('round')[0].value);
    doAPICall(document.getElementsByName('year')[0].value, document.getElementsByName('round')[0].value);
}

function addSubmitButton(){
    button=document.createElement("button");
    document.body.appendChild(button);
    button.innerText="Submit";
    button.classList.add('btn', 'btn-primary', "form-control");
    button.addEventListener('click', (event)=>handleSubmit(event));
}



function createTable(){
    table = document.createElement("table");
    table.classList.add("table", "table-striped");
    document.body.appendChild(table);

    thead = document.createElement("thead");
    table.appendChild(thead)

    tr = document.createElement('tr');
    thead.appendChild(tr);

    th = document.createElement('th');
    th. innerText="First Name: ";
    th.scope="col";
    tr.appendChild(th);

    th = document.createElement('th');
    th. innerText="Last Name: ";
    th.scope="col";
    tr.appendChild(th);

    th = document.createElement('th');
    th. innerText="DOB: ";
    th.scope="col";
    tr.appendChild(th);

    th = document.createElement('th');
    th. innerText="Position: ";
    th.scope="col";
    tr.appendChild(th);
    
    th = document.createElement('th');
    th. innerText="Wins: ";
    th.scope="col";
    tr.appendChild(th);

    th = document.createElement('th');
    th. innerText="Nationality: ";
    th.scope="col";
    tr.appendChild(th);

    th = document.createElement('th');
    th. innerText="Constructor: ";
    th.scope="col";
    tr.appendChild(th);


    tbody = document.createElement('tbody');
    table.appendChild(tbody)
}
async function doAPICall(year,round){
    let result = await axios.get(`https://ergast.com/api/f1/${year}/${round}/driverStandings.json`);
    console.log(result);
    data=result.data
    console.log(result.MRData.StandingsTable.season)
    f1Drivers = data.MRData.StandingsTable.StandingsLIsts[0].DriverStandings;
    console.log(result)

    for (let driver of f1Drivers){
        console.log(driver) 

        let tbody=document.getElementsByTagName('tbody')[0];

        let tr = document.createElement('tr')
        tbody.appendChild(tr); 
        
        th= document.createElement('th');
        th.scope="row";
        th.innterText = driver.Driver.givenName;
        tr.appendChild(th)

        td1 = document.createElement('td');
        td1.innerText = driver.Driver.familyName;
        tr.appendChild(td1);

        td2 = document.createElement('td');
        td2.innerText = driver.position;
        tr.appendChild(td2);

        td3 = document.createElement('td');
        td3.innerText= driver.wins;
        tr.appendChild(td3); 

        td4= document.createElement('td');
        td4.innerText= driver.Driver.dateOfBirth;
        tr.appendChild(td4)

        td5 = document.createElement('td');
        td5.innerText= driver.Driver.nationality; 
        tr.appendChild(td5)

        td6 = document.createElement('td')
        td6.innerText = driver.Constructors[0].name;
        tr.appendChild(td6);

    }
}


