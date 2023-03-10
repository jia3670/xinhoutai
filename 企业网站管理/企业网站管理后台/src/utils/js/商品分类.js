let a1 = 0;
let aaa1 = true;
//动态渲染数据
let fen1 = function fen1() {
    function sse() {
        let sf1s = localStorage.sf1;
        if (sf1s == undefined || sf1s == '') {
            a1 = 0;
        } else {
            let sf1r = sf1s.split(',');
            a1 = sf1r[sf1r.length - 1][0];
        }
    }
    sse();
    let sf1s = localStorage.sf1;
    let tbody1 = $('tbody1');   
    let s = '';
    if (sf1s == undefined || sf1s == '') {
        s += `<tr>
                <td colspan='11' align='center' style='color:red;'>暂无数据</td>
                </tr>`;
        tbody1.innerHTML = s;
    } else {
        let sf1r = sf1s.split(',');
        let e = 0;
        let num = 0;
        for (let i = 0; i < sf1r.length; i++) {
            let sf1rr = sf1r[i].split("+");
            if (sf1r[i] != '') {
                e++
                ++num;
                s += `<tr  class='shai animate__animated animate__fadeInLeftBig'>
                        <td><input type="checkbox" name="select" class='ck1'index='${sf1rr[0]}'></td>
                        <td>${sf1rr[1]}</td>
                        <td>${sf1rr[2]}</td>
                        <td>${sf1rr[3]}</td>
                        <td>${sf1rr[4]}</td>                     
                        <td><button class="iconfont icon-xiugai xiu1"onclick=xiu1(${sf1rr[0]})>编辑</button>
                            <button class="iconfont icon-shanchusekuai shan1"onclick=shan1(${sf1rr[0]})>删除</button>
                     </tr>`
            }
        }
        if (e == 0) {
            s += `<tr>
                    <td colspan='6' align='center' style='color:red;'>暂无数据</td>
                    </tr>`;
            tbody1.innerHTML = s;
        }
        tbody1.innerHTML = s;
    }
}
//添加
function tianjia1() {
    if (aaa1 == true) {
        aaa1 = true;
        let sfjf1 = $('sfjf1').value;
        let sfjm1 = $('sfjm1').value;
        let sfjl1 = $('sfjl1').value;
        let sfjp1 = $('sfjp1').value;
        let sf1s = localStorage.sf1;
        if (sf1s == undefined || sf1s == '') {
            let abo = false;
            if (sfjf1 == '' || sfjf1 == undefined) {
                alert('请输入分类名称且不得为空')
                abo = true;
                return
            }
            if (!(ee.test(sfjf1))) {
                alert('请输入分类名称且不得为空')
                abo = true;
                return
            }
            if (sfjm1 == '' || sfjm1 == undefined) {
                alert('请输入别名且不得为空')
                abo = true;
                return
            }
            if (!(ee.test(sfjm1))) {
                alert('请输入别名且不得为空')
                abo = true;
                return
            }
            if (sfjl1 == '' || sfjl1 == undefined) {
                alert('请输入分类描述且不得为空')
                abo = true;
                return
            }
            if (!(ee.test(sfjl1))) {
                alert('请输入分类描述且不得为空')
                abo = true;
                return
            }
            if (sfjp1 == '' || sfjp1 == undefined) {
                alert('排序为数字且不得为空')
                abo = true;
                return
            }
            if (!(een.test(sfjp1))) {
                alert('排序为数字且不得为空')
                abo = true;
                return
            }
            if (abo == false) {
                a1++;
                localStorage.sf1 = a1 + '+' + sfjf1 + '+' + sfjm1 + '+' + sfjl1 + '+' + sfjp1;
                fen1();
                alert('添加成功');
                let sfj1 = $('sfj1');
                sfj1.style.display = "none";
                $('sfjf1').value = '';
                $('sfjm1').value = '';
                $('sfjl1').value = '';
                $('sfjp1').value = '';
                return
            }

        } else {
            let sf1r = sf1s.split(',');
            let abo = false;
            if (sfjf1 == '' || sfjf1 == undefined) {
                alert('请输入分类名称且不得为空')
                abo = true;
                return
            }
            if (!(ee.test(sfjf1))) {
                alert('请输入分类名称且不得为空')
                abo = true;
                return
            }
            if (sfjm1 == '' || sfjm1 == undefined) {
                alert('请输入别名且不得为空')
                abo = true;
                return
            }
            if (!(ee.test(sfjm1))) {
                alert('请输入别名且不得为空')
                abo = true;
                return
            }
            if (sfjl1 == '' || sfjl1 == undefined) {
                alert('请输入分类描述且不得为空')
                abo = true;
                return
            }
            if (!(ee.test(sfjl1))) {
                alert('请输入分类描述且不得为空')
                abo = true;
                return
            }
            if (sfjp1 == '' || sfjp1 == undefined) {
                alert('排序为数字且不得为空')
                abo = true;
                return
            }
            if (!(een.test(sfjp1))) {
                alert('排序为数字且不得为空')
                abo = true;
                return

            }
            if (abo == false) {
                a1++;
                sf1r[sf1r.length] = a1 + '+' + sfjf1 + '+' + sfjm1 + '+' + sfjl1 + '+' + sfjp1;
                sf1s = sf1r;
                localStorage.sf1 = sf1s;
                fen1();
                alert('添加成功');
                let sfj1 = $('sfj1');
                sfj1.style.display = "none";
                $('sfjf1').value = '';
                $('sfjm1').value = '';
                $('sfjl1').value = '';
                $('sfjp1').value = '';
                return;
            }
        }
    }

}

