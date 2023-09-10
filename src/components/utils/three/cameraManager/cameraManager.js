const { HeroState } = require("./scrollStates");

class CameraManager {
    
    constructor(initialValue) {
        this.prevPosition = [0,0,0];
        this.currentPosition = [0,0,0];
        this.state = new HeroState(this.currentPosition, this);
    }


    get prevPosition() {
        return this.prevPosition;
    }

    get currentPosition() {
        return this.currentPosition;
    }

    refresh(scrollY) {
        this.state.checkState(scrollY);
    }

}