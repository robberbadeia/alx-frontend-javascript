class Building {
  constructor(sqft) {
    if (
      this.constractor !== Building &&
      typeof this.evacuationWarningMesagge !== "function"
    ) {
      throw new Error(
        "Class extending Building must override evacuationWarningMessage"
      );
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
}

export default Building;
