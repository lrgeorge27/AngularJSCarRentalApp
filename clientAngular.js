/* global angular */
(function(){
    //require angular as a module('app name', [dependencies]);
    var app = angular.module('carRental', []); 

    var cars = [
        {
            name: 'economy',
            image: "economyCar.jpg",
            available: 5,
            price: 80, 
            description: "Compact and fuel efficient, this car seats 4, and holds 2 suitcases.",
            options: ["satelite radio", "GPS"], 
            canRent: true 
            // soldOut: true
        },
        {
            name: 'midsize',
            image: "midsizeCar.jpg",
            available: 10,
            price: 100,
            description: "This midsized sedan is perfect for a family of 4 with room for upto 2 carseats. Holds 4 suitcases.",
            options: ["satelite radio", "GPS", "Convertable Carseats"], 
            canRent: true
        },
        {
            name: 'luxury',
            image: "luxuryCar.jpg",
            available: 3,
            price: 150, 
            description: "Ride in style in this premium 2-seater with heated and cooled seats, and hard-top convertable roof. Holds 2 suitcases.",
            options: ["satelite radio", "GPS", "Temperature-Controlled Beverage Console"],
            canRent: true 
        },
        {
            name: 'SUV',
            image: "suv.jpg",
            available: 5,
            price: 120, 
            description: "This monstrosity seats 6 adults, or 3 screaming children without touching. Holds 4 carseats and 6 suitcases.",
            options: ["satelite radio", "GPS", "Convertible Carseats", "Kitchen Sink"],
            canRent: true 
        }
    ]; 
    
    app.controller('CarController', function(){
        this.cars = cars;
        console.log("controller");
        console.log(cars);
    
        this.rentCar = function(carName, available){
            // this.cars[i] = i;
            console.log(carName, available);
            for (var i = 0; i< cars.length; i++){
            // console.log(cars.find(available));
            // console.log(carName.available);
            console.log("click");
                if(cars[i].name === carName){
                    console.log("if");
                    available--;
                    cars[i].available = available;
                    console.log(cars[i].available, cars[i]);
                    break;
                } else {
                    continue;
                }
                // return cars[i].available;
            // cars.name.indexOf(carName);
            // document.getElementById("available").innerHTML = available;
            // console.log(cars[i].available, cars[i]);
            }
        };
        
        this.updateAvailable = function(index, newNum){
          index.cars.available = newNum;  
        };
        
    });

    app.controller('ButtonController', function(){
        // var i = 0;
        // this.rent = cars.available;
              
        // this.rentCar = function(available){
        //     console.log(available);
        //     // console.log(carName.available);
        //     console.log("click");
        //     cars.available = available--;
        //     console.log(available);
        //     return cars.available;
        // };    

    });  

    console.log("object");
})();