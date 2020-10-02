'use strict';
var express = require('express');
var router = express.Router();
router.get('/', function (req, res) {
    function calculate(method, x, y) {
        /*
         * Check the method and do the calculation
         * */
        var result;
        switch (method) {
            case "add":
                result = parseFloat(x) + parseFloat(y);
                break;
            case "sub":
                result = parseFloat(x) - parseFloat(y);
                break;
            case "multi":
                result = parseFloat(x) * parseFloat(y);
                break;
            case "divide":
                result = parseFloat(x) / parseFloat(y);
                break;
            default:
                result = "Error,wrong type of method. Please check your method and try again."
        }
        return answer;
    }
    // Give values and store them for console log to print result
    var x = req.query.x;
    var y = req.query.y;
    var method = req.query.method;
    //Use console log to call calculate function and store the answer
    console.log(x + " " + method + " " + y + " = " + calculate(method, x, y));
    //return the result to the web page
    return res.send(x + " " + method + " " + y + " = " + calculate(method, x, y));
    res.end();
});
module.exports = router; 