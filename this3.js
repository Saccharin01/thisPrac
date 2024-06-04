console.log("밑도 끝도 없는 this : ", this);


function workThree(a, b){
  console.log('함수 안의 this : ',this)
  return a + b;
}

workThree(1,2)