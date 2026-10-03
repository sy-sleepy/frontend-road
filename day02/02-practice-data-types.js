/**
 * ═══════════════════════════════════════════════════════════
 *  Day 2 · 练习：数据类型与类型转换（完成 6 个 TODO，跑出自检全绿）
 * ═══════════════════════════════════════════════════════════
 *  运行：node day02/02-practice-data-types.js
 *  规则：每完成一个 TODO 就跑一次，看着 ❌ 一个个变 ✅
 */

// ─────────── TODO 1 ───────────
// 用 typeof 判断：字符串 "15" 是什么类型？把答案（字符串）赋值给 type1
const type1 = typeof "15";
// ─────────── TODO 2 ───────────
// 把字符串 "15" 转成数字，存进 numFromStr
const numFromStr = Number("15");
// ─────────── TODO 3 ───────────
// 计算 1 + 2 + 3 的总和（结果是数字 6），存进 total
const total = 1 + 2 + 3; // ← 算出 1+2+3 的和

// ─────────── TODO 4 ───────────
// 用 String() 把数字 42 转成字符串，存进 strFromNum
const strFromNum = String(42); // ← 用 String() 转换

// ─────────── TODO 5 ───────────
// 用 === 判断：数字 5 和字符串 "5" 严格相等吗？存进 isStrictEqual（应该是 false）
const isStrictEqual = 5 === "5"; // ← 用 === 判断

// ─────────── TODO 6 ───────────
// 用 Boolean() 判断空字符串 "" 是"真"还是"假"？存进 isEmptyTruthy
const isEmptyTruthy = Boolean(""); // ← 用 Boolean() 判断

// ═══════════════ 自检区（不要改下面的代码） ═══════════════
console.log("\n────────── 自检 ──────────");
console.log(type1 === "string" ? "✅ TODO 1 通过：typeof \"15\" 是 string" : "❌ TODO 1：用 typeof 判断字符串 \"15\" 的类型");
console.log(numFromStr === 15 ? "✅ TODO 2 通过：\"15\" 转成了数字 15" : "❌ TODO 2：用 Number(\"15\") 转数字");
console.log(total === 6 ? "✅ TODO 3 通过：1+2+3 = 6" : "❌ TODO 3：计算 1+2+3 的和");
console.log(strFromNum === "42" ? "✅ TODO 4 通过：42 转成了字符串 \"42\"" : "❌ TODO 4：用 String(42) 转字符串");
console.log(isStrictEqual === false ? "✅ TODO 5 通过：5 === \"5\" 是 false" : "❌ TODO 5：=== 不转换类型，所以是 false");
console.log(isEmptyTruthy === false ? "✅ TODO 6 通过：空字符串是\"假\"" : "❌ TODO 6：Boolean(\"\") 是 false");

console.log("\n全绿了？→ 进入 03-variant-me.js");
