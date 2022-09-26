class Televisor{

    private canalActual:number;
    private volumenActual:number;
    private estaPrendido:boolean;

    constructor(paramCanal:number, paramVolumen:number){
        this.canalActual=paramCanal;
        this.volumenActual=paramVolumen;
        this.estaPrendido=false;

    }


    public getCanalActual():number{
        return this.canalActual;
    }
    public setCanal(paramCanal:number):void{
        this.canalActual=paramCanal;
    }
    public getVolumenActual():number{
        return this.volumenActual;
    }
    public setVolumen(paramVolumen:number):void{
        this.canalActual=paramVolumen;
    }

}

class SmartTV extends Televisor{

    public tieneWifi:boolean;
    public esTactil:boolean;

    constructor(pWifi:boolean, pTactil:boolean){
        super(10, 12);
        this.tieneWifi=pWifi;
        this.esTactil=pTactil;
    }

    public getwifi():void{
        

    }

}

let smartv1:SmartTV = new SmartTV (true, true) ;



console.log(smartv1);