exports.name = 'galen';
exports.data = 'this is some data';

var privateVariable = 5;

exports.getPrivateVariable = function () {
  return privateVariable;
}