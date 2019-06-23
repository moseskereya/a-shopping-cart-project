
    function openNav() {
        document.getElementById("myNav").style.width = "100%";
      }
      function closeNav() {
        document.getElementById("myNav").style.width = "0%";
      }

    function ourFunction(){
      let moses = document.querySelector('.div'); 
      if(moses.style.width === '0px'){
        moses.style.width = '300px';
      } else{
        moses.style.width = '0px'
      }
    }

    const btns = document.querySelectorAll('.btn');
    const screen = document.querySelector('.screen');
    
    for (let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function (){
    let number = btns[i].getAttribute('data-num');
    screen.value = number;
    })
    }
    
    const clearBtn = document.querySelector('.clear')
    function myFunction(){
      screen.value = '';
      if(screen.value === ''){
        alert('please the select input has to be filled')
      }else{
        alert('Dear customer are you sure you want to delet the item you selected?')
      }
    }