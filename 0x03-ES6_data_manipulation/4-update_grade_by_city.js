function updateStudentGradeByCity(studLst, city, newGrades) {
  if (!Array.isArray(studLst)) {
    return [];
  }
  const studWithSameLocation = studLst.filter((stud) => stud.location === city);
  const updatedLst = studWithSameLocation.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    const finalGrd = gradeObj ? gradeObj.grade : 'N/A';

    return {
      ...student,
      grade: finalGrd,
    };
  });

  return updatedLst;
}

export default updateStudentGradeByCity;
