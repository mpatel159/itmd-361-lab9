function init(){
//add your javascrip between these two lines of code
  var button = document.getElementById('entrybutton');
  function showInput(){
    var textbox = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = textbox.value;
    alert('Muaaz Patel: ' + textbox.value); 	  
  }
  
  button.addEventListener('click', showInput);
}






window.addEventListener('load', init);
