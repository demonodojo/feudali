
var TOTAL_PLAYERS = 0
var Jugador = new Array(20);
var turno = 0;
var LABEL_TURNO = "turno=";
var LABEL_PLAYER = "numPlayer="
	
/*
document.write("Control 0");

numPlayerLit = getLabel(document.URL, LABEL_PLAYER);
document.write("<br>htmlturno" + numPlayerLit);

//if(htmlturno != ""){
	document.write("<br>Control 11");
	Jugador[TOTAL_PLAYERS] = new creaJugador(htmlturno); 
	TOTAL_PLAYERS ++;
	document.write("<br>Control 12");
	//myform.turno.focus();
	//return False;
//}
*/
/*
numPlayerLit = getLabel(document.URL, LABEL_PLAYER);
document.write("<br>numPlayerLit" + numPlayerLit);
if(numPlayerLit != ""){
	numPlayer = parseInt(numPlayerLit);
	
	document.write("<br>numPlayer" + numPlayer);
	TOTAL_PLAYERS = parseInt(numPlayer);
}

document.write("<br>TOTAL_PLAYERS = " + TOTAL_PLAYERS);

for (cont = 0; cont < TOTAL_PLAYERS; cont++){
	var name="Player" + cont;
	Jugador[cont] = new creaJugador(name);
}

runApp()
*/
/*
document.write("Seguimos con el codigo");
var J1 = new creaJugador("Pablo ");
var J2 = new creaJugador("Paloma ");

document.write(J1.name);
J2.meLlamo(J2.name);

document.write(" Payaso");
*/

function runApp(){
	
	//document.write(document.URL);
	var intTurno = 0;
	
	htmlturno = getLabel(document.URL, LABEL_TURNO);
	if(htmlturno != ""){
		intTurno = parseInt(htmlturno);
	}
	//myform = document.userDetails;
	//document.write("<br>turno = " + turno);
	document.write("<br>intTurno = " + intTurno);
	detalle = document.getElementById("idTurno");
	document.write("Antes del if");
	if(htmlturno == "/"){
		document.write("<br>htmlturno == //");
		detalle.value = 0;
	}
	else{
		document.write("else");
		detalle.value = intTurno+1;
	}
	
	
	turno++;
	document.write("<table>");
	showTitle()
	showAllPlayers();
	document.write("</table>");
	
	
	//myform.turno.focus();
	return false;
}

function getLabel(url, label){
	
	document.write("<br>Control 22");
	document.write("<br>url " + url);
	document.write("<br>label " + label);
	
	str1 = url;
	pos = str1.indexOf(label) + label.length;
	//document.write("<br> pos = " + pos);
	if(pos == -1){
		newstr = "";
	} 
	else {
		str2 = str1.substr(pos);
		pos2 = str2.indexOf("&");
		newstr = str1.substr(pos, pos2);
		
		document.write("<br> str2 = " + str2);
		document.write("<br> pos2 = " + pos2);
		document.write("<br> newstr= " + newstr);
		
	}
	return newstr;
}
function creaJugador(name){
	
	this.name = name;
	this.claseSocial = "Campesino";
	this.dinero = 0;
	this.recaudacion = 0;
	this.propiedades = 0;
	this.carcel = 0;
	this.meLlamo = getName;
	this.mostrar = showPlayer;
}

function getName(name){
	document.write(this.name);
	
}	

function addPlayer(){
	document.write("running addPlayer");
	TOTAL_PLAYERS = TOTAL_PLAYERS + 1;
	name = document.getElementById("idJugador");
	document.write("name: " + name);
	document.write("TOTAL_PLAYERS: " + TOTAL_PLAYERS);
	Jugador[TOTAL_PLAYERS-1] = new creaJugador(name);
	showAllPlayers();
	
	return false;
}
function showAllPlayers(){
	//document.write("<h1><p align=\"center\">Feudali</p></h1>")
	//showForm()
	for (cont = 0; cont < TOTAL_PLAYERS; cont++){
		document.write("<tr>");
		Jugador[cont].mostrar();
		document.write("</tr>");
	}
	document.write("</table>")
}

/*
function showForm(){
	document.write("<form onSubmit=\"return runApp()\" name = \"formulario\">")	
	document.write("Turno de:")
	document.write("<input name = \"turno\" type=\"text\" size=30><br>")
	document.write("<input type=\"submit\" value=\"patata\" name=\"new Turn\">")
	document.write("</form>")
}
*/

function showPlayer(){
	document.write("<td>");
	document.write(this.name);
	document.write("</td>");
	document.write("<td>");
	document.write(this.claseSocial);
	document.write("</td>");
	document.write("<td>");
	document.write(this.dinero);
	document.write("</td>");
	document.write("<td>");
	document.write(this.recaudacion);
	document.write("</td>");
	document.write("<td>");
	document.write(this.propiedades);
	document.write("</td>");
	document.write("<td>");
	document.write(this.carcel);
	document.write("</td>");
}

function showTitle(){

		document.write("<tr>")
			document.write("<td>")
				document.write("Jugador")
			document.write("</td>")
			document.write("<td>")
				document.write("Clase social")
			document.write("</td>")
			document.write("<td>")
				document.write("Dinero")
			document.write("</td>")
			document.write("<td>")
				document.write("Recaudacion")
			document.write("</td>")
			document.write("<td>")
				document.write("Propiedades")
			document.write("</td>")
			document.write("<td>")
				document.write("Carcel")
			document.write("</td>")
		document.write("</tr>")
}

