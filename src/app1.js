import './app1.css';
import $ from 'jquery';

// 获取加减乘除四个按钮
const $button1 = $('#add1');
const $button2 = $('#minus1');
const $button3 = $('#mul2');
const $button4 = $('#divide2');
const $number = $('#number');
const n = localStorage.getItem("n");
$number.text(n || 100);

// 获取number里面的内容，并把它变成数字；你点击的时候就变成n+1；再把n放回去；
// 每次改变都存到localStorage里面，这样可以实现当用户刷新的时候还保存着算好的值
$button1.on('click',()=>{
    let n = parseInt($number.text());   
    n += 1;
    localStorage.setItem('n',n);
    $number.text(n);
});
$button2.on('click',()=>{
    let n = parseInt($number.text());   
    n -= 1;
    localStorage.setItem('n',n);
    $number.text(n);
});
$button3.on('click',()=>{
    let n = parseInt($number.text());   
    n *= 2;
    localStorage.setItem('n',n);
    $number.text(n);
});
$button4.on('click',()=>{
    let n = parseInt($number.text());   
    n /= 2;
    localStorage.setItem('n',n);
    $number.text(n);
});