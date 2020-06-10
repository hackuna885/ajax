let c = document.querySelector('#resultados')
let b = document.querySelector('#btnX')
let loader = document.querySelector('#loader')



//ocualta el loader
loader.style.display = 'none'

b.addEventListener('click', evt => {
    
    //esto es para mostrar el loader
    loader.style.display = 'block'
    //esto es para mostrar el loader

    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'data.html', true)
    xhr.addEventListener('load', e => {
        console.log(e.target)
        c.innerHTML = e.target.responseText
        //esto es para ocultar el loader
        loader.style.display = 'none'
        //esto es para ocultar el loader
    })
    xhr.send()
})