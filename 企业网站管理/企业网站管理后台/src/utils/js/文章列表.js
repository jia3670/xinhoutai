let a4 = 0;
let aaa4 = true;
//动态渲染数据
let fen4 = function () {
    function sse() {
        let sf4s = localStorage.sf4;
        if (sf4s == undefined || sf4s == '') {
            a4 = 0;
        } else {
            let sf4r = sf4s.split(',');
            a4 = sf4r[sf4r.length - 1][0];
        }
    }
    sse();
    let sf4s = localStorage.sf4;
    let tbody4 = $('tbody4');
    let s = '';
    if (sf4s == undefined || sf4s == '') {
        s += `<tr>
                <td colspan='11' align='center' style='color:red;'>暂无数据</td>
                </tr>`;
        tbody4.innerHTML = s;
    } else {
        let sf4r = sf4s.split(',');
        let e = 0;
        let num = 0;
        for (let i = 0; i < sf4r.length; i++) {
            let sf4rr = sf4r[i].split("+");
            if (sf4r[i] != '') {
                e++
                ++num;
                s += `<tr  class='shai animate__animated animate__bounceInLeft'>
                        <td><input type="checkbox" name="select" class='ck4'index='${sf4rr[0]}'></td>
                        <td>${sf4rr[1]}</td>
                        <td>${sf4rr[2]}</td>
                        <td>${sf4rr[3]}</td>
                        <td>${sf4rr[4]}</td>                     
                        <td><button class="iconfont icon-xiugai xiu1"onclick=xiu4(${sf4rr[0]})>编辑</button>
                            <button class="iconfont icon-shanchusekuai shan1"onclick=shan4(${sf4rr[0]})>删除</button>
                     </tr>`
            }
        }
        if (e == 0) {
            s += `<tr>
                    <td colspan='6' align='center' style='color:red;'>暂无数据</td>
                    </tr>`;
            tbody4.innerHTML = s;
        }
        tbody4.innerHTML = s;
    }
}
//添加

function tianjia4() {
    if (aaa4 == true) {
        aaa4 = true;
        let sfjf4 = $('sfjf4').value;
        let sfjm4 = $('sfjm4').value;
        let sfjl4 = $('sfjl4').value;
        let sfjp4 = $('sfjp4').value;
        let sf4s = localStorage.sf4;
        if (sf4s == undefined || sf4s == '') {
            let abo = false;
            if (sfjf4 == '' || sfjf4 == undefined) {
                alert('编号为数字且不得为空')
                abo = true;
                return
            }
            if (!(een.test(sfjf4))) {
                alert('编号为数字且不得为空')
                abo = true;
                return
            }
            if (sfjm4 == '' || sfjm4 == undefined) {
                alert('请输入文章名称且不得为空')
                abo = true;
                return
            }
            if (!(ee.test(sfjm4))) {
                alert('请输入文章名称且不得为空')
                abo = true;
                return
            }
            if (sfjl4 == '' || sfjl4 == undefined) {
                alert('请输入文章分类且不得为空')
                abo = true;
                return
            }
            if (!(ee.test(sfjl4))) {
                alert('请输入文章分类且不得为空')
                abo = true;
                return
            }
            if (sfjp4 == '' || sfjp4 == undefined) {
                alert('请添加日期且不得为空')
                abo = true;
                return
            }
            if (abo == false) {
                a4++;
                sf4s = a4 + '+' + sfjf4 + '+' + sfjm4 + '+' + sfjl4 + '+' + sfjp4;
                localStorage.sf4 = sf4s;
                fen4();
                alert('添加成功');
                let sfj4 = $('sfj4');
                sfj4.style.display = "none";
                $('sfjf4').value = '';
                $('sfjm4').value = '';
                $('sfjl4').value = '';
                $('sfjp4').value = '';
                return
            }

        } else {
            let sf4r = sf4s.split(',');
            let abo = false;
            if (sfjf4 == '' || sfjf4 == undefined) {
                alert('编号为数字且不得为空')
                abo = true;
                return
            }
            if (!(een.test(sfjf4))) {
                alert('编号为数字且不得为空')
                abo = true;
                return
            }
            if (sfjm4 == '' || sfjm4 == undefined) {
                alert('请输入文章名称且不得为空')
                abo = true;
                return
            }
            if (!(ee.test(sfjm4))) {
                alert('请输入文章名称且不得为空')
                abo = true;
                return
            }
            if (sfjl4 == '' || sfjl4 == undefined) {
                alert('请输入文章分类且不得为空')
                abo = true;
                return
            }
            if (!(ee.test(sfjl4))) {
                alert('请输入文章分类且不得为空')
                abo = true;
                return
            }
            if (sfjp4 == '' || sfjp4 == undefined) {
                alert('请添加日期且不得为空')
                abo = true;
                return
            }
            if (abo == false) {
                a4++;
                sf4r[sf4r.length] = a4 + '+' + sfjf4 + '+' + sfjm4 + '+' + sfjl4 + '+' + sfjp4;
                sf4s = sf4r;
                localStorage.sf4 = sf4s;
                fen4();
                alert('添加成功');
                let sfj4 = $('sfj4');
                sfj4.style.display = "none";
                $('sfjf4').value = '';
                $('sfjm4').value = '';
                $('sfjl4').value = '';
                $('sfjp4').value = '';
                return;
            }
        }
    }

}

