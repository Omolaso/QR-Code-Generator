const form = document.getElementById('submit');
const generated = document.getElementById('generated-code');
const spinner = document.getElementById('spinner');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // to show spinner
    showSpinner();
    // to show spinner

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;
    // console.log(url, size);

    
    setTimeout(() =>{
       hideSpinner();
    }, 2000)
    
});


const showSpinner = () => {
    spinner.style.display = 'block';
}
const hideSpinner = () => {
    spinner.style.display = 'none';
}