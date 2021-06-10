let theImages = new Array() 

        theImages[0] = "stevejohnson_0.jpg"
        theImages[1] = "stevejohnson_1.jpg"
        theImages[2] = "stevejohnson_2.jpg"
        theImages[3] = "stevejohnson_3.jpg"
        theImages[4] = "stevejohnson_4.jpg"
        theImages[5] = "stevejohnson_5.jpg"
        theImages[6] = "stevejohnson_6.jpg"
        theImages[7] = "stevejohnson_7.jpg"
        theImages[8] = "stevejohnson_8.jpg"
        theImages[9] = "stevejohnson_9.jpg"
        theImages[10] = "stevejohnson_10.jpg"
        theImages[11] = "stevejohnson_11.jpg"
        theImages[12] = "stevejohnson_12.jpg"
        theImages[13] = "stevejohnson_13.jpg"
        theImages[14] = "stevejohnson_14.jpg"
        theImages[15] = "stevejohnson_15.jpg"
        theImages[16] = "stevejohnson_16.jpg"
        theImages[17] = "stevejohnson_17.jpg"
        theImages[18] = "stevejohnson_18.jpg"
        theImages[19] = "stevejohnson_19.jpg"
        theImages[20] = "stevejohnson_20.jpg"
        theImages[21] = "stevejohnson_21.jpg"
        theImages[22] = "stevejohnson_22.jpg"
        theImages[23] = "stevejohnson_23.jpg"
        theImages[24] = "stevejohnson_24.jpg"
        theImages[25] = "stevejohnson_25.jpg"
       
       
let j = 0
let p = theImages.length;
let preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Image()
   preBuffer[i].src = theImages[i]
}

let whichImage = Math.round(Math.random()*(p-1));

function showImage(){
document.write('<img src="'+theImages[whichImage]+'"'+'alt="A painting of Steve Johnson"'+'>');
}