import * as Logger from './common/logger';  //导入通用模块Logger.
import * as jquery from 'jquery';           //使用第三方js模块jquery.

 
Logger.info('Hello World');
Logger.warn('Hello World');
Logger.error('Hello World');
function info2(){
    Logger.info('I am a twice clicked.');
}

function doSth(){ 
    var obj = document.getElementById('a');
    obj.onclick = info2;
    // $('#a').click(function(){  
    //     info2();
    // }); 
}

window.onload = doSth;

