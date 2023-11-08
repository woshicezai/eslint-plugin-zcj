/**
 * 不要直接使用 'undefined' 进行变量判断；使用 'typeof' 和字符串 'undefined' 对变量进行判断。
 */
module.exports = {
  create: function (context) {
    return {
      BinaryExpression(node) {
        if (
          (node.operator === "===" || node.operator === "!==") &&
          (node.left.name === "undefined" || node.right.name === "undefined")
        ) {
          context.report({
            node,
            message:
              "不要直接使用 'undefined' 进行变量判断；使用 'typeof' 和字符串 'undefined' 对变量进行判断。",
          });
        }
      },
    };
  },
};
