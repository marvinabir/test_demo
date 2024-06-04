/*var subm = document.getElementById('form');
subm.addEventListener('submit', (e) => {
    event.preventDefault()
    var username = document.getElementById('user-name').value
    console.log(username);

    var userno = document.getElementById('user-no').value
    console.log(userno);

    var email = document.getElementById('email').value
    console.log(email);


});

var email = document.getElementById('email');
email.addEventListener('focus', (e) => {
    email.style.background ='red';
    email.style.color = 'white';
});

let user = document.getElementById('user-name');
user.addEventListener('focus', (e) => {
    user.style.background = 'yellow';
    user.style.color = 'red';
});

var num = document.querySelector('#user-no');
num.addEventListener('focus', (e)=>{
    num.style.background = 'orange';
    num.style.color = 'blue';
});
*/



var divContent = document.querySelector('.txt');
console.log(divContent);



if (document.querySelector('.pt1')){
    document.querySelector('.pt1').textContent='NAMED';
}
else {console.error('Could not find');

}
var pCont = document.querySelector('.pt1').innerHTML;
console.log(pCont);

//Accessing a class dynamically and editing it 
document.querySelector('.txt').innerHTML=
`<table>
    <tr><th>Marvin</th></tr>
    <tr><td>S-rank hunter</td></tr>
    <tr><td>Ability-Full Counter</td></tr>
</table>`;


//changing image attributes
//document.querySelector('img').setAttribute('src', 'whitebeard.jpeg');
//var image = document.querySelector('img');
//image.setAttribute('src', 'whitebeard.jpeg')
var image = document.querySelector('img');
image.src = 'whitebeard.jpeg';
image.style.border = '2px solid maroon';
image.style. height = '300px';
image.style.width = '200px';

document.getElementById('sec11').style.background='red';


//adding and removing classes from a webpage elements
  /*document.querySelector('.sec1').classList.remove('.sec5');*/
document.querySelector('.form-1').classList.add('tbv');

var sec1 = document.getElementById('sec11');
sec1.addEventListener('onmouseover', (e) => {
    sec1.style.background = 'red';
});

var sec1 = document.getElementById('sec11');
sec1.addEventListener('onmouseout', (e) => {
    sec1.style.background = 'pink';
});








