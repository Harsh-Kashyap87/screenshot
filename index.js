// https://shot.screenshotapi.net/screenshot?token=TOKEN&url=URL&[OPTIONS]
// https://shot.screenshotapi.net/screenshot?token=M53TFVZ-H6XMYYX-QH6P0ME-ATB0J0J&url=https://www.google.com/
// const token = "M53TFVZ-H6XMYYX-QH6P0ME-ATB0J0J";
// const URL = `https://shot.screenshotapi.net/screenshot?token=${token}&url=${}`;

const container = document.querySelector(".container");
const input = document.querySelector(".inputElement");
const btn = document.querySelector(".btn");
// console.log(form)

const token = "M53TFVZ-H6XMYYX-QH6P0ME-ATB0J0J";
const URL = `https://shot.screenshotapi.net/screenshot?token=${token}`;

btn.addEventListener("click", donwloadImage);

function donwloadImage(event){
    let Valu = input.value;
    // console.log("click");
    // console.log(Valu);
    let newUrl = `${URL}&url=${Valu}`
    // console.log(newUrl);
    fetch(newUrl).then((response) => response.json()).then((json) =>{
        // console.log(json);
        // screenshot

        let screenShotUrl = json.screenshot;

        var img = document.createElement("img");
        img.setAttribute("id", "img");
        img.src = `${screenShotUrl}`;
        document.body.appendChild(img);
    });


}

