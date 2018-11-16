var echars = require("echarts");
var $ =require("jquery");

var mychars = echars.init(document.getElementById("barchart"));
var options ={
    title: { text: 'ECharts 入门示例' },
    tooltip: {},
    xAxis: {
        data: []
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: []
    }]
};
mychars.setOption(options);
var reqStr = '{"key":null,"subject":null,"fields":{"param":{"FAC_ID":"FAC01"}},"serviceId":"DATAREPORT_MANAGEMENT#getTest","cancel":false,"userId":"panyilin","language":null,"systemId":null,"systemVersion":null,"ipAddress":null,"sessionId":null}';
var reqUrl = "http://localhost:10020/bizServices";

/* $.get("../dummy/data.json").done(function (data) {
    
    mychars.setOption({
        xAxis: {
            data: data.cat
        },
        series: [{
            // 根据名字对应到相应的系列
            name: '销量',
            data: data.data
        }]
    })
}); */
 
$.post(reqUrl, reqStr, function(res){
    console.log(res);
    var obj = eval('(' + res + ')');
    //var obj = eval(res);
    //console.log( obj.fields.responseContent);
    var data = obj.fields.responseContent;
    mychars.setOption({
        xAxis: {
            data: data.cat
        },
        series: [{
            // 根据名字对应到相应的系列
            name: '销量',
            data: data.data
        }]
    })
});