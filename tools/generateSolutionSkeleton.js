const { generateTemplateFiles } = require("generate-template-files");
const path = require("path");

generateTemplateFiles([
  {
    option: "Create solution folder (This is the only option)",
    defaultCase: "(pascalCase)",
    entry: {
      folderPath: path.join(__dirname, "./template"),
    },
    stringReplacers: [
      { question: "Which year are you solving for", slot: "__year__" },
      {
        question: "Which day are you solving for",
        slot: "__day__",
      },
    ],
    output: {
      path: path.join(path.resolve(__dirname, ".."), "/__year__/__day__"),
      pathAndFileNameDefaultCase: "(kebabCase)",
      overwrite: true,
    },
  },
]);
