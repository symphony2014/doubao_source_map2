// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(352636) to 'mathml-abstract-node-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 408525
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
  var T = r(require("mathml-abstract-node-util") /*id: 352636*/);
  var n = {};
  n.Href = function (t, e) {
    var Q = t.GetArgument(e);
    var r = o(t, e);
    T.default.setAttribute(r, "href", Q);
    t.Push(r);
  };
  n.Class = function (t, e) {
    var Q = t.GetArgument(e);
    var r = o(t, e);
    var n = T.default.getAttribute(r, "class");
    if (n) {
      Q = n + " " + Q;
    }
    T.default.setAttribute(r, "class", Q);
    t.Push(r);
  };
  n.Style = function (t, e) {
    var Q = t.GetArgument(e);
    var r = o(t, e);
    var n = T.default.getAttribute(r, "style");
    if (n) {
      if (Q.charAt(Q.length - 1) !== ";") {
        Q += ";";
      }
      Q = n + " " + Q;
    }
    T.default.setAttribute(r, "style", Q);
    t.Push(r);
  };
  n.Id = function (t, e) {
    var Q = t.GetArgument(e);
    var r = o(t, e);
    T.default.setAttribute(r, "id", Q);
    t.Push(r);
  };
  function o(t, e) {
    var Q = t.ParseArg(e);
    if (!T.default.isInferred(Q)) {
      return Q;
    }
    var r = T.default.getChildren(Q);
    if (r.length === 1) {
      return r[0];
    }
    var n = t.create("node", "mrow");
    T.default.copyChildren(Q, n);
    T.default.copyAttributes(Q, n);
    return n;
  }
  exports.default = n;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}