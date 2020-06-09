var modal = document.getElementById('myModal');
var btnNav = document.getElementById('myBtnNav');
var btnHeader = document.getElementById('myBtnHeader');
var span = document.getElementsByClassName("close")[0];

btnNav.onclick = function(){
	modal.style.display = "block";
}
btnHeader.onclick = function(){
	modal.style.display = "block";
}
span.onclick = function(){
	modal.style.display = "none";
}
window.onclick = function(event){
	if (event.target == modal){
		modal.style.display = "none";
	}
}