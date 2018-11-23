 
    var echarts = require('echarts/lib/echarts');
    // 引入柱状图
    require('echarts/lib/chart/bar');
    // 引入提示框和标题组件
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/title');
    var $ =require("jquery");
    var env = process.env.NODE_ENV;
    var mychars = echarts.init(document.getElementById("barchart"));
    
    $(function(){
        function setBarcharOpetions(data){
            console.log('xxxx');
            var options ={
                title: { text: 'ECharts 入门示例' },
                tooltip: {},
                xAxis: { data: data.cat },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: data.data
                }]
            };
            mychars.setOption(options);
        }
    
        function ajaxRequest(){
            console.log("env: "+ env)
            if(env == "dev"){
                console.log(1);
                $.get("../../dummy/data.json").done(function (data) { 
                    setBarcharOpetions(data);
                }); 
            }
            else{
                console.log(2);
                var reqStr = '{"key":null,"subject":null,"fields":{"param":{"FAC_ID":"FAC01"}},"serviceId":"DATAREPORT_MANAGEMENT#getTest","cancel":false,"userId":"panyilin","language":null,"systemId":null,"systemVersion":null,"ipAddress":null,"sessionId":null}';
                var reqUrl = "http://localhost:10020/bizServices";
                $.post(reqUrl, reqStr, function(res){
                    console.log(res);
                    var obj = eval('(' + res + ')'); 
                    var data = obj.fields.responseContent;
                    setBarcharOpetions(data);
                });
    
            }
        }
        
    
        ajaxRequest( );

    });
    



    
 
 
