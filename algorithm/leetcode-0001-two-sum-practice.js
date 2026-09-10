/**
 * ═══════════════════════════════════════════════════════════════════
 *  重写挑战 · 两数之和（关掉 walkthrough 文件，从这里开始！）
 * ═══════════════════════════════════════════════════════════════════
 *  运行：node algorithm/leetcode-0001-two-sum-practice.js
 *
 *  规则：
 *  ① 不许往回翻 walkthrough 文件（这是"关掉重写"的灵魂步骤）
 *  ② 只许留一张小抄：对每个数 x，先查"另一半"在不在表里，不在就登记自己
 *  ③ 3 个测试全绿后，把函数体复制到 LeetCode 提交：
 *     https://leetcode.cn/problems/two-sum/  （语言选 JavaScript）
 *  ④ 拿到 Accepted 后，去 notes/algorithm.md 看你的重刷排期
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 提示只给三行，剩下的靠你自己：
  // 1. new Map() 建一张空表
  // 2. 循环里，先算出"另一半"是多少
  // 3. 表里有另一半就返回；没有就把"自己 → 下标"记进表

  // 在这里写你的代码

};

// ═══════════════ 测试区（不要改，跑起来看结果） ═══════════════
const cases = [
  { nums: [2, 7, 11, 15], target: 9, expect: [0, 1] },
  { nums: [3, 2, 4], target: 6, expect: [1, 2] },
  { nums: [3, 3], target: 6, expect: [0, 1] },
];

console.log("── 重写挑战 · 两数之和 ──\n");
let passCount = 0;
for (const c of cases) {
  const got = twoSum(c.nums, c.target);
  const pass = JSON.stringify(got) === JSON.stringify(c.expect);
  if (pass) passCount++;
  console.log(`${pass ? "✅" : "❌"} nums=[${c.nums}] target=${c.target} → [${got}]（期望 [${c.expect}]）`);
}
console.log(`\n${passCount === 3 ? "🎉 3/3 全绿！复制到 LeetCode 提交，然后打钩收工！" : `💡 ${passCount}/3 —— 没全绿很正常：`}`);
if (passCount < 3) {
  console.log("   调试提示：");
  console.log("   · 结果是 undefined？→ 函数里忘了 return");
  console.log("   · 第 3 个用例挂了？→ 检查你是不是「先登记自己再查另一半」了，顺序反了会匹配到自己");
  console.log("   · 实在想不出：允许回去看 walkthrough 的思路 B，但看完必须回来重新从零写");
}
