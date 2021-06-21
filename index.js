// Your code here

// Define a Polygon class. Polygon will accept an Array of integers as a parameter, 
// which will represent each side of a shape.

class Polygon {
    constructor(side) {
        this.side = side
    }

    get countSides(){
        return this.side.length
    }

    get perimeter() {
        return this.side.length * 5
    }  
}

// FINISH LATER 

class Triangle extends Polygon {
    
    get isValid() {

    }
}