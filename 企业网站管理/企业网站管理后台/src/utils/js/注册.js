let usere = document.getElementById("usere");
let passworde = document.getElementById("passworde");
let passwordeq = document.getElementById("passwordeq");
let uu = /^[\u4e00-\u9fa5]{2,8}$/;
let ss = /^\d{4,16}$/;
let zc = 0;
window.onload = function () {
    function sse() {
        let user1 = localStorage.user1;
        if (user1 == undefined || user1 == '') {
            zc = 0;
        } else {
            let user1s = user1.split(',');
            zc = user1s[user1s.length - 1].split('+')[0];
        }
    }
    sse();
}

function us() {
    let user = document.getElementById("user").value;
    if (uu.test(user)) {
        usere.innerHTML = '格式输入正确';
        usere.style.color = "green";
    } else {
        usere.innerHTML = '格式输入错误';
        usere.style.color = "red";
    }
}
function ps() {
    let password = document.getElementById("password").value;
    if (ss.test(password)) {
        passworde.innerHTML = '格式输入正确';
        passworde.style.color = "green";
    } else {
        passworde.innerHTML = '格式输入错误';
        passworde.style.color = "red";
    }
}
function psq() {
    let password = document.getElementById("password").value;
    let passwordq = document.getElementById("passwordq").value;
    if (password != passwordq) {
        passwordeq.innerHTML = '两次密码输入不一致';
        passwordeq.style.color = "red";

    } else {
        passwordeq.innerHTML = '输入一致';
        passwordeq.style.color = "green";
    }
}
let num = 0;
let lianxid = 12312312312;
function zhu() {
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    let eee = localStorage.eee;
    let s = '';
    if (ss.test(password) && uu.test(user)) {
        if (eee == undefined || eee == '') {
            let passwordW = hex_md5(password);
            localStorage.eee = user + '+' + passwordW;
            alert('注册成功');
            num++;
            let data = new Date();
            var year = data.getFullYear()
            var month = data.getMonth() + 1
            month = month > 10 ? month : '0' + month
            var day = data.getDate()
            day = day > 10 ? day : '0' + day
            var h = data.getHours()
            h = h > 10 ? h : '0' + h
            var m = data.getMinutes()
            m = m > 10 ? m : '0' + m
            var timeq = year + "-" + month + '-' + day + 'T' + h + ':' + m
            let user1 = localStorage.user1;
            if (user1 == undefined || user1 == '') {
                debugger
                zc++;
                localStorage.user1 = zc + '+' + num + '+' + user + '+' + lianxid + '+' + timeq + '+暂无登陆时间';
            } else {
                zc++;
                let user1s = user1.split(',');
                user1s[user1s.length] = zc + '+' + num + '+' + user + '+' + lianxid + '+' + timeq + '+暂无登陆时间';
                user1 = user1s;
                localStorage.user1 = user1;
            }
            window.location.href = '登录.html';
            return
        }
        let eee2 = eee.split(',');
        for (let i = 0; i < eee2.length; i++) {
            if (user == eee2[i].split('+')[0]) {
                alert('用户名已存在');
                return
            } else {
                let passwordW = hex_md5(password);
                eee2[eee2.length] = user + '+' + passwordW;
                localStorage.eee = eee2;
                alert('注册成功');
                num++;
                let data = new Date();
                var year = data.getFullYear()
                var month = data.getMonth() + 1
                month = month > 10 ? month : '0' + month
                var day = data.getDate()
                day = day > 10 ? day : '0' + day
                var h = data.getHours()
                h = h > 10 ? h : '0' + h
                var m = data.getMinutes()
                m = m > 10 ? m : '0' + m
                var timeq = year + "-" + month + '-' + day + 'T' + h + ':' + m
                let user1 = localStorage.user1;
                if (user1 == undefined || user1 == '') {
                    zc++
                    localStorage.user1 = zc + '+' + num + '+' + user + '+' + lianxid + '+' + timeq + '+暂无登陆时间';
                } else {
                    let user1s = user1.split(',');
                    zc++
                    user1s[user1s.length] = zc + '+' + num + '+' + user + '+' + lianxid + '+' + timeq + '+暂无登陆时间';
                    user1 = user1s;
                    localStorage.user1 = user1;
                }
                window.location.href = '登录.html';
                document.getElementById("user").value = '';
                return
            }
        }
    } else {
        alert('用户名或密码格式错误');
    }

}