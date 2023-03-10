let a5 = 0;
let aaa5 = true;
//动态渲染数据
let fen5 = function fen5() {
    function sse() {
        let sf5s = localStorage.user1;
        if (sf5s == undefined || sf5s == '') {
            a5 = 0;
        } else {
            let sf5r = sf5s.split(',');
            a5 = sf5r[sf5r.length - 1][0];
        }
    }
    sse();
    let sf5s = localStorage.user1;
    let tbody5 = $('tbody5');
    let s = '';
    if (sf5s == undefined || sf5s == '') {
        s += `<tr>
                <td colspan='11' align='center' style='color:red;'>暂无数据</td>
                </tr>`;
        tbody5.innerHTML = s;
    } else {
        let sf5r = sf5s.split(',');
        let e = 0;
        let num = 0;
        for (let i = 0; i < sf5r.length; i++) {
            let sf5rr = sf5r[i].split("+");
            if (sf5r[i] != '') {
                e++
                ++num;
                s += `<tr  class='shai animate__animated animate__fadeInBottomLeft'>
                        <td><input type="checkbox" name="select" class='ck5' index='${sf5rr[0]}'></td>
                        <td>${sf5rr[1]}</td>
                        <td>${sf5rr[2]}</td>
                        <td>${sf5rr[3]}</td>
                        <td>${sf5rr[4]}</td>
                        <td>${sf5rr[5]}</td>                     
                        <td><button class="iconfont icon-xiugai xiu1"onclick=xiu5(${sf5rr[0]})>编辑</button>
                            <button class="iconfont icon-shanchusekuai shan1"onclick=shan5(${sf5rr[0]})>删除</button>
                     </tr>`
            }
        }
        if (e == 0) {
            s += `<tr>
                    <td colspan='6' align='center' style='color:red;'>暂无数据</td>
                    </tr>`;
            tbody5.innerHTML = s;
        }
        tbody5.innerHTML = s;
    }
}
//添加
function tianjia5() {
    if (aaa5 == true) {
        aaa5 = true;
        let sfjf5 = $('sfjf5').value;
        let sfjm5 = $('sfjm5').value;
        let sfjl5 = $('sfjl5').value;
        let sfjp5 = $('sfjp5').value;
        let sfjs5 = $('sfjs5').value;
        let sf5s = localStorage.user1;
        if (sf5s == undefined || sf5s == '') {
            let abo = false;
            if (sfjf5 == '' || sfjf5 == undefined) {
                alert('编号为数字且不得为空')
                abo = true;
                return
            }
            if (!(een.test(sfjf5))) {
                alert('编号为数字且不得为空')
                abo = true;
                return
            }
            if (sfjm5 == '' || sfjm5 == undefined) {
                alert('请输入管理员名称且不得为空')
                abo = true;
                return
            }
            if (!(ee.test(sfjm5))) {
                alert('请输入管理员名称且不得为空')
                abo = true;
                return
            }
            if (sfjl5 == '' || sfjl5 == undefined) {
                alert('请输入联系电话且不得为空')
                abo = true;
                return
            }
            if (!(eew.test(sfjl5))) {
                alert('请输入联系电话且不得为空')
                abo = true;
                return
            }
            if (sfjp5 == '' || sfjp5 == undefined) {
                alert('请添加日期')
                abo = true;
                return
            }
            if (sfjs5 == '' || sfjs5 == undefined) {
                alert('请请添加登陆时间')
                abo = true;
                return
            }
            if (abo == false) {
                a5++;
                sf5s = a5 + '+' + sfjf5 + '+' + sfjm5 + '+' + sfjl5 + '+' + sfjp5 + '+' + sfjs5;
                localStorage.user1 = sf5s;
                fen5();
                alert('添加成功');
                let sfj5 = $('sfj5');
                sfj5.style.display = "none";
                $('sfjf5').value = '';
                $('sfjm5').value = '';
                $('sfjl5').value = '';
                $('sfjp5').value = '';
                $('sfjs5').value = '';
                return
            }

        } else {
            let sf5r = sf5s.split(',');
            let abo = false;
            if (sfjf5 == '' || sfjf5 == undefined) {
                alert('编号为数字且不得为空')
                abo = true;
                return
            }
            if (!(een.test(sfjf5))) {
                alert('编号为数字且不得为空')
                abo = true;
                return
            }
            if (sfjm5 == '' || sfjm5 == undefined) {
                alert('请输入管理员名称且不得为空')
                abo = true;
                return
            }
            if (!(ee.test(sfjm5))) {
                alert('请输入管理员名称且不得为空')
                abo = true;
                return
            }
            if (sfjl5 == '' || sfjl5 == undefined) {
                alert('请输入联系电话且不得为空')
                abo = true;
                return
            }
            if (!(eew.test(sfjl5))) {
                alert('请输入联系电话且不得为空')
                abo = true;
                return
            }
            if (sfjp5 == '' || sfjp5 == undefined) {
                alert('请添加日期')
                abo = true;
                return
            }
            if (sfjs5 == '' || sfjs5 == undefined) {
                alert('请请添加登陆时间')
                abo = true;
                return
            }
            if (abo == false) {
                a5++;
                sf5r[sf5r.length] = a5 + '+' + sfjf5 + '+' + sfjm5 + '+' + sfjl5 + '+' + sfjp5 + '+' + sfjs5;
                sf5s = sf5r;
                localStorage.user1 = sf5s;
                fen5();
                alert('添加成功');
                let sfj5 = $('sfj5');
                sfj5.style.display = "none";
                $('sfjf5').value = '';
                $('sfjm5').value = '';
                $('sfjl5').value = '';
                $('sfjp5').value = '';
                $('sfjs5').value = '';
                return;
            }
        }
    }

}

