const form = document.querySelector("form");
const storageKey = "feedback-form-state";

form.addEventListener("input", addArchive);
form.addEventListener("submit", sendingMessage);

function addArchive(event) {
    event.preventDefault(); 
    const valuesObject = {
        email: form.email.value.trim(),
        message: form.message.value.trim()
    }
    localStorage.setItem(storageKey, JSON.stringify(valuesObject));

};
function writingFormElements() {
    const savedData = localStorage.getItem(storageKey);
    const parsedData = JSON.parse(savedData);
    if (parsedData) {
        form.elements.email.value = parsedData.email;
        form.elements.message.value = parsedData.message;
    }
   
};
writingFormElements();

function sendingMessage(event) {
     event.preventDefault(); 
    if (form.elements.email.value.trim() !== `` && !form.elements.message.value.trim() !== ``) {
      console.log(localStorage.getItem(storageKey));
        event.currentTarget.reset();
        localStorage.removeItem(storageKey);
    };
    
}; 




























// const inputEmail = form.querySelector("input");
// const textareaMessage = form.querySelector("textarea");

// inputEmail.addEventListener("input", textInput);
// textareaMessage.addEventListener("input", textMessage);

// function textInput(event) {
//     const emailInput = event.target.value;
//    localStorage.setItem("feedback-form-state", emailInput)
// }


// function textMessage(event) {
//     const message = event.target.value;
//    localStorage.setItem("feedback-form-state", message)
// }



