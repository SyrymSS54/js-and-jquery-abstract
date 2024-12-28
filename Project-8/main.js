var hotel = {
    name:'Tula',
    rooms:40,
    booked:25,
    checkAvailability:function(){
        return this.rooms - this.booked;
    }
}
//this. обьект указывает на локальные свойства
/* при обьявление функции внутри на обьекта 
namefunction:function() {
    self function;
} */

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();