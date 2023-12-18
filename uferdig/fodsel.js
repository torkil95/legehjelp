//her må jeg legge inn en array for hver av pasientene. 
const pasient1 = {
    fornavn: "Kari", 
    etternavn: "Nordmann", 
    fodselsnummer: 11223344444,
    alder: 25,
    statsborgerskap: "Norge"
}

const pasient2 = {
    fornavn: "Helene", 
    etternavn: "Helensrud", 
    fodselsnummer: 22222222222,
    alder: 28,
    statsborgerskap: "Norge"
}

const pasient3 = {
    fornavn: "Gro", 
    etternavn: "Rud", 
    fodselsnummer: 33333333333,
    alder: 30,
    statsborgerskap: "Sverige"
}


//aktivere pasient (nå kun til å si noe tekst)
function AktiverPasient() {
    Pasient = document.querySelector("#Pasient").value;
  
    if (Pasient == "Velg Pasient") {
        document.querySelector("#PasientAktiv").innerHTML = "det mangler kjønn";
    }
    if (Pasient == "Pasient #1") {
        document.querySelector("#PasientAktiv").innerHTML = 
        "Valgt pasient: " + Pasient + "<br>" + 
        "Navn: " + pasient1.fornavn + " " + pasient1.etternavn + "<br>" +
        "Fødselsnummer " + pasient1.fodselsnummer + "<br>" +
        "Statsborgerskap " + pasient1.statsborgerskap;
    }
    if (Pasient == "Pasient #2") {
        document.querySelector("#PasientAktiv").innerHTML = 
        "Valgt pasient: " + Pasient + "<br>" + 
        "Navn: " + pasient2.fornavn + " " + pasient2.etternavn + "<br>" +
        "Fødselsnummer " + pasient2.fodselsnummer + "<br>" +
        "Statsborgerskap " + pasient2.statsborgerskap;
    }
    if (Pasient == "Pasient #3") {
        document.querySelector("#PasientAktiv").innerHTML = 
        "Valgt pasient: " + Pasient + "<br>" + 
        "Navn: " + pasient3.fornavn + " " + pasient3.etternavn + "<br>" +
        "Fødselsnummer " + pasient3.fodselsnummer + "<br>" +
        "Statsborgerskap " + pasient3.statsborgerskap;
    }
  }

  //notater
  