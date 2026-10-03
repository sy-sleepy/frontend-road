/**
 * ═══════════════════════════════════════════════════════════
 *  Day 2 · 第 1 课：数据类型 + 类型转换 —— JS 的"变形金刚"
 * ═══════════════════════════════════════════════════════════
 *  运行方式：在终端输入  node day02/01-learn-data-types.js
 *  玩法：随便改这些值，重新跑一遍，观察输出变化。改坏了也没事，
 *        大不了改回来——今天的目标是"看清楚每个值到底什么类型"。
 */

// ─────────────────────────────────────────
// 一、typeof：问 JS "你是什么类型？"
// ─────────────────────────────────────────
// 昨天你已经见过它了。今天正式认识：typeof 是查类型的万能工具，
// 不确定的时候，console.log(typeof xxx) 永远是你的朋友。

console.log("── typeof 七连问 ──");
console.log(typeof "hello");       // string 字符串
console.log(typeof 42);            // number 数字
console.log(typeof 3.14);          // number 小数也算 number
console.log(typeof true);          // boolean 布尔
console.log(typeof undefined);     // undefined 未定义
console.log(typeof null);          // object  ← 这是个著名的历史 bug！见下方"坑区"
console.log(typeof { name: "x" }); // object 对象

// ─────────────────────────────────────────
// 二、JS 的 7 种原始类型（背下来）
// ─────────────────────────────────────────
// string / number / boolean / undefined / null / symbol / bigint
// 今天先记前 5 个，symbol 和 bigint 以后用到再说。

const str = "15 周";        // string：文字，带引号
const num = 15;             // number：数字，不带引号
const isOk = false;         // boolean：只有 true/false
let notSure;                // undefined：声明了但没赋值
const nothing = null;       // null：主动设为"空"

console.log("\n── 5 个原始类型示例 ──");
console.log(typeof str, typeof num, typeof isOk, typeof notSure, typeof nothing);

// ─────────────────────────────────────────
// 三、类型转换：字符串 ↔ 数字 怎么换
// ─────────────────────────────────────────
// 这是今天最重要的实战技能。场景：用户输入"18"（字符串），
// 但你要拿它做加法（数字），就必须先转成数字。

// ① 转数字：Number() 或 parseInt()
console.log("\n── 字符串 → 数字 ──");
const ageStr = "18";                 // 这是字符串（有引号）
console.log(ageStr + 1);             // "181" ← 字符串拼接，不是 19！这是今天的头号坑
console.log(Number(ageStr) + 1);     // 19   ← 先转数字再加，才对
console.log(parseInt("20岁"));       // 20   ← parseInt 能"抠"出开头的数字

// ② 转字符串：String() 或 模板字符串
console.log("\n── 数字 → 字符串 ──");
const score = 100;
console.log(String(score));          // "100"（现在是字符串了）
console.log(`分数是 ${score}`);      // 模板字符串会自动转成字符串

// ③ 转布尔：Boolean() —— 判断"有没有值"时用
console.log("\n── 转布尔 ──");
console.log(Boolean(0));             // false ← 0 是"假"
console.log(Boolean(""));            // false ← 空字符串是"假"
console.log(Boolean("0"));           // true  ← 非空字符串都是"真"（注意！）
console.log(Boolean(null));          // false
console.log(Boolean("hello"));       // true

// ─────────────────────────────────────────
// 四、隐式转换：JS 偷偷帮你转（最容易踩坑）
// ─────────────────────────────────────────
// JS 在"算不出结果"时，会自作主张转换类型。这些规则要能看懂：

console.log("\n── 隐式转换演示 ──");
console.log("5" + 3);        // "53"   + 号遇到字符串 = 拼接，不是加法
console.log("5" - 3);        // 2      - 号会强制转数字
console.log("5" * "3");      // 15     * / 号也会强制转数字
console.log(5 == "5");       // true   == 会先转再比（宽松相等）
console.log(5 === "5");      // false  === 不转，直接比（严格相等，推荐用这个）

// ─────────────────────────────────────────
// 五、坑区：typeof null 和 NaN
// ─────────────────────────────────────────
console.log("\n── 两个著名大坑 ──");
// 坑 1：typeof null 返回 "object"，这是 JS 从 1995 年留下的历史 bug，别信它。
console.log('typeof null →', typeof null);   // "object"（其实 null 是独立类型）

// 坑 2：NaN = Not a Number，"不是一个数字"，但它自己的类型是 number。
const bad = Number("abc");          // "abc" 转不成数字
console.log('Number("abc") →', bad);          // NaN
console.log('typeof NaN →', typeof bad);       // "number"（诡异但真实）
console.log('判断是不是 NaN →', Number.isNaN(bad));  // true ← 用这个判断，别用 === NaN

console.log("\n改一改上面的值，重新跑，观察 typeof 和转换结果的变化。");
