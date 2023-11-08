module.exports = {
  rules: {
    "primitive-const-uppercase": require("./rules/primitive-const-uppercase"),
    "typeof-undefined": require("./rules/typeof-undefined"),
    "max-depth": require("./rules/max-depth"),
  },
  configs: {
    recommended: {
      rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
        "no-unused-vars": "error", //声明但未使用的变量
        "no-new-object": "error", //创建对象使用字面量
        curly: ["error", "all"], //块区域必须用大括号包裹，即使一行代码也是如此
        camelcase: ["error", { properties: "always" }], //命名驼峰式
        "padding-line-between-statements": [
          //函数之间要空出一行
          "error",
          {
            blankLine: "always",
            prev: ["function"],
            next: ["function"],
          },
          {
            blankLine: "any",
            prev: ["const", "let", "var"],
            next: ["const", "let", "var"],
          },
        ],
        /**自定义规则 */
        "zcj/primitive-const-uppercase": "warn",
        "zcj/typeof-undefined": "warn",
        "zcj/max-depth": ["warn", 3],
      },
    },
  },
};