//删除数据
function shan4(that) {
    let sf4s = localStorage.sf4;
    let sf4r = sf4s.split(',');
    for (let i = 0; i < sf4r.length; i++) {
        let sf4rr = sf4r[i].split("+");
        if (sf4rr[0] == that) {
            if (confirm('是否删除' + sf4rr[1] + '这条数据')) {
                sf4r.splice(i, 1);
            } else {
                break
            }
        }
    }
    sf4s = sf4r;
    localStorage.sf4 = sf4s;
    fen4();
}

//修改
function xiu4(that) {
    let bbb = 0;
    aaa4 = false;
    let sf4s = localStorage.sf4;
    let sf4r = sf4s.split(',');
    for (let i = 0; i < sf4r.length; i++) {
        let sf4rr = sf4r[i].split("+");
        if (that == sf4rr[0]) {
            bbb = i;
            sfj4.style.display = 'block';
            $('sfjf4').value = sf4rr[1];
            $('sfjm4').value = sf4rr[2];
            $('sfjl4').value = sf4rr[3];
            $('sfjp4').value = sf4rr[4];
        }
        let tianjia4 = $('tianjia4');

        tianjia4.onclick = function () {
            if (aaa4 == false) {
                let sfjf4 = $('sfjf4').value;
                let sfjm4 = $('sfjm4').value;
                let sfjl4 = $('sfjl4').value;
                let sfjp4 = $('sfjp4').value;
                let sf4s = localStorage.sf4;
                let sf4r = sf4s.split(',');
                let abo = false;
                if (sfjf4 == '' || sfjf4 == undefined) {
                    alert('编号为数字且不得为空')
                    abo = true;
                    return
                }
                if (!(een.test(sfjf4))) {
                    alert('编号为数字且不得为空')
                    abo = true;
                    return
                }
                if (sfjm4 == '' || sfjm4 == undefined) {
                    alert('请输入文章名称且不得为空')
                    abo = true;
                    return
                }
                if (!(ee.test(sfjm4))) {
                    alert('请输入文章名称且不得为空')
                    abo = true;
                    return
                }
                if (sfjl4 == '' || sfjl4 == undefined) {
                    alert('请输入文章分类且不得为空')
                    abo = true;
                    return
                }
                if (!(ee.test(sfjl4))) {
                    alert('请输入文章分类且不得为空')
                    abo = true;
                    return
                }
                if (sfjp4 == '' || sfjp4 == undefined) {
                    alert('请添加日期且不得为空')
                    abo = true;
                    return
                }
                if (abo == false) {
                    let aa4 = that + '+' + sfjf4 + '+' + sfjm4 + '+' + sfjl4 + '+' + sfjp4;
                    sf4r[bbb] = aa4;
                    sf4s = sf4r;
                    localStorage.sf4 = sf4s;
                    fen4();
                    alert('修改成功');
                    let sfj4 = $('sfj4');
                    sfj4.style.display = "none";
                    $('sfjf4').value = '';
                    $('sfjm4').value = '';
                    $('sfjl4').value = '';
                    $('sfjp4').value = '';
                    return;
                }

            }
        }
    }
}
//查找数据
function chazhao44(that) {
    let sf4s = localStorage.sf4;
    let sf4r = sf4s.split(',');
    let num = false;
    let tbody4 = $('tbody4');
    for (let i = 0; i < sf4r.length; i++) {
        let sf4rr = sf4r[i].split("+");
        if (sf4rr[0] == that.value) {
            s = `<tr  class='shai animate__animated animate__fadeInUp'>
            <td><input type="checkbox" name="select" class='ck4'index='${sf4rr[0]}'></td>
            <td>${sf4rr[1]}</td>
            <td>${sf4rr[2]}</td>
            <td>${sf4rr[3]}</td>
            <td>${sf4rr[4]}</td>                     
            <td><button class="iconfont icon-xiugai xiu1"onclick=xiu1(${sf4rr[0]})>编辑</button>
                <button class="iconfont icon-shanchusekuai shan1"onclick=shan1(${sf4rr[0]})>删除</button>
         </tr>`
            tbody4.innerHTML = s;
            num = true;
            break;
        } else {
            num = false;
        }
    }
    if (that.value == 0) {
        return fen4();

    }
    if (num == false) {
        s = `<tr>
                <td colspan='11' align='center' style='color:red;'>暂无数据</td>
                </tr>`;
        tbody4.innerHTML = s;
    }
}
//全选
let quanx4 = $('quanx4');
let selectList4 = document.getElementsByClassName("ck4")
quanx4.onclick = function () {
    for (let i = 0; i < selectList4.length; i++)
        if (quanx4.checked) {
            selectList4[i].checked = true
        } else {
            selectList4[i].checked = false
        }
}
//选中删除
function xuanshan4() {
    let selectList = document.getElementsByClassName('ck4');
    let sf4s = localStorage.sf4;
    let sf4r = sf4s.split(',');
    for (let i = 0; i < selectList.length; i++) {
        if (selectList[i].checked) {
            for (let j = 0; j < sf4r.length; j++) {
                let sf4rr = sf4r[j].split("+");
                let aaa = selectList[i].getAttribute('index');
                if (aaa == sf4rr[0]) {
                    if (confirm('是否删除' + sf4rr[1] + '这条数据')) {
                        sf4r.splice(j, 1);
                        alert('已删除' + sf4rr[1] + '这条数据')
                    } else {
                        alert('已取消删除' + sf4rr[1] + '这条数据')
                    }
                }
            }
        }
    }
    sf4s = sf4r;
    localStorage.sf4 = sf4s;
    fen4();
}
//选择修改
function xiu44() {
    let selectList = document.getElementsByClassName('ck4');
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
        xiu4(num);
    }
}