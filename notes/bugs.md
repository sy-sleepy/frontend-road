# 🐛 踩坑记录（Bug Log）

> 报错是最好的老师。每抓一只虫，就记一条。
> 格式：报错原文 → 原因 → 解法。三个月后回看，这本账就是你的 Debug 能力。

## 示例条目（Day 1 的 bug-hunt 第 1 只虫，照这个格式记）

### 2026-09-07 · ReferenceError: passwrod is not defined

- **现象**：控制台红色报错，程序当场停止
- **原因**：变量声明时拼写是 `password`，使用时手滑写成 `passwrod`。JS 找不到这个名字，抛出 ReferenceError
- **解法**：统一拼写。日常 90% 的 ReferenceError 都是拼写/大小写不一致
- **教训**：报错第一行的 `xxx is not defined` 就是在直接告诉你病根——**先读完报错再动手改**

---

## 我的记录（从这往下写）
打完代码一定记得保存再运行
let = 会变的盒子，const = 不变的盒子（默认用 const，要改再换 let）
typeof 查类型，console.log 打印一切
字符串拼接用反引号 ` 和 ${}
Bug 1：ReferenceError（变量名拼错） 报错会是什么：ReferenceError: passwrod is not defined
Bug 2：TypeError（对数字用字符串方法） toUpperCase() 是字符串的方法（转大写），age 是数字 20，数字没这方法。
       报错：TypeError: age.toUpperCase is not a function。最简单是改声明：const age = "20";（加引号变字符串）。
Bug 3：TypeError Assignment（给 const 重新赋值） const 声明后不能再赋值。报错：TypeError: Assignment to constant variable. 用let 