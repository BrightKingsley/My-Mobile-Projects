class Elevator{
  constructor(){
    this.element = document.querySelector('.elevator')
    
    this.btns = []
    
    document.querySelectorAll('.elevatorBtn').forEach(btn=>this.btns.unshift(btn))
    
    this.moveElevator()
  }
  
  move(value){
    this.element.style.transform = `translateY(${value === 0? 0 : -value * 100 - value*15}%)`
  }
  
  moveElevator(){
    this.btns.forEach((btn, i)=>{btn.addEventListener('click', ()=>{elevator.move(i)})})
  }
}

class Floor{
  constructor(){
    this.btns = []
    
    document.querySelectorAll('.floorBtn').forEach(btn=>this.btns.unshift(btn))
    
    this.callElevator()
    
  }
  
  callElevator(){
    this.btns.forEach((btn, i)=>{btn.addEventListener('click', ()=>{elevator.move(i)})})
  }
}

const elevator = new Elevator()
const floor = new Floor()
