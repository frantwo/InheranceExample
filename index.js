// Create a class Rectangle with:

// A property width
// A property height
// A method constructor(width,height)
// A method calculatePerimeter()
// A method calculateArea()

// Create a class Square that extends Rectangle add with:

// A property side (equals to the width and height)
// A method constructor(side)



class Rectangle {
    constructor(heigthValue, widthValue) {
        this.heigth = heigthValue;
        this.width = widthValue;
    }
    calculatePerimeter() {
        return (this.heigth * 2 + this.width * 2)
    }

    calculateArea() {
        return (this.heigth * this.width)
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side)
        this.side = side;
    }

}

let r1 = new Rectangle(6, 7)
console.log('Perimeter of r1 =', r1.calculatePerimeter()) // 26
console.log('Area of r1 =', r1.calculateArea()) // 42

var s1 = new Square(5)
console.log('Perimeter of s1 =', s1.calculatePerimeter()) // 20
console.log('Area of s1 =', s1.calculateArea()) // 25

var s2 = new Square(10)
console.log('Perimeter of s2 =', s2.calculatePerimeter()) // 40
console.log('Area of s2 =', s2.calculateArea()) // 100