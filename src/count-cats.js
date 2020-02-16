module.exports = function countCats(matrix) {

    let cats = 0;

    matrix.forEach(
      function(container){
        container.forEach(
            function(item){
                if( item==="^^" ){
                    cats++
                }
            }
        )
      }
  );
    return cats;
};
