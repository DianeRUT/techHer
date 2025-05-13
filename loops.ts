const candidates: string[] = [];
candidates.push('Iradukunda');
candidates.push('Aline');
candidates.push('Placide');
candidates.push('Peter');

console.log(candidates.length);

// for loop 
for(let i: number =0; i<candidates.length; i++){
    console.log(candidates[i]);
}
 

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];

  if (number % 2 === 0) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`);
  }
}

//LOOP

for(const candidate of candidates){
    console.log(candidate);
 }

 //while

 let i=1;
 while (i <=5){
    console.log(i);
    i++;
 }