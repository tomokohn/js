/**
 * Created by tomer on 07/03/2016.
 */
/*
var nodes = document.querySelectorAll('li');

for (var i=0; i<nodes.length; i++) {
    nodes[i].onclick = function () {
        console.log(this.textContent);
        document.querySelector('.change').style.color='red';
    }
}
*/
var a = true;
document.querySelector('.one').onclick = function(){
    console.log(this.textContent);
    if (a === true) {
        document.querySelector('.change').style.color ='red';
       a = false;
    } else {
        document.querySelector('.change').style.color ='lime';
        a = true;
    }
}

document.querySelector('.two').onclick = function(){
    console.log(this.textContent);
    if (a === true) {
        document.querySelector('.change').innerText ='changed';
        a = false;
    } else {
        document.querySelector('.change').innerText ='here is the change';
        a = true;
    }
}
document.querySelector('.tree').onclick = function(){
    console.log(this.textContent);
    if (a === true) {
        document.querySelector('.change').style.backgroundColor ='gray';
        a = false;
    } else {
        document.querySelector('.change').style.backgroundColor ='yellow';
        a = true;
    }
}
