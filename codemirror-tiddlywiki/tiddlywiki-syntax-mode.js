// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 66568.258b8a59.js
         * chunkId: 66568
         * moduleId: 784580
         */
module.exports = function (module, exports, require) {
  var n = {};
  var i = {
    allTags: true,
    closeAll: true,
    list: true,
    newJournal: true,
    newTiddler: true,
    permaview: true,
    saveChanges: true,
    search: true,
    slider: true,
    tabs: true,
    tag: true,
    tagging: true,
    tags: true,
    tiddler: true,
    timeline: true,
    today: true,
    version: true,
    option: true,
    with: true,
    filter: true
  };
  var a = /[\w_\-]/i;
  var u = /^\-\-\-\-+$/;
  var o = /^\/\*\*\*$/;
  var f = /^\*\*\*\/$/;
  var c = /^<<<$/;
  var l = /^\/\/\{\{\{$/;
  var m = /^\/\/\}\}\}$/;
  var k = /^<!--\{\{\{-->$/;
  var s = /^<!--\}\}\}-->$/;
  var h = /^\{\{\{$/;
  var _ = /^\}\}\}$/;
  var d = /.*?\}\}\}/;
  function p(e, t, r) {
    t.tokenize = r;
    return r(e, t);
  }
  function b(e, t) {
    var r = e.sol();
    var i = e.peek();
    t.block = false;
    if (r && /[<\/\*{}\-]/.test(i)) {
      if (e.match(h)) {
        t.block = true;
        return p(e, t, z);
      }
      if (e.match(c)) {
        return "quote";
      }
      if (e.match(o) || e.match(f) || e.match(l) || e.match(m) || e.match(k) || e.match(s)) {
        return "comment";
      }
      if (e.match(u)) {
        return "contentSeparator";
      }
    }
    e.next();
    if (r && /[\/\*!#;:>|]/.test(i)) {
      if (i == "!") {
        e.skipToEnd();
        return "header";
      }
      if (i == "*") {
        e.eatWhile("*");
        return "comment";
      }
      if (i == "#") {
        e.eatWhile("#");
        return "comment";
      }
      if (i == ";") {
        e.eatWhile(";");
        return "comment";
      }
      if (i == ":") {
        e.eatWhile(":");
        return "comment";
      }
      if (i == ">") {
        e.eatWhile(">");
        return "quote";
      }
      if (i == "|") {
        return "header";
      }
    }
    if (i == "{" && e.match("{{")) {
      return p(e, t, z);
    }
    if (/[hf]/i.test(i) && /[ti]/i.test(e.peek()) && e.match(/\b(ttps?|tp|ile):\/\/[\-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i)) {
      return "link";
    }
    if (i == "\"") {
      return "string";
    }
    if (i == "~" || /[\[\]]/.test(i) && e.match(i)) {
      return "brace";
    }
    if (i == "@") {
      e.eatWhile(a);
      return "link";
    }
    if (/\d/.test(i)) {
      e.eatWhile(/\d/);
      return "number";
    }
    if (i == "/") {
      if (e.eat("%")) {
        return p(e, t, $);
      }
      if (e.eat("/")) {
        return p(e, t, w);
      }
    }
    if (i == "_" && e.eat("_")) {
      return p(e, t, W);
    }
    if (i == "-" && e.eat("-")) {
      if (e.peek() != " ") {
        return p(e, t, g);
      }
      if (e.peek() == " ") {
        return "brace";
      }
    }
    if (i == "'" && e.eat("'")) {
      return p(e, t, v);
    } else if (i == "<" && e.eat("<")) {
      return p(e, t, x);
    } else {
      e.eatWhile(/[\w\$_]/);
      if (n.propertyIsEnumerable(e.current())) {
        return "keyword";
      } else {
        return null;
      }
    }
  }
  function $(e, t) {
    var r;
    var n = false;
    while (r = e.next()) {
      if (r == "/" && n) {
        t.tokenize = b;
        break;
      }
      n = r == "%";
    }
    return "comment";
  }
  function v(e, t) {
    var r;
    var n = false;
    while (r = e.next()) {
      if (r == "'" && n) {
        t.tokenize = b;
        break;
      }
      n = r == "'";
    }
    return "strong";
  }
  function z(e, t) {
    var r = t.block;
    if (!r || !e.current()) {
      if (!r && e.match(d) || r && e.sol() && e.match(_)) {
        t.tokenize = b;
      } else {
        e.next();
      }
    }
    return "comment";
  }
  function w(e, t) {
    var r;
    var n = false;
    while (r = e.next()) {
      if (r == "/" && n) {
        t.tokenize = b;
        break;
      }
      n = r == "/";
    }
    return "emphasis";
  }
  function W(e, t) {
    var r;
    var n = false;
    while (r = e.next()) {
      if (r == "_" && n) {
        t.tokenize = b;
        break;
      }
      n = r == "_";
    }
    return "link";
  }
  function g(e, t) {
    var r;
    var n = false;
    while (r = e.next()) {
      if (r == "-" && n) {
        t.tokenize = b;
        break;
      }
      n = r == "-";
    }
    return "deleted";
  }
  function x(e, t) {
    if (e.current() == "<<") {
      return "meta";
    }
    var r = e.next();
    if (r) {
      if (r == ">" && e.peek() == ">") {
        e.next();
        t.tokenize = b;
        return "meta";
      } else {
        e.eatWhile(/[\w\$_]/);
        if (i.propertyIsEnumerable(e.current())) {
          return "keyword";
        } else {
          return null;
        }
      }
    } else {
      t.tokenize = b;
      return null;
    }
  }
  let A = {
    name: "tiddlywiki",
    startState: function () {
      return {
        tokenize: b
      };
    },
    token: function (e, t) {
      if (e.eatSpace()) {
        return null;
      } else {
        return t.tokenize(e, t);
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    tiddlyWiki: function () {
      return A;
    }
  });
}