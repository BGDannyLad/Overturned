import { UI } from './testUI.js';

window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    class Game {
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.groundMargin = 80;
            this.displayText = "";
            this.UI = new UI(this);
            this.textCounter = 0;
        }
        update(deltaTime){
            if (this.textCounter >= 250) {
                this.textCounter = 0;
            }
            else if (this.textCounter > 200){
                this.displayText = "poop";
            }
            else if (this.textCounter > 150){
                this.displayText = "peeeepeeeeeee";
            }
            else if (this.textCounter > 100){
                this.displayText = "stinky garbage";
            }
            else if (this.textCounter > 50){
                this.displayText = "it works!! yay!!";
            }
            else{
                this.displayText = "leeeeleeeeeleeeelleeelelelelelele";
            }
            this.textCounter++;
        }
        draw(context){
            this.UI.draw(context, this.displayText)
        }
    }
    const game = new Game(canvas.width, canvas.height);
    let lastTime = 0;

    function animate(timestamp){
        const deltaTime = timestamp - lastTime;
        lastTime = timestamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update(deltaTime);
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate(0);
});