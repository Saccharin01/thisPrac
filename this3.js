console.log("밑도 끝도 없는 this : ", this);


function workThree(a, b){
  console.log('함수 안의 this : ',this)
  return a + b;
}

workThree(1,2)


let itsMe = {
  name : "조우식",
  Age : 30,
  Home : "월평동",
  test : this,
  sentence : function() {
    return this.name +"은 미남이다";
  }
}

console.dir(`객체에서 바라보는 this : `, itsMe);
console.log('메서드로 보는 this :', itsMe.sentence())