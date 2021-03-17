let num1 = Input2.value
let num2 = Input3.value
let answer = 0


Button2.onclick=function(){
  if (Input4.value === 'add') {
    answer = num1 + num2
  } else if (Input4.value === 'multiply') {
    answer = num1 * num2
    }
  alert(answer)
}

Button3.onclick=function(){
  num1.clear()
  num2.clear()
  answer.clear()
}

Button6.onclick=function(){
  ChangeForm(newControls)
}
