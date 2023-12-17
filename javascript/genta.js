//vis og gjem menyen
function hideShow() {
  var x = document.getElementById("menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//kalkulator for dosering alfa-model
function kalkulatorALFA() {
  kalk1 = document.querySelector("#kalk1").value;

  if (kalk1 == "--Kjønn--") {
    document.querySelector("#res1").innerHTML = "det mangler kjønn";
  }
  if (kalk1 == "Mann") {
    document.querySelector("#res1").innerHTML = "kjønnet er " + kalk1;
  }
  if (kalk1 == "Kvinne") {
    document.querySelector("#res1").innerHTML = "kjønnet er " + kalk1;
  }
}

//kalkulator for dosering
function kalkulator() {
  KalkulatorKjonn = document.querySelector("#KalkulatorKjonn").value;
  KalkulatorHoyde = document.querySelector("#KalkulatorHoyde").value;
  KalkulatorVekt = document.querySelector("#KalkulatorVekt").value;
  KalkulatorDose = document.querySelector("#KalkulatorDose").value;
  KalkulatorBMI = KalkulatorVekt / ((KalkulatorHoyde/100)*(KalkulatorHoyde/100));

  KalkulatorWomanIBW = 45.4 + 0.89*(KalkulatorHoyde - 152.4);
  KalkulatorAdjBW = KalkulatorWomanIBW + 0.4*(KalkulatorVekt - KalkulatorWomanIBW);

  document.getElementById("resultat").style.display = "inline-block";
  document.querySelector("#res1").innerHTML = "Vektklasse: " + "?";
  document.querySelector("#res2").innerHTML = "BMI: " + KalkulatorBMI.toFixed(2);
  document.querySelector("#res3").innerHTML = "Ideel vekt (IBW): " + KalkulatorWomanIBW.toFixed(2);
  document.querySelector("#res4").innerHTML = "Koorigert vekt (adjBW): " +  KalkulatorAdjBW.toFixed(2);
  document.querySelector("#res5").innerHTML = "Beregnet dose: " + (KalkulatorAdjBW*KalkulatorDose).toFixed(2);
  document.querySelector("#res6").innerHTML = "Anbefalt dose: " + "?" ;
  document.querySelector("#res7").innerHTML = "FOrslag til valg av EcoFlac: " + "?";
}

//Nullstill
function nullstill() {
  document.querySelector("#KalkulatorKjonn").value = "";
  document.querySelector("#KalkulatorHoyde").value = "";
  document.querySelector("#KalkulatorVekt").value = "";
  document.querySelector("#KalkulatorDose").value = "";
}
