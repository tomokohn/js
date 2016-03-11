/**
 * Created by tomer on 07/03/2016.
 */
var ul = document.querySelector('ul');

var li= document.createElement('li');
li.textContent = '2';

// add the li to the li
ul.appendChild(li);

var li2= document.createElement('li');
li2.textContent = '0';
ul.insertBefore(li2, ul.firstChild);

//document.querySelectorAll('li')[1].innerHTML = "<b>hello world</b>";

var nodes = document.querySelectorAll('li');

for (var i=0; i<nodes.length; i++) {
    nodes[i].onclick = function() {
        console.log(this.textContent);
    }
    nodes[i].onmouseover = function () {
            this.style.background = 'red';
        }
    nodes[i].onmouseout = function () {
        this.style.background = 'lime';
    }

    }


//for (var i=0; i<nodes.length; i++) {
//    nodes[i].onmousemove = function () {
//        this.style.background = 'red';
//    }
//}

ליצור   שלוש כפתורי טוגל שמחליפים את הקלאס
על טקסט למטה