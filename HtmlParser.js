var ejs = require("ejs");
var file = "./table.ejs"

class HtmlParser {
    static async Parse(table){
        return await ejs.renderFile(file, {header: table.header, rows: table.rows});
    }
}

module.exports = HtmlParser;