
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

    function myFunction(){
      var select = prompt ('Do you want to select the room');
if(select === ''){
  alert('please select a service')
  var select = prompt ('Do you want to select the room');
}else if (select === '') {
  alert('please re start your request for the service')
  confirm('councel')
}
  alert ('Congratulation you selected your service');
  }