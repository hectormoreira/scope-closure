const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;
  console.log(`MoneyBox: $${saveCoins}`);
};
moneyBox(5);
moneyBox(10);



const moneyBoxClosure = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox Closure $${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBoxClosure();
myMoneyBox(4);//4
myMoneyBox(6);//10
myMoneyBox(10);//20