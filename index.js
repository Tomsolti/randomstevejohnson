//Images array and global vars
let theImages = [];
for (let i = 0; i <= 25; i++) {
    theImages[i] = "stevejohnson_" + i + ".jpg";
}

let l = theImages.length;
let generated = [];


//Function to pick a random image
function showImage() {
    let whichImage;
    let newImage;
    do {
        whichImage = Math.round(Math.random() * (l - 1));
        newImage = true;
        for (let i = 0; i < generated.length; i++) {
            if (generated[i] === whichImage) {
                newImage = false;
                break;
            }
        }
        if (newImage) {
            console.log("new: " + whichImage);
            generated.push(whichImage);
        } else {
            console.log("already was generated: " + whichImage);
        }
    } while (!newImage);
    //Push to html to display img
    document.write('<img src="' + theImages[whichImage] + '" alt="A random painting of Steve Johnson"' + '>');
}
