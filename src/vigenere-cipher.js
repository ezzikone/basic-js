class VigenereCipheringMachine {

    constructor (direction){
        if(direction === false){
            this.direct = false;
        }
        else{
            this.direct = true;
        }

    }
    encrypt(message,key) {
        if(message === undefined || key === undefined){
            throw new Error()
        }
        else {
            let encryptedString = '';
            let x = 0;
            let mes  = message.toLowerCase();
            if(this.direct === false){
                mes = mes.split('').reverse().join('');
            }
            let keyLower = key.toLowerCase();

            for(var i=0; i< message.length; i++){
                if(x===key.length){
                    x = 0;
                }
                if(mes[i]=== mes[i].toUpperCase()){
                    encryptedString += mes[i];
                    x--;
                }
                else{
                    let code = (mes[i].charCodeAt(0)-97 + keyLower[x].charCodeAt(0)-97)>=26?(mes[i].charCodeAt(0)-97 + keyLower[x].charCodeAt(0)-97)-26 : (mes[i].charCodeAt(0)-97 + keyLower[x].charCodeAt(0)-97);
                    encryptedString += String.fromCharCode(97+code);
                }
                x++;
            }
            return encryptedString.toLocaleUpperCase();
        }
    }

    decrypt(message,key) {
        if(message === undefined || key === undefined){
            throw new Error()
        }
        else {
            let decryptedString = '';
            let x = 0;
            let mes  = message.toLowerCase();
            if(this.direct === false){
                mes = mes.split('').reverse().join('');
            }
            let keyLower = key.toLowerCase();
            for(var i=0; i < message.length; i++){
                if(x===key.length){
                    x = 0;
                }
                if(mes[i]=== mes[i].toUpperCase()){
                    decryptedString += mes[i];
                    x--;
                }
                else{
                    let code = (mes[i].charCodeAt(0)-97)<(keyLower[x].charCodeAt(0)-97)? 26 -((keyLower[x].charCodeAt(0)-97) - (mes[i].charCodeAt(0)-97)) : (mes[i].charCodeAt(0)-97)-(keyLower[x].charCodeAt(0)-97);
                    decryptedString += String.fromCharCode(97+code);
                }
                x++;
            }
            return decryptedString.toLocaleUpperCase();


        }
    }
}

module.exports = VigenereCipheringMachine;
