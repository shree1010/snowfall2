class Snowfall
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("snow.png");
		//this.body=Body(random(0,255),random(0,255),random(0,255));
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
		var snowfallPos=this.body.position;
		//snowfallPos.x=random(100,700);	
		var angle = this.body.angle;
		push()
		translate(snowfallPos.x, snowfallPos.y);
		// rectMode(CENTER);
		rotate(angle)
		//fill("black");
		imageMode(CENTER);
		//ellipseMode(CENTER);
		image(this.image,0,0,30,30)
		//ellipse(snowfallPos.x,snowfallPos.y,this.r*2,this.r*2)
		pop()
			
	}

}