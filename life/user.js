var user =(function  (e = 'aleixcarles@iesebre.com'){
    let email = e
    var password = 'aleix123'

    function consoleme() {
        console.log('Usuari:' + email)
    }

    function setEmail(){

    }

    return{
        consoleme: consoleme,
        email: email

    }

})()