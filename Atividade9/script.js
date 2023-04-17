

var numeros  = new Array();


for(var i = 0; i < 3; i++){

    numeros[i] = parseInt(prompt("Digite o numero " + i + " :"))
}

function maior(){

    var mar =  Math.max.apply(null,numeros);
   return mar;
}


function cresc(){

   return numeros.sort(function(a,b){return a-b});
}



alert("Maior numero : " + maior());
alert("Maior numero : " + cresc());


