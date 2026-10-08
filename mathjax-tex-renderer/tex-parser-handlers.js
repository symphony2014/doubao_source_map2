// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(352636) to 'mathml-abstract-node-util'
// - Renamed variable 'u' to 'texConstantDefinitions'
// - Resolved require(16944) to 'tex-constant-definitions'
// - Resolved require(142412) to 'mathjax-utilities'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 921652
         */
module.exports = function (module, exports, require) {
  var r;
  var T;
  var n = this && this.__read || function (t, e) {
    var Q = typeof Symbol == "function" && t[Symbol.iterator];
    if (!Q) {
      return t;
    }
    var r;
    var T;
    var n = Q.call(t);
    var o = [];
    try {
      while ((e === undefined || e-- > 0) && !(r = n.next()).done) {
        o.push(r.value);
      }
    } catch (t) {
      T = {
        error: t
      };
    } finally {
      try {
        if (r && !r.done && (Q = n.return)) {
          Q.call(n);
        }
      } finally {
        if (T) {
          throw T.error;
        }
      }
    }
    return o;
  };
  var o = this && this.__spreadArray || function (t, e, Q) {
    if (Q || arguments.length == 2) {
      var r;
      var T = 0;
      var n = e.length;
      for (; T < n; T++) {
        if (!!r || !(T in e)) {
          r ||= Array.prototype.slice.call(e, 0, T);
          r[T] = e[T];
        }
      }
    }
    return t.concat(r || Array.prototype.slice.call(e));
  };
  var i = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  var a = i(require("mathml-abstract-node-util") /*id: 352636*/);
  var texConstantDefinitions = require("tex-constant-definitions") /*id: 16944*/;
  var s = i(require("mathjax-utilities") /*id: 142412*/);
  (r = T ||= {}).variable = function (t, e) {
    var Q = s.default.getFontDef(t);
    var r = t.stack.env;
    if (r.multiLetterIdentifiers && r.font !== "") {
      e = t.string.substr(t.i - 1).match(r.multiLetterIdentifiers)[0];
      t.i += e.length - 1;
      if (Q.mathvariant === texConstantDefinitions.TexConstant.Variant.NORMAL && r.noAutoOP && e.length > 1) {
        Q.autoOP = false;
      }
    }
    var T = t.create("token", "mi", Q, e);
    t.Push(T);
  };
  r.digit = function (t, e) {
    var Q;
    var r = t.configuration.options.digits;
    var T = t.string.slice(t.i - 1).match(r);
    var n = s.default.getFontDef(t);
    if (T) {
      Q = t.create("token", "mn", n, T[0].replace(/[{}]/g, ""));
      t.i += T[0].length - 1;
    } else {
      Q = t.create("token", "mo", n, e);
    }
    t.Push(Q);
  };
  r.controlSequence = function (t, e) {
    var Q = t.GetCS();
    t.parse("macro", [t, Q]);
  };
  r.mathchar0mi = function (t, e) {
    var Q = e.attributes || {
      mathvariant: texConstantDefinitions.TexConstant.Variant.ITALIC
    };
    var r = t.create("token", "mi", Q, e.char);
    t.Push(r);
  };
  r.mathchar0mo = function (t, e) {
    var Q = e.attributes || {};
    Q.stretchy = false;
    var r = t.create("token", "mo", Q, e.char);
    a.default.setProperty(r, "fixStretchy", true);
    t.configuration.addNode("fixStretchy", r);
    t.Push(r);
  };
  r.mathchar7 = function (t, e) {
    var Q = e.attributes || {
      mathvariant: texConstantDefinitions.TexConstant.Variant.NORMAL
    };
    if (t.stack.env.font) {
      Q.mathvariant = t.stack.env.font;
    }
    var r = t.create("token", "mi", Q, e.char);
    t.Push(r);
  };
  r.delimiter = function (t, e) {
    var Q = e.attributes || {};
    Q = Object.assign({
      fence: false,
      stretchy: false
    }, Q);
    var r = t.create("token", "mo", Q, e.char);
    t.Push(r);
  };
  r.environment = function (t, e, Q, r) {
    var T = r[0];
    var i = t.itemFactory.create("begin").setProperties({
      name: e,
      end: T
    });
    i = Q.apply(undefined, o([t, i], n(r.slice(1)), false));
    t.Push(i);
  };
  exports.default = T;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}