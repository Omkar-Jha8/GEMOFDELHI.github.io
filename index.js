function time() {
    var a = document.querySelector('#a')
    var b = document.querySelector('#b')
    var c = document.querySelector('#c')
    var d = document.querySelector('#d')
    var e = document.querySelector('#e')
    var f = document.querySelector('#f')
    var g = document.querySelector('#g')
    var h = document.querySelector('#h')
    var i = document.querySelector('#i')
    var j = document.querySelector('#j')
    var k = document.querySelector('#k')
    setTimeout(() => {
        a.innerHTML = "G"
    }, 0)
    setTimeout(() => {
        b.innerHTML = "E"
    }, 1000)
    setTimeout(() => {
        c.innerHTML = "M"
    }, 1500)
    setTimeout(() => {
        d.innerHTML = "S"
    }, 2000)
    setTimeout(() => {
        e.innerHTML = "_O"
    }, 2500)
    setTimeout(() => {
        f.innerHTML = "F"
    }, 3000)
    setTimeout(() => {
        g.innerHTML = "_D"
    }, 3500)
    setTimeout(() => {
        h.innerHTML = "E"
    }, 4000)
    setTimeout(() => {
        i.innerHTML = "L"
    }, 4500)
    setTimeout(() => {
        j.innerHTML = "H"
    }, 5000)
    setTimeout(() => {
        k.innerHTML = "I"
    }, 5500)

}
time()