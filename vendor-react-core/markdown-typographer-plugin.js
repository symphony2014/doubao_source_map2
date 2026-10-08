// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 966963
         */
module.exports = function (module, exports, require) {
  var e = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
  var r = /\((c|tm|r|p)\)/i;
  var n = /\((c|tm|r|p)\)/ig;
  var i = {
    c: "©",
    r: "®",
    p: "§",
    tm: "™"
  };
  function o(t, e) {
    return i[e.toLowerCase()];
  }
  module.exports = function (t) {
    var i;
    if (t.md.options.typographer) {
      for (i = t.tokens.length - 1; i >= 0; i--) {
        if (t.tokens[i].type === "inline") {
          if (r.test(t.tokens[i].content)) {
            (function (t) {
              var e;
              var r;
              var i = 0;
              for (e = t.length - 1; e >= 0; e--) {
                if ((r = t[e]).type === "text" && !i) {
                  r.content = r.content.replace(n, o);
                }
                if (r.type === "link_open" && r.info === "auto") {
                  i--;
                }
                if (r.type === "link_close" && r.info === "auto") {
                  i++;
                }
              }
            })(t.tokens[i].children);
          }
          if (e.test(t.tokens[i].content)) {
            (function (t) {
              var r;
              var n;
              var i = 0;
              for (r = t.length - 1; r >= 0; r--) {
                if ((n = t[r]).type === "text" && !i && e.test(n.content)) {
                  n.content = n.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–");
                }
                if (n.type === "link_open" && n.info === "auto") {
                  i--;
                }
                if (n.type === "link_close" && n.info === "auto") {
                  i++;
                }
              }
            })(t.tokens[i].children);
          }
        }
      }
    }
  };
}