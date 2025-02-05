function toggleMode() {
  const html = document.documentElement

//   if (html.classList.contains ('light')) {
//     html.classList.remove('light')
//   } else{
//     html.classList.add('light')
//   }
//   }

html.classList.toggle('light')


const img = document.querySelector ("#profile img")

    if (html.classList.contains("light")) {
        img.setAttribute("src","./RocketSeat/Vscode/assets/assets/avatar.png")

    } else {
        img.setAttribute("src", "./RocketSeat/Vscode/assets/assets/avatar-light.png")
    }
     

if (html.classList.contains("light")) {
document.getElementById ("username").innerText = "@nãosematt";
    
    } else {document.getElementById ("username").innerText = "@spidermatt"
}
}

    // mudar o alt na imagem e mudar o username