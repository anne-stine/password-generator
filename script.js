/* Possible password characters */
const chars = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "1","2","3","4","5","6","7","8","9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|","<",",",">",".","?","/"
]

/* Character limit */
let charLimit = 8

/* Generate random char */
const getRandomChar = () => {
    return chars[Math.floor( Math.random() * chars.length )]
}

/* Generate 4 different passwords */
const generatePasswords = () => {
    
    /* Password storage array */
    let passwords = []
    
    /* While there are less than 5 passwords in the array, keep generating passwords */
    while (passwords.length < 4) {
        let password = ""
        while (password.length < charLimit) {
            password += getRandomChar()
        }
        /* Add generated password to array */
        passwords.push(password)
    }
    /* Display generated passwords */
    document.querySelector("#password-1").textContent = passwords[0]
    document.querySelector("#password-2").textContent = passwords[1]
    document.querySelector("#password-3").textContent = passwords[2]
    document.querySelector("#password-4").textContent = passwords[3]
}

document.querySelector("button").addEventListener("click", generatePasswords)


/* Copy password to clipboard */
const copyPassword = (e) => {
    let promise = navigator.clipboard.writeText(e.target.textContent)
    console.log("Copied " + e.target.textContent + " to clipboard!")
}

/* Event listener for all buttons with class: password */
const results = document.querySelectorAll(".password")
results.forEach(result => {
    result.addEventListener("click", copyPassword)
})
