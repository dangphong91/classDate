let myDate = function(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.setDay = function(day) {
        this.day = day;
    }
    this.setMonth = function(month) {
        this.month = month;
    }
    this.setYear = function(year) {
        this.year = year;
    }
    this.getDay = function() {
        return this.day;
    }
    this.getMonth = function() {
        return this.month;
    }
    this.getYear = function() {
        return this.year;
    }
    this.setDate = function(day,month,year) {
        this.day = day;
        this.month = month;
        this.year = year;
        // this.setDay(day);
        // this.setMonth(month);
        // this.setYear(year);
    }
    this.toString = function() {
        // day = this.getDay();
        // month = this.getMonth();
        // year = this.getYear();
        return (`${this.day}/${this.month}/${this.year}`);
    }
};
// let date = new myDate(10, 08, 1991);
// let day = date.getDay();
// let month = date.getMonth();
// let year = date.getYear();
// alert(day + "/" + month + "/" + year);
// date.setDay(19);
// date.setMonth(03);
// date.setYear(2021);
// day = date.getDay();
// month = date.getMonth();
// year = date.getYear();
// alert(day + "/" + month + "/" + year);
let date = new myDate(10, 08, 1991);
alert(date.toString());
date.setDate(19, 03, 2021);
alert(date.toString());