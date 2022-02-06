class Table {
    constructor(arr){
        this.header = arr[0];
        arr.shift(); //remove first element
        this.rows = arr;
    }

    get RowCount(){ // "Get" transforms a method in an attribute
        return this.rows.length; //Count rows
    }

    get ColumnCount(){
        return this.header.length; // Count columns
    }
}

module.exports = Table;