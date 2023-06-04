function getComputerChoice(){
    const array = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];
    return console.log(item);
}