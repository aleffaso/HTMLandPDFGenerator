var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var Writer = require("./Writer");
var PDFWriter = require("./PDFWriter");

var read = new Reader(); //As Reader is not a static method, we cannot call it direct. We gotta put into a variable
var write = new Writer();

var pathFile = "./user.csv"

async function main(){

    var data = await read.Read(pathFile);

    var processingData = Processor.Process(data); //As Processor is a static method, we can call it direct

    var users = new Table(processingData);

    var html = await HtmlParser.Parse(users);

    write.Write(Date.now() + ".html", html); //Convert into html
    PDFWriter.WritePDF(Date.now() + ".PDF", html) //Convert into PDF

}

main();