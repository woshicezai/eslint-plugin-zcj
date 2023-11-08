/**
 * 基本类型的常量命名全部大写，单词间用下划线隔开，力求语义表达完整清楚， 不要嫌名字长
 */
module.exports = {
  create: function (context) {
    return {
      Identifier: function (node) {
        // 检查父节点，如果是VariableDeclarator并且祖父节点是kind为const的VariableDeclaration，那么就进行规则检查
        if (
          node.parent.type === "VariableDeclarator" &&
          node.parent.parent.kind === "const" &&
          ["string", "number", "boolean"].includes(
            typeof node.parent?.init?.value
          )
        ) {
          if (!node.name.match(/^[A-Z_]+$/)) {
            context.report({
              node: node,
              message:
                "基本类型的常量，命名建议全部大写，单词间用下划线隔开，力求语义表达完整清楚，不要嫌名字长",
            });
          }
        }
      },
    };
  },
};
