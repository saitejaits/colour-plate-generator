const generateBtnEl = document.getElementById("generateBtn");


const singleHexColourGenerator = () => {
    const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

    let hexColour = "#";

    for(let i=0;i<6;i++){ 
        let random = Math.floor(Math.random()*hex.length);
        hexColour += hex[random];

        // console.log({random});//2
    }

    return hexColour;
}

const colourPaletteGenerator = () => {
    const colourpalette = [];
    for(let i=0;i<4;i++){ 
        colourpalette.push(singleHexColourGenerator());
    }
    return colourpalette;
}

const renderColourPalette = () => {
    const coloursContainerEl = document.querySelector(".colour-container");
    coloursContainerEl.innerHTML = "";//3

    const colourPalette = colourPaletteGenerator();
    
    colourPalette.forEach((colour,i)=>{
        const colourDiv = document.createElement("div");
        colourDiv.id = `colour${i + 1}`;
        colourDiv.style.background = colour;
        colourDiv.className = "colourBox";//

        const colourTag = document.createElement("p");
        colourTag.id = `colour${i + 1}Tag`;
        colourTag.className = "colourTag";
        colourTag.innerHTML = colour;

        colourDiv.appendChild(colourTag);
        coloursContainerEl.appendChild(colourDiv);
    })

    // console.log({colourPalette});//2
    // console.log("btn pressed")//1


    const copyClipBoard = (id)  => {
        const el = document.getElementById(id);
        navigator.clipboard
        .writeText(el.innerText)
        .then(() => {
            alert("Copied to clipboard");
        })
        .catch((error) => {
            alert("Could not copy");
        })
        // console.log(el);
    }

    const colourTags = document.querySelectorAll(".colourTag");//4 select all tags
    colourTags.forEach((colourTag,i) => {
        colourTag.addEventListener("click",() =>
         copyClipBoard (`colour${i + 1}Tag`));
    })


}

renderColourPalette();
generateBtnEl.addEventListener("click", renderColourPalette )