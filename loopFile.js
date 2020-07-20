let txt = ['fizz', 'buzz', 'fizzbuzz'];

 for(let i=1;i<=100;i++){
      if((i%3) == 0){
        console.log(i + " " + txt[0]);
      }
      if((i%5) == 0){
        console.log(i + " " + txt[1]);
      }
      if(((i%3) == 0) && ((i%5) == 0)){
        console.log(i + " " + txt[2]);
      }
    }    