class Boy{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:1,
			friction:0

			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("boy.png");
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var boyPos=this.body.position;	
		push()
		translate(boyPos.x, boyPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,100,200)
		pop()
 }
}