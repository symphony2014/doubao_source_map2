// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 81337.852c574d.js
         * chunkId: 81337
         * moduleId: 936818
         */
module.exports = function (module, exports, require) {
  module.exports = () => {
    let e = "\uD800-\uDFFF";
    let a = `[${e}]`;
    let t = `[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]`;
    let r = "\uD83C[\uDFFB-\uDFFF]";
    let n = `(?:${t}|${r})`;
    let o = `[^${e}]`;
    let i = "(?:\uD83C[\uDDE6-\uDDFF]){2}";
    let s = "[\uD800-\uDBFF][\uDC00-\uDFFF]";
    let l = `[\\uD83D\\uDC69\\uD83C\\uDFFB\\u200D\\uD83C\\uDF93]`;
    let c = `${n}?`;
    let u = `[\\ufe0e\\ufe0f]?`;
    let d = `(?:\\u200d(?:${[o, i, s].join("|")})${u + c})*`;
    let p = `${o}${t}?`;
    let f = `(?:${[p, t, i, s, a, l].join("|")})`;
    return RegExp(`(?:\\ud83c\\udff4\\udb40\\udc67\\udb40\\udc62\\udb40(?:\\udc65|\\udc73|\\udc77)\\udb40(?:\\udc6e|\\udc63|\\udc6c)\\udb40(?:\\udc67|\\udc74|\\udc73)\\udb40\\udc7f)|${r}(?=${r})|${f + (u + c + d)}`, "g");
  };
}