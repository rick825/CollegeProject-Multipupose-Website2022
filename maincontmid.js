const addbox = document.querySelector('.inputcap'),
      popup = document.querySelector('.cappopup');
      closebox = document.querySelector('.closebox');


      addbox.addEventListener('click',()=>{
       popup.classList.add('show');
      });

      closebox.addEventListener('click',()=>{
       popup.classList.remove('show');
      });