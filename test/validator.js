class Validator{
    suma(a,b){
        return a+b;
    }


    validateEmail(email){

    var re = /\$+@\$+\.\$+/;
    return re.test(email);

    }

}    

module.exports = new Validator();