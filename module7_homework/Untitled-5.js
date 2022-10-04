// Переписать консольное приложение из предыдущего юнита на классы.

  class Electrodevice{
    constructor(name, power){
      this.name = name;
      this.power = power;
      this.isPlugged = false;
    }
    plugIn(){
      console.log(`${this.name} включен в сеть`);
      this.isPlugged = true;
    }
    getPowerUsed(){
      return this.isPlugged ? this.power : 0;
    }
  }
  
  const computer = new Electrodevice('Компьютер', 160);
  const tv = new Electrodevice('Телевизор', 80);
  
  console.log(computer);
  console.log(tv);
  console.log(computer.getPowerUsed() + tv.getPowerUsed());
  computer.plugIn();
  console.log(computer.getPowerUsed() + tv.getPowerUsed());
  tv.plugIn();
  console.log(computer.getPowerUsed() + tv.getPowerUsed());
  