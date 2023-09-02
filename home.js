//alert('hello lets started');

//console.log('Hello');
function ageIndays(){
   var birthYear = prompt('Which year you born... Good friend');
   var ageIndayss =(2023- birthYear) * 365;
   var h1 = document.createElement('h1');
   var textAnswer = document.createTextNode('You are ' + ageIndayss + ' days old');
   h1.setAttribute('id','ageIndays');
   h1.appendChild(textAnswer);
   document.getElementById('flex-box-result').appendChild(h1);
   //console.log(ageIndays);

}

function reset(){
    document.getElementById('ageIndays').replaceWith();
}

