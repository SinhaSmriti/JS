const accountId = 123456
let accountEmail = "abc@gmail.com"
var accountPassword = "987654"
accountCity = "Mumbai"
let accountState;

// accountID = 2 // not allowed because it is under constant so can't be changed

accountEmail = "pqr@gmail.com"
accountPassword = "23456"
accountCity = "Pune"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var because issues in block scope and functional scope
*/