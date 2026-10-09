// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'l' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Renamed variable 'c' to 'priorityHandlerConfig'
// - Resolved require(706684) to 'priority-handler-config'
// - Resolved require(342117) to 'message-format-util'
// - Resolved require(352636) to 'mathml-abstract-node-util'
// - Renamed variable 'f' to 'symbolParseMaps'
// - Resolved require(664746) to 'symbol-parse-maps'
// - Resolved require(962632) to 'mathjax-eqnarray-tags'
// - Renamed variable 'D' to 'mathjaxEquationTaggingSystem'
// - Resolved require(9120) to 'mathjax-equation-tagging-system'
// - Resolved require(94937) to 'tex-mathjax-symbol-mappings'
// - Renamed variable 'L' to 'mathmlOperatorTable'
// - Resolved require(646582) to 'mathml-operator-table'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 929941
         */
module.exports = function (module, exports, require) {
  var r;
  var T;
  var n = this && this.__extends || (r = function (t, e) {
    return (r = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var Q in e) {
        if (Object.prototype.hasOwnProperty.call(e, Q)) {
          t[Q] = e[Q];
        }
      }
    })(t, e);
  }, function (t, e) {
    if (typeof e != "function" && e !== null) {
      throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
    }
    function Q() {
      this.constructor = t;
    }
    r(t, e);
    t.prototype = e === null ? Object.create(e) : (Q.prototype = e.prototype, new Q());
  });
  var o = this && this.__createBinding || (Object.create ? function (t, e, Q, r = Q) {
    var T = Object.getOwnPropertyDescriptor(e, Q);
    if (!T || ("get" in T ? !e.__esModule : T.writable || T.configurable)) {
      T = {
        enumerable: true,
        get: function () {
          return e[Q];
        }
      };
    }
    Object.defineProperty(t, r, T);
  } : function (t, e, Q, r = Q) {
    t[r] = e[Q];
  });
  var i = this && this.__setModuleDefault || (Object.create ? function (t, e) {
    Object.defineProperty(t, "default", {
      enumerable: true,
      value: e
    });
  } : function (t, e) {
    t.default = e;
  });
  var a = this && this.__importStar || function (t) {
    if (t && t.__esModule) {
      return t;
    }
    var e = {};
    if (t != null) {
      for (var Q in t) {
        if (Q !== "default" && Object.prototype.hasOwnProperty.call(t, Q)) {
          o(e, t, Q);
        }
      }
    }
    i(e, t);
    return e;
  };
  var u = this && this.__values || function (t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var Q = e && t[e];
    var r = 0;
    if (Q) {
      return Q.call(t);
    }
    if (t && typeof t.length == "number") {
      return {
        next: function () {
          if (t && r >= t.length) {
            t = undefined;
          }
          return {
            value: t && t[r++],
            done: !t
          };
        }
      };
    }
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var s = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  exports.BaseConfiguration = exports.BaseTags = exports.Other = undefined;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  var priorityHandlerConfig = require("priority-handler-config") /*id: 706684*/;
  var p = s(require("message-format-util") /*id: 342117*/);
  var h = s(require("mathml-abstract-node-util") /*id: 352636*/);
  var symbolParseMaps = require("symbol-parse-maps") /*id: 664746*/;
  var d = a(require("mathjax-eqnarray-tags") /*id: 962632*/);
  var mathjaxEquationTaggingSystem = require("mathjax-equation-tagging-system") /*id: 9120*/;
  require("tex-mathjax-symbol-mappings") /*id: 94937*/;
  var mathmlOperatorTable = require("mathml-operator-table") /*id: 646582*/;
  function m(t, e) {
    var Q = t.stack.env.font ? {
      mathvariant: t.stack.env.font
    } : {};
    var r = priorityHandlerConfig.MapHandler.getMap("remap").lookup(e);
    var T = mathmlOperatorTable.getRange(e);
    var n = T ? T[3] : "mo";
    var o = t.create("token", n, Q, r ? r.char : e);
    if (T[4]) {
      o.attributes.set("mathvariant", T[4]);
    }
    if (n === "mo") {
      h.default.setProperty(o, "fixStretchy", true);
      t.configuration.addNode("fixStretchy", o);
    }
    t.Push(o);
  }
  new symbolParseMaps.CharacterMap("remap", null, {
    "-": "−",
    "*": "∗",
    "`": "‘"
  });
  exports.Other = m;
  var y = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    n(e, t);
    return e;
  }(mathjaxEquationTaggingSystem.AbstractTags);
  exports.BaseTags = y;
  exports.BaseConfiguration = mathjaxParserConfiguration.Configuration.create("base", {
    handler: {
      character: ["command", "special", "letter", "digit"],
      delimiter: ["delimiter"],
      macro: ["delimiter", "macros", "mathchar0mi", "mathchar0mo", "mathchar7"],
      environment: ["environment"]
    },
    fallback: {
      character: m,
      macro: function (t, e) {
        throw new p.default("UndefinedControlSequence", "Undefined control sequence %1", "\\" + e);
      },
      environment: function (t, e) {
        throw new p.default("UnknownEnv", "Unknown environment '%1'", e);
      }
    },
    items: ((T = {})[d.StartItem.prototype.kind] = d.StartItem, T[d.StopItem.prototype.kind] = d.StopItem, T[d.OpenItem.prototype.kind] = d.OpenItem, T[d.CloseItem.prototype.kind] = d.CloseItem, T[d.PrimeItem.prototype.kind] = d.PrimeItem, T[d.SubsupItem.prototype.kind] = d.SubsupItem, T[d.OverItem.prototype.kind] = d.OverItem, T[d.LeftItem.prototype.kind] = d.LeftItem, T[d.Middle.prototype.kind] = d.Middle, T[d.RightItem.prototype.kind] = d.RightItem, T[d.BeginItem.prototype.kind] = d.BeginItem, T[d.EndItem.prototype.kind] = d.EndItem, T[d.StyleItem.prototype.kind] = d.StyleItem, T[d.PositionItem.prototype.kind] = d.PositionItem, T[d.CellItem.prototype.kind] = d.CellItem, T[d.MmlItem.prototype.kind] = d.MmlItem, T[d.FnItem.prototype.kind] = d.FnItem, T[d.NotItem.prototype.kind] = d.NotItem, T[d.NonscriptItem.prototype.kind] = d.NonscriptItem, T[d.DotsItem.prototype.kind] = d.DotsItem, T[d.ArrayItem.prototype.kind] = d.ArrayItem, T[d.EqnArrayItem.prototype.kind] = d.EqnArrayItem, T[d.EquationItem.prototype.kind] = d.EquationItem, T),
    options: {
      maxMacros: 1000,
      baseURL: typeof document == "undefined" || document.getElementsByTagName("base").length === 0 ? "" : String(document.location).replace(/#.*$/, "")
    },
    tags: {
      base: y
    },
    postprocessors: [[function (t) {
      var e;
      var Q;
      var r = t.data;
      try {
        var T = u(r.getList("nonscript"));
        var n = T.next();
        for (; !n.done; n = T.next()) {
          var o = n.value;
          if (o.attributes.get("scriptlevel") > 0) {
            var i = o.parent;
            i.childNodes.splice(i.childIndex(o), 1);
            r.removeFromList(o.kind, [o]);
            if (o.isKind("mrow")) {
              var a = o.childNodes[0];
              r.removeFromList("mstyle", [a]);
              r.removeFromList("mspace", a.childNodes[0].childNodes);
            }
          } else if (o.isKind("mrow")) {
            o.parent.replaceChild(o.childNodes[0], o);
            r.removeFromList("mrow", [o]);
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (n && !n.done && (Q = T.return)) {
            Q.call(T);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
    }, -4]]
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}