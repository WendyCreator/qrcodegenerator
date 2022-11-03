const qrdiv = document.querySelector('#qrdiv')
const qrform = document.querySelector('#qrform')

qrform.addEventListener('submit', e=>{
    e.preventDefault();
    const myUrl = qrform.querySelector('#url').value
    if(myUrl == ''){
        alert('empty field!')
        return;
    }
    let qrcode = new QRCode(qrdiv,{
        text:myUrl
    })
})