//删除数据
function shan1(that) {
    let sf1s = localStorage.sf1;
    let sf1r = sf1s.split(',');
    for (let i = 0; i < sf1r.length; i++) {
        let sf1rr = sf1r[i].split("+");
        if (sf1rr[0] == that) {
            if (confirm('是否删除' + sf1rr[1] + '这条数据')) {
                sf1r.splice(i, 1);
            } else {
                break
            }
        }
    }
    sf1s = sf1r;
    localStorage.sf1 = sf1s;
    fen1();
}

//修改
function xiu1(that) {
    let bbb1 = 0;
    aaa1 = false;
    let sf1s = localStorage.sf1;
    let sf1r = sf1s.split(',');
    for (let i = 0; i < sf1r.length; i++) {
        let sf1rr = sf1r[i].split("+");
        if (that == sf1rr[0]) {
            bbb1 = i;
            sfj1.style.display = 'block';
            $('sfjf1').value = sf1rr[1];
            $('sfjm1').value = sf1rr[2];
            $('sfjl1').value = sf1rr[3];
            $('sfjp1').value = sf1rr[4];
        }
        let tianjia1 = $('tianjia1');

        tianjia1.onclick = function () {
            if (aaa1 == false) {
                let sfjf1 = $('sfjf1').value;
                let sfjm1 = $('sfjm1').value;
                let sfjl1 = $('sfjl1').value;
                let sfjp1 = $('sfjp1').value;
                let sf1s = localStorage.sf1;
                let sf1r = sf1s.split(',');
                let abo = false;
                if (sfjf1 == '' || sfjf1 == undefined) {
                    alert('请输入分类名称且不得为空')
                    abo = true;
                    return
                }
                if (!(ee.test(sfjf1))) {
                    alert('请输入分类名称且不得为空')
                    abo = true;
                    return
                }
                if (sfjm1 == '' || sfjm1 == undefined) {
                    alert('请输入别名且不得为空')
                    abo = true;
                    return
                }
                if (!(ee.test(sfjm1))) {
                    alert('请输入别名且不得为空')
                    abo = true;
                    return
                }
                if (sfjl1 == '' || sfjl1 == undefined) {
                    alert('请输入分类描述且不得为空')
                    abo = true;
                    return
                }
                if (!(ee.test(sfjl1))) {
                    alert('请输入分类描述且不得为空')
                    abo = true;
                    return
                }
                if (sfjp1 == '' || sfjp1 == undefined) {
                    alert('排序为数字且不得为空')
                    abo = true;
                    return
                }
                if (!(een.test(sfjp1))) {
                    alert('排序为数字且不得为空')
                    abo = true;
                    return
                }
                if (abo == false) {
                    let aa1 = that + '+' + sfjf1 + '+' + sfjm1 + '+' + sfjl1 + '+' + sfjp1;
                    sf1r[bbb1] = aa1;
                    sf1s = sf1r;
                    localStorage.sf1 = sf1s;
                    fen1();
                    alert('修改成功');
                    let sfj1 = $('sfj1');
                    sfj1.style.display = "none";
                    $('sfjf1').value = '';
                    $('sfjm1').value = '';
                    $('sfjl1').value = '';
                    $('sfjp1').value = '';
                    return;
                }

            }
        }
    }
}
//查找数据
function chazhao11(that) {
    let sf1s = localStorage.sf1;
    let sf1r = sf1s.split(',');
    let num = false;
    let tbody1 = document.getElementById('tbody1');
    for (let i = 0; i < sf1r.length; i++) {
        let sf1rr = sf1r[i].split("+");
        if (sf1rr[0] == that.value) {
            s = `<tr  class='shai animate__animated animate__fadeInUp'>
            <td><input type="checkbox" name="select" class='ck1'index='${sf1rr[0]}'></td>
            <td>${sf1rr[1]}</td>
            <td>${sf1rr[2]}</td>
            <td>${sf1rr[3]}</td>
            <td>${sf1rr[4]}</td>                     
            <td><button class="iconfont icon-xiugai xiu1"onclick=xiu1(${sf1rr[0]})>编辑</button>
                <button class="iconfont icon-shanchusekuai shan1"onclick=shan1(${sf1rr[0]})>删除</button>
         </tr>`
            tbody1.innerHTML = s;
            num = true;
            break;
        } else {
            num = false;
        }
    }
    if (that.value == 0) {
        return fen1();

    }
    if (num == false) {
        s = `<tr>
                <td colspan='11' align='center' style='color:red;'>暂无数据</td>
                </tr>`;
        tbody1.innerHTML = s;
    }

}
//全选
let quanx1 = $('quanx1');
let selectList1 = document.getElementsByClassName("ck1")
quanx1.onclick = function () {
    for (let i = 0; i < selectList1.length; i++)
        if (quanx1.checked) {
            selectList1[i].checked = true
        } else {
            selectList1[i].checked = false
        }
}
//选中删除
function xuanshan1() {
    let selectList = document.getElementsByClassName('ck1');
    let sf1s = localStorage.sf1;
    let sf1r = sf1s.split(',');
    for (let i = 0; i < selectList.length; i++) {
        if (selectList[i].checked) {
            for (var j = 0; j < sf1r.length; j++) {
                let sf1rr = sf1r[j].split("+");
                let aaa = selectList[i].getAttribute('index');
                if (aaa == sf1rr[0]) {
                    if (confirm('是否删除' + sf1rr[1] + '这条数据')) {
                        sf1r.splice(j, 1);
                        alert('已删除' + sf1rr[1] + '这条数据')
                    } else {
                        alert('已取消删除' + sf1rr[1] + '这条数据')
                    }
                }
            }
        }
    }
    sf1s = sf1r;
    localStorage.sf1 = sf1s;
    fen1();
}

//选择修改
function xiu11() {
    let selectList = document.getElementsByClassName('ck1');
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
        xiu1(num);
    }
}