
var body = document.querySelector('body');


body.addEventListener('click', function(e) {


  var feedback = document.createElement('div');
  

  feedback.style.width = '50px';
  feedback.style.height = '50px';
  feedback.style.borderRadius = '50%';
  feedback.style.background = 'rgba(255, 255, 255, 0.5)';
  feedback.style.position = 'absolute';
  feedback.style.left = e.clientX - 25 + 'px';
  feedback.style.top = e.clientY - 25 + 'px';
  feedback.style.pointerEvents = 'none';
  feedback.style.animation = 'ripple 1s linear';
  

  body.appendChild(feedback);
  
 
  setTimeout(function() {
    body.removeChild(feedback);
  }, 1000);

});


var styles = document.createElement('style');
styles.innerHTML = '@keyframes ripple { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(100); opacity: 0; } }';
document.head.appendChild(styles);


//if use click anywhere of website, there is a feedback animation, it is cool