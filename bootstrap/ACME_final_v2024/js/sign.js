const submitForm = document.querySelector('.form form');
const inputs = submitForm.querySelectorAll('.field input');
const feedback = submitForm.querySelector('.feedback');

submitForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  let completed = 0;
  if(document.body.offsetWidth > 768){
    for(let input of inputs){
      if(!input.value){ 
        let target = input.getAttribute('id');
        let top = input.offsetTop;
        input.focus();
        openFeedback(target, top);
        return false;
      }else{
        ++completed;
        console.log(completed);
      }
    }  
    function openFeedback(target, pos){
      feedback.innerHTML = `<p>${target}은 필수입니다.</p>`;
      feedback.style.top = `${pos}px`;
      feedback.style.display = 'block';
    }
  } else{
    for(let input of inputs){
      if(!input.value){ 
        let errorEl = input.parentElement;
        let target = input.getAttribute('id');
        input.focus();
        openFeedback(errorEl, target);
        console.log(errorEl);
        return false;
      }else{
        ++completed;
      }
    }  
    function openFeedback(errorEl,target){
      feedback.innerHTML = `<p>${target}은 필수입니다.</p>`;     
      errorEl.insertAdjacentElement('afterend', feedback);
      feedback.style.display = 'block';
    }
  }
  if(inputs.length === completed){
    submitForm.submit();
  }
});

