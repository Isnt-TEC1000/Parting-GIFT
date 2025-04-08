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
        modalImg.classList.add("heroImg");
    
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
        console.log("success");
        if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
        } else {
            entry.target.classList.remove("slide-in");
        }
    })
});

const animArtic = document.querySelectorAll(".prayImg");
animArtic.forEach((el) => stateCheck.observe(el));

window.addEventListener('load', () => {
    let scrollElement = document.querySelectorAll('.carousel');
    scrollElement.scrollLeft =  (scrollElement.scrollWidth - scrollElement.clientWidth ) / 2;
    console.log("huh")
  });

const Message = document.querySelector(".hero h1");

Message.addEventListener("copy", () => {
    const MessageH = document.createElement("dialog");
    MessageH.classList.add("modalH");

    const container = document.createElement("section");
    container.classList.add("modalSection")

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
    }
});


