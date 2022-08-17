const findEvenOdd = (N, Arr) => 
{
    world = 0; now = 0;
    let B=[];
    for (let i=0;i<N; i++){
      if(Arr[i]%2 === 0){
        world += Arr[i];
      }
      else{
        now += Arr[i];
      }
      }
      B[0] = world;
      B[1] = now;
      return B;
    };
 