//删除数据
function shan5(that) {
    let sf5s = localStorage.user1;
    let sf5r = sf5s.split(',');
    for (let i = 0; i < sf5r.length; i++) {
        let sf5rr = sf5r[i].split("+");
        if (sf5rr[0] == that) {
            if (confirm('是否删除' + sf5rr[1] + '这条数据')) {
                sf5r.splice(i, 1);
            } else {
                break
            }
        }
    }
    sf5s = sf5r;
    localStorage.user1 = sf5s;
    fen5();
}

//修改
function xiu5(that) {
    let bbb5 = 0;
    aaa5 = false;
    let sf5s = localStorage.user1;
    let sf5r = sf5s.split(',');
    for (let i = 0; i < sf5r.length; i++) {
        let sf5rr = sf5r[i].split("+");
        if (that == sf5rr[0]) {
            bbb5 = i;
            sfj5.style.display = 'block';
            $('sfjf5').value = sf5rr[1];
            $('sfjm5').value = sf5rr[2];
            $('sfjl5').value = sf5rr[3];
            $('sfjp5').value = sf5rr[4];
            $('sfjs5').value = sf5rr[5];
        }
        let tianjia5 = $('tianjia5');

        tianjia5.onclick = function () {
            if (aaa5 == false) {
                let sfjf5 = $('sfjf5').value;
                let sfjm5 = $('sfjm5').value;
                let sfjl5 = $('sfjl5').value;
                let sfjp5 = $('sfjp5').value;
                let sfjs5 = $('sfjs5').value;
                let sf5s = localStorage.user1;
                let sf5r = sf5s.split(',');
                let abo = false;
                if (sfjf5 == '' || sfjf5 == undefined) {
                    alert('编号为数字且不得为空')
                    abo = true;
                    return
                }
                if (!(een.test(sfjf5))) {
                    alert('编号为数字且不得为空')
                    abo = true;
                    return
                }
                if (sfjm5 == '' || sfjm5 == undefined) {
                    alert('请输入管理员名称且不得为空')
                    abo = true;
                    return
                }
                if (!(ee.test(sfjm5))) {
                    alert('请输入管理员名称且不得为空')
                    abo = true;
                    return
                }
                if (sfjl5 == '' || sfjl5 == undefined) {
                    alert('请输入联系电话且不得为空')
                    abo = true;
                    return
                }
                if (!(eew.test(sfjl5))) {
                    alert('请输入联系电话且不得为空')
                    abo = true;
                    return
                }
                if (sfjp5 == '' || sfjp5 == undefined) {
                    alert('请添加日期')
                    abo = true;
                    return
                }
                if (sfjs5 == '' || sfjs5 == undefined) {
                    alert('请请添加登陆时间')
                    abo = true;
                    return
                }
                if (abo == false) {
                    let aa5 = that + '+' + sfjf5 + '+' + sfjm5 + '+' + sfjl5 + '+' + sfjp5 + '+' + sfjs5;
                    sf5r[bbb5] = aa5;
                    sf5s = sf5r;
                    localStorage.user1 = sf5s;
                    fen5();
                    alert('修改成功');
                    let sfj5 = $('sfj5');
                    sfj5.style.display = "none";
                    $('sfjf5').value = '';
                    $('sfjm5').value = '';
                    $('sfjl5').value = '';
                    $('sfjp5').value = '';
                    $('sfjs5').value = '';
                    return;
                }

            }
        }
    }
}
//查找数据
function chazhao55(that) {
    let sf5s = localStorage.user1;
    let sf5r = sf5s.split(',');
    let num = false;
    let tbody5 = $('tbody5');
    for (let i = 0; i < sf5r.length; i++) {
        let sf5rr = sf5r[i].split("+");
        if (sf5rr[0] == that.value) {
            s = `<tr  class='shai animate__animated animate__fadeInUp'>
            <td><input type="checkbox" name="select" class='ck5'index='${sf5rr[0]}'></td>
            <td>${sf5rr[1]}</td>
            <td>${sf5rr[2]}</td>
            <td>${sf5rr[3]}</td>
            <td>${sf5rr[4]}</td>                     
            <td>${sf5rr[5]}</td>                     
            <td><button class="iconfont icon-xiugai xiu1"onclick=xiu1(${sf5rr[0]})>编辑</button>
                <button class="iconfont icon-shanchusekuai shan1"onclick=shan1(${sf5rr[0]})>删除</button>
         </tr>`
            tbody5.innerHTML = s;
            num = true;
            break;
        } else {
            num = false;
        }
    }
    if (that.value == 0) {
        return fen5();

    }
    if (num == false) {
        s = `<tr>
                <td colspan='11' align='center' style='color:red;'>暂无数据</td>
                </tr>`;
        tbody5.innerHTML = s;
    }

}

