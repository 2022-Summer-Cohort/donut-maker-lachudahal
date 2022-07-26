export default class DonutMaker{
    constructor(donut, autoClicker, multiplier, enableAutoClicker, enableMultiplier){
        this._donut = donut;
        this._autoClicker = autoClicker;
        this._multiplier = multiplier;
        this._autoClickerCost = 100;
        this._multiplierCost = 10;
        this._enableAutoClicker = enableAutoClicker||false;
        this._enableMultiplier = enableMultiplier || false;
    }
    get donut(){
        return parseFloat((this._donut).toFixed(4));
    }
    get autoClicker(){
        return this._autoClicker;
    }
    get multiplier(){
        return this._multiplier;
    }
    get autoClickerCost(){
        return pharseFloat((this._autoClickerCost).toFixed(2));
    }
    get multiplierCost(){
        return pharseFloat((this._multiplierCost).toFixed(2));
    }
    addToDonut(){
        if(this.multiplier >= 1){
            this._donut += (this._multiplier * 0.2);
        }
        if(this._autoClicker >= 1){
            this._donut += this._autoClicker;
        }
        this._donut++;
    }
    buyAutoclicker(){
        if(this._donut >= this._autoClickerCost){
            this._donut -= this._autoClickerCost;
            this._autoClicker++;
            this._autoClickerCost += (this._autoClickerCost * 0.1);
        }
    }
    buyMultiplier(){
        if(this._donut >= this._multiplierCost){
            this._donut -= this._multiplierCost;
            this._multiplier++;
            this._multiplierCost += (this._multiplierCost * 0.1);
        }
    }
    // updateClickPerSecond(){
    //     if(this._autoClicker > 0 || this._multiplier > 0){
    //         this._donut += this._multiplier * Math.pow(1.2, this._autoClicker);
    //     }
    //     return this._donut;
        
    // }

    resetGame(){
        this._donut = 0;
        this._autoClicker = 0;
        this._multiplier = 0;
        this._autoClickerCost = 100;
        this._multiplierCost = 10;
    }
}   
