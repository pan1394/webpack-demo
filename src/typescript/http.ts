
import * as http from "http";

export class HttpClient{
     
    public getRequest() : void {
        var req=http.request('../../../dummy/data.json',function(res:any){
            res.setEncoding("utf-8");
            res.on("data",function(chunk:any){
                console.log(chunk.toString())
            });
            console.log(res.statusCode);
        });
        req.on("error",function(err:any){
            console.log(err.message);
        });
        req.end();
    }

    public postRequest(postData:string) : void {
        var options={
            hostname:'localhost',
            port:10020,
            path:'/bizServices',
            method:'POST',
            headers:{
                //'Content-Type':'application/x-www-form-urlencoded',
                'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
                'Content-Length':Buffer.byteLength(postData)
            }
        };
        var req=http.request(options, function(res) {
            console.log('Status:',res.statusCode);
            console.log('headers:',JSON.stringify(res.headers));
            res.setEncoding('utf-8');
            res.on('data',function(chun){
                console.log('body分隔线---------------------------------\r\n');
                console.info(chun);
            });
            res.on('end',function(){
                console.log('No more data in response.********');
            });
        });
        req.on('error',function(err){
            console.error(err);
        });
        req.end();
    }   
    
    
    public doRequest():void{
        var mode:string = process.env.NODE_ENV;
        if(mode == 'dev'){
            this.getRequest();
        }else{
            var reqStr = '{"key":null,"subject":null,"fields":{"param":{"FAC_ID":"FAC01"}},"serviceId":"DATAREPORT_MANAGEMENT#getTest","cancel":false,"userId":"panyilin","language":null,"systemId":null,"systemVersion":null,"ipAddress":null,"sessionId":null}';
            this.postRequest(reqStr);
        }
    }
}


 