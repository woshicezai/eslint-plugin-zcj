# eslint-plugin-zcj

eslint plugin for zcj
根据前端规范文档梳理出的规范以及格式化

## 规范如下（持续更新）：

1. 变量命名小写驼峰 lowerCamelCase
2. 基本类型的常量命名全部大写，单词间用下划线隔开，力求语义表达完整清楚，不要嫌名字长
3. 函数声明间隔一行，提升可读性
4. 字符串单引号
5. 创建对象使用字面量，不使用 new Object()
6. 块作用域内部的代码用{}包裹，即使一行
7. 永远不要直接使用 undefined 进行变量判断；使用 typeof 和字符串’undefined’对变量进行判断
8. 条件判断和循环做多三层
9. console.log,debugger，做提示删除
10. 缩进 2 个空格
