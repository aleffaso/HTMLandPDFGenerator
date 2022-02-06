class Processor {
    static Process(data){
        var dataSplit = data.split("\r\n");
        var rows = [];
        
        dataSplit.forEach(row => {
           var arr = row.split(",");
           rows.push(arr);
        });
        
        return rows;
    }
}

module.exports = Processor;