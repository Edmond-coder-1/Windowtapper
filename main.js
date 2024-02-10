async function wait(ms) {
    return new Promise((res, rej)=>{
        setTimeout(res, ms);
    })
}

async function start() {
    let music = new Audio("wavetapper.mp3")
    
    await new Promise((res, rej)=>{
        music.addEventListener("canplaythrough", (e)=>{
            res()
        })
    })

    console.log("loaded")

    music.play()

    await wait(2000)

    var height = window.innerHeight

    var width = 250
    var height = 100
    const red = window.open("Windows/red.html", "_Blank","popup=true,left=10,top=10")
    red.resizeTo(500,500)
    red.moveTo(window.innerWidth / 2 - width, height / 2 + height)
 
    width += 50
    height += 50

    await wait(9000)

    const green = window.open("Windows/green.html", "_Blank","popup=true,left=10,top=10")
    green.resizeTo(500,500)
    green.moveTo(window.innerWidth / 2 - width, height / 2 + height)
 
    width += 50
    height += 50

    await wait(8000)

    const blue = window.open("Windows/blue.html", "_Blank","popup=true,left=10,top=10")
    blue.resizeTo(500,500)
    blue.moveTo(window.innerWidth / 2 - width, height / 2 + height)
 
    width += 50
    height += 50

    await wait(8500)

    const white = window.open("Windows/white.html", "_Blank","popup=true,left=10,top=10")
    white.resizeTo(500,500)
    white.moveTo(window.innerWidth / 2 - width, height / 2 + height)
 
    width += 50
    height += 50

    await wait(4500)

    const purple = window.open("Windows/purple.html", "_Blank","popup=true,left=10,top=10")
    purple.resizeTo(500,500)
    purple.moveTo(window.innerWidth / 2 - width, height / 2 + height)
 
    width += 50
    height += 50

    await wait(20000)

    const coral = window.open("Windows/coral.html", "_Blank","popup=true,left=10,top=10")
    coral.resizeTo(500,500)
    coral.moveTo(window.innerWidth / 2 - width, height / 2 + height)
 
    width += 50
    height += 50

    await wait(9000)

    const teal = window.open("Windows/teal.html", "_Blank","popup=true,left=10,top=10")
    teal.resizeTo(500,500)
    teal.moveTo(window.innerWidth / 2 - width, height / 2 + height)
 
    width += 50
    height += 50

    await wait(9000)

    const yellow = window.open("Windows/yellow.html", "_Blank","popup=true,left=10,top=10")
    yellow.resizeTo(500,500)
    yellow.moveTo(window.innerWidth / 2 - width, height / 2 + height)
 
    width += 50
    height += 50

    await wait(18000)

    const black = window.open("Windows/black.html", "_Blank","popup=true,left=10,top=10")
    black.resizeTo(500,500)
    black.moveTo(window.innerWidth / 2 - width, height / 2 + height)
 


    await wait(40000)

    const orange = window.open("Windows/orange.html", "_Blank","popup=true,left=10,top=10")
    orange.resizeTo(500,500)
    orange.moveTo(window.innerWidth / 2 - width, height / 2 + height)

    await wait(5000)
    window.close("Windows/orange.html")
    window.close("Windows/yellow.html")
    window.close("Windows/teal.html")
    window.close("Windows/coral.html")
    window.close("Windows/purple.html")
    window.close("Windows/white.html")
    window.close("Windows/blue.html")
    window.close("Windows/green.html")
    window.close("Windows/red.html")
}