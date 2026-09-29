/**
 * ═══════════════════════════════════════════════════════════
 *  Day 1 · 猎虫行动（Bug Hunt）：学会读报错
 * ═══════════════════════════════════════════════════════════
 *  程序员 60% 的时间在调 bug。今天的最后一课：和报错做朋友。
 *
 *  规则：下面有 3 个被注释掉的 bug。一次只解开一个：
 *    ① 删掉某段的注释符号
 *    ② 运行 node day01/04-bug-hunt.js
 *    ③ 【重点】把报错信息从头到尾读完，尤其是第一行和最后一行
 *    ④ 自己修复它，再跑，直到不报错
 *    ⑤ 把 bug 记录到 notes/bugs.md（我已给你做了示范）
 */

console.log("🐛 猎虫行动开始 —— 按注释指引，一次解锁一个 bug\n");

// ════════ Bug 1： ReferenceError ════════
// 取消下面 3 行注释，运行，读懂报错后修复它
const password = "123456";
console.log(`我的密码是 ${password}`);

// ════════ Bug 2： TypeError ════════
// Bug 1 修好后，取消下面 3 行注释再来
const age = "20";
const message = age.toUpperCase();
console.log(message)

// ════════ Bug 3： TypeError (Assignment) ════════
// 最后一个，取消下面 3 行注释
let goal = "进大厂";
goal = "进字节";
console.log(goal);

console.log("三个虫子都抓完了？去 notes/bugs.md 记录战果，然后开始今天的算法题！");
