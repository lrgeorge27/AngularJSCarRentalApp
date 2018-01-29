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
            options: "satelite radio, GPS", 
            canRent: true 
        },
        {
            name: 'midsize',
            image: "midsizeCar.jpg",
            available: 10,
            price: 100,
            description: "This midsized sedan is perfect for a family of 4 with room for upto 2 carseats. Holds 4 suitcases.",
            options: "satelite radio, GPS, Convertable Carseats", 
            canRent: true
        },
        {
            name: 'luxury',
            image: "luxuryCar.jpg",
            available: 3,
            price: 150, 
            description: "Ride in style in this premium 2-seater with heated and cooled seats, and hard-top convertable roof. Holds 2 suitcases.",
            options: "satelite radio, GPS, Temperature-Controlled Beverage Console",
            canRent: true 
        },
        {
            name: 'SUV',
            image: "suv.jpg",
            available: 5,
            price: 120, 
            description: "This monstrosity seats 6 adults, or 3 screaming children without touching. Holds 4 carseats and 6 suitcases.",
            options: "satelite radio, GPS, Convertible Carseats, Kitchen Sink",
            canRent: true 
        }
    ]; 
    
    app.controller('CarController', function(){
        this.cars = cars;   //set variable (this.cars) equal to array variable, (this.cars) links object to expression 
        // console.log("controller");
        // console.log(cars);
    
        //If the car type is sold out change display to unavailable:
        this.unavailable = function(carName, available){ //grab the car name to get object index #
            // console.log(carName, available);
            for (var i = 0; i< cars.length; i++){ //iterate through objects array to find the matching index
                // console.log("click");
                if(cars[i].name === carName && cars[i].available <= 0){ //If the index name matches, and the available value lte 0
                    // console.log("if");
                    cars[i].available = 0;  //set the value = 0, neg # not useful
                    cars[i].canRent = false; //change value from true to false to trigger ng-show, changing display
                    // console.log(cars[i].available, cars[i]);
                    break; //exit the loop
                } else {
                    continue; //if name doesn't match, move to next object
                }
            }
            };
            

    });

    app.controller('ButtonController', function(){
        this.rentCar = function(carName, available){ //when button is clicked grab the cars.name and cars.available values
            // console.log(carName, available);
            for (var i = 0; i< cars.length; i++){ //iterate through objects array to find the matching index
                // console.log("click");
                if(cars[i].name === carName){ //if the index name match the cars.name value
                    // console.log("if");
                    available--;        //decrement the cars.available value, 
                    cars[i].available = available;  //and replace
                    // console.log(cars[i].available, cars[i]);
                    break;  //exit the loop
                } else {
                    continue; //if name doesn't match, continue to next object
                }
            }
        };
        
    });

    // console.log("object");
})();