// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker2{
    constructor(atts){
        this.length = atts.length;
        this.height = atts.height;
        this.width = atts.width;
    };
    volume(){
        return this.length * this.width * this.height;
    };
    surfaceArea(){
        return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    };
};
   let cuboid2 = new CuboidMaker({
       length: 4, 
       width: 5, 
       height: 5
    });

class CubeMaker extends CuboidMaker2{
    constructor(CubeMakerAtts){
        super(CubeMakerAtts)
        };
    volume() {
        return Math.pow(this.length, 3);
    };
    surfaceArea(){
        return 6 * (Math.pow(this.length, 2))
    };
};
let cube = new CubeMaker({
    length: 4,
    width: 4, 
    height: 4
});
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.volume());
console.log(cube.surfaceArea());
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.