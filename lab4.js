const myDate = (() => {

    function getCurrentDate() {
        const now = new Date();
        return now.toDateString();
    }

    function getCurrentTime() {
        const now = new Date();
        return now.toTimeString();
    }

    function getCurrentDateTime() {
        const now = new Date();
        return now.toString();
    }

    return {
        getCurrentDate,
        getCurrentTime,
        getCurrentDateTime
    };

})();

console.log("Current Date:", myDate.getCurrentDate());
console.log("Current Time:", myDate.getCurrentTime());
console.log("Current Date & Time:", myDate.getCurrentDateTime());
