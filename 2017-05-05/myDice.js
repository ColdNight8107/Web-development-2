function Dice(){
    this.x = 100; //屬性的宣告
    this.y = 100;
    this.num = 3;
    this.showNum = function(){ //方法的宣告
        alert(this.num);
    }

    this.play = function(){
        var n = Math.random();
        n = Math.floor(n*6) + 1; //轉換為亂數骰子點數
        this.num = n;
    }
}