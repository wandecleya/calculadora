
function foo(gender, age) {
  var gender = gender;
  var age = age;

  if((gender == "F") && (age <=45) || (gender == "M") && (age <=50)){
    return "newRules";
  }
};

var calculadora = function () {
  var gender = "M";
  var age = 45;
  var contribution = 2;
  var rules = foo(gender, age);

  if (rules == "newRules") {
    var age_time = 65 - age;
    var contribution_time = 25 - contribution;
    var time_left = Math.max(age_time, contribution_time));
  }
};
