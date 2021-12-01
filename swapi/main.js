const getResidentsBtn = document.querySelector('button');


const residentsCallback = (obj)=>{
    console.log(obj)
    console.log(obj.results[0].residents)
    obj.results[0].residents.forEach(resident => {
        console.log(resident)
        axios
        .get(`${resident}`).then((res) => {residentThenCallback(res.data)})
    });
 }


 const residentThenCallback = (data)=>{
    const nameH2 = document.createElement('h2')
    nameH2.textContent = `${data.name}`
    const htmlDocu = document.querySelector("html")
    htmlDocu.appendChild(nameH2)
 }


const clicked = ()=>{
    // alert("clicked")
    axios
        .get('https://swapi.dev/api/planets/?search=alderaan')
        .then((res)=> residentsCallback(res.data))
        .catch
}

getResidentsBtn.addEventListener("click", clicked)
