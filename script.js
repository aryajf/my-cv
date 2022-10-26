document.addEventListener("DOMContentLoaded", function () {
    let type = new TypeIt("#typing", {})
    for(let i=1;i<=100;i++){
        type.type('Aku developer').pause(750).delete(13).type('Suka Ngocogg').pause(750).delete(12)
    }
    type.go()
})