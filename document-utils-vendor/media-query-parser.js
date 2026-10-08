// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mediaQueryMatcherFactory'
// - Resolved require(209779) to 'media-query-matcher-factory'
// - Renamed variable 'i' to 'matcherCombinator'
// - Resolved require(101282) to 'matcher-combinator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 248457
         */
module.exports = function (module, exports, require) {
  var mediaQueryMatcherFactory = require("media-query-matcher-factory") /*id: 209779*/;
  var matcherCombinator = require("matcher-combinator") /*id: 101282*/;
  var o = /[0-9]/;
  var a = /[a-z|\-]/i;
  var s = /\s/;
  var l = /:/;
  var u = /,/;
  var c = /and$/;
  var h = /@/;
  module.exports = {
    parse: function (e) {
      return function (e) {
        var t = [];
        var r = [];
        while (e.length > 0) {
          var o = e.shift();
          if (o.type === "number" || o.type === "literal") {
            t.push(o);
            continue;
          }
          if (o.type === "operator") {
            if (l.test(o.value)) {
              o = {
                type: "query",
                key: t.pop(),
                value: e.shift()
              };
              t.push(o);
              continue;
            }
            while (r.length > 0) {
              t.unshift(r.pop());
            }
            r.push(o);
          }
        }
        while (r.length > 0) {
          t.unshift(r.pop());
        }
        return function e() {
          var r = t.shift();
          if (r.type === "number") {
            return parseInt(r.value);
          }
          if (r.type === "literal") {
            return r.value;
          }
          if (r.type === "operator") {
            var o = e();
            var a = e();
            return matcherCombinator(r.value, o, a);
          }
          if (r.type === "query") {
            var o = r.key.value;
            var a = r.value.value;
            return mediaQueryMatcherFactory(o, a);
          }
        }();
      }(function (e) {
        var t = 0;
        var r = [];
        while (t < e.length) {
          var n = e[t];
          if (h.test(n)) {
            for (n = e[++t]; a.test(n) && n !== undefined;) {
              n = e[++t];
            }
          }
          if (s.test(n) || n === ")" || n === "(") {
            t++;
            continue;
          }
          if (l.test(n) || u.test(n)) {
            t++;
            r.push({
              type: "operator",
              value: n
            });
            continue;
          }
          if (o.test(n)) {
            var i = "";
            while (o.test(n)) {
              i += n;
              n = e[++t];
            }
            r.push({
              type: "number",
              value: i
            });
            continue;
          }
          if (a.test(n)) {
            var i = "";
            while (a.test(n) && n !== undefined) {
              i += n;
              n = e[++t];
            }
            if (c.test(i)) {
              r.push({
                type: "operator",
                value: i
              });
            } else {
              r.push({
                type: "literal",
                value: i
              });
            }
            continue;
          }
          throw TypeError("Tokenizer: I dont know what this character is: " + n);
        }
        return r;
      }(e));
    }
  };
}