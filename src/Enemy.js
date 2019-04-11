class Enemy extends GameObject{
	constructor(type,container,x,y,width,height,velX,velY,targetX, targetY,bg,src){
		super(type,container,x,y,width,height,velX,velY,targetX, targetY,bg,src);
	}		
	tick(){
		this.x=this.x+this.velX;
		this.y=this.y+this.velY;
		//this.x 값을 증가시켜나가다가, 적군과 충돌했다면 제거
		//총알인 나와 적군은 1:多 관계이다!! 따라서 반복문을 돌려야한다
		for(var i=0;i<objectManager.objectArray.length;i++){			
			var obj=objectManager.objectArray[i];
			//obj의 정체가 적군인 경우에만 ENEMY 인 경우에만...
			if(obj.type=="HERO"){
				if(collisionCheck(this, obj)){//충돌했다면..
					objectManager.removeObject(obj);		
					objectManager.removeObject(this);
				}
			}
		}

		//적군을 무사히 피한경우, 화면밖으로 나가면 제거 
		if(this.x+this.width > 1200||this.y+this.height > 700){
			objectManager.removeObject(this);
		}
	}
}