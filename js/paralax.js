class Circle {

    constructor(element) {
        this.element = element;
        this.size = element.id;
        this.onMouseMove = this.onMouseMove.bind(this);
        this.coef =  element.id == "large_circle" ? 0.3 : -0.6;
        window.addEventListener('mousemove', this.onMouseMove);
        console.log(this.element, this.coef, this.element.style);
    }

    onMouseMove(event){
        var cursor_position = (event.pageX * 100)/document.documentElement.scrollWidth;
        this.element.style.transform = `translateX(${cursor_position * this.coef}px)`;
    }

    static bind() {
        return Array.from(document.getElementsByClassName("base_circle")).map(
            (element) => new Circle(element)
        )
    }

}

Circle.bind()
