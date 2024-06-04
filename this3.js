console.log("밑도 끝도 없는 this : ", this);


function workThree(a, b){
  console.log('함수 안의 this : ',this)
  return a + b;
}

workThree(1,2)


let itsMe = {
  Name : "조우식",
  Age : 30,
  Home : "월평동",
  test : this
}