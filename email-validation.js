let verificationCodeButton = document.getElementById('sendCodeBtn'); // 使用正确的按钮ID
let countdown = 60; // 定义倒计时变量

verificationCodeButton.addEventListener('click', function () {
    this.disabled = true;
    this.textContent = countdown + '秒后重试';
    let interval = setInterval(function () {
        countdown--;
        verificationCodeButton.textContent = countdown + '秒后重试';
        if (countdown <= 0) {
            clearInterval(interval);
            verificationCodeButton.textContent = '发送验证码';
            verificationCodeButton.disabled = false;
            countdown = 60; // 重置倒计时
        }
    }, 1000);
});

document.getElementById('login-email').addEventListener('input', function (event) {
    // 移除邮箱验证逻辑
    verificationCodeButton.disabled = false;
});

// 假设有一个函数可以检查是否已完成找回流程
function isRetrievalCompleted() {
    // 实现取决于你的应用逻辑
    // 如果完成了返回true，否则返回false
}

// 假设按钮的ID为'retrieve-password-btn'
document.getElementById('retrieve-password-btn').addEventListener('click', function() {
    if (!isRetrievalCompleted()) {
        alert('请完成内容填写');
    }
});