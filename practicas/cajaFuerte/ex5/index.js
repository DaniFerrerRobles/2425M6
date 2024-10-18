document.querySelector("#canviarImatge").addEventListener("click", function(){
    img = document.querySelector("#imatge1.jpg")

    if (img.getAtribute("src") === "https://static.messi.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-21-at-12.31.50-819x1024.jpeg" ){
        img.setAtribute("src") == "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/8B70/production/_102469653_gettyimages-962792890.jpg.webp"
    }
    else{
        img.getAtribute("src") == "https://static.messi.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-21-at-12.31.50-819x1024.jpeg"
    }
})