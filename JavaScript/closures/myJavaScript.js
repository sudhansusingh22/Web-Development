/*$(function() {

  function pressMe() {  
    var msg = "Hello ! How are you !!";  
    function displayMessage() { 
      alert(msg);  
    }  
    displayMessage();// calls the displayMessage function
  }

  $('#button').click(function() {
    pressMe();
  });
   
});
*/
// With closure 


$(function() {
  function pressMe() {
    var msg= "Hello! How are you today!";
    function displayMessage() {
      alert(msg);
    }
    return displayMessage; // returning the function reference of displayMessage
  }
  
  $('#button').click(function() {
    var myButton = pressMe(); // the returned function(displayMessage) is referenced by myButton 
    myButton(); // execute myButton to access its contents
  });
});




















