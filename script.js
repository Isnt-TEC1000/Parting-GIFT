// Fungsionalitas website ini, penjelasan lebih dalam di bawah

// Mendeklarasi variabel untuk mengambil "nilai" tubuh dokumen dan setiap gambar yang tersedia
const heroImg = document.querySelectorAll("Img");
const body = document.querySelector("body");

// Fungsi yang di eksekusi untuk semua gambar setiap kali gambar tersebut di klik
// Fungsi ini untuk fitur modal/Pop up gambar
heroImg.forEach(image => {
    image.onclick = () => {
        const popUp = document.createElement("dialog");
        popUp.classList.add("modal");
    
        const modalImg = document.createElement("img");
        modalImg.src = image.getAttribute("src");
        modalImg.classList.add("modalImg");
    
        body.append(popUp);
        popUp.showModal();
        
        popUp.append(modalImg);
    
        window.onclick = function(event) {
            if (event.target == popUp) {
                popUp.close();
                popUp.remove();
            }
        }
    }
});


/* Ignore this for now */
const stateCheck = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log("success");
        if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
        } else {
            entry.target.classList.remove("slide-in");
        }
    })
});

const animArtic = document.querySelectorAll(".prayImg");
animArtic.forEach((el) => stateCheck.observe(el));


// and this...
const Message = document.querySelector(".hero h1");

Message.addEventListener("copy", () => {
    const MessageH = document.createElement("dialog");
    MessageH.classList.add("modalH");

    const container = document.createElement("section");
    container.classList.add("modalSection");

    const header = document.createElement("h1");
    header.innerText = "My Parting Gift";
    header.classList.add("modalH1");

    const content = document.createElement("p");
    content.innerText = "This website is my final, everlasting gift to this organization I have failed, to it's future, and to the plan painted on the wall. But in His eyes, I can tell He knows that I am only really doing it for Him. The greatest, most universal acts are always born from the personal."
    content.classList.add("modalP");


    container.append(header, content);
    MessageH.append(container);

    body.append(MessageH);
    MessageH.showModal();

    console.log("rassecole");

    window.onclick = function(event) {
        if (event.target == MessageH) {
            MessageH.close();
            MessageH.remove();
        }
    };
});

// this too...
const limEve = document.querySelector(".navMod");
const imgSrc = [1,2,3,4,5,6,7,8];
const titleSrc = ["Kamis Putih", "Jumat Agung", "Malam Paskah"];

limEve.addEventListener("click", () => {
    const container = document.createElement("dialog");
    container.classList.add("modalH");

    const bento = document.createElement("section");
    bento.classList.add("modalSectionLM");

    const selectScr = document.createElement("section");
    selectScr.classList.add("navLM");

    const navSelect = document.createElement("nav");
    navSelect.classList.add("navArea");

    titleSrc.forEach((element) => {
        const selectTitle = document.createElement("h3");
        selectTitle.innerText = element;
        selectTitle.setAttribute("class", element);
        selectTitle.classList.add("hdLM");
        if (element == "Kamis Putih") {
            selectTitle.classList.add("hdSelected");
        };
        navSelect.append(selectTitle);
        selectScr.append(navSelect);
    });

    bento.append(selectScr);

    imgSrc.forEach((element) => {
        console.log("casserole");
        const bentoImg = document.createElement("img");
        bentoImg.setAttribute("class", element);
        bentoImg.setAttribute("src", "./src/mt/" + element + ".svg");
        bentoImg.classList.add("imgMT");
        bento.append(bentoImg);
    });

    container.append(bento);
    body.append(container);
    container.showModal();

    const LMImg = document.querySelectorAll("img");
    const changeScreen = container.querySelectorAll("h3");
    console.log(changeScreen);
    changeScreen.forEach((element) => {

        element.onclick = () => {        
            changeScreen.forEach((element) => {
                element.classList.remove("hdSelected");
            });
            element.classList.toggle("hdSelected");
            console.log("something changed")
        }
    });

    LMImg.forEach(image => {
        image.onclick = () => {
            const popUp = document.createElement("dialog");
            popUp.classList.add("modal");
        
            const modalImg = document.createElement("img");
            modalImg.src = image.getAttribute("src");
            modalImg.classList.add("modalImg");
        
            body.append(popUp);
            popUp.showModal();
            
            popUp.append(modalImg);
        
            window.onclick = function(event) {
                if (event.target == popUp) {
                    popUp.close();
                    popUp.remove();
                    window.onclick = function(event) {
                        if (event.target == container) {
                            container.close();
                            container.remove();
                    }
            }};
            }
        }
    });

    window.onclick = function(event) {
        if (event.target == container) {
            container.close();
            container.remove();
        }
    };
})

// limEve.addEventListener("click", () => {    window.onclick = function(event) {
//     if (event.target == container) {
//         console.log("eijr")
//         container.close();
//         container.remove();
//     }
// };
// })

