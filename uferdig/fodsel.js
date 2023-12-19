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
    statsborgerskapMor: "Sverige",
    ukjentfar: true
}

//aktivere pasient 
//*uferdig*****
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
        if (PasientAktiv.fodselsnummerMor !== "" && PasientAktiv.fodselsnummerMor !== undefined) {
            document.querySelector("#FodselsnummerMor").value = PasientAktiv.fodselsnummerMor;
            document.querySelector("#FodselsnummerMor").style.borderColor = "black";
            document.querySelector("#FodselsnummerMor").style.background = "#e8f0fe";
        }
        //Sivilstatus mor
        if (PasientAktiv.sivilstatus == "gift") {
            document.querySelector('input[type="radio"][name="sivilstatus"][value="gift"]').checked = true;
        }
        else if (PasientAktiv.sivilstatus == "samboer") {
            document.querySelector('input[type="radio"][name="sivilstatus"][value="samboer"]').checked = true;
        }
        //Statsborgerskap mor
        if (PasientAktiv.statsborgerskapMor != "" && PasientAktiv.statsborgerskapMor !== undefined) {
            document.querySelector("#StatsborgerskapMor").value = PasientAktiv.statsborgerskapMor;
            document.querySelector("#StatsborgerskapMor").style.borderColor = "black";
            document.querySelector("#StatsborgerskapMor").style.background = "#e8f0fe";
        }
        //Ukjent far/medmor
        if (PasientAktiv.ukjentfar === true) {
            document.querySelector('input[type="radio"][name="ukjentfar"]').checked = true;
        }
        //Fodselsnummer far
        if (PasientAktiv.fodselsnummerFar != "" && PasientAktiv.fodselsnummerFar !== undefined) {
            document.querySelector("#FodselsnummerFar").value = PasientAktiv.fodselsnummerFar;
            document.querySelector("#FodselsnummerFar").style.borderColor = "black";
            document.querySelector("#FodselsnummerFar").style.background = "#e8f0fe";
        }
        //Statsborgerskap far
        if (PasientAktiv.statsborgerskapFar != "" && PasientAktiv.statsborgerskapFar !== undefined) {
            document.querySelector("#StatsborgerskapFar").value = PasientAktiv.statsborgerskapFar;
            document.querySelector("#StatsborgerskapFar").style.borderColor = "black";
            document.querySelector("#StatsborgerskapFar").style.background = "#e8f0fe";
        }
        //Født på sykehus?
        if (PasientAktiv.sykehus == "ja") {
            document.querySelector('input[type="radio"][name="sykehus"][value="ja"]').checked = true;
        }
        else if (PasientAktiv.sykehus == "nei") {
            document.querySelector('input[type="radio"][name="sykehus"][value="nei"]').checked = true;
        }
        //instutisjon
        if (PasientAktiv.institusjon != "" && PasientAktiv.institusjon !== undefined) {
            document.querySelector("#Institusjon").value = PasientAktiv.institusjon;
            document.querySelector("#Institusjon").style.borderColor = "black";
            document.querySelector("#Institusjon").style.background = "#e8f0fe";
        }
    }
    
  }

