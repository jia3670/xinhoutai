let a3 = 0;
let aaa3 = true;
//动态渲染数据
let fen3 = function fen3() {
    function sse() {
        let sf3s = localStorage.sf3;
        if (sf3s == undefined || sf3s == '') {
            a3 = 0;
        } else {
            let sf3r = sf3s.split(',');
            a3 = sf3r[sf3r.length - 1][0];
        }
    }
    sse();
    let sf3s = localStorage.sf3;
    let tbody3 = $('tbody3');
    let s = '';
    if (sf3s == undefined || sf3s == '') {
        s += `<tr>
                <td colspan='11' align='center' style='color:red;'>暂无数据</td>
                </tr>`;
        tbody3.innerHTML = s;
    } else {
        let sf3r = sf3s.split(',');
        let e = 0;
        let num = 0;
        for (let i = 0; i < sf3r.length; i++) {
            let sf3rr = sf3r[i].split("+");
            if (sf3r[i] != '') {
                e++
                ++num;
                s += `<tr  class='shai animate__animated animate__fadeInLeftBig'>
                        <td><input type="checkbox" name="select" class='ck3'index='${sf3rr[0]}'></td>
                        <td>${sf3rr[1]}</td>
                        <td>${sf3rr[2]}</td>
                        <td>${sf3rr[3]}</td>
                        <td>${sf3rr[4]}</td>                     
                        <td><button class="iconfont icon-xiugai xiu1"onclick=xiu3(${sf3rr[0]})>编辑</button>
                            <button class="iconfont icon-shanchusekuai shan1"onclick=shan3(${sf3rr[0]})>删除</button>
                     </tr>`
            }
        }
        if (e == 0) {
            s += `<tr>
                    <td colspan='6' align='center' style='color:red;'>暂无数据</td>
                    </tr>`;
            tbody3.innerHTML = s;
        }
        tbody3.innerHTML = s;
    }
}
//添加
function tianjia3() {
    if (aaa3 == true) {
        aaa3 = true;
        let sfjf3 = $('sfjf3').value;
        let sfjm3 = $('sfjm3').value;
        let sfjl3 = $('sfjl3').value;
        let sfjp3 = $('sfjp3').value;
        let sf3s = localStorage.sf3;
        if (sf3s == undefined || sf3s == '') {
            let abo = false;
            if (sfjf3 == '' || sfjf3 == undefined) {
                alert('请输入分类名称且不得为空')
                abo = true;
                return
            }
            if (!(ee.test(sfjf3))) {
                alert('请输入分类名称且不得为空')
                abo = true;
                return
            }
            if (sfjm3 == '' || sfjm3 == undefined) {
                alert('请输入别名且不得为空')
                abo = true;
                return
            }
            if (!(ee.test(sfjm3))) {
                alert('请输入别名且不得为空')
                abo = true;
                return
            }
            if (sfjl3 == '' || sfjl3 == undefined) {
                alert('请输入分类描述且不得为空')
                abo = true;
                return
            }
            if (!(ee.test(sfjl3))) {
                alert('请输入分类描述且不得为空')
                abo = true;
                return
            }
            if (sfjp3 == '' || sfjp3 == undefined) {
                alert('排序为数字且不得为空')
                abo = true;
                return
            }
            if (!(een.test(sfjp3))) {
                alert('排序为数字且不得为空')
                abo = true;
                return
            }
            if (abo == false) {
                a3++;
                sf3s = a3 + '+' + sfjf3 + '+' + sfjm3 + '+' + sfjl3 + '+' + sfjp3;
                localStorage.sf3 = sf3s;
                fen3();
                alert('添加成功');
                let sfj3 = $('sfj3');
                sfj3.style.display = "none";
                $('sfjf3').value = '';
                $('sfjm3').value = '';
                $('sfjl3').value = '';
                $('sfjp3').value = '';
                return
            }

        } else {
            let sf3r = sf3s.split(',');
            let abo = false;
            if (sfjf3 == '' || sfjf3 == undefined) {
                alert('请输入分类名称且不得为空')
                abo = true;
                return
            }
            if (!(ee.test(sfjf3))) {
                alert('请输入分类名称且不得为空')
                abo = true;
                return
            }
            if (sfjm3 == '' || sfjm3 == undefined) {
                alert('请输入别名且不得为空')
                abo = true;
                return
            }
            if (!(ee.test(sfjm3))) {
                alert('请输入别名且不得为空')
                abo = true;
                return
            }
            if (sfjl3 == '' || sfjl3 == undefined) {
                alert('请输入分类描述且不得为空')
                abo = true;
                return
            }
            if (!(ee.test(sfjl3))) {
                alert('请输入分类描述且不得为空')
                abo = true;
                return
            }
            if (sfjp3 == '' || sfjp3 == undefined) {
                alert('排序为数字且不得为空')
                abo = true;
                return
            }
            if (!(een.test(sfjp3))) {
                alert('排序为数字且不得为空')
                abo = true;
                return
            }
            if (abo == false) {
                a3++;
                sf3r[sf3r.length] = a3 + '+' + sfjf3 + '+' + sfjm3 + '+' + sfjl3 + '+' + sfjp3;
                sf3s = sf3r;
                localStorage.sf3 = sf3s;
                fen3();
                alert('添加成功');
                let sfj3 = $('sfj3');
                sfj3.style.display = "none";
                $('sfjf3').value = '';
                $('sfjm3').value = '';
                $('sfjl3').value = '';
                $('sfjp3').value = '';
                return;
            }
        }
    }

}

