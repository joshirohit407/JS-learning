const accountId = 144553
let accountEmail = "rohit@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState ;

// accountId = 2 // Not allowed
console.log(accountId);

/*
Perfer not to use Var
because of issue in block scope and funcitonal scope
*/

accountEmail = "manish@google.com"
accountPassword = "2232424"
accountCity = "Bengaluru"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
