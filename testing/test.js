const fs = require("fs"); //  File system

//var file = "./Aleff.eu";
var json = "user.json";
//var content;

/*fs.readFile(file, {encoding: 'utf-8'}, (error, data) => { //utf-8 is a text file 
    //errors => more than one software using the file
    //errors => HD is blocking the file 
    //errors => file divided in parts

    if(error) {
        console.log("Problem reading the file");
    }else{
        content = data;
    }
    console.log(content);
});*/

/*fs.writeFile("file", "New content", (error) => {
    if(error){
        console.log("Error when saving");
    }
});*/

modifyUser("Chico", "React", "Front-end");

function modifyUser(name, course, category){
    fs.readFile(json, {encoding: 'utf-8'}, (error, data) => {
        if(error){
            console.log("We have a problem");
        }else{
            var content = JSON.parse(data); // Text to Java Script Object

            console.log(content);

            content.name = name;
            content.course = course;
            content.category = category;
            
            console.log(content);
    
            fs.writeFile("./user.json", JSON.stringify(content), (error) =>{  // Java Script Object to text
                if(error){
                    console.log("There is a problem while writing");
                }
            });
        }
    });
}
