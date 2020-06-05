class Bubbles {

    constructor(x,y,size) {
        this.size = size;
        this.x = x;
        this.y = y;
    }

    show() {
        noStroke();
        //stroke(255);
        //strokeWeight(3);
        // noFill();
        fill(255,20);
        ellipseMode(CENTER);
        ellipse(this.x,this.y,this.size,this.size);
    }

    jitter() {
        this.x += random(-5,5);
        this.y += random(-5,6);
    }

    remove() {
        if( (this.x + this.size > width) && (this.x - this.size < 0) || 
        (this.y + this.size > height) && (this.y - this.size < 0) )
        {
            this.pop();
        }
    }

}