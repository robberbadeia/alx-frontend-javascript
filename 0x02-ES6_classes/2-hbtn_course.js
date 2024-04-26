class HolbertonCourse {
  constructor(name, length, students) {
    if (
      typeof name !== 'string'
      || typeof length !== 'number'
      || !Array.isArray(students)
    ) {
      throw new Error('initi faild Invalid input type');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('Invalid name input type');
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new Error('Invalid number input type');
    }
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value)) {
      throw new Error('Invalid student input type');
    }
    this._students = value;
  }
}

export default HolbertonCourse;
