const {it, describe} =require("mocha");
const expect = require('chai'). expect

let archivoValidator = require('./validator.js');
describe ("prueba de suma" , function(){
     it ("el resultado debe ser = 6", function(){
        const result = archivoValidator.suma(3,3); //si cambio el valor me da error en el test, porque ese no es el valor esperado
        expect(result).to.be.equal(6);
     })

     it ("Esta prueba valida un email", function(){
        const result = archivoValidator.validateEmail("daiana@gmail.com");
        expect(result).to.be.equal(false);
     })
})