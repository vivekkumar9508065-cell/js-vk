const accountId = 123456789;
let accountEmail = "example@example.com";
var accountPassword = "securepassword123";
accountcity = "New York";
let accountState;

 // accountiD = 2 // NOT allowed because accountId is a constant

 accountEmail = "hc@example.com";
 accountPassword = "newsecurepassword123";
 accountcity = "Los Angeles";

 console.log(accountId);

 /*
prefer not to use var
because of issue in block scope and functional scope
 */
 console.table([accountId , accountcity , accountEmail, ])