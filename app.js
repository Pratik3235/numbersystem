const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
  let index=0;
  let bag="";
  let primeArray=[];
  for(let i=0;i<numbers.length;i++)
  {
    let ct=0;
     for(let j=2;j<=numbers[i];j++)
     {
        if(numbers[i]%j==0)
        {
            break;
        }
        else{
            ct++;
        }
     }
     if(ct>0)
     {
        bag=bag+numbers[i]+" ";
        primeArray[index]=numbers[i];
        index++;
     }

  }
  let max=primeArray[0];
  let min=primeArray[0];
  let sum=0;
  for(let i=0;i<primeArray.length;i++)
  {
    if(primeArray[i]>max)
        max=primeArray[i];
  }
  for(let i=0;i<primeArray.length;i++)
    {
      if(min>primeArray[i])
          min=primeArray[i];
    }
    for(let i=0;i<primeArray.length;i++)
        {
          sum=sum+primeArray[i];
        }

    console.log(primeArray);
    console.log(min);
    console.log(max);
    