async function doAPICall(){
    let year = document.querySelector(".year").value
    let round = document.querySelector(".round").value


    result = await axios.get(`https://ergast.com/api/f1/${year}/${round}/driverStandings.json`)
        .catch((e)=>{console.error(e)
            alert("Bad year or round")})
                .finally(console.log("API request is Over"));
    console.log(result);
    console.log(result.data);
    
    result = result.data;

    ds = result.MRData.StandingsTable.StandingsLists[0].DriverStandings
    console.log(ds)


    for (let d of ds){
        console.log(d)

        tbody = document.getElementsByTagName('tbody')[0];

        tr = document.createElement('tr');
        tbody.appendChild(tr);

        td = document.createElement('td');
        td.innerText = d.Driver.givenName;
        tr.appendChild(td)

        td = document.createElement('td');
        td.innerText = d.Driver.familyName;
        tr.appendChild(td)

        td = document.createElement('td');
        td.innerText = d.Driver.dateOfBirth;
        tr.appendChild(td)

        td = document.createElement('td');
        td.innerText = d.position;
        tr.appendChild(td)

        td = document.createElement('td');
        td.innerText = d.wins;
        tr.appendChild(td)

        td = document.createElement('td');
        td.innerText = d.points;
        tr.appendChild(td)

        td = document.createElement('td');
        td.innerText = d.Driver.nationality;
        tr.appendChild(td)

        td = document.createElement('td');
        td.innerText = d.Constructors[0].name;
        tr.appendChild(td)

        
    };
};
