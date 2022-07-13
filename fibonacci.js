function topdown(n){
    r =0
  if(n>0){     
        if(n==1){
            r= 1
            
        }
        if(n==2){
            r= 2
            
        }
        
        if(n>2){
            r=topdown(n-1)+topdown(n-2)   
        }    

    }
    
    return r
            
}

function topdown2(n){

   
        if(n<=1){
            r= 1
            
        }else{
            r=topdown(n-1)+topdown(n-2)   
        }    


    return r
            
}


console.log("F("+5+")="+topdown(5))