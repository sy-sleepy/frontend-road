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

