export default {
    function (e = 'aleixcarles@gmail.com'){
        let email = e;
        var password = 'aleix123';

        return{
            email:email,
            consoleme: function consoleme() {
                console.log('Usuari: ' +email)
            }
        }

    }
}