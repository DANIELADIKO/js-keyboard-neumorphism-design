//si on lache une touche du clavier , desactiver l'effet pressed avec l'effet blur
document.querySelectorAll('input').forEach(input => input.addEventListener("keyup", keyUp
))
document.querySelectorAll('input').forEach(input => input.addEventListener("click", keyUp
))

function keyUp(e){
    e.target.blur()
}

document.onkeypress = function (gl,ev) {
    let lettre = gl.key.toUpperCase()
    //console.log(gl);
    touche(lettre)
}

function touche(lettre) {
    let word = document.querySelector(`input[value="${lettre}"]`)
    //console.log(word);
    word.focus()
}