//删除数据
function shan3(that) {
    let sf3s = localStorage.sf3;
    let sf3r = sf3s.split(',');
    for (let i = 0; i < sf3r.length; i++) {
        let sf3rr = sf3r[i].split("+");
        if (sf3rr[0] == that) {
            if (confirm('是否删除' + sf3rr[1] + '这条数据')) {
                sf3r.splice(i, 1);
            } else {
                break
            }
        }
    }
    sf3s = sf3r;
    localStorage.sf3 = sf3s;
    fen3();
}

//修改
function xiu3(that) {
    let bbb3 = 0;
    aaa3 = false;
    let sf3s = localStorage.sf3;
    let sf3r = sf3s.split(',');
    for (let i = 0; i < sf3r.length; i++) {
        let sf3rr = sf3r[i].split("+");
        if (that == sf3rr[0]) {
            bbb3 = i;
            sfj3.style.display = 'block';
            $('sfjf3').value = sf3rr[1];
            $('sfjm3').value = sf3rr[2];
            $('sfjl3').value = sf3rr[3];
            $('sfjp3').value = sf3rr[4];
        }
        let tianjia3 = $('tianjia3');

        tianjia3.onclick = function () {
            if (aaa3 == false) {
                let sfjf3 = $('sfjf3').value;
                let sfjm3 = $('sfjm3').value;
                let sfjl3 = $('sfjl3').value;
                let sfjp3 = $('sfjp3').value;
                let sf3s = localStorage.sf3;
                let sf3r = sf3s.split(',');
                let abo = false;
                if (sfjf3 == '' || sfjf3 == undefined) {
                    alert('请输入分类名称且不得为空')
                    abo = true;
                    return
                }
                if (!(ee.test(sfjf3))) {
                    alert('请输入分类名称且不得为空')
                    abo = true;
                    return
                }
                if (sfjm3 == '' || sfjm3 == undefined) {
                    alert('请输入别名且不得为空')
                    abo = true;
                    return
                }
                if (!(ee.test(sfjm3))) {
                    alert('请输入别名且不得为空')
                    abo = true;
                    return
                }
                if (sfjl3 == '' || sfjl3 == undefined) {
                    alert('请输入分类描述且不得为空')
                    abo = true;
                    return
                }
                if (!(ee.test(sfjl3))) {
                    alert('请输入分类描述且不得为空')
                    abo = true;
                    return
                }
                if (sfjp3 == '' || sfjp3 == undefined) {
                    alert('排序为数字且不得为空')
                    abo = true;
                    return
                }
                if (!(een.test(sfjp3))) {
                    alert('排序为数字且不得为空')
                    abo = true;
                    return
                }
                if (abo == false) {
                    let aa3 = that + '+' + sfjf3 + '+' + sfjm3 + '+' + sfjl3 + '+' + sfjp3;
                    sf3r[bbb3] = aa3
                    sf3s = sf3r;
                    localStorage.sf3 = sf3s;
                    fen3();
                    alert('修改成功');
                    let sfj3 = $('sfj3');
                    sfj3.style.display = "none";
                    $('sfjf3').value = '';
                    $('sfjm3').value = '';
                    $('sfjl3').value = '';
                    $('sfjp3').value = '';
                    return;
                }

            }
        }
    }
}
//查找数据
function chazhao33(that) {
    let sf3s = localStorage.sf3;
    let sf3r = sf3s.split(',');
    let num = false;
    let tbody3 = $('tbody3');
    for (let i = 0; i < sf3r.length; i++) {
        let sf3rr = sf3r[i].split("+");
        if (sf3rr[0] == that.value) {
            s = `<tr  class='shai animate__animated animate__fadeInUp'>
            <td><input type="checkbox" name="select" class='ck3'index='${sf3rr[0]}'></td>
            <td>${sf3rr[1]}</td>
            <td>${sf3rr[2]}</td>
            <td>${sf3rr[3]}</td>
            <td>${sf3rr[4]}</td>                     
            <td><button class="iconfont icon-xiugai xiu1"onclick=xiu1(${sf3rr[0]})>编辑</button>
                <button class="iconfont icon-shanchusekuai shan1"onclick=shan1(${sf3rr[0]})>删除</button>
         </tr>`
            tbody3.innerHTML = s;
            num = true;
            break;
        } else {
            num = false;
        }
    }
    if (that.value == 0) {
        return fen3();

    }
    if (num == false) {
        s = `<tr>
                <td colspan='11' align='center' style='color:red;'>暂无数据</td>
                </tr>`;
        tbody3.innerHTML = s;
    }
}
//全选
let quanx3 = $('quanx3');
let selectList3 = document.getElementsByClassName("ck3")
quanx3.onclick = function () {
    for (let i = 0; i < selectList3.length; i++)
        if (quanx3.checked) {
            selectList3[i].checked = true
        } else {
            selectList3[i].checked = false
        }
}

//选中删除
function xuanshan3() {
    let selectList = document.getElementsByClassName('ck3');
    let sf3s = localStorage.sf3;
    let sf3r = sf3s.split(',');
    for (let i = 0; i < selectList.length; i++) {
        if (selectList[i].checked) {
            for (let j = 0; j < sf3r.length; j++) {
                let sf3rr = sf3r[j].split("+");
                let aaa = selectList[i].getAttribute('index');
                if (aaa == sf3rr[0]) {
                    if (confirm('是否删除' + sf3rr[1] + '这条数据')) {
                        sf3r.splice(j, 1);
                        alert('已删除' + sf3rr[1] + '这条数据')
                    } else {
                        alert('已取消删除' + sf3rr[1] + '这条数据')
                    }
                }
            }
        }

    }
    sf3s = sf3r;
    localStorage.sf3 = sf3s;
    fen3();
}
//选择修改
function xiu33() {
    let selectList = document.getElementsByClassName('ck3');
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
        xiu3(num);
    }
}