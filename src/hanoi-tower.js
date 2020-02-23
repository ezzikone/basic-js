module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let object = { };
    object.turns = 2**disksNumber-1;
    object.seconds = object.turns/(turnsSpeed/3600);
    return object;
}
