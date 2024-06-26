function getListStudentIds(objList) {
  if (!Array.isArray(objList)) {
    return [];
  }
  return objList.map((obj) => obj.id);
}

export default getListStudentIds;
