// function $(Nid) {
//     return document.getElementById(Nid);
// }
// let ee = /[\u4e00-\u9fa5]/;
// let een = /^\d+$/;
// let eew = /^\d{11}$/;
// let lis = document.getElementsByClassName('li1');
// let li1s = document.getElementsByClassName('li11');
// let sf1 = $('sf1');
// let sf2 = $('sf2');
// let sf3 = $('sf3');
// let sf4 = $('sf4');
// let sf5 = $('sf5');
// for (item of lis) {
//     item.onclick = function () {
//         for (ite of lis) {
//             ite.firstElementChild.style.display = "none";
//         }
//         this.firstElementChild.style.display = "block";
//     }
// }
// for (item of li1s) {
//     item.onclick = function () {
//         for (ite of li1s) {
//             ite.style.backgroundColor = "white";
//             ite.style.color = "gray";
//             ite.style.border = 'none'
//         }
//         this.style.backgroundColor = "rgb(225,248,255)";
//         this.style.borderRight = '3px solid rgb(15,156,254)';
//         this.style.color = "rgb(0,156,247)";
//         if (this == li1s[0]) {
//             sf1.style.display = 'flex';
//             sf2.style.display = 'none';
//             sf3.style.display = 'none';
//             sf4.style.display = 'none';
//             sf5.style.display = 'none';
//         }
//         if (this == li1s[1]) {
//             sf1.style.display = 'none';
//             sf2.style.display = 'flex';
//             sf3.style.display = 'none';
//             sf4.style.display = 'none';
//             sf5.style.display = 'none';
//         }
//         if (this == li1s[2]) {
//             sf1.style.display = 'none';
//             sf2.style.display = 'none';
//             sf3.style.display = 'flex';
//             sf4.style.display = 'none';
//             sf5.style.display = 'none';
//         }
//         if (this == li1s[3]) {
//             sf1.style.display = 'none';
//             sf2.style.display = 'none';
//             sf3.style.display = 'none';
//             sf4.style.display = 'flex';
//             sf5.style.display = 'none';
//         }
//         if (this == li1s[4]) {
//             sf1.style.display = 'none';
//             sf2.style.display = 'none';
//             sf3.style.display = 'none';
//             sf4.style.display = 'none';
//             sf5.style.display = 'flex';
//         }
//     }
// }
// let tianjias = document.getElementsByClassName('tianjia');
// let sfj1 = $('sfj1')
// let sfjz1 = $('sfjz1')
// tianjias[0].onclick = function () {
//     sfj1.style.display = 'block';
//     sfjz1.className = 'animate__animated animate__fadeInDown';
// }
// let sfj2 = $('sfj2')
// let sfjz2 = $('sfjz2')
// tianjias[1].onclick = function () {
//     sfj2.style.display = 'block';
//     sfjz2.className = 'animate__animated animate__zoomIn';

// }
// let sfj3 = $('sfj3')
// let sfjz3 = $('sfjz3')

// tianjias[2].onclick = function () {
//     sfj3.style.display = 'block';
//     sfjz3.className = 'animate__animated animate__slideInDown';

// }
// let sfj4 = $('sfj4')
// let sfjz4 = $('sfjz4')

// tianjias[3].onclick = function () {
//     sfj4.style.display = 'block';
//     sfjz4.className = 'animate__animated animate__fadeIn';
// }
// let sfj5 = $('sfj5')
// let sfjz5 = $('sfjz5')
// tianjias[4].onclick = function () {
//     sfj5.style.display = 'block';
//     sfjz5.className = 'animate__animated animate__fadeInTopRight';
// }
// let quxiaos = document.getElementsByClassName('quxiao');
// for (let i = 0; i < quxiaos.length; i++) {
//     quxiaos[i].onclick = function () {
//         this.parentNode.parentNode.parentNode.style.display = "none";
//     }
// }
// window.onload = function () {
//     fen1();
//     fen2();
//     fen3();
//     fen4();
//     fen5();
// } 