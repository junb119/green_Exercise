//변수 지정
const previousButton = document.querySelector('#prev')
const nextButton = document.querySelector('#next')
const submitButton = document.querySelector('#submit')
const tabTargets = document.querySelectorAll('.tab')
const tabPanels = document.querySelectorAll('.tabpanel')
const isEmpty = (str) => !str.trim().length
let currentStep = 0;


nextButton.addEventListener('click',(e)=>{
  tabPanels[currentStep].classList.add('hidden')
  tabPanels[currentStep+1].classList.remove('hidden')

  tabTargets[currentStep].classList.remove('active')
  tabTargets[currentStep+1].classList.add('active')
  currentStep += 1
  validateEntry(); // 입력상태 확인해서 이전, 다음 업데이트
  updateStatus()
  
})
previousButton.addEventListener('click',(e)=>{
  tabPanels[currentStep].classList.add('hidden')
  tabPanels[currentStep-1].classList.remove('hidden')
  tabTargets[currentStep].classList.remove('active')
  tabTargets[currentStep-1].classList.add('active')
  currentStep -= 1
  updateStatus()
  
})

function updateStatus() {
  if (currentStep === 0) {
    nextButton.classList.remove('hidden')
    previousButton.classList.add('hidden')
    submitButton.classList.add('hidden')
    validateEntry()
  }
  else if (currentStep === tabPanels.length-1){
    // previousButton.classList.remove('hidden')
    nextButton.classList.add('hidden')
    previousButton.classList.remove('hidden')
    submitButton.classList.remove('hidden')
  }
  else {
    nextButton.classList.remove('hidden')
    previousButton.classList.remove('hidden')
    submitButton.classList.add('hidden')
  }
}

function validateEntry() {
  let input = tabPanels[currentStep].querySelector('textarea');
  nextButton.setAttribute('disabled',true)
  submitButton.setAttribute('disabled',true)
  
  setButtonPermission(input);
  input.addEventListener('input', ()=> setButtonPermission(input))
  input.addEventListener('blur', ()=> setButtonPermission(input));
  
}

function setButtonPermission(input) {  
  if (isEmpty(input.value) ) {
    nextButton.setAttribute('disabled', true)
    submitButton.setAttribute('disabled', true)
  } else {
    nextButton.removeAttribute('disabled')
    submitButton.removeAttribute('disabled')
  }

}

validateEntry()