let p1= document.getElementById('p1');
let p2= document.getElementById('p2');
let calculadora= document.getElementById('cen');


function agregar(num){
	p1.innerHTML += num; 

	if(p1.innerHTML.length>=3){
		calcular();
	}
}

function calcular(){
	p2.innerHTML=eval(p1.innerHTML);
}

function resultado(){
	p1.innerHTML = p2.innerHTML;	
	p2.innerHTML="";
}

function borrar(){
	p1.innerHTML="";
	p2.innerHTML="";
}