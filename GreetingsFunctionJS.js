function greeting(firstName, lastName) {
    let surname = ""
    if (lastName === undefined) {
        lastName = "";
        surname = "I'm sorry, I didn't catch your surname. Can you repeat that?";
    } else {surname = "Pleased to meet you."}
    return `Greetings ${firstName} ${lastName}!
    ${surname}`;
}
