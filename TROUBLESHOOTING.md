# Troubleshooting Guide

## MDX v3 + KaTeX LaTeX 兼容性问题

### 问题描述

当在 Docusaurus (MDX v3) 中使用 KaTeX 渲染 LaTeX 数学公式时，可能会遇到以下错误：

**错误1：Missing open brace for superscript**
```latex
❌ \alpha^*
```

**错误2：Extra close brace or missing open brace**
```latex
❌ \alpha^{*}
```

### 问题根源

MDX v3 的表达式解析器会将大括号内的内容 `{...}` 误解析为 JavaScript 表达式，即使它在 LaTeX 数学环境 `$$...$$` 或 `$...$` 内。

- `{*}` 在 JavaScript 中不是合法表达式（`*` 是运算符，不能单独存在）
- MDX v3 比 v1/v2 更严格，会先解析大括号再交给 KaTeX
- 这导致报错 "Could not parse expression with acorn" 或 "Extra close brace"

相关 Issue：
- [Docusaurus #9538: MDX v3 LaTeX: Escaping Curly Braces](https://github.com/facebook/docusaurus/issues/9538)
- [Docusaurus #11235: MDX/Acorn error triggered by LaTeX patterns](https://github.com/facebook/docusaurus/issues/11235)
- [MDX #370: KaTeX expressions with escapes and braces throw errors](https://github.com/mdx-js/mdx/issues/370)

### 解决方案

**使用 LaTeX 命令替代字面字符**

| 字面字符 | LaTeX 命令 | 说明 |
|---------|-----------|------|
| `*` | `\ast` | 星号/星号运算符 |
| `★` | `\star` | 实心五角星 |

**示例：**

```latex
❌ 错误写法：
\alpha^{*}         # MDX 解析错误
T_{\max}           # 如果在某些上下文也可能报错

✅ 正确写法：
\alpha^{\ast}      # 使用 \ast 命令
T_{\max}           # 通常没问题，但如遇报错改为转义大括号
```

**修复步骤：**

1. 查找所有上标/下标中的字面星号：
   ```bash
   grep -n '\^{*}' your-file.md
   ```

2. 替换为 LaTeX 命令：
   ```bash
   sed -i 's/\^{\*}/^{\\ast}/g' your-file.md
   ```

3. 验证修复：
   ```bash
   grep -n '\^{\\ast}' your-file.md
   ```

### 其他常见 MDX v3 LaTeX 问题

#### 问题：大括号需要转义

**症状：** `\int_0^{2\pi}` 报错 "Could not parse expression with acorn"

**解决：** 转义开大括号
```latex
❌ \int_0^{2\pi}
✅ \int_0^\{2\pi}
```

#### 问题：特殊 LaTeX 命令模式

**症状：** 包含 `\text{...}` 等命令的公式报错

**解决：** 根据具体情况：
- 转义大括号：`\text\{foo}`
- 或使用双反斜杠：`\\text{foo}` (在某些配置下)
- 或使用 `\mbox{foo}` 替代

#### 问题：表格中的数学公式

**症状：** Markdown 表格中使用 `|` 符号的数学公式渲染错误

**解决：**
- 使用 HTML 表格代替 Markdown 表格
- 或使用 `\vert` 或 `\mid` 代替 `|`

### 最佳实践

1. **优先使用 LaTeX 命令**
   - 使用 `\ast` 而非 `*`
   - 使用 `\{` 和 `\}` 而非字面大括号（在必要时）

2. **测试渲染**
   - 修改后在本地运行 `npm start` 测试
   - 检查浏览器控制台是否有 KaTeX 错误

3. **文档化特殊情况**
   - 如果某个公式需要特殊处理，在代码注释中说明
   - 记录在本文档中供团队参考

### 开发环境配置

本项目使用：
- **Docusaurus v3** (MDX v3)
- **remark-math v6**
- **rehype-katex v7**

这个配置是 Docusaurus v3 推荐的数学公式渲染方案。

### 参考资源

- [Docusaurus 官方文档：Math Equations](https://docusaurus.io/docs/markdown-features/math-equations)
- [MDX 故障排除指南](https://mdxjs.com/docs/troubleshooting-mdx/)
- [KaTeX 支持的函数列表](https://katex.org/docs/supported.html)
- [LaTeX 上标下标参考](http://latexref.xyz/Subscripts-_0026-superscripts.html)

---

**最后更新：** 2025-12-31
**贡献者：** Claude (Session: review-project-QI0N5)
