document.querySelector("#btnGenerarIcono").addEventListener("click", function(){
    const emoticonos = ["🐔", "🐍", "🐈", "🐆", "🐇", "🐢", "🐧"];    

    let emojis = emoticonos[Math.floor(Math.random() * emoticonos.length)];

    document.querySelector("#emojiAleatorio").innerHTML = emojis
})