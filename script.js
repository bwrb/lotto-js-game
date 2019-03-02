window.onload = function() {
  start();
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var arr = [];
function sprawdz(x) {
  var element = "lit" + x;

  arr.push(x);

  /*
 document.getElementById("wygra1").innerHTML = arr[0];
 document.getElementById("wygra2").innerHTML = arr[1];
 document.getElementById("wygra3").innerHTML = arr[2];
 document.getElementById("wygra4").innerHTML = arr[3];
 document.getElementById("wygra5").innerHTML = arr[4];
 document.getElementById("wygra6").innerHTML = arr[5];
*/

  document.getElementById(element).style.backgroundColor = "red";
  document.getElementById(element).style.color = "black";
  document.getElementById(element).style.border = "3px solid black";
  document.getElementById(element).style.cursor = "default";
  document.getElementById(element).setAttribute("onclick", ";");

  if (arr.length >= 6) {
    for (var i = 1; i < 50; i++) {
      var es = "lit" + i;
      document.getElementById(es).style.cursor = "default";
      document.getElementById(es).setAttribute("onclick", ";");
    }
    losowanie();
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Array.prototype.shuffle = function() {
  var input = this;

  for (var i = input.length - 1; i >= 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var itemAtIndex = input[randomIndex];

    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }
  return input;
};
var liczby = [];
for (var i = 1; i <= 49; i++) {
  liczby.push(i);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function losowanie() {
  if (arr.length >= 6) {
    liczby.shuffle();
    document.getElementById("l1").innerHTML = liczby[0];
    document.getElementById("l2").innerHTML = liczby[1];
    document.getElementById("l3").innerHTML = liczby[2];
    document.getElementById("l4").innerHTML = liczby[3];
    document.getElementById("l5").innerHTML = liczby[4];
    document.getElementById("l6").innerHTML = liczby[5];
    document.getElementById("try").setAttribute("onclick", ";");
  } else {
    alert("First you need to select 6 numbers");
  }
}

var liczbyWygrane = 0;
function spr() {
  if (arr.length != 6) {
    alert("First you need to select 6 figures");
  } else {
    if (
      liczby[0] == arr[0] ||
      liczby[0] == arr[1] ||
      liczby[0] == arr[2] ||
      liczby[0] == arr[3] ||
      liczby[0] == arr[4] ||
      liczby[0] == arr[5]
    ) {
      liczbyWygrane += 1;
    }
    if (
      liczby[1] == arr[0] ||
      liczby[1] == arr[1] ||
      liczby[1] == arr[2] ||
      liczby[1] == arr[3] ||
      liczby[1] == arr[4] ||
      liczby[1] == arr[5]
    ) {
      liczbyWygrane += 1;
    }
    if (
      liczby[2] == arr[0] ||
      liczby[2] == arr[1] ||
      liczby[2] == arr[2] ||
      liczby[2] == arr[3] ||
      liczby[2] == arr[4] ||
      liczby[2] == arr[5]
    ) {
      liczbyWygrane += 1;
    }
    if (
      liczby[3] == arr[3] ||
      liczby[3] == arr[1] ||
      liczby[3] == arr[2] ||
      liczby[3] == arr[3] ||
      liczby[3] == arr[4] ||
      liczby[3] == arr[5]
    ) {
      liczbyWygrane += 1;
    }
    if (
      liczby[4] == arr[0] ||
      liczby[4] == arr[1] ||
      liczby[4] == arr[2] ||
      liczby[4] == arr[3] ||
      liczby[4] == arr[4] ||
      liczby[4] == arr[5]
    ) {
      liczbyWygrane += 1;
    }
    if (
      liczby[5] == arr[0] ||
      liczby[5] == arr[1] ||
      liczby[5] == arr[2] ||
      liczby[5] == arr[3] ||
      liczby[5] == arr[4] ||
      liczby[5] == arr[5]
    ) {
      liczbyWygrane += 1;
    }

    document.getElementById("napis").innerHTML =
      "You have " + liczbyWygrane + " numbers";
    document.getElementById("przyc").setAttribute("onclick", ";");
  }
}

var cyfry = new Array(49);

for (i = 1; i <= 49; i++) {
  cyfry[i] = i;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function start() {
  document.getElementById("napis").innerHTML = "Winning number is:";
  var tresc_diva = "";

  for (i = 1; i <= 49; i++) {
    var element = "lit" + i;
    tresc_diva =
      tresc_diva +
      '<input type="button" value="' +
      cyfry[i] +
      '" class="litera" onclick = "sprawdz(' +
      i +
      ')" id="' +
      element +
      '"></div>';
  }

  document.getElementById("alfabet").innerHTML = tresc_diva;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
