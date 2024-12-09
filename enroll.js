document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        document.getElementById('message').innerText = '请检查密码';
        return;
    }

    // 这里可以添加保存用户名、邮箱和密码的逻辑
    // 例如：发送到服务器或保存到本地存储

    document.getElementById('message').innerText = '注册成功！';
});