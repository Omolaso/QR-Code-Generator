const form = document.getElementById('submit');
const generated = document.getElementById('generated-code');
const spinner = document.getElementById('spinner');
const download = document.getElementById('download');
// const made = document.getElementById('made');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearUI();  // to clear previously generated code

    // to show spinner
    showSpinner();
    // to show spinner

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;
    // console.log(url, size);
    
    setTimeout(() =>{
       hideSpinner(); // hide spinner first

       makeCode(url, size); // then generate code

       setTimeout(() => {
            const saveURL = generated.querySelector("img").src;
            console.log(saveURL);
            downloadCode(saveURL);
       }, 50); //setTimeout cause image link will not be available immediately.

    }, 1000)
    
});

//  SPINNER

const showSpinner = () => {
    spinner.style.display = 'block';
}
const hideSpinner = () => {
    spinner.style.display = 'none';
}

//  SPINNER

// FROM CODE GENERATOR LIBRARY

 const makeCode = (url, size) => {
    const qrcode = new QRCode(generated, {
        text: url,
        width: size,
        height: size,
    });
 }

// FROM CODE GENERATOR LIBRARY

//CLEAR UI

const clearUI = () => {
    generated.innerHTML = '';
    download.innerHTML = '';
}

//CLEAR UI

//DOWNLOAD BUTTON

const downloadCode = (saveURL) => {
    const downloadBtn = document.createElement('a');
    downloadBtn.href = saveURL;
    downloadBtn.download = 'qrcode'  // gave download attribute and attribute value automatically
    downloadBtn.innerHTML = 'Download QR Code';
    downloadBtn.id= 'btn'; // styled from style sheet
    downloadBtn.classList = 'cursor-pointer p-2'
    download.appendChild(downloadBtn)
}

//DOWNLOAD BUTTON