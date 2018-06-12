window.onload = function(){

        wygrana()
        start()
 }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 var arr = [];
 function sprawdz(x){

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

 document.getElementById(element).style.background = "#330000";
 document.getElementById(element).style.color = "#C00000";
 document.getElementById(element).style.border = "3px solid #C00000";
 document.getElementById(element).style.cursor = "default";
 document.getElementById(element).setAttribute("onclick",";");

if(arr.length >= 6){
  document.getElementById("wygra1").innerHTML = "You can start :)";
  for(var i = 1;i < 50;i ++){
    var es = "lit"+i;
    document.getElementById(es).style.cursor = "default";
    document.getElementById(es).setAttribute("onclick",";");
  }

}

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Array.prototype.shuffle = function() {
    var input = this;

    for (var i = input.length-1; i >=0; i--) {

        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}
tempArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49];


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function losowanie ()
{
  if(arr.length >= 6){
  tempArray.shuffle();
  document.getElementById("l1").innerHTML = tempArray[0];
  document.getElementById("l2").innerHTML = tempArray[1];
  document.getElementById("l3").innerHTML = tempArray[2];
  document.getElementById("l4").innerHTML = tempArray[3];
  document.getElementById("l5").innerHTML = tempArray[4];
  document.getElementById("l6").innerHTML = tempArray[5];
  document.getElementById("try").setAttribute("onclick",";");

}
else{
  alert("First you need to select 6 numbers");
}
}

function spr()
{
  for(var i = 0;i < 5; i++){
    if(arr[i]==tempArray[i]){
      alert("Winning number is "+arr[i]);
    }
  }

}

function wygrana ()
{

	var w = (Math.random() * (50000000-2000000) + 2000000).toFixed(2);

	function numberWithSpaces(w) {
    var parts = w.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}

	document.getElementById("w").innerHTML ="Won for this draw is: "+numberWithSpaces(w)+' €';
}

var cyfry = new Array(49);

for(i=1;i<=49;i++)
{
  cyfry[i]=i;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function start()
{
	var tresc_diva ="";

	for(i=1;i<=49;i++)
	{
		var element = "lit" + i;
		tresc_diva = tresc_diva + '<input type="button" value="'+cyfry[i]+'" class="litera" onclick = "sprawdz('+i+')" id="'+element+'"></div>';
		if( i % 7 == 7) tresc_diva = tresc_diva + '<div style="clear:both;"></input>'
	}

	document.getElementById("alfabet").innerHTML = tresc_diva;

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
