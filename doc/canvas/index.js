/**
 * Created by LvHongwang on 2017-05-11.
 */
/*Javascript源代码*/

var canvas = document.getElementById('gbcanvas'), // 这里通过gbCanvas获取canvas对象
    context = canvas.getContext('2d'); //这里通过canvas获取处理API的上下文context
context.beginPath(); //开始准备绘制新的图形
context.moveTo(150, 100); //开始设置起始绘制坐标位置
context.lineTo(300, 200); //开始设置直线绘制结束的坐标位置
context.lineTo(199, 300);
context.lineJoin = 'miter';//连接样式，round，bevel
context.lineWidth = 20; //设置直线粗细20px
context.strokeStyle = '#DD4814'; //设置直线颜色
context.lineCap = 'round';
// context.lineCap = 'butt'; //这里设置直线两端的样式为"buttn"，缺省值
context.stroke(); //开始正式绘制一条直线


//定义曲线的相关设置属性
var x = 200, y = 150, radius = 60, startAngle = 0.5 * Math.PI, endAngle = 1.5 * Math.PI, counterClockWise = false;
context.beginPath();
context.arc(x, //定义圆心x坐标
    y, //定义圆心y坐标
    radius, //半径
    startAngle, //起始角度
    endAngle, //结束角度
    counterClockWise //是否是逆时针方向
);
context.strokeStyle = 'black';
context.lineWidth = 15;
context.stroke();

//二次曲线
// context.beginPath();
// context.moveTo(100, 200);
// context.quadraticCurveTo(150, 50, 200, 200);
// context.lineWidth = 20;
// context.strokeStyle = '#DD4814';
// context.stroke();

// 贝塞尔曲线
// context.beginPath();
// context.moveTo(188, 130);
// context.bezierCurveTo(140, 10, 388, 10, 388, 170); //相对于二次曲线，这里增加了一个控制点来生成更复杂的曲线类型
// context.lineWidth = 20;
// context.strokeStyle = '#DD4814';
// context.stroke();

context.beginPath();
context.moveTo(100, 20);
context.lineTo(200, 160);
context.quadraticCurveTo(230, 200, 250, 120);
context.bezierCurveTo(290, -40, 300, 200, 400, 150);
context.lineTo(500, 90);
context.lineWidth = 15;
context.strokeStyle = '#DD4814';
context.stroke();

//以上代码中我们使用lineTo,  quadraticCurveTo,  bezierCurveTo 等方法来绘制连接多个HTML5路经，生成完整的一条曲线
//相关的方法和前面我们介绍的绘制直线及其曲线的方法参数一致

// arcTo生成矩形圆角效果
//定义矩形宽度
var rectWidth = 200;
//定义矩形高度
var rectHe;
ight = 100;
//定义绘制起始点
var rectX = 189, rectY = 50;
//定义圆角的半径
var cornerRadius = 50;
context.beginPath();
context.moveTo(rectX, rectY);
context.lineTo(rectX + rectWidth - cornerRadius, rectY);
context.arcTo(rectX + rectWidth, rectY, rectX + rectWidth, rectY + cornerRadius, cornerRadius);
context.lineWidth = 15;
context.stroke()

console.log(context);
clearContext(context);

// drawClose(context)
drawRect(context);

function clearContext(context) {
    context.clearRect(0, 0, 600, 600);//清除画布上的指定区域；
}
function drawRect(context) {
    context.beginPath();
    context.rect(100, 50, 200, 200);
    context.fillStyle = '#DD4814';
    context.fill(); //这里我们使用颜色填充
    context.lineWidth = 10;
    context.strokeStyle = 'orange';
    context.stroke();
}
function drawClose(context) {
    //这里开始生成图形
    context.beginPath();
    context.moveTo(170, 80);
    context.bezierCurveTo(130, 100, 130, 150, 230, 150);
    context.bezierCurveTo(250, 180, 320, 180, 340, 150);
    context.bezierCurveTo(420, 150, 420, 120, 390, 100);
    context.bezierCurveTo(430, 40, 370, 30, 340, 50);
    context.bezierCurveTo(320, 5, 250, 20, 250, 50);
    context.bezierCurveTo(200, 5, 150, 20, 170, 80);
    //以下我们完成图形的闭合
    context.closePath();
    context.lineWidth = 15;
    context.strokeStyle = '#DD4814';
    context.stroke();
}