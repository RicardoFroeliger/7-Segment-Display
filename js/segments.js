class Segments {
    constructor(offColor) {
        this.on = 'red';
        this.off = offColor;
    };

    A(c) {
        c === 1 ? fill(this.on) : fill(this.off); 
        rect(width/2 - 72, height/2 - 192, 144, 24);
        triangle(width/2 - 72, height/2 - 192, width/2 - 72, height/2 - 192 + 24, width/2 - 72 - 12, height/2 - 192 + 12);    
        triangle(width/2 - 72 + 144, height/2 - 192, width/2 - 72 + 144, height/2 - 192 + 24, width/2 - 72 + 144 + 12, height/2 - 192 + 12);
    };
    
    B(c) {
        c === 1 ? fill(this.on) : fill(this.off);
        rect(width/2 + 78, height/2 - 162, 24, 144); 
        triangle(width/2 + 78, height/2 - 162, width/2 + 78 + 24, height/2 - 162, width/2 + 78 + 12, height/2 - 162 - 12);
        triangle(width/2 + 78, height/2 - 162 + 144, width/2 + 78 + 24, height/2 - 162 + 144, width/2 + 78 + 12, height/2 - 162 + 144 + 12);
    };

    C(c) {
        c === 1 ? fill(this.on) : fill(this.off);
        rect(width/2 + 78, height/2 + 18, 24, 144);
        triangle(width/2 + 78, height/2 - 162 + 180, width/2 + 78 + 24, height/2 - 162 + 180, width/2 + 78 + 12, height/2 - 162 - 12 + 180);
        triangle(width/2 + 78, height/2 - 162 + 144 + 180, width/2 + 78 + 24, height/2 - 162 + 144 + 180, width/2 + 78 + 12, height/2 - 162 + 144 + 12 + 180);
    };

    D(c) {
        c === 1 ? fill(this.on) : fill(this.off);
        rect(width/2 - 72, height/2 + 168, 144, 24);
        triangle(width/2 - 72, height/2 - 192 + 360, width/2 - 72, height/2 - 192 + 24 + 360, width/2 - 72 - 12, height/2 - 192 + 12 + 360);    
        triangle(width/2 - 72 + 144, height/2 - 192 + 360, width/2 - 72 + 144, height/2 - 192 + 24 + 360, width/2 - 72 + 144 + 12, height/2 - 192 + 12 + 360);
    };

    E(c) {
        c === 1 ? fill(this.on) : fill(this.off);
        rect(width/2 - 102, height/2 + 18, 24, 144);
        triangle(width/2 + 78 - 180, height/2 - 162 + 180, width/2 + 78 + 24 - 180, height/2 - 162 + 180, width/2 + 78 + 12 - 180, height/2 - 162 - 12 + 180);
        triangle(width/2 + 78 - 180, height/2 - 162 + 144 + 180, width/2 + 78 + 24 - 180, height/2 - 162 + 144 + 180, width/2 + 78 + 12 - 180, height/2 - 162 + 144 + 12 + 180);
    };

    F(c) {
        c === 1 ? fill(this.on) : fill(this.off);
        rect(width/2 - 102, height/2 - 162, 24, 144);
        triangle(width/2 + 78 - 180, height/2 - 162, width/2 + 78 + 24 - 180, height/2 - 162, width/2 + 78 + 12 - 180, height/2 - 162 - 12);
        triangle(width/2 + 78 - 180, height/2 - 162 + 144, width/2 + 78 + 24 - 180, height/2 - 162 + 144, width/2 + 78 + 12 - 180, height/2 - 162 + 144 + 12);
    };

    G(c) {
        c === 1 ? fill(this.on) : fill(this.off);
        rect(width/2 - 72, height/2 - 12, 144, 24);
        triangle(width/2 - 72, height/2 - 192 + 180, width/2 - 72, height/2 - 192 + 24 + 180, width/2 - 72 - 12, height/2 - 192 + 12 + 180);    
        triangle(width/2 - 72 + 144, height/2 - 192 + 180, width/2 - 72 + 144, height/2 - 192 + 24 + 180, width/2 - 72 + 144 + 12, height/2 - 192 + 12 + 180);
    };
};