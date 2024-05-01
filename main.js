
const ch_text = document.querySelector(".ch-text")

const textload=()=>{
    setTimeout(()=>{
        ch_text.textContent="Back-end developer"
    },0);
    setTimeout(()=>{
        ch_text.textContent="Full-stack devloper"
    },1000);
    setTimeout(()=>{
        ch_text.textContent="front-end developer"
    },2000);
}

textload()
setInterval(textload,1000)
ScrollReveal({

    reset: true,
    distance:'10px',
    duration:1500,
    delay:400
  })

ScrollReveal().reveal('.timeline', { interval: 500 });
ScrollReveal().reveal('.s0', { interval: 100 });
ScrollReveal().reveal('.m-intro', { delay: 500, origin: 'right', enter: 'center' });
ScrollReveal().reveal('.img-div', { delay: 500, origin: 'left', enter: 'bottom' });
// ScrollReveal().reveal('.card1', { delay: 500, origin: 'left', enter: 'bottom' });
// ScrollReveal().reveal('.sc-car', { delay: 500, origin: 'right', enter: 'bottom' });


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }
    }
})

$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbzBFiLcl-HqYzBzrrd_obFvIHIKtP1Bg2qNhrCDpsYcSKh0oAbCKXeIzRbcKvP7bDzp/exec",
        data:$("#submit-form").serialize(),
        method:"POST",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})
