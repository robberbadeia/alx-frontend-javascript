function getStudentIdsSum(stuList) {
  if (!Array.isArray(stuList)) {
    return [];
  }
  return stuList.reduce((sum, stuList) => sum + stuList.id, 0);
}

export default getStudentIdsSum;
