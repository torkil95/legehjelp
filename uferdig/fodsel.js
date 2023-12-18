//dagens dato
var now = new Date();
var datetime = now.toLocaleString();
document.getElementById("datetime").innerHTML = datetime;

//her må jeg legge inn en array for hver av pasientene. 
const pasient1 = {
    fornavn: "Kari", 
    etternavn: "Nordmann", 
    fodselsnummerMor: 11223344444,
    sivilstatus: "gift",
    alder: 25,
    statsborgerskapMor: "Norge"
}

const pasient2 = {
    fornavn: "Helene", 
    etternavn: "Helensrud", 
    //fodselsnummerMor: 11223344444,
    sivilstatus: "samboer",
    alder: 28,
    statsborgerskapMor: "Norge"
}

const pasient3 = {
    fornavn: "Gro", 
    etternavn: "Rud", 
    fodselsnummerMor: 33333333333,
    alder: 30,
    statsborgerskapMor: "Sverige"
}

//aktivere pasient 
function AktiverPasient() {
    Pasient = document.querySelector("#Pasient").value;
  
    if (Pasient == "Velg Pasient") {
        document.querySelector("#PasientAktiv").innerHTML = "det mangler kjønn";
    }
    if (Pasient != "Velg Pasient") {
        //velg hvilken pasient som er aktiv og sett variabelen "PasientAktiv".
        if (Pasient == "Pasient #1") {
            PasientAktiv = pasient1;
        }
        else if (Pasient == "Pasient #2") {
            PasientAktiv = pasient2;
        }
        else if (Pasient == "Pasient #3") {
            PasientAktiv = pasient3;
        }

        //Vis pasientinformasjon under "aktiv pasient"
        document.querySelector("#PasientAktiv").innerHTML = 
        "<b>Valgt pasient: </b>" + Pasient + "<br>" + 
        "<b>Navn: </b>" + PasientAktiv.fornavn + " " + PasientAktiv.etternavn + "<br>" +
        "<b>Fødselsnummer: </b>" + PasientAktiv.fodselsnummerMor + "<br>" +
        "<b>Statsborgerskap: </b>" + PasientAktiv.statsborgerskapMor;

        //LEGG INN INFO I SKJEMA
        //Fodselsnummer mor
        if (PasientAktiv.fodselsnummerMor == "" || PasientAktiv.fodselsnummerMor === undefined) {
            document.querySelector("#FødselsnummerMor").style.borderColor = "red";
            document.querySelector("#FødselsnummerMor").style.background = "white";
        }
        else {
            document.querySelector("#FødselsnummerMor").value = PasientAktiv.fodselsnummerMor;
            document.querySelector("#FødselsnummerMor").style.borderColor = "black";
            document.querySelector("#FødselsnummerMor").style.background = "#e8f0fe";
        }

        //Sivilstatus mor
        if (PasientAktiv.sivilstatus == "" || PasientAktiv.sivilstatus === undefined) {
            //document.querySelector("#Sivilstatus").style.borderColor = "red";
            //document.querySelector("#Sivilstatus").style.background = "white";
        }
        else if (PasientAktiv.sivilstatus == "gift") {
            document.querySelector("#SivilstatusGift").checked = true;
        }
        else if (PasientAktiv.sivilstatus == "samboer") {
            document.querySelector("#SivilstatusSamboer").checked = true;
        }


        //Statsborgerskap mor
        if (PasientAktiv.statsborgerskapMor == "" || PasientAktiv.statsborgerskapMor === undefined) {
            document.querySelector("#StatsborgerskapMor").style.borderColor = "red";
            document.querySelector("#StatsborgerskapMor").style.background = "white";
        }
        else {
            document.querySelector("#StatsborgerskapMor").value = PasientAktiv.statsborgerskapMor;
            document.querySelector("#StatsborgerskapMor").style.borderColor = "black";
            document.querySelector("#StatsborgerskapMor").style.background = "#e8f0fe";
        }
    }
  }

  //notater