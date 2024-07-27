function generatePassword(length,includeUppercase,includeLowerCase,includeNumbers,includeSymbols){
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberVhar = "1234567890";
    const symbolChar = "@#$%&()_+-*"
    let allowedChars = "";
    let password = "";
    allowedChars +=includeLowerCase?  lowerCaseChars : "";
    allowedChars +=includeUppercase?  upperCaseChars : "";
    allowedChars +=includeNumbers?  numberVhar: "";
    allowedChars +=includeSymbols?  symbolChar: "";
    console.log(allowedChars)
    if(length <=0){
        return `(Password Length must be at least 1 )`
    }
    if(allowedChars.length === 0){
        return `(Atleast one set of char needs to be selected)`
    }
    for(let i = 0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex]
    }
    return password;
}
const passwordLength = 12;
const includeLowerCase =true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbol = true;
const password = generatePassword(
    passwordLength,
    includeLowerCase,
    includeUpperCase,
    includeNumbers,
    includeSymbol
)
console.log(`Generated Password : ${password}`)