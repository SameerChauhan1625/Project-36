class Food {
    constructor(){
        this.image = loadImage("images/Milk.png");
        this.foodStock = 20;
        this.lastFed;
    }

    getfoodStock(){
        var foodStockref = database.ref('foodMilk');
        foodStockref.on("value",function(data){
            foodS = data.val();
        })
    }

    updatefoodStock(stock){
        database.ref('/').update({
            'foodMilk' : stock
        })
    }

    display(){
        var x = 80,y = 100;

        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if(this.foodStock > 0){
            for(var i = 0;i<this.foodStock; i++){
                if(i % 500 == 0){
                    x = 80;
                    y = y + 50;
                    image(this.image,x,y,50,50);
                    x = x + 30;
                }
            }
        }
    }
}