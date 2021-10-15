let screen = document.getElementById('screen');
let buttons = document.getElementsByTagName('button');

for(items of buttons){
items.addEventListener('click',function(event){
    let buttonText=event.target.innerText;

    if (buttonText =='1'){
        screen.value+=buttonText;
    }
   else if (buttonText=='C'){
       screen.value= '';
   }
   else if(buttonText=='=')
   screen.value=eval(screen.value);
   else{
    screen.value+=buttonText;
   }

});
}