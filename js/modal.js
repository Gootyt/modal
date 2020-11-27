 // Get the modal
 var modal = document.getElementById("myModal");

 // Get the button that opens the modal
 var openModalBtn = document.getElementById("openModalBtn");

 // Get the <span> element that closes the modal
 var closeModalSpan = document.getElementsByClassName("closeModal");

 // When the user clicks the button, open the modal 
 openModalBtn.onclick = function() {
     modal.style.display = "block";
 }

 // When the user clicks on <span> (x), close the modal
 closeModalSpan.onclick = function() {
     modal.style.display = "none";
 }

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }

 function closeModal() {
     modal.style.display = "none";
 }
 /* 
  function openModal(modal_id) {
      var modalId = $('#' + modal_id);
      modalId.fadeIn('slow');

 
 }

 function closeModal(modal_id) {
     var modalId = $('#' + modal_id);
     modalId.fadeOut('slow');

     ;
 }

 window.onclick = function(event) {

         switch (event.target.id) {
             case 'myModal':
                 $('#' + event.target.id).fadeOut('slow');
                 break;
             default:
                 break;
         }
     } 
      */