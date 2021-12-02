const getResidentsBtn = document.querySelector("button");

const residentsCallback = (res) => {
  res.data.results[0].residents.forEach((resident) => {
    axios
    .get(`${resident}`)
    .then(residentThenCallback);
  });
};

const residentThenCallback = (res) => {
  const nameH2 = document.createElement("h2");
  nameH2.textContent = `${res.data.name}`;
  const htmlDocu = document.querySelector("html");
  htmlDocu.appendChild(nameH2);
};

const getResidents = () => {
  axios
    .get("https://swapi.dev/api/planets/?search=alderaan")
    .then(residentsCallback);
};

getResidentsBtn.addEventListener("click", getResidents);
