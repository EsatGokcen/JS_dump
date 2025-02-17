import { getGrade } from './get_grade.js';

export function hasPassingGrade(score) {
    if (getGrade(score) === "F") {
        return false;
    } else {
        return true;
    }
}
  
  
// TESTS
/* console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87)); */