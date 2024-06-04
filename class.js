class ItsMe {
  constructor() {
    this.name = "조우식",
    this.age = 30,
    this.home = "월평동"
  }
  sentence(){
    return this.name + "은 미남이다.";
  }
}

let itsMe = new ItsMe()
console.log(itsMe)