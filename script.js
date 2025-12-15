document.getElementById("contactbtn").addEventListener("click", function(){
    alert("you can contact me at wahidullahrashidi263@gmail.com");
})

// Animate Progress Bars:
window.addEventListener("load", function (){
    const bars = this.document.querySelectorAll(".progress_bar");
    bars.forEach(bar => {
        bar.style.width = bar.getAttribute("style").replace("width: ", "");
    });
});

// Validate Form:
const form = document.getElementById("contactForm");
form.addEventListener("submit", function(e){
    e.preventDefault(); // prevent actual submit
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    

    if (name && email && message){
        alert("Thanks! Your message has been sent!");
        form.reset();
    }
    else{
        alert("please fill in all fields!");
    }
})


// JS to Trigger Animation on Scroll:

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;
  
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom){
      section.classList.add("visible");
    }
  });
});