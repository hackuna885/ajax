const c = document.getElementById('contenido')
const b = document.getElementById('btnEjemplo')

b.addEventListener('click', evt => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'data.html', true)

    xhr.addEventListener('load', e => {
        console.log(e.target)
        c.innerHTML = e.target.responseText
    })

    xhr.send()
})