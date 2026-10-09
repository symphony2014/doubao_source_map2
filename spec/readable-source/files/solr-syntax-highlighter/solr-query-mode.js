// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47459.ce31596c.js
         * chunkId: 47459
         * moduleId: 845029
         */
module.exports = function (module, exports, require) {
  var r = /[^\s\|\!\+\-\*\?\~\^\&\:\(\)\[\]\{\}\"\\]/;
  var o = /[\|\!\+\-\*\?\~\^\&]/;
  var i = /^(OR|AND|NOT|TO)$/;
  function u(e, t) {
    var n;
    var a = e.next();
    if (a == "\"") {
      t.tokenize = function (e, t) {
        var n;
        var r = false;
        while ((n = e.next()) != null && (n != a || r)) {
          r = !r && n == "\\";
        }
        if (!r) {
          t.tokenize = u;
        }
        return "string";
      };
    } else if (o.test(a)) {
      t.tokenize = function (e, t) {
        if (a == "|") {
          e.eat(/\|/);
        } else if (a == "&") {
          e.eat(/\&/);
        }
        t.tokenize = u;
        return "operator";
      };
    } else if (r.test(a)) {
      n = a;
      t.tokenize = function (e, t) {
        var o;
        var a = n;
        while ((n = e.peek()) && n.match(r) != null) {
          a += e.next();
        }
        t.tokenize = u;
        if (i.test(a)) {
          return "operator";
        } else if (parseFloat(o = a).toString() === o) {
          return "number";
        } else if (e.peek() == ":") {
          return "propertyName";
        } else {
          return "string";
        }
      };
    }
    if (t.tokenize != u) {
      return t.tokenize(e, t);
    } else {
      return null;
    }
  }
  let a = {
    name: "solr",
    startState: function () {
      return {
        tokenize: u
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
    solr: function () {
      return a;
    }
  });
}