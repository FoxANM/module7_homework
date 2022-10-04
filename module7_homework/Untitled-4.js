// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент).

// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

  function Electrodevice(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }
  
  Electrodevice.prototype.plugIn = function() {
    console.log(`${this.name} включен в сеть`);
    this.isPlugged = true;
  }
  
  Electrodevice.prototype.getPowerUsed = function() {
    return this.isPlugged ? this.power : 0;
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
  