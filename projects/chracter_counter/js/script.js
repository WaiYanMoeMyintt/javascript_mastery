const currentChracter = document.querySelector("#character")
const remainCharacter = document.querySelector("#remain_character")
const message = document.querySelector("#message");
const inputContent = document.querySelector('#input_content');
let number = 80;
inputContent.addEventListener('input',(event)=>{
      const getTheValue = event.target.value;
      currentChracter.textContent = getTheValue.length;
      if(getTheValue.length <= number){
        const remainLength =   number - getTheValue.length;
        remainCharacter.textContent = remainLength;
      }

})
