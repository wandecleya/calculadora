

var calculadora = function () {
  var gender = "f";
  var age = 45;
  var contribution = 2;

  if((gender == "f") && (age <=45)){
    var age_time = 65 - age;
    var contribution_time = 25 - contribution;
    alert(Math.max(age_time, contribution_time));
  }

}
