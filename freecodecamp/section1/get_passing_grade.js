// from get_grade import getGrade - python syntax does not work...

function hasPassingGrade(score) {
    if (getGrade(score) === "F") {
        return false;
    } else {
        return true;
    }
}
  
  
  
console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));