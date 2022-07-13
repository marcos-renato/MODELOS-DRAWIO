function avaliaParidade(limitSuperior){
    for(let i=0; i<limitSuperior; i++){
        if(i%2==1)
           console.log(i+" é um numero Impar")
        else
        console.log(i+" é um numero Par")
    }
}

avaliaParidade(10)