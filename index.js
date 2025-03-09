// code your solution here
// Function declaration with default parameter
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
// Function expression with default parameter
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};
// Function that returns a function
function wrapAdjective(wrapper = "*") {
    return function(adjective = "special") {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    };
}
module.exports = { saturdayFun, mondayWork, wrapAdjective };
