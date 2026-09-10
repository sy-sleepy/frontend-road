/**
 * ═══════════════════════════════════════════════════════════
 *  Day 1 · 练习：变量（完成 5 个 TODO，跑出自检全绿）
 * ═══════════════════════════════════════════════════════════
 *  运行：node day01/02-practice-variables.js
 *  规则：每完成一个 TODO 就跑一次，看着 ❌ 一个个变 ✅
 */

// ─────────── TODO 1 ───────────
// 用 const 声明变量 myName，值为你的名字
const myName = null; // ← 把 null 改成你的名字

// ─────────── TODO 2 ───────────
// 用 const 声明 myCity，值为你所在的城市
const myCity = null;

// ─────────── TODO 3 ───────────
// 用 let 声明 solvedCount，值为 0（表示已解决的算法题数）
let solvedCount = null;

// ─────────── TODO 4 ───────────
// 把 solvedCount 重新赋值为 1（今天就要拿下两数之和！）
// 在这里写一行代码：

// ─────────── TODO 5 ───────────
// 用模板字符串（反引号 + ${}）拼出这句话：
// "我是 xxx，来自 xxx，今天已解决 1 道算法题"
const intro = null; // ← 把 null 换成你的模板字符串

console.log(intro);

// ═══════════════ 自检区（不要改下面的代码） ═══════════════
console.log("\n────────── 自检 ──────────");
console.log(typeof myName === "string" && myName !== null ? "✅ TODO 1 通过：myName 是字符串" : "❌ TODO 1：myName 应该是你的名字（字符串）");
console.log(typeof myCity === "string" && myCity !== null ? "✅ TODO 2 通过：myCity 是字符串" : "❌ TODO 2：myCity 应该是你的城市（字符串）");
console.log(solvedCount === 1 ? "✅ TODO 3+4 通过：solvedCount 已从 0 改成 1" : "❌ TODO 3/4：先声明为 0，再重新赋值为 1");
console.log(intro !== null && intro.includes("1") && intro.includes(myName) ? "✅ TODO 5 通过：模板字符串正确" : "❌ TODO 5：用 `...${myName}...` 的写法拼句子");

console.log("\n全绿了？→ 进入 03-variant-me.js");