//全选
let quanx5 = $('quanx5');
let selectList5 = document.getElementsByClassName("ck5")
quanx5.onclick = function () {
    for (let i = 0; i < selectList5.length; i++)
        if (quanx5.checked) {
            selectList5[i].checked = true
        } else {
            selectList5[i].checked = false
        }
}
//选中删除
function xuanshan5() {
    let selectList = document.getElementsByClassName('ck5');
    let sf5s = localStorage.user1;
    let sf5r = sf5s.split(',');
    for (let i = 0; i < selectList.length; i++) {
        if (selectList[i].checked) {
            for (let j = 0; j < sf5r.length; j++) {
                let sf5rr = sf5r[j].split("+");
                let aaa = selectList[i].getAttribute('index');
                if (aaa == sf5rr[0]) {
                    if (confirm('是否删除' + sf5rr[1] + '这条数据')) {
                        sf5r.splice(j, 1);
                        alert('已删除' + sf5rr[1] + '这条数据')
                    } else {
                        alert('已取消删除' + sf5rr[1] + '这条数据')
                    }
                }
            }
        }
    }
    sf5s = sf5r;
    localStorage.user1 = sf5s;
    fen5();
}
//选择修改
function xiu55() {
    let selectList = document.getElementsByClassName('ck5');
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
        xiu5(num);
    }
}