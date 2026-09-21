// 登录模块交互逻辑
const form = document.getElementById('loginForm');
const tip = document.getElementById('tip');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberInput = document.getElementById('remember');

// 演示账号（作业用，实际项目应由后端校验）
const DEMO = { username: 'admin', password: '123456' };

function showTip(message, type) {
  tip.textContent = message;
  tip.className = 'tip ' + type;
}

// 回填“记住我”保存的用户名
const saved = localStorage.getItem('login_username');
if (saved) {
  usernameInput.value = saved;
  rememberInput.checked = true;
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  if (!username) return showTip('请输入用户名', 'error');
  if (!password) return showTip('请输入密码', 'error');
  if (password.length < 6) return showTip('密码长度不能少于 6 位', 'error');

  if (username === DEMO.username && password === DEMO.password) {
    localStorage.setItem('isLogin', 'true');
    localStorage.setItem('currentUser', username);

    if (rememberInput.checked) {
      localStorage.setItem('login_username', username);
    } else {
      localStorage.removeItem('login_username');
    }

    showTip('登录成功，正在跳转首页…', 'success');
    setTimeout(() => {
      window.location.href = '../home/index.html';
    }, 800);
  } else {
    showTip('用户名或密码错误（演示账号：admin / 123456）', 'error');
  }
});

// 输入时清空提示
[usernameInput, passwordInput].forEach(el => {
  el.addEventListener('input', () => showTip('', ''));
});
