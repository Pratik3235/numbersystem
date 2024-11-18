const numbers = [
    3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
  ];
 let evenBag="";
 let oddBag="";
  for(let i=0;i<numbers.length;i++)
  {
    if(numbers[i]%2==0)
    {
        evenBag=evenBag+numbers[i]+" ";
    }
    else{
        oddBag=oddBag+numbers[i]+" ";
    }
  }
  console.log("Even Number Inside array are:"+evenBag);
  console.log("Odd Number Inside array are:"+oddBag);