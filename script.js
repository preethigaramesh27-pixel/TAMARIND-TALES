document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("contactForm").addEventListener("submit", function (event) {

    let name = document.getElementById("name").value;

    if (name.trim() === "") {
      alert("Please enter your name");
      event.preventDefault();
    }

  });
});
document.getElementById("topBtn").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
function validateForm(){
    let name=document.getElementById("name").value;

    if(name==""){
        alert("Please enter your name");
        return false;
    }

    alert("Message Sent Successfully");
    return true;
}