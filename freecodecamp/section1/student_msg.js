import { getGrade } from './get_grade.js';
import { getAverage } from './get_average.js';
import { hasPassingGrade } from './get_passing_grade.js';

function studentMsg(totalScores, studentScore) {
    let stu_score = getGrade(studentScore)
    let avg_score = getAverage(totalScores)
  
    if (hasPassingGrade(studentScore)) {
      return `Class average: ${avg_score}. Your grade: ${stu_score}. You passed the course.`;
    } else {
      return `Class average: ${avg_score}. Your grade: ${stu_score}. You failed the course.`;
    }
  }
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));