# 小组网页作业 · Git 协同开发

4 人小组，每人负责一个独立的网页模块，通过 GitHub 分支 + Pull Request 协同合并。
技术栈：原生 HTML + CSS + JavaScript，无需安装任何依赖，双击 `index.html` 即可预览。

## 一、目录结构

```
├── index.html              首页导航（组长维护，汇总 4 个模块入口）
├── assets/base.css         公共样式，所有模块共用
├── modules/
│   ├── login/              用户登录   —— 成员A  feature/login
│   ├── register/           用户注册   —— 成员B  feature/register
│   ├── home/               首页商品列表 —— 成员C  feature/home
│   └── profile/            个人中心   —— 成员D  feature/profile
└── README.md
```

> 每人只在 `modules/自己的模块/` 目录下改文件，从物理上避免合并冲突。

## 二、分工与分支

| 成员 | 模块 | 分支 | 主要文件 |
| --- | --- | --- | --- |
| 成员A | 用户登录 | `feature/login` | `modules/login/*` |
| 成员B | 用户注册 | `feature/register` | `modules/register/*` |
| 成员C | 首页商品列表 | `feature/home` | `modules/home/*` |
| 成员D | 个人中心 | `feature/profile` | `modules/profile/*` |

分支命名统一：`feature/模块名`，提交信息统一：`feat(模块): 做了什么`。

## 三、协作流程（每人只需做一次 1~3 步）

### 1. 组长：创建仓库并邀请成员

1. GitHub 新建仓库（例如 `group-web-homework`），**不要**勾选生成 README
2. Settings → Collaborators → Add people，把 4 位成员的 GitHub 用户名加进去
3. 成员在自己 GitHub 邮箱里接受邀请

### 2. 所有人：克隆仓库

```bash
git clone https://github.com/<组长用户名>/group-web-homework.git
cd group-web-homework
```

### 3. 配置身份（每台电脑只需一次）

```bash
git config --global user.name  "你的名字"
git config --global user.email "你的GitHub邮箱"
```

### 4. 每人：创建并切换到自己的分支

```bash
git checkout main
git pull origin main          # 每次开工前先拉最新代码
git checkout -b feature/login # 换成自己的分支名
```

### 5. 开发并提交（可多次）

```bash
git status                    # 看看改了哪些文件
git add .
git commit -m "feat(login): 完成登录表单与校验"
git push -u origin feature/login   # 首次推送用 -u，之后只需 git push
```

### 6. 发起 Pull Request

推送后打开 GitHub，会提示 **Compare & pull request**：
- base 选 `main`，compare 选自己的 `feature/xxx`
- 标题写 `feat(login): 用户登录模块`
- 描述里 `@` 一位组员做 Code Review
- 由组长或 Reviewer 点 **Merge pull request** 合并

### 7. 合并后同步

```bash
git checkout main
git pull origin main
git branch -d feature/login   # 本地分支已合并，可删除
```

## 四、常用命令速查

| 场景 | 命令 |
| --- | --- |
| 查看当前状态 | `git status` |
| 查看分支 | `git branch -a` |
| 切换分支 | `git checkout 分支名` |
| 查看提交历史 | `git log --oneline --graph` |
| 丢弃未提交修改 | `git checkout -- 文件名` |
| 拉取最新代码 | `git pull origin main` |

## 五、注意事项

- **先 pull 再 push**，能避免 90% 的冲突
- 不要直接在 `main` 上写自己的代码
- 不要提交 `node_modules`、编辑器配置等（已由 `.gitignore` 过滤）
- 一个功能一个 commit，不要把 4 个模块的改动混在一个提交里

## 六、本地预览

直接双击项目根目录的 `index.html`，或右键该文件选择浏览器打开。
演示登录账号：`admin` / `123456`。
