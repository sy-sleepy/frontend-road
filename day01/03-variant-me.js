/**
 * ═══════════════════════════════════════════════════════════
 *  Day 1 · 变体任务：把知识用在自己身上（学→练→验 的"验"）
 * ═══════════════════════════════════════════════════════════
 *  运行：node day01/03-variant-me.js
 *  变体 = 教程没教过的组合用法。做不出来可以翻 01 课的笔记，
 *  但不要复制粘贴——重打一遍才算你的。
 */

// ─────────── 任务 A：自我介绍卡 ───────────
// 声明 4 个变量：name / school / targetCompany（目标公司）/ targetRole（目标岗位）
// 然后用模板字符串打印一张这样的卡片：
//
//   ╔══════════════════════════════╗
//   ║  姓名：xxx                    ║
//   ║  学校：xxx                    ║
//   ║  目标：xxx · xxx 前端工程师    ║
//   ║  开始日期：2026-09-07          ║
//   ╚══════════════════════════════╝
//
// 提示：console.log(`╔════...`) 多行打印即可，不用追求边框对齐完美

// 你的代码写在这里：
const name = "e直睡";
const school = "天津仁爱学院";
const targetCompany = "字节";
const targetRole = "前端";
console.log (`  ╔══════════════════════════════╗ `)
console.log (`  ║  姓名: ${name}                   ║` )
console.log (`  ║  学校: ${school}                   ║` )
console.log (`  ║  目标:${targetCompany} . ${targetRole}║ `)
console.log (`   ║  开始日期:2026-09-07          ║` )
console.log (` ╚══════════════════════════════╝`)
// ─────────── 任务 B：倒计时计算器 ───────────
// JS 内置的 Date 对象可以做日期运算。下面这行代码拿到"现在"：
const now = new Date();
// 11 月 15 日是你第一批投递的日子（15 周计划的节点）
const investDay = new Date("2026-11-15");

// TODO：计算 now 和 investDay 相差多少天，存进 daysLeft 并打印：
// 提示 1：两个 Date 相减会得到毫秒数：investDay - now
// 提示 2：一天有 1000 * 60 * 60 * 24 毫秒，用除法换算成天数
// 提示 3：小数很难看，用 Math.round(...) 取整
const daysLeft = Math.round((investDay-now)/(1000 * 60 * 60 * 24));// ← 把 null 换成你的计算表达式

console.log(`\n⏰ 距离第一批实习投递（2026-11-15）还有：${daysLeft} 天`);
console.log(`   按每周 18 小时算，你还有 ${Math.round(daysLeft / 7 * 18)} 小时可支配 —— 够了，但一天都不能浪费。`);

// ═══════════════ 自检（不要改） ═══════════════
console.log("\n────────── 自检 ──────────");
console.log(typeof daysLeft === "number" && daysLeft > 0 && daysLeft < 100 ? "✅ 倒计时计算正确" : "❌ daysLeft 应该是 0~100 之间的数字，检查你的换算");
console.log("✅ 能看到这张卡片和倒计时，Day 1 的 JS 部分就通关了 → 进入 04-bug-hunt.js");
