const navbar = document.querySelector('.navbar')

window.addEventListener('scroll',()=>{
    if(this.scrollY>0){
        navbar.classList.remove('py-4')
        navbar.classList.add('shadow','py-3')
    }else{
        navbar.classList.add('py-4')
        navbar.classList.remove('shadow','py-3')
    }
})
//for download Resume
function myfunction(){
    alert("You are going to download the Resume!");
}

// function for see certificate
function myfunctionc(){
    alert("You are going to be redirected to the certificate Page!");
  }