const form = document.getElementById('form');
const selectDepartment = document.getElementById('selectDepartment');
const txt_name = document.getElementById('txt_name');
const txt_email = document.getElementById('txt_email');
const txt_phone = document.getElementById('txt_phone');
const txt_subject = document.getElementById('txt_subject');
const txt_tick = document.getElementById('txt_tick');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};



const validateInputs = () => {

    const nameValue = txt_name.value.trim();


    if (nameValue === 'Piotr Presia') {
        console.log(nameValue);
        console.log(selectDepartment.value);
        setError(txt_name, 'Username is required');
    } else {
        setSuccess(txt_name);
    }

};
