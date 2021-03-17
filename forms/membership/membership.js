
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]



Button1.onclick=function(){
  if (members.includes(Input1.value)) {
    Jumbotron1.value = 'You are a member!'
  } else {
    members.push(Input1.value)
    Jumbotron1.value = 'Your name was not on the member list, but you have now been added!'
    }
}


Button4.onclick=function(){
  ChangeForm(calculator)
}
