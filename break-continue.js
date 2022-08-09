const numbers = [23, 43, 65,76,98, 65, 199, 45, 87];
for(let i =0; i<numbers.length; i++){
    if(numbers[i] >80){
        continue;
    }
    console.log(numbers[i]);
}