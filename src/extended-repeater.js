module.exports = function repeater(str, options) {
    let string = str+'';
    options.separator = options.separator || '+';
    options.additionSeparator = options.additionSeparator || '|'
    let addition = ''
    if(options.additionRepeatTimes>1 && options.addition!== undefined){
        options.addition = options.addition + options.additionSeparator;
        addition = options.addition.repeat(options.additionRepeatTimes);
        addition = addition.slice(0, addition.length-options.additionSeparator.length);
    }
    else if (options.addition){
        addition = options.addition;
    }
    if(options.repeatTimes){
        string = string + addition + options.separator;
        string = string.repeat(options.repeatTimes);
        string = string.slice(0, string.length-options.separator.length);
    }
    else {
        string = string + addition;
    }
    return string;
};
