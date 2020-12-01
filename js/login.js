var panelBoxes = document.querySelectorAll('.panel--box'),
signUp = document.getElementById('signUp'),
signIn = document.getElementById('signIn');

function removeSelection(){
for(var i = 0, len = panelBoxes.length; i < len; i++){
    panelBoxes[i].classList.remove('active');
}
}

window.onpopstate = function(event) {

if(event.state === 'signin') {
   signIn.click();
}

if(event.state === 'signup') {
   signUp.click();
}

};


signIn.onclick = function(e){
e.preventDefault();
removeSelection();
panelBoxes[0].classList.add('active');

window.history.pushState('signin', '登录', '/auth/signin');
}

signUp.onclick = function(e){
e.preventDefault();
removeSelection();
panelBoxes[1].classList.add('active');
window.history.pushState('signup', '注册', '/auth/signup');
}

