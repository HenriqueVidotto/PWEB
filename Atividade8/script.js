
var idade = new   Array();
var Sexo =  new Array();
var nota = new Array();

for(var i = 0; i < 45;i++){


 idade[i] =parseInt( prompt("Digite a Idade. Pessoa : " + i));

 Sexo[i] = prompt("Digite a Idade (H para homem e M para mulher) Pessoa : " + i);

 nota[i] = parseInt( prompt("Digite seu nota otimo=4,bom=3,regular=2,péssimo=1  Pessoa : " + i));
}

function media(){

    var med = 0 ;
    for(var i = 0; i < idade.length;i++)
    {
        med = med + idade[i];
    }

    return med / idade.length;
}

function maior(){

    return Math.max.apply(null,idade);
}

function menor(){

    return Math.min.apply(null,idade);
}

function pessimo(){

    var cont = 0;
    for(var i = 0; i < nota.length;i++)
    {
        if(nota[i] == 1 ){
        cont++;
        }
    }

    return cont;
}

function otim(){
    var cont = 0;
    for(var i = 0; i < nota.length;i++)
    {
        if(nota[i] == 4  ||nota[i] == 3 ){
        cont++;
        }
    }
    return (cont * 100)/nota.length;
}
function hom(){
var cont = 0;
    for(var i = 0; i < Sexo.length;i++)
    {
        if(Sexo[i] == 'h'){
            cont++;
        }
    }
    return cont;
}
function mul(){
    var cont = 0;
        for(var i = 0 ; i < Sexo.length;i++)
        {
            if(Sexo[i] == 'm'){
                cont++;
            }
        }

        return cont;
    }



alert("Media: " + media() + "\n idade da pessoa mais velha: " + maior() + "\n idade da pessoa mais nova: "  + menor() + 
"\n quantidade de pessoas que reponderam pessimo: " + pessimo() +  "\n  porcentagemde pessoas que responderam ótimo e bom:  " +otim() + "%"+
  "\no número de mulherese homensque responderam ao questionário : \n Homem: " + hom() + "\n Mulher: " +mul()
);