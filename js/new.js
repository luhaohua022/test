const app = new PIXI.Application(1500,600);
/*
 *容器对象，可存放显示对象，其实app.stage本身就是一个container。
 *使用container存放各自界面的显示元素，即一个container一个界面。
 *主要使用 Container.addChild 和 Container.removeChild 方法控制界面上显示对象的展示。
 */
const containerMenu = new PIXI.Container();
const containerMain = new PIXI.Container();
const style = {
  fontFamily: 'Arial',
  fontSize: 40,
  fontWeight: 'bold',
  fill:'#ffffff',
  // 描边
  stroke: '#4a1850',
  // 描边宽度
  strokeThickness: 4,
  // 字体阴影
  dropShadow: true,
  // 阴影颜色
  dropShadowColor: '#0000ee',
  dropShadowBlur: 4,
  // 阴影倾斜
  dropShadowAngle: Math.PI / 6,
  dropShadowDistance: 6,
};  //文本字体样式
const menuItem0 = new PIXI.Text('宋韵文化',style);
const menuItem1 = new PIXI.Text('历史痕迹',style);
const menuItem2 = new PIXI.Text('文化遗产',style);
const bg = new PIXI.Sprite.fromImage('res/bg.jpg');

menuItem0.x = 300;
menuItem0.y = 500;

menuItem1.x = 600;
menuItem1.y = 500;

menuItem2.x = 900;
menuItem2.y = 500;
const  jianzhu= new PIXI.Sprite.fromImage('res/jianzhu.jpg');
const lishi = new PIXI.Sprite.fromImage('res/lishi.jpg');
const  yichan= new PIXI.Sprite.fromImage('res/yichan.jpg');
const close = new PIXI.Sprite.fromImage('res/close.png');

jianzhu.width = 1500;
jianzhu.height = 600;

bg.width = 1500;
bg.height = 600;

yichan.width =1500;
yichan.height = 600;

lishi.width = 1500;
lishi.height = 600;

close.width = 100;
close.height = 100;
close.buttonMode = true;
close.interactive = true;

menuItem0.buttonMode = true;
menuItem0.interactive = true;
menuItem0.on('click',tojianzhu);

menuItem1.buttonMode = true;
menuItem1.interactive = true;
menuItem1.on('click',tolishi);

menuItem2.buttonMode = true;
menuItem2.interactive = true;
menuItem2.on('click',toyichan);

containerMenu.addChild(menuItem0);
containerMenu.addChild(menuItem1);
containerMenu.addChild(menuItem2);

document.body.appendChild(app.view);
app.stage.addChild(bg);
app.stage.addChild(containerMenu);

function tojianzhu(){
  containerMenu.addChild(jianzhu);
  jianzhu.addChild(close);
  close.on('click',closejianzhu);
}
function tolishi(){
  containerMenu.addChild(lishi);
  lishi.addChild(close);
  close.on('click',closelishi);
}
function toyichan(){
  containerMenu.addChild(yichan);
  yichan.addChild(close);
  close.on('click',closeyichan);
}

function closejianzhu(){
  containerMenu.removeChild(jianzhu);
}
function closelishi(){
  containerMenu.removeChild(lishi);
}
function closeyichan(){
  containerMenu.removeChild(yichan);
}