function Neste() {
    //sjekk at alle felt er fylt inn
    if (document.querySelector("#Enkelflerfodsel").value == "" || document.querySelector("#Enkelflerfodsel").value === undefined) { 
        document.querySelector("#Enkelflerfodsel").style.borderColor = "red";
        document.querySelector("#Enkelflerfodsel").style.background = "white";
    }
    if (document.querySelector("#Hnummer").value == "" || document.querySelector("#Hnummer").value === undefined) { 
        document.querySelector("#Hnummer").style.borderColor = "red";
        document.querySelector("#Hnummer").style.background = "white";
    }
    if (document.querySelector("#Fodt").value == "" || document.querySelector("#Fodt").value === undefined) { 
        document.querySelector("#Fodt").style.borderColor = "red";
        document.querySelector("#Fodt").style.background = "white";
    }
    if (document.querySelector("#FodselsnummerMor").value == "" || document.querySelector("#FodselsnummerMor").value === undefined) { 
        document.querySelector("#FodselsnummerMor").style.borderColor = "red";
        document.querySelector("#FodselsnummerMor").style.background = "white";
    }
    if (document.querySelector("#StatsborgerskapMor").value == "" || document.querySelector("#StatsborgerskapMor").value === undefined) { 
        document.querySelector("#StatsborgerskapMor").style.borderColor = "red";
        document.querySelector("#StatsborgerskapMor").style.background = "white";
    }
    if (document.querySelector("#FodselsnummerFar").value == "" || document.querySelector("#FodselsnummerFar").value === undefined) { 
        document.querySelector("#FodselsnummerFar").style.borderColor = "red";
        document.querySelector("#FodselsnummerFar").style.background = "white";
    }
    if (document.querySelector("#StatsborgerskapFar").value == "" || document.querySelector("#StatsborgerskapFar").value === undefined) { 
        document.querySelector("#StatsborgerskapFar").style.borderColor = "red";
        document.querySelector("#StatsborgerskapFar").style.background = "white";
    }
    if (document.querySelector("#Institusjon").value == "" || document.querySelector("#Institusjon").value === undefined) { 
        document.querySelector("#Institusjon").style.borderColor = "red";
        document.querySelector("#Institusjon").style.background = "white";
    }

    var radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function(radioButton) {
        var text = radioButton.parentElement;
        if (!radioButton.checked) {
            text.style.color = 'red';
          } else {
            text.style.color = '';
          }
      });

    //Sjekk at skjema blir fyllt ut fullt.
    var radioKjonn = document.getElementsByName("kjonn");
    var radioLiv = document.getElementsByName("liv");
    var radioSivilstatus = document.getElementsByName("sivilstatus");
    var radioFar = document.getElementsByName("far");
    var radioSykehus = document.getElementsByName("sykehus");
    var radioChecked = 
        isRadioGroupChecked(radioKjonn) &&
        isRadioGroupChecked(radioLiv) &&
        isRadioGroupChecked(radioSivilstatus) &&
        isRadioGroupChecked(radioSykehus);
    
    function isRadioGroupChecked(group) {
        // Check if at least one radio button in the group is checked
        for (var i = 0; i < group.length; i++) {
          if (group[i].checked) {
            return true;
          }
        }
        return false;
      }
    
    if (document.querySelector("#Enkelflerfodsel").value != "" && document.querySelector("#Fodt").value != "" && document.querySelector("#FodselsnummerMor").value != "" && document.querySelector("#StatsborgerskapMor").value != "" && document.querySelector("#FodselsnummerFar").value != "" && document.querySelector("#StatsborgerskapFar").value != "" && document.querySelector("#Institusjon").value != "" && radioChecked) {
        //bekreftelse på utfylt skjema
        document.querySelector("#Form").innerHTML = 
        "<h2> OPPSUMMERING AV PASIENT </h2>" + 
        "<p style='color:grey'>Sendt inn: " + datetime + "</p><br>" +
        "<b> Enkel-/flerfødsel: </b>" + document.querySelector("#Enkelflerfodsel").value + "<br><br>" +
        "<h3> BARN 1 </h3>" +
        "<b> H-nummer: </b>" + document.querySelector("#Hnummer").value + "<br>" + 
        "<b> Født: </b>" + document.querySelector("#Fodt").value + "<br>" +
        "<b> Kjønn: </b>" + document.querySelector('input[type="radio"][name="kjonn"]:checked').value + "<br>" +
        "<b> Barnet var: </b>" + document.querySelector('input[type="radio"][name="liv"]:checked').value + "<br><br>" +
        "<h3> BARNETS MOR </h3>" +
        "<b> Fødselsnummer: </b>" + document.querySelector("#FodselsnummerMor").value + "<br>" +
        "<b> Sivilstatus: </b>" + document.querySelector('input[type="radio"][name="sivilstatus"]:checked').value + "<br>" +
        "<b> Statsborgerskap: </b>" + document.querySelector("#StatsborgerskapMor").value + "<br><br>" +
        "<h3> BARNETS FAR/MEDMOR </h3>" +
        "<b> Ukjent far/medmor?: </b>" + document.querySelector('input[type="radio"][name="ukjentfar"]:checked').value + "kjent <br>" +
        "<b> Fødselsnummer: </b>" + document.querySelector("#FodselsnummerFar").value + "<br>" +
        "<b> Statsborgerskap: </b>" + document.querySelector("#FodselsnummerFar").value + "<br><br>" + 
        "<h3> FØDESTED </h3>" +
        "<b> Født på sykehus/fødestue: </b>" + document.querySelector('input[type="radio"][name="sykehus"]:checked').value + "<br>" +
        "<b> Institusjon: </b>" + document.querySelector("#Institusjon").value + "<br>";
    }
}

function Avbryt() {
    document.querySelector("#Enkelflerfodsel").value = "";
    document.querySelector("#Hnummer").value = "";
    document.querySelector("#Fodt").value = "";
    document.querySelector("#FodselsnummerMor").value = "";
    document.querySelector("#StatsborgerskapMor").value = "";
    document.querySelector("#FodselsnummerFar").value = "";
    document.querySelector("#StatsborgerskapFar").value = "";
    document.querySelector("#Institusjon").value = "";
    
    var radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach(function(radioInput) {
        radioInput.checked = false;
    });
}

//planen er å: 
//- under neste funk. så blir radio knapper røde unødvendig, fiks dette. 