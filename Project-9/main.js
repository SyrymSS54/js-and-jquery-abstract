function Hotel(name,rooms,booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function(){
        return this.rooms - this.booked;
    }
}
//создаем конструктор,то есть шаблон

var quayHotel = new Hotel('Tula',40,25);//создание экземпляра при помощи конструктора
var parkHotel = new Hotel('Пляж',120,77);//создание экземпляра при помощи конструктора

var detalis1 = quayHotel.name + ',свободно номеров:';
detalis1 += quayHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = detalis1;

var detalis2 = parkHotel.name + ',свободно номеров:';
detalis2 += parkHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = detalis2;