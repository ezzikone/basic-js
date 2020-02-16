module.exports = function createDreamTeam(members) {

  let abreviature = [],
      a = [];

  if(!Array.isArray(members)) {
    return false;
  }

  members.forEach(
      function(member) {
        if(typeof member !== 'string') {
          return false;
        }
        member = member.trimLeft();
        abreviature.push(member.slice(0,1));
      }
  );

  abreviature.sort();

  abreviature.forEach(
      function (letter) {
        a.push(letter.toUpperCase());
      }
  );

  return  a.sort().join('');
};


