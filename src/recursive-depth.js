module.exports = class DepthCalculator {
    calculateDepth(arr) {

        let open = 0,
            close = 0,
        i = [];

        arr.forEach(
            function (item) {
                if (typeof item === 'object'){
                    open++;
                    close++;
                    recursion(item);
                }
                i.push(item.toString());
                i.forEach(
                    function (letter) {
                        if (letter === '[') {
                            open++;
                        }
                        if (letter === ']') {
                            close++;
                        }
                    }
                )
            }
        );

function recursion(array) {
    array.forEach(
        function (item) {
            if (typeof item === 'object') {
                open++;
                close++;
                recursion(item);
            }
        }
    );
}



        if (open-close > 0 && close > 0) {
            return close + 1;
        }

        if (open-close < 0) {
            return open + 1;
        }

        if (open-close === 0 && open > 0) {
            return open + 1;
        } else {
            return open;
        }
    }
};
