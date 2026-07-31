const images = document.querySelectorAll(".card img");
let selectedImage = images[0];

// Select image
images.forEach(img => {
    img.addEventListener("click", () => {

        images.forEach(i => {
            i.parentElement.classList.remove("selected");
        });

        selectedImage = img;
        img.parentElement.classList.add("selected");

    });
});

// Highlight first image
selectedImage.parentElement.classList.add("selected");

// Apply filter
function applyFilter(filter){
    selectedImage.style.filter = filter;
}

function filterCategory(category){

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        if(category === "all"){
            card.style.display = "block";
        }

        else if(card.classList.contains(category)){
            card.style.display = "block";
        }

        else{
            card.style.display = "none";
        }

    });

}