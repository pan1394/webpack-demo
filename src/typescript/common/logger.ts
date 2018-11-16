/**
 * js 编码, 通用方法.
 */

function info(info: String): void {
    console.log(info);
  }
  function warn(warn: String): void {
    console.warn(warn)
  }
  function error(error: any): void{
    console.error(error);
  }
  
 export {info, warn, error}; 