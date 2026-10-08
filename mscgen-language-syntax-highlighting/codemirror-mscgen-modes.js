// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'xu' to 'xuMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 82824.10b0702f.js
         * chunkId: 82824
         * moduleId: 262974
         */
module.exports = function (module, exports, require) {
  function o(t) {
    var r;
    return {
      name: "mscgen",
      startState: l,
      copyState: u,
      token: (r = t, function (t, e) {
        if (t.match(s(r.brackets), true, true)) {
          return "bracket";
        }
        if (!e.inComment) {
          if (t.match(/\/\*[^\*\/]*/, true, true)) {
            e.inComment = true;
            return "comment";
          }
          if (t.match(s(r.singlecomment), true, true)) {
            t.skipToEnd();
            return "comment";
          }
        }
        if (e.inComment) {
          if (t.match(/[^\*\/]*\*\//, true, true)) {
            e.inComment = false;
          } else {
            t.skipToEnd();
          }
          return "comment";
        }
        if (!e.inString && t.match(/\"(\\\"|[^\"])*/, true, true)) {
          e.inString = true;
          return "string";
        }
        if (e.inString) {
          if (t.match(/[^\"]*\"/, true, true)) {
            e.inString = false;
          } else {
            t.skipToEnd();
          }
          return "string";
        }
        if (r.keywords && t.match(a(r.keywords), true, true) || t.match(a(r.options), true, true) || t.match(a(r.arcsWords), true, true) || t.match(s(r.arcsOthers), true, true)) {
          return "keyword";
        }
        if (r.operators && t.match(s(r.operators), true, true)) {
          return "operator";
        }
        if (r.constants && t.match(s(r.constants), true, true)) {
          return "variable";
        }
        if (!r.inAttributeList && r.attributes && t.match("[", true, true)) {
          r.inAttributeList = true;
          return "bracket";
        }
        if (r.inAttributeList) {
          if (r.attributes !== null && t.match(a(r.attributes), true, true)) {
            return "attribute";
          }
          if (t.match("]", true, true)) {
            r.inAttributeList = false;
            return "bracket";
          }
        }
        t.next();
        return null;
      }),
      languageData: {
        commentTokens: {
          line: "#",
          block: {
            open: "/*",
            close: "*/"
          }
        }
      }
    };
  }
  let n = o({
    keywords: ["msc"],
    options: ["hscale", "width", "arcgradient", "wordwraparcs"],
    constants: ["true", "false", "on", "off"],
    attributes: ["label", "idurl", "id", "url", "linecolor", "linecolour", "textcolor", "textcolour", "textbgcolor", "textbgcolour", "arclinecolor", "arclinecolour", "arctextcolor", "arctextcolour", "arctextbgcolor", "arctextbgcolour", "arcskip"],
    brackets: ["\\{", "\\}"],
    arcsWords: ["note", "abox", "rbox", "box"],
    arcsOthers: ["\\|\\|\\|", "\\.\\.\\.", "---", "--", "<->", "==", "<<=>>", "<=>", "\\.\\.", "<<>>", "::", "<:>", "->", "=>>", "=>", ">>", ":>", "<-", "<<=", "<=", "<<", "<:", "x-", "-x"],
    singlecomment: ["//", "#"],
    operators: ["="]
  });
  let i = o({
    keywords: null,
    options: ["hscale", "width", "arcgradient", "wordwraparcs", "wordwrapentities", "watermark"],
    constants: ["true", "false", "on", "off", "auto"],
    attributes: null,
    brackets: ["\\{", "\\}"],
    arcsWords: ["note", "abox", "rbox", "box", "alt", "else", "opt", "break", "par", "seq", "strict", "neg", "critical", "ignore", "consider", "assert", "loop", "ref", "exc"],
    arcsOthers: ["\\|\\|\\|", "\\.\\.\\.", "---", "--", "<->", "==", "<<=>>", "<=>", "\\.\\.", "<<>>", "::", "<:>", "->", "=>>", "=>", ">>", ":>", "<-", "<<=", "<=", "<<", "<:", "x-", "-x"],
    singlecomment: ["//", "#"],
    operators: ["="]
  });
  let c = o({
    keywords: ["msc", "xu"],
    options: ["hscale", "width", "arcgradient", "wordwraparcs", "wordwrapentities", "watermark"],
    constants: ["true", "false", "on", "off", "auto"],
    attributes: ["label", "idurl", "id", "url", "linecolor", "linecolour", "textcolor", "textcolour", "textbgcolor", "textbgcolour", "arclinecolor", "arclinecolour", "arctextcolor", "arctextcolour", "arctextbgcolor", "arctextbgcolour", "arcskip", "title", "deactivate", "activate", "activation"],
    brackets: ["\\{", "\\}"],
    arcsWords: ["note", "abox", "rbox", "box", "alt", "else", "opt", "break", "par", "seq", "strict", "neg", "critical", "ignore", "consider", "assert", "loop", "ref", "exc"],
    arcsOthers: ["\\|\\|\\|", "\\.\\.\\.", "---", "--", "<->", "==", "<<=>>", "<=>", "\\.\\.", "<<>>", "::", "<:>", "->", "=>>", "=>", ">>", ":>", "<-", "<<=", "<=", "<<", "<:", "x-", "-x"],
    singlecomment: ["//", "#"],
    operators: ["="]
  });
  function a(t) {
    return RegExp("^\\b(" + t.join("|") + ")\\b", "i");
  }
  function s(t) {
    return RegExp("^(?:" + t.join("|") + ")", "i");
  }
  function l() {
    return {
      inComment: false,
      inString: false,
      inAttributeList: false,
      inScript: false
    };
  }
  function u(t) {
    return {
      inComment: t.inComment,
      inString: t.inString,
      inAttributeList: t.inAttributeList,
      inScript: t.inScript
    };
  }
  require.r(exports);
  require.d(exports, {
    mscgen: function () {
      return n;
    },
    msgenny: function () {
      return i;
    },
    xuMode: function () {
      return c;
    }
  });
}