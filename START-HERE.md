# 🚀 START HERE · Day 1 行动手册（2026-09-07，周日）

> 今晚总时长约 2.5–3 小时。按顺序做，每步都有验收标准。
> 卡住了？把报错信息原样发给我，我帮你看。

---

## 第 0 步 · 装环境（约 30 分钟）

**① 安装 Node.js**（运行 JS 代码的工具）
- 打开 https://nodejs.org → 下载 **LTS 版本**（左边的按钮）→ 一路下一步安装
- 验证：打开终端（Windows 按 `Win + R` 输入 `cmd` 回车；Mac 打开"终端"App），输入：
  ```
  node -v
  ```
  显示类似 `v22.x.x` 就成功了。如果提示"不是内部或外部命令"→ 重启电脑再试，还不行就发我报错截图。

**② 安装 VS Code**（写代码的编辑器）
- 打开 https://code.visualstudio.com → 下载安装
- 装完后打开 VS Code，左侧扩展图标 → 搜索 `Chinese` → 安装中文语言包

**③ 拿到本文件夹**
- 解压 `frontend-road-day1.zip` 到你方便找到的位置（如 `D:\` 或桌面）
- VS Code → 文件 → 打开文件夹 → 选中 `frontend-road`

---

## 第 1 步 · 把文件夹变成你的仓库（约 15 分钟）

在 VS Code 里按 `` Ctrl + ` ``（Tab 键上方那个）打开内置终端，依次输入：

```bash
git init
git add .
git commit -m "Day 1: 起点，2026-09-07"
```

> Windows 如果提示 git 不存在：去 https://git-scm.com 下载安装 Git，装完重开 VS Code。

然后去 https://github.com 注册账号 → 右上角 `+` → New repository → 名字填 `frontend-road` → Create。

回到终端（把 `你的用户名` 换成你的 GitHub 用户名）：

```bash
git remote add origin https://github.com/你的用户名/frontend-road.git
git branch -M main
git push -u origin main
```

✅ **验收**：刷新你的 GitHub 仓库页面，能看到 README 和文件夹，主页出现绿色格子。

---

## 第 2 步 · JS 第一课：变量（约 60 分钟）

> 顺序调整说明：原计划先打算法仗，但先花 1 小时认识变量和函数，待会儿的两数之和会轻松一倍。

在 VS Code 终端里：

| 文件 | 做什么 | 怎么跑 |
|---|---|---|
| `day01/01-learn-variables.js` | **读**：10 分钟读完注释和示例，边读边改值玩 | `node day01/01-learn-variables.js` |
| `day01/02-practice-variables.js` | **练**：完成 5 个 TODO，跑一下看自检结果 | `node day01/02-practice-variables.js` |
| `day01/03-variant-me.js` | **验**：变体任务——存自己的信息 + 算距投递季倒计时 | `node day01/03-variant-me.js` |
| `day01/04-bug-hunt.js` | **猎虫**：3 个真 bug，训练读报错的能力 | 按文件内注释解锁 |

✅ **验收**：02 和 03 跑出来全是 ✅；04 三个 bug 全部修复。

---

## 第 3 步 · 第一场算法仗：两数之和（约 60 分钟）

**① 先自己打（25 分钟）**：打开 https://leetcode.cn/problems/two-sum/
- 不看任何提示，先在纸上/注释里写思路（写不出代码没关系，写"人话"思路）
- 造 3 组测试数据（一组常规、一组换位置的、一组两个数相同的）
- LeetCode 页面上选 JavaScript，试着提交你的暴力解（两层循环套着写，笨办法完全 OK！）

**② 再看讲解（10 分钟）**：打开 `algorithm/leetcode-0001-two-sum-walkthrough.js`
- 对比你刚才的思路，重点看"Step 2 思路 B"那一行——**一句话点破哈希解法**

**③ 关掉重写（20 分钟）**：打开 `algorithm/leetcode-0001-two-sum-practice.js`
- ⛔ 不许回头看讲解文件，从空白函数开始写
- 跑 `node algorithm/leetcode-0001-two-sum-practice.js`，3 个测试全绿才算过
- 过了之后复制粘贴到 LeetCode 提交，拿到你的第一个绿色 Accepted！

**④ 打标记**：打开 `notes/algorithm.md`，这题我已经帮你登记为 🟡 黄色，重刷日期已排好（明天/后天/大后天）。

---

## 第 4 步 · 写日志 + 收工（约 10 分钟）

- 打开 `notes/daily-log.md`，今天的框架已建好，把"我的实际感受"补上
- 提交今天的战果：

```bash
git add .
git commit -m "Day 1: JS变量 + 两数之和(哈希解法)"
git push
```

✅ **最终验收**：GitHub 主页今天这格是绿的。你已经不是"0 基础"了——你是有 1 个仓库、1 道 AC 题、1 篇日志的人了。

---

## 🆘 常见问题

| 症状 | 解法 |
|---|---|
| `node`/`git` 不是内部或外部命令 | 装完没重启，或环境变量没生效 → 重启电脑 |
| git push 要求登录 | 按提示用浏览器登录 GitHub 授权即可 |
| 代码报错了 | **把报错最后 3 行原样复制发给我**，我帮你分析（这也是 04-bug-hunt 想教你的能力） |
| 今晚实在没时间做完 | 完成"第 0+1+2 步"就算 Day 1 达标，算法题顺延到明天早上——链没断 |

## 📅 明天预告（Day 2）

- 算法：重刷两数之和（1 天间隔）+ 新题「有效的字母异位词」
- JS：数据类型 + 类型转换（教程 2.1–2.3 节）
- 晚上记得回来找我领任务
