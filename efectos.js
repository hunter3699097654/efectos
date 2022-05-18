class parallaxTiltEffect {
    constructor({element, tiltEffect}) {
        this.element = element;
        this.container = 
        this.element.querySelector(".container");
        this.size = [300, 360];
        [this.w, this.h] = this.size;
        this.mouseOnComponent = false;
        this.handleMouseMove = 
        this.handleMouseMove.bind(this);
        this.handleMouseMoveEnter = 
        this.handleMouseMoveEnter.bind(this);
        this.handleMouseLeave = 
        this.handleMouseLeave.bind(this);
        this.defaultStates = 
        this.defaultStates.bind(this);
        this.setProperty = this.setProperty.bind(this);


        this.init = this.init.bind(this);
        this.init();
    }
    handleMouseMove(event) {
        const {offsetx, offsety} = event;
        let x;
        let y;

        if (this.tiltEffect === "reverse")  {
            x = ((offsetx - (this.w/2)) / 3) / 3;
            y = (-(offsety - (this.h/2)) / 3) / 3;
        }
        else if (this.tiltEfect == "normal") {
            x = (-(offsetx - (this.w/2)) / 3) / 3;
            y = ((offsety - (this.h/2)) / 3) / 3;
        }
        this.setProperty("--ry", x.toFixed(2));
        this.setProperty("--rx", y.toFixed(2));
        this.setProperty("--by", (80 - (x/4).toFixed(2)) + 
        "%");
        this.serProperty("--bx", (50 - (y/4).toFixed(2)) + 
        "%");
    }
    handleMouseEnter() {
        this.mouseOnComponent = true;
        this.container.cassList.add("container--active");
    }
    handleMouseLeave() {
        this.mouseOnComponent = false;
        this.defaultStates();
    }

}