const form = document.querySelector('#generate');
const qrdiv = document.querySelector('#qrcode')


const generateQR = (url,size)=>{
    const qrcode = new QRCode(qrdiv,{
        text:url,
        width:size,
        height:size
    })
}

const clearQr = ()=>{
    qrdiv.innerHTML = ''
    const saveUI = document.querySelector('#saveBtn')
    if(saveUI) saveUI.remove()
}

const createSaveBtn = (saveUrl)=>{
    const urlLink = document.createElement('a');
    urlLink.id = 'saveBtn'
    urlLink.classList = 'bg-red-900 hover:bg-red-800 text-white font-bold rounded py-3 px-10 w-1/3 m-auto ml-10' 
    urlLink.href = saveUrl
    urlLink.download = 'qrcode'
    urlLink.innerHTML = "Save Image"
    document.querySelector('#generated').appendChild(urlLink)

}

const generateSubmit = (e)=>{
  e.preventDefault();
  clearQr();
  const url = form.querySelector('#url').value
  const size = form.querySelector('#size').value
 if(url == ''){
    alert('Please enter a url')
    return
 }
 generateQR(url,size);
 setTimeout(()=>{
    const saveUrl = qrdiv.querySelector('img').src
    createSaveBtn(saveUrl)
 }, 200)
}

form.addEventListener('submit', generateSubmit)

  /**
   * Hero type effect
   */
   const typed = document.querySelector('.typed')
   if (typed) {
     let typed_strings = typed.getAttribute('data-typed-items')
     typed_strings = typed_strings.split(',')
     console.log(typed_strings)
     new Typed('.typed', {
       strings: typed_strings,
       loop: true,
       typeSpeed: 100,
       backSpeed: 50,
       backDelay: 2000
     });
   }