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


