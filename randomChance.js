function slotGame(a){
    while(a > 0){
        var win = Math.floor(Math.random()*100);
        if(win == 1){
            var reward = (Math.floor(Math.random()*50) + 50);
            return reward + a;
        }
    }
    return 0;
}
slotGame(100);
console.log(`You won: ${slotGame(100)}`);
