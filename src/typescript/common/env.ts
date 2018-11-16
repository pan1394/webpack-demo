class URL_OBJECT {
     DEV : string ;
     PROD : string;
}

export class Env { 
    private static mode : string = process.env.NODE_ENV;
    private static DEV = "dev";
    private static PROD = "prod";

    private static CONTEXT_URL : string = "http://localhost:10020/bizServices/";

    private static CONTEXT : URL_OBJECT = {
        DEV : '../../../dummy/',
        PROD : Env.CONTEXT_URL,
    }

    private static get(obj : URL_OBJECT) : string {
        if(this.mode == null){
            this.mode = this.DEV;
        }
        var eValue = this.mode == this.DEV ? obj.DEV : obj.PROD;
        return eValue;
    }

    private static BARCHAR_URL : URL_OBJECT = {
        DEV : 'data.json',
        PROD : ''
    }

    public static getBarChartURL() : string {
       return this.get(this.CONTEXT) + this.get(this.BARCHAR_URL); 
    }
}