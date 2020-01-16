// console.log("Hello World! from my
// メッセージを出力
// console.log("メッセージを出力");

// 変数を出力
// var i = 10;
// console.log(i);

// info,warn,error
// console.info("情報です");

// console.warn("警告です");

// console.error("エラーです");

// var colorName = "red";
// console.log(colorName);

// const TAX_RATE = 1.08;
// console.log(TAX_RATE);

// console.log(10);
// console.log("She's happy.");

// var x = null;
// console.log(x);

// var y;
// console.log(y);

// 後置演算、前置演算
// var x = 10;
// var y = x++;
// console.log(x);
// console.log(y);

// var x = 10;
// var y = ++x;
// console.log(x);
// console.log(y);

// x = 3;
// console.log(x);
// x += 3;
// console.log(x);
// x -= 3;
// console.log(x);
// x *= 3;
// console.log(x);
// x /= 3;
// console.log(x);
// x %= 3;
// console.log(x);

// x = 100 * 13;
// console.log(x);

// function関数
// function getRectangle(height,width) {
//   return height * width;
// }

// console.log(getRectangle(3, 5));

// 関数リテラル
// var getRectangle = function(height, width) {
//   return height * width;
// }

// console.log(getRectangle(3, 5));

// functionコンストラクター
// var getRectangle = new Function('height', 'width', 'return height * width');
// console.log(getRectangle(3, 5));

// 演習
// function calc(price, number){
//   return price * number;
// };

// console.log(calc(100, 13));

// 条件分岐
// var x = 100;
// var x = 99;
// if(x >= 100){
//   console.log('100以上です。');
// }else {
//   console.log('100未満です。');
// }

// var x = 59;

// if(x >= 90){
//   console.log('A');
// }else if(x >= 80){
//   console.log('B');
// }else if(x >= 60){
//   console.log('C');
// }else{
//   console.log('D');
// }

// switch
// var n = 4;

// switch (n) {
//   case 1:
//     console.log('数値は1です。');
//     break;
//   case 2:
//     console.log('数値は2です。');
//     break;
//   case 3:
//     console.log('数値は3です。');
//     break;
//   default:
//     console.log('範囲外です。');
//     break;
// }

// 演習
// var age = 12;

// if(age < 6){
//   console.log('800円');
// }else if(6 <= age && age < 12){
//   console.log('1,800円');
// }else {
//   console.log('4,600円');
// }

// オブジェクト

// number
// var n = 255;
// console.log(n.toString(16));
// console.log(n.toExponential());

// string
// var str = 'こんにちは';
// console.log(str.length);

// console.log(str.charAt(2));

// 演習
// var str = 'red,green,blue';
// console.log(str.split(','));

// 繰り返し処理
// for(var i = 1; i <= 3; i++){
//   console.log(i);
// }

// var i = 1;
// while(i <= 3){
//   console.log(i);
//   i++;
// }

// var i = 1;
// do {
//   console.log(i);
//   i++;
// } while(i <= 3);

// 演習
// var i = 0;
// for(var num = 1; num <= 100; num++){
//   if((num%2) == 0){
//     i += num;
//   }
// };

// console.log(i);

// 配列
// var color = ['Red','Green','Blue'];
// console.log(color[0]);
// console.log(color[1]);
// console.log(color[2]);

// 連想配列
// var user = {name: '山田花子', gender: '女性', birth: '1990//01/01'};
// console.log(user.name);
// console.log(user.gender);
// console.log(user.birth);

// 演習
// var total = 0;
// var score = [100, 90, 80, 70, 60];

// for(var i = 0; i < score.length; i++){
//   total += score[i];
//   console.log(total);
// };

// var ave = total/5;
// console.log(total);
// console.log(ave);