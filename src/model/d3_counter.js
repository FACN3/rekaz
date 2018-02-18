class Circle {
  constructor(id, radius, xPos, yPos, state) {
    this.id = id;
    this.radius = radius;
    this.xPos = xPos;
    this.yPos = yPos;
    this.currentState = state;
    this.previousState = 0;
  }

  updateState(state) {
    this.previousState = this.currentState;
    this.currentState = state;
  }
}

export default Circle;
