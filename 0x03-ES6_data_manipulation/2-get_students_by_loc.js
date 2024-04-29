function getStudentsByLocation(stuList, city) {
  if (!Array.isArray(stuList)) {
    return [];
  }
  return stuList.filter((stuList) => stuList.location === city);
}

export default getStudentsByLocation;
