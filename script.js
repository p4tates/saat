var h = new Date();
document.getElementById("saat").innerHTML = h.getHours();

var d = new Date();
document.getElementById("dakika").innerHTML = d.getMinutes();

var s = new Date();
document.getElementById("saniye").innerHTML = s.getSeconds();

var y = new Date();
document.getElementById("yil").innerHTML = y.getFullYear();

var aylar = ["Ocak","Şubat","Mart","Nisan","Mayıs","June","July","Ağustos","Eylül","Ekim","Kasım","Aralık"];
var a = new Date();
var ay = aylar[a.getMonth()];
document.getElementById("ay").innerHTML = ay;

var gunler = ["Pazar", "Pazartesi", "Sali", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
var g = new Date();
var gun = gunler[g.getDay()];
document.getElementById("gun").innerHTML= gun;

setInterval(milisaniye, 1);
function milisaniye(argument) {
	const m = new Date();
	document.getElementById("milisaniye").innerHTML = m.getMilliseconds();
}

setInterval(saniye, 1000);
function saniye() {
var h = new Date();
document.getElementById("saat").innerHTML = h.getHours();

var d = new Date();
document.getElementById("dakika").innerHTML = d.getMinutes();

var s = new Date();
document.getElementById("saniye").innerHTML = s.getSeconds();
if (s.getSeconds()==59) {
	document.getElementById("uyan").play()
	document.getElementById("katman").style.animationName="saat";
	document.getElementById("tarih").style.animationName="tarih";
}
}

if (h.getHours()==23) {
	if (d.getMinutes()==59) {
		if (s.getSeconds()==59) {
			var gunler = ["Pazar", "Pazartes,", "Sali", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
			var g = new Date();
			var gun = gunler[g.getDay()];
			document.getElementById("gun").innerHTML= gun;
		}
	}
}