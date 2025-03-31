const form=document.querySelector('form')
//this usecase will give you empty value
form.addEventListener('submit',function(e){
    e.preventDefault()
 const height=  parseInt(document.querySelector('#height').value)
 const weight=  parseInt(document.querySelector('#weight').value)
 const results=  document.querySelector('#results')
const instructions= document.querySelector('#instructions')
if( height==='' || height<0|| isNaN(height)){
    results.innerHTML=`please give a valid height${height}`
}
else if( weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML=`please give a valid weight${weight}`
}
else{
  const bmi=  (weight/((height*height)/10000)).toFixed(2)
  //show the result
  if(bmi<18.6)
    {
        instructions.innerHTML ="you are under weight";
      }
     else if(bmi>=18.6 && bmi<24.9)
        {
          instructions.innerHTML ="you are normal weight";
        }
        else{
        instructions.innerHTML="over weight";
        }
  results.innerHTML=`<span>${bmi}</span>`;
}

});
// results.innerHTML =`${height}`;
// results.innerHTML =`${weight}`;
