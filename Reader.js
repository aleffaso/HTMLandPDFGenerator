const fs = require("fs");
const util = require("util");

/*class Reader{
    Read(pathFile){
        fs.readFile(pathFile,{encoding: 'utf-8'}, (err, data) => { //Reafile is not a promise, we have to change it by using promisify
            if(err){
                console.log("There was an error");
            }else{
                console.log(data);
            }
        });
    }
}*/

class Reader{
    constructor(){
        this.reader = util.promisify(fs.readFile);
    }
    async Read(pathFile){ //Only read file
        try{
            return await this.reader(pathFile, {encoding: 'utf-8'});
        }catch(err){
            return undefined;
        }
    }
}



module.exports = Reader;