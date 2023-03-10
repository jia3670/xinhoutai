function deng() {
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    if (user == '' || user == null) {
        alert('账号不得为空')
        return
    }
    if (password == '' || password == null) {
        alert('密码不得为空')
        return
    }
    let eee = localStorage.eee;
    let eee2 = eee.split(',')
    let bo = false;
    for (let i = 0; i < eee2.length; i++) {
        let passwordW = hex_md5(password);
        if (user == eee2[i].split('+')[0] && passwordW == eee2[i].split('+')[1]) {
            let user1 = localStorage.user1;
            let users1 = user1.split(',');
            for (let j = 0; j < users1.length; j++) {
                if (user == users1[i].split('+')[2]) {
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
                    var timeq = year + "-" + month + '-' + day + 'T' + h + ':' + m;
                    let aac = users1[i].split('+')[0] + '+' + users1[i].split('+')[1] + '+' + users1[i].split('+')[2] + '+' + users1[i].split('+')[3] + '+' + users1[i].split('+')[4] + '+' + timeq;
                    users1[i] = aac;
                    break
                }
            }
            user1 = users1;
            localStorage.user1 = user1;
            localStorage.we = user + '+' + passwordW;
            alert('登录成功')
            bo = true;
            window.location.href = 'index.html';
            break
        }
    }
    if (bo == false) {
        alert('用户名或密码错误，请重试');
        return
    }
}