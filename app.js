/* global angular */
(function(){
    //require angular as a module('app name', [dependencies]);
    var app = angular.module('carRental', []); 
    
    app.controller('CarController', function(){
        this.car = cars;
        console.log("controller");
        console.log(cars);
    });
    
    var cars = {
    // types: [{
            name: 'economy',
            available: 5,
            price: '$80', 
            description: "Compact and fuel efficient, this car seats 4, and holds 2 suitcases.",
            options: ["satelite radio", "GPS"], 
            canRent: true, 
            soldOut: false
        // },
        // {
        //     name: 'midsize',
        //     available: 10,
        //     price: "$100",
        //     description: "This midsized sedan is perfect for a family of 4 with room for upto 2 carseats. Holds 4 suitcases.",
        //     options: ["satelite radio", "GPS", "Convertable Carseats"]
        // },
        // {
        //     name: 'luxury',
        //     available: 3,
        //     price: "$150", 
        //     description: "Ride in style in this premium 2-seater with heated and cooled seats, and hard-top convertable roof. Holds 2 suitcases.",
        //     options: ["satelite radio", "GPS", "Temperature-Controlled Beverage Console"]
        // },
        // {
        //     name: 'SUV',
        //     available: 5,
        //     price: "$120", 
        //     description: "This monstrosity seats 6 adults, or 3 screaming children without touching. Holds 4 carseats and 6 suitcases.",
        //     options: ["satelite radio", "GPS", "Convertible Carseats", "Kitchen Sink"]
        // }
    // ]
    };
    console.log("object");
})();