// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(559929) to 'tex-base-command-map'
// - Renamed variable 'n' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// - Resolved require(342117) to 'message-format-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 917139
         */
module.exports = function (module, exports, require) {
  var r = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  var T = r(require("tex-base-command-map") /*id: 559929*/);
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var o = r(require("message-format-util") /*id: 342117*/);
  var i = {
    Macro: T.default.Macro
  };
  i.Braket = function (t, e, Q, r, T, n) {
    var i = t.GetNext();
    if (i === "") {
      throw new o.default("MissingArgFor", "Missing argument for %1", t.currentCS);
    }
    var a = true;
    if (i === "{") {
      t.i++;
      a = false;
    }
    t.Push(t.itemFactory.create("braket").setProperties({
      barmax: n,
      barcount: 0,
      open: Q,
      close: r,
      stretchy: T,
      single: a
    }));
  };
  i.Bar = function (t, e) {
    var Q = e === "|" ? "|" : "∥";
    var r = t.stack.Top();
    if (r.kind !== "braket" || r.getProperty("barcount") >= r.getProperty("barmax")) {
      var T = t.create("token", "mo", {
        texClass: mathmlAbstractNodeClasses.TEXCLASS.ORD,
        stretchy: false
      }, Q);
      t.Push(T);
      return;
    }
    if (Q === "|" && t.GetNext() === "|") {
      t.i++;
      Q = "∥";
    }
    if (!r.getProperty("stretchy")) {
      var o = t.create("token", "mo", {
        stretchy: false,
        braketbar: true
      }, Q);
      t.Push(o);
      return;
    }
    var i = t.create("node", "TeXAtom", [], {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.CLOSE
    });
    t.Push(i);
    r.setProperty("barcount", r.getProperty("barcount") + 1);
    i = t.create("token", "mo", {
      stretchy: true,
      braketbar: true
    }, Q);
    t.Push(i);
    i = t.create("node", "TeXAtom", [], {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.OPEN
    });
    t.Push(i);
  };
  exports.default = i;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}