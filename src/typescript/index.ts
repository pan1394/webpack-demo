import * as Logger from './common/logger';  //导入通用模块Logger.
//import * as jquery from 'jquery';           //使用第三方js模块jquery.
import {Env} from './common/env';
import {Greeter} from './sample/Sample';
import {HttpClient} from './http';

 
Logger.info('Hello World');
Logger.warn('Hello World');
Logger.error('Hello World');
function info2(){
    Logger.info('I am a twice clicked.');
}

function initilize(){   
    var greet : Greeter = new Greeter('world');
    var client : HttpClient = new HttpClient();
    Logger.info(Env.getBarChartURL());
    Logger.info('ts -> Looks like we are in ' + greet.greet() );
    Logger.info('Typescript!');
    //client.doRequest();
}

initilize();

//window.onload = initilize;

