var Logger = function() {
    this.items = {};
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
*/
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    
    if(this.items[message] === undefined ) {
        this.items[message] = timestamp;
        return true;
    } else if (timestamp >= this.items[message]+10){
        this.items[message] = timestamp;
        return true;
    } else {
        return false;
    }
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */