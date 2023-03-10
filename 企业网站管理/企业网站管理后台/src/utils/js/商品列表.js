let a2 = 0;
let aaa2 = true;
//动态渲染数据
let fen2 = function () {
    function sse() {
        let sf2s = localStorage.sf2;
        if (sf2s == undefined || sf2s == '') {
            a2 = 0;
        } else {
            let sf2r = sf2s.split(',');
            a2 = sf2r[sf2r.length - 1][0];
        }
    }
    sse();
    let sf2s = localStorage.sf2;
    let tbody2 = $('tbody2');
    let s = '';
    if (sf2s == undefined || sf2s == '') {
        s += `<tr>
                <td colspan='11' align='center' style='color:red;'>暂无数据</td>
                </tr>`;
        tbody2.innerHTML = s;
    } else {
        let sf2r = sf2s.split(',');
        let e = 0;
        let num = 0;
        for (let i = 0; i < sf2r.length; i++) {
            let sf2rr = sf2r[i].split("+");
            if (sf2r[i] != '') {
                e++
                ++num;
                s += `<tr  class='shai animate__animated animate__lightSpeedInLeft'>
                        <td><input type="checkbox" name="select" class='ck2'index='${sf2rr[0]}'></td>
                        <td>${sf2rr[1]}</td>
                        <td>${sf2rr[2]}</td>
                        <td>${sf2rr[3]}</td>
                        <td>${sf2rr[4]}</td>                     
                        <td><button class="iconfont icon-xiugai xiu1"onclick=xiu2(${sf2rr[0]})>编辑</button>
                            <button class="iconfont icon-shanchusekuai shan1"onclick=shan2(${sf2rr[0]})>删除</button>
                     </tr>`
            }
        }
        if (e == 0) {
            s += `<tr>
                    <td colspan='6' align='center' style='color:red;'>暂无数据</td>
                    </tr>`;
            tbody2.innerHTML = s;
        }
        tbody2.innerHTML = s;
    }
}
//添加

function tianjia2() {
    if (aaa2 == true) {
        aaa2 = true;
        let sfjf2 = $('sfjf2').value;
        let sfjm2 = $('sfjm2').value;
        let sfjl2 = $('sfjl2').value;
        let sfjp2 = $('sfjp2').value;
        let sf2s = localStorage.sf2;
        if (sf2s == undefined || sf2s == '') {
            let abo = false;
            if (sfjf2 == '' || sfjf2 == undefined) {
                alert('编号为数字且不得为空')
                abo = true;
                return
            }
            if (!(een.test(sfjf2))) {
                alert('编号为数字且不得为空')
                abo = true;
                return
            }
            if (sfjm2 == '' || sfjm2 == undefined) {
                alert('请输入商品名称且不得为空')
                abo = true;
                return
            }
            if (!(ee.test(sfjm2))) {
                alert('请输入商品名称且不得为空')
                abo = true;
                return
            }
            if (sfjl2 == '' || sfjl2 == undefined) {
                alert('请输入商品分类且不得为空')
                abo = true;
                return
            }
            if (!(ee.test(sfjl2))) {
                alert('请输入商品分类且不得为空')
                abo = true;
                return
            }
            if (sfjp2 == '' || sfjp2 == undefined) {
                alert('请添加日期且不得为空')
                abo = true;
                return
            }
            if (abo == false) {
                a2++;
                sf2s = a2 + '+' + sfjf2 + '+' + sfjm2 + '+' + sfjl2 + '+' + sfjp2;
                localStorage.sf2 = sf2s;
                window.onload();
                alert('添加成功');
                let sfj2 = $('sfj2');
                sfj2.style.display = "none";
                $('sfjf2').value = '';
                $('sfjm2').value = '';
                $('sfjl2').value = '';
                $('sfjp2').value = '';
                return
            }

        } else {
            let sf2r = sf2s.split(',');
            let abo = false;
            if (sfjf2 == '' || sfjf2 == undefined) {
                alert('编号为数字且不得为空')
                abo = true;
                return
            }
            if (!(een.test(sfjf2))) {
                alert('编号为数字且不得为空')
                abo = true;
                return
            }
            if (sfjm2 == '' || sfjm2 == undefined) {
                alert('请输入商品名称且不得为空')
                abo = true;
                return
            }
            if (!(ee.test(sfjm2))) {
                alert('请输入商品名称且不得为空')
                abo = true;
                return
            }
            if (sfjl2 == '' || sfjl2 == undefined) {
                alert('请输入商品分类且不得为空')
                abo = true;
                return
            }
            if (!(ee.test(sfjl2))) {
                alert('请输入商品分类且不得为空')
                abo = true;
                return
            }
            if (sfjp2 == '' || sfjp2 == undefined) {
                alert('请添加日期且不得为空')
                abo = true;
                return
            }
            if (abo == false) {
                a2++;
                sf2r[sf2r.length] = a2 + '+' + sfjf2 + '+' + sfjm2 + '+' + sfjl2 + '+' + sfjp2;
                sf2s = sf2r;
                localStorage.sf2 = sf2s;
                window.onload();
                alert('添加成功');
                let sfj2 = $('sfj2');
                sfj2.style.display = "none";
                $('sfjf2').value = '';
                $('sfjm2').value = '';
                $('sfjl2').value = '';
                $('sfjp2').value = '';
                return;
            }
        }
    }

}

//删除数据
function shan2(that) {
    let sf2s = localStorage.sf2;
    let sf2r = sf2s.split(',');
    for (let i = 0; i < sf2r.length; i++) {
        let sf2rr = sf2r[i].split("+");
        if (sf2rr[0] == that) {
            if (confirm('是否删除' + sf2rr[1] + '这条数据')) {
                sf2r.splice(i, 1);
            } else {
                break
            }
        }
    }
    sf2s = sf2r;
    localStorage.sf2 = sf2s;
    window.onload();
}

//修改
function xiu2(that) {
    let bbb = 0;
    aaa2 = false;
    let sf2s = localStorage.sf2;
    let sf2r = sf2s.split(',');
    for (let i = 0; i < sf2r.length; i++) {
        let sf2rr = sf2r[i].split("+");
        if (that == sf2rr[0]) {
            bbb = i;
            sfj2.style.display = 'block';
            $('sfjf2').value = sf2rr[1];
            $('sfjm2').value = sf2rr[2];
            $('sfjl2').value = sf2rr[3];
            $('sfjp2').value = sf2rr[4];
        }
        let tianjia2 = $('tianjia2');

        tianjia2.onclick = function () {
            if (aaa2 == false) {
                let sfjf2 = $('sfjf2').value;
                let sfjm2 = $('sfjm2').value;
                let sfjl2 = $('sfjl2').value;
                let sfjp2 = $('sfjp2').value;
                let sf2s = localStorage.sf2;
                let sf2r = sf2s.split(',');
                let abo = false;
                if (sfjf2 == '' || sfjf2 == undefined) {
                    alert('编号为数字且不得为空')
                    abo = true;
                    return
                }
                if (!(een.test(sfjf2))) {
                    alert('编号为数字且不得为空')
                    abo = true;
                    return
                }
                if (sfjm2 == '' || sfjm2 == undefined) {
                    alert('请输入商品名称且不得为空')
                    abo = true;
                    return
                }
                if (!(ee.test(sfjm2))) {
                    alert('请输入商品名称且不得为空')
                    abo = true;
                    return
                }
                if (sfjl2 == '' || sfjl2 == undefined) {
                    alert('请输入商品分类且不得为空')
                    abo = true;
                    return
                }
                if (!(ee.test(sfjl2))) {
                    alert('请输入商品分类且不得为空')
                    abo = true;
                    return
                }
                if (sfjp2 == '' || sfjp2 == undefined) {
                    alert('请添加日期且不得为空')
                    abo = true;
                    return
                }

                if (abo == false) {
                    let aa2 = that + '+' + sfjf2 + '+' + sfjm2 + '+' + sfjl2 + '+' + sfjp2;
                    sf2r[bbb] = aa2;
                    sf2s = sf2r;
                    localStorage.sf2 = sf2s;
                    window.onload();
                    alert('修改成功');
                    let sfj2 = $('sfj2');
                    sfj2.style.display = "none";
                    $('sfjf2').value = '';
                    $('sfjm2').value = '';
                    $('sfjl2').value = '';
                    $('sfjp2').value = '';
                    return;
                }

            }
        }
    }
}
//查找数据
function chazhao22(that) {
    let sf2s = localStorage.sf2;
    let sf2r = sf2s.split(',');
    let num = false;
    let tbody2 = document.getElementById('tbody2');
    for (let i = 0; i < sf2r.length; i++) {
        let sf2rr = sf2r[i].split("+");
        if (sf2rr[0] == that.value) {
            s = `<tr  class='shai animate__animated animate__fadeInUp'>
            <td><input type="checkbox" name="select" class='ck2'index='${sf2rr[0]}')></td>
            <td>${sf2rr[1]}</td>
            <td>${sf2rr[2]}</td>
            <td>${sf2rr[3]}</td>
            <td>${sf2rr[4]}</td>                     
            <td><button class="iconfont icon-xiugai xiu1"onclick=xiu1(${sf2rr[0]})>编辑</button>
                <button class="iconfont icon-shanchusekuai shan1"onclick=shan1(${sf2rr[0]})>删除</button>
         </tr>`
            tbody2.innerHTML = s;
            num = true;
            break;
        } else {
            num = false;
        }
    }
    if (that.value == 0) {
        return fen2();

    }
    if (num == false) {
        s = `<tr>
                <td colspan='11' align='center' style='color:red;'>暂无数据</td>
                </tr>`;
        tbody2.innerHTML = s;
    }
}

//全选
let quanx2 = $('quanx2');
let selectList2 = document.getElementsByClassName("ck2")
quanx2.onclick = function () {
    for (let i = 0; i < selectList2.length; i++)
        if (quanx2.checked) {
            selectList2[i].checked = true
        } else {
            selectList2[i].checked = false
        }
}
//选中删除
function xuanshan2() {
    let selectList = document.getElementsByClassName('ck2');
    let sf2s = localStorage.sf2;
    let sf2r = sf2s.split(',');
    for (let i = 0; i < selectList.length; i++) {
        if (selectList[i].checked) {
            for (var j = 0; j < sf2r.length; j++) {
                let sf2rr = sf2r[j].split("+");
                let aaa = selectList[i].getAttribute('index');
                if (aaa == sf2rr[0]) {
                    if (confirm('是否删除' + sf2rr[1] + '这条数据')) {
                        sf2r.splice(j, 1);
                        alert('已删除' + sf2rr[1] + '这条数据')
                    } else {
                        alert('已取消删除' + sf2rr[1] + '这条数据')
                    }
                }
            }
        }
    }
    sf2s = sf2r;
    localStorage.sf2 = sf2s;
    fen2();
}
//选择修改
function xiu22() {
    let selectList = document.getElementsByClassName('ck2');
    let bbab = 0;
    let num = 0;
    for (let i = 0; i < selectList.length; i++) {
        if (selectList[i].checked) {
            bbab++;
            num = selectList[i].getAttribute('index');
        }
    }
    if (bbab == 0) {
        alert("未选中数据")
        return
    }
    if (bbab > 1) {
        alert("请勿选中多条数据")
        return
    }
    if (bbab == 1) {
        xiu2(num);
    }
}