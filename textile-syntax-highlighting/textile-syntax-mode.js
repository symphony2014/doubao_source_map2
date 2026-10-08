// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7112.e71246f9.js
         * chunkId: 7112
         * moduleId: 94635
         */
module.exports = function (module, exports, require) {
  var i = {
    addition: "inserted",
    attributes: "propertyName",
    bold: "strong",
    cite: "keyword",
    code: "monospace",
    definitionList: "list",
    deletion: "deleted",
    div: "punctuation",
    em: "emphasis",
    footnote: "variable",
    footCite: "qualifier",
    header: "heading",
    html: "comment",
    image: "atom",
    italic: "emphasis",
    link: "link",
    linkDefinition: "link",
    list1: "list",
    list2: "list.special",
    list3: "list",
    notextile: "string.special",
    pre: "operator",
    p: "content",
    quote: "bracket",
    span: "quote",
    specialChar: "character",
    strong: "strong",
    sub: "content.special",
    sup: "content.special",
    table: "variableName.special",
    tableHeading: "operator"
  };
  function a(t, e, n) {
    if (n === "_") {
      if (t.eat("_")) {
        return r(t, e, "italic", /__/, 2);
      } else {
        return r(t, e, "em", /_/, 1);
      }
    }
    if (n === "*") {
      if (t.eat("*")) {
        return r(t, e, "bold", /\*\*/, 2);
      } else {
        return r(t, e, "strong", /\*/, 1);
      }
    }
    if (n === "[") {
      if (t.match(/\d+\]/)) {
        e.footCite = true;
      }
      return l(e);
    }
    if (n === "(" && t.match(/^(r|tm|c)\)/)) {
      return i.specialChar;
    }
    if (n === "<" && t.match(/(\w+)[^>]+>[^<]+<\/\1>/)) {
      return i.html;
    }
    if (n === "?" && t.eat("?")) {
      return r(t, e, "cite", /\?\?/, 2);
    }
    if (n === "=" && t.eat("=")) {
      return r(t, e, "notextile", /==/, 2);
    }
    if (n === "-" && !t.eat("-")) {
      return r(t, e, "deletion", /-/, 1);
    }
    if (n === "+") {
      return r(t, e, "addition", /\+/, 1);
    }
    if (n === "~") {
      return r(t, e, "sub", /~/, 1);
    }
    if (n === "^") {
      return r(t, e, "sup", /\^/, 1);
    }
    if (n === "%") {
      return r(t, e, "span", /%/, 1);
    }
    if (n === "@") {
      return r(t, e, "code", /@/, 1);
    }
    if (n === "!") {
      var a = r(t, e, "image", /(?:\([^\)]+\))?!/, 1);
      t.match(/^:\S+/);
      return a;
    }
    return l(e);
  }
  function r(t, e, n, i, a) {
    var r = t.pos > a ? t.string.charAt(t.pos - a - 1) : null;
    var o = t.peek();
    if (e[n]) {
      if ((!o || /\W/.test(o)) && r && /\S/.test(r)) {
        var u = l(e);
        e[n] = false;
        return u;
      }
    } else if ((!r || /\W/.test(r)) && o && /\S/.test(o) && t.match(RegExp("^.*\\S" + i.source + "(?:\\W|$)"), false)) {
      e[n] = true;
      e.mode = c.attributes;
    }
    return l(e);
  }
  function l(t) {
    var e = o(t);
    if (e) {
      return e;
    }
    var n = [];
    if (t.layoutType) {
      n.push(i[t.layoutType]);
    }
    n = n.concat(function (t) {
      var e = [];
      var n = 1;
      for (; n < arguments.length; ++n) {
        if (t[arguments[n]]) {
          e.push(i[arguments[n]]);
        }
      }
      return e;
    }(t, "addition", "bold", "cite", "code", "deletion", "em", "footCite", "image", "italic", "link", "span", "strong", "sub", "sup", "table", "tableHeading"));
    if (t.layoutType === "header") {
      n.push(i.header + "-" + t.header);
    }
    if (n.length) {
      return n.join(" ");
    } else {
      return null;
    }
  }
  function o(t) {
    var e = t.layoutType;
    switch (e) {
      case "notextile":
      case "code":
      case "pre":
        return i[e];
      default:
        if (t.notextile) {
          return i.notextile + (e ? " " + i[e] : "");
        }
        return null;
    }
  }
  var u = {
    cache: {},
    single: {
      bc: "bc",
      bq: "bq",
      definitionList: /- .*?:=+/,
      definitionListEnd: /.*=:\s*$/,
      div: "div",
      drawTable: /\|.*\|/,
      foot: /fn\d+/,
      header: /h[1-6]/,
      html: /\s*<(?:\/)?(\w+)(?:[^>]+)?>(?:[^<]+<\/\1>)?/,
      link: /[^"]+":\S/,
      linkDefinition: /\[[^\s\]]+\]\S+/,
      list: /(?:#+|\*+)/,
      notextile: "notextile",
      para: "p",
      pre: "pre",
      table: "table",
      tableCellAttributes: /[\/\\]\d+/,
      tableHeading: /\|_\./,
      tableText: /[^"_\*\[\(\?\+~\^%@|-]+/,
      text: /[^!"_=\*\[\(<\?\+~\^%@-]+/
    },
    attributes: {
      align: /(?:<>|<|>|=)/,
      selector: /\([^\(][^\)]+\)/,
      lang: /\[[^\[\]]+\]/,
      pad: /(?:\(+|\)+){1,2}/,
      css: /\{[^\}]+\}/
    },
    createRe: function (t) {
      switch (t) {
        case "drawTable":
          return u.makeRe("^", u.single.drawTable, "$");
        case "html":
          return u.makeRe("^", u.single.html, "(?:", u.single.html, ")*", "$");
        case "linkDefinition":
          return u.makeRe("^", u.single.linkDefinition, "$");
        case "listLayout":
          return u.makeRe("^", u.single.list, s("allAttributes"), "*\\s+");
        case "tableCellAttributes":
          return u.makeRe("^", u.choiceRe(u.single.tableCellAttributes, s("allAttributes")), "+\\.");
        case "type":
          return u.makeRe("^", s("allTypes"));
        case "typeLayout":
          return u.makeRe("^", s("allTypes"), s("allAttributes"), "*\\.\\.?", "(\\s+|$)");
        case "attributes":
          return u.makeRe("^", s("allAttributes"), "+");
        case "allTypes":
          return u.choiceRe(u.single.div, u.single.foot, u.single.header, u.single.bc, u.single.bq, u.single.notextile, u.single.pre, u.single.table, u.single.para);
        case "allAttributes":
          return u.choiceRe(u.attributes.selector, u.attributes.css, u.attributes.lang, u.attributes.align, u.attributes.pad);
        default:
          return u.makeRe("^", u.single[t]);
      }
    },
    makeRe: function () {
      var t = "";
      var e = 0;
      for (; e < arguments.length; ++e) {
        var n = arguments[e];
        t += typeof n == "string" ? n : n.source;
      }
      return new RegExp(t);
    },
    choiceRe: function () {
      var t = [arguments[0]];
      var e = 1;
      for (; e < arguments.length; ++e) {
        t[e * 2 - 1] = "|";
        t[e * 2] = arguments[e];
      }
      t.unshift("(?:");
      t.push(")");
      return u.makeRe.apply(null, t);
    }
  };
  function s(t) {
    return u.cache[t] ||= u.createRe(t);
  }
  var c = {
    newLayout: function (t, e) {
      var n;
      if (t.match(s("typeLayout"), false)) {
        e.spanningLayout = false;
        return (e.mode = c.blockType)(t, e);
      } else {
        if (!o(e)) {
          if (t.match(s("listLayout"), false)) {
            n = c.list;
          } else if (t.match(s("drawTable"), false)) {
            n = c.table;
          } else if (t.match(s("linkDefinition"), false)) {
            n = c.linkDefinition;
          } else if (t.match(s("definitionList"))) {
            n = c.definitionList;
          } else if (t.match(s("html"), false)) {
            n = c.html;
          }
        }
        return (e.mode = n || c.text)(t, e);
      }
    },
    blockType: function (t, e) {
      var n;
      var i;
      e.layoutType = null;
      if (n = t.match(s("type"))) {
        if (n = (i = n[0]).match(s("header"))) {
          e.layoutType = "header";
          e.header = parseInt(n[0][1]);
        } else if (i.match(s("bq"))) {
          e.layoutType = "quote";
        } else if (i.match(s("bc"))) {
          e.layoutType = "code";
        } else if (i.match(s("foot"))) {
          e.layoutType = "footnote";
        } else if (i.match(s("notextile"))) {
          e.layoutType = "notextile";
        } else if (i.match(s("pre"))) {
          e.layoutType = "pre";
        } else if (i.match(s("div"))) {
          e.layoutType = "div";
        } else if (i.match(s("table"))) {
          e.layoutType = "table";
        }
        e.mode = c.attributes;
        return l(e);
      } else {
        return (e.mode = c.text)(t, e);
      }
    },
    text: function (t, e) {
      if (t.match(s("text"))) {
        return l(e);
      }
      var n = t.next();
      if (n === "\"") {
        return (e.mode = c.link)(t, e);
      } else {
        return a(t, e, n);
      }
    },
    attributes: function (t, e) {
      e.mode = c.layoutLength;
      if (t.match(s("attributes"))) {
        return i.attributes;
      } else {
        return l(e);
      }
    },
    layoutLength: function (t, e) {
      if (t.eat(".") && t.eat(".")) {
        e.spanningLayout = true;
      }
      e.mode = c.text;
      return l(e);
    },
    list: function (t, e) {
      var n = t.match(s("list"));
      e.listDepth = n[0].length;
      var i = (e.listDepth - 1) % 3;
      if (i) {
        if (i === 1) {
          e.layoutType = "list2";
        } else {
          e.layoutType = "list3";
        }
      } else {
        e.layoutType = "list1";
      }
      e.mode = c.attributes;
      return l(e);
    },
    link: function (t, e) {
      e.mode = c.text;
      if (t.match(s("link"))) {
        t.match(/\S+/);
        return i.link;
      } else {
        return l(e);
      }
    },
    linkDefinition: function (t) {
      t.skipToEnd();
      return i.linkDefinition;
    },
    definitionList: function (t, e) {
      t.match(s("definitionList"));
      e.layoutType = "definitionList";
      if (t.match(/\s*$/)) {
        e.spanningLayout = true;
      } else {
        e.mode = c.attributes;
      }
      return l(e);
    },
    html: function (t) {
      t.skipToEnd();
      return i.html;
    },
    table: function (t, e) {
      e.layoutType = "table";
      return (e.mode = c.tableCell)(t, e);
    },
    tableCell: function (t, e) {
      if (t.match(s("tableHeading"))) {
        e.tableHeading = true;
      } else {
        t.eat("|");
      }
      e.mode = c.tableCellAttributes;
      return l(e);
    },
    tableCellAttributes: function (t, e) {
      e.mode = c.tableText;
      if (t.match(s("tableCellAttributes"))) {
        return i.attributes;
      } else {
        return l(e);
      }
    },
    tableText: function (t, e) {
      if (t.match(s("tableText"))) {
        return l(e);
      } else if (t.peek() === "|") {
        e.mode = c.tableCell;
        return l(e);
      } else {
        return a(t, e, t.next());
      }
    }
  };
  let p = {
    name: "textile",
    startState: function () {
      return {
        mode: c.newLayout
      };
    },
    token: function (t, e) {
      if (t.sol()) {
        e.mode = c.newLayout;
        e.tableHeading = false;
        if (e.layoutType === "definitionList" && e.spanningLayout && t.match(s("definitionListEnd"), false)) {
          e.spanningLayout = false;
        }
      }
      return e.mode(t, e);
    },
    blankLine: function (t) {
      var e = t.spanningLayout;
      var n = t.layoutType;
      for (var i in t) {
        if (t.hasOwnProperty(i)) {
          delete t[i];
        }
      }
      t.mode = c.newLayout;
      if (e) {
        t.layoutType = n;
        t.spanningLayout = true;
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    textile: function () {
      return p;
    }
  });
}