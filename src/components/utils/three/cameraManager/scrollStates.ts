import { useThree } from "@react-three/fiber";

interface ScrollState {
    currentPosition: number[];
    setState: Function;
    updateCameraPosition: Function;
    checkState: Function;
}


class HeroState implements ScrollState{
    currentPosition: number[];
    context: any;
    camera: any;

    constructor(position: number[], context: any) {
        const { camera } = useThree();
        this.currentPosition = position;
        this.camera = camera;
        this.context = context;
    }
    checkState(scrollY: number) {
        if(scrollY > 0.8) {
            this.setState();
        }
    }
    updateCameraPosition() {

    }
    setState(){

    }
}


class ContactState implements ScrollState{
    currentPosition: number[];
    camera: any;
    context: any;

    constructor(position: number[], context: any) {
        const { camera } = useThree();
        this.currentPosition = position;
        this.camera = camera;
    }
    checkState(scrollY: number) {
        if(scrollY <= 0.8) {
            this.setState();
        }
    }
    updateCameraPosition() {

    }
    setState(){
        this.context.setState(new HeroState(this.currentPosition, this.context));
    }
}


export { HeroState, ContactState }