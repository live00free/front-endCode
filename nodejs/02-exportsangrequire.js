let hello=require("./01-helloword");
let call=`Hello,${hello.xiaoming.name},你今年是岁${hello.getUserAg(hello.xiaoming)}吗？`;
console.log(call);