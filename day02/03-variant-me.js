/**
 * ═══════════════════════════════════════════════════════════
 *  Day 2 · 变体任务：把类型转换用在自己身上（学→练→验 的"验"）
 * ═══════════════════════════════════════════════════════════
 *  运行：node day02/03-variant-me.js
 *  变体 = 教程没教过的组合用法。做不出来可以翻 01 课的笔记，
 *  但不要复制粘贴——重打一遍才算你的。
 */

// ─────────── 任务 A：进度报告生成器 ───────────
// 场景：你刷题网站的后台返回的数据是字符串（很常见！API 传回来的都是字符串）。
// 你要把字符串转成数字，算出"已完成百分比"再打印出来。

// 后台返回的原始数据（都是字符串，别改这三行）：
const totalStr = "15";        // 本周计划 15 小时
const doneStr = "12.5";       // 已经投入 12.5 小时

// TODO：把 totalStr 和 doneStr 转成数字，算出完成百分比（0~100 的整数）
// 提示 1：Number(totalStr) 和 Number(doneStr)
// 提示 2：百分比 = 已完成 / 总量 * 100
// 提示 3：用 Math.round() 取整
const percent = null; // ← 把 null 换成你的计算表达式

console.log(`本周学习进度：${percent}%`);

// ─────────── 任务 B：类型侦探 ───────────
// 下面有一堆值，用 typeof 判断它们各自的类型，把结果填进对应的变量。
// 注意：typeof 的结果是字符串（比如 "number"、"string"、"boolean"）。

const a = 100;
const b = "100";
const c = true;
const d = [1, 2, 3];          // 数组（后面课会细讲，现在先知道 typeof 它是什么）
const e = { key: "value" };   // 对象

const typeA = null;   // ← 填空
const typeB = null;   // ← 填空
const typeC = null;   // ← 填空
const typeD = null;   // ← 填空（提示：数组的 typeof 会出乎你意料）
const typeE = null;   // ← 填空

console.log(`类型侦探：a=${typeA}, b=${typeB}, c=${typeC}, d=${typeD}, e=${typeE}`);

// ═══════════════ 自检（不要改） ═══════════════
console.log("\n────────── 自检 ──────────");
console.log(percent >= 0 && percent <= 100 && Number.isInteger(percent) ? "✅ 任务 A：百分比计算正确（0~100 的整数）" : "❌ 任务 A：percent 应该是 0~100 的整数，检查你的换算和取整");
console.log(typeA === "number" && typeB === "string" && typeC === "boolean" && typeD === "object" && typeE === "object" ? "✅ 任务 B：类型侦探全部判断正确" : "❌ 任务 B：检查每个 typeof 的结果（提示：数组和对象的 typeof 都是 object）");

console.log("\n都 ✅ 了？→ 进入 04-bug-hunt.js");
