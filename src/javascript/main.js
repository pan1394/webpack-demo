import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css'; 

//import "https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css";

import 'bootstrap/dist/js/bootstrap.min.js';

function print( ){
    var str = "hello world";
    console.log(str);
}

function popupMsg(  ){
    var str = "Hi....";
    alert(str);
}

function jump(){
    window.location="barchart.html";
}

$('#a').click(print);
$('#b').click(popupMsg);
$('#c').click(jump);
console.log($("#a"));
export {print, popupMsg};

console.log('main.js -> Looks like we are in ', process.env.NODE_ENV);

