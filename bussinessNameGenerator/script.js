
console.log("<-- lets start the game --> ");



let random = Math.random();

let first , second , third;

if(random < 0.33){
    first = "Crazy";
}else if(random < 0.66 && random >= 0.33){
    first = "Amazing";
}else{
    first = "Fire";
}

if(random < 0.33){
    second = "Engine";
}else if(random < 0.66 && random >= 0.33){
    second = "Foods";
}else{
    second = "Garments";
}

if(random < 0.33){
    first = "Bros";
}else if(random < 0.66 && random >= 0.33){
    first = "Limited";
}else{
    first = "Hub";
}

console.log(`${first} ${second} ${third}`);