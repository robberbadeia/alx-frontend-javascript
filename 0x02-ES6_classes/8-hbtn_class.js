class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Define bahavior when cast to number
  valueOf() {
    return this._size;
  }

  // Define behaviour when cast to string
  toString() {
    return this._location;
  }
}

export default HolbertonClass;
