// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(352636) to 'mathml-abstract-node-util'
// - Resolved require(142412) to 'mathjax-utilities'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 298081
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
  exports.ColorMethods = undefined;
  var T = r(require("mathml-abstract-node-util") /*id: 352636*/);
  var n = r(require("mathjax-utilities") /*id: 142412*/);
  function o(t) {
    var e = `+${t}`;
    var Q = t.replace(/^.*?([a-z]*)$/, "$1");
    var r = parseFloat(e) * 2;
    return {
      width: `+${r}${Q}`,
      height: e,
      depth: e,
      lspace: t
    };
  }
  exports.ColorMethods = {};
  exports.ColorMethods.Color = function (t, e) {
    var Q = t.GetBrackets(e, "");
    var r = t.GetArgument(e);
    var T = t.configuration.packageData.get("color").model.getColor(Q, r);
    var n = t.itemFactory.create("style").setProperties({
      styles: {
        mathcolor: T
      }
    });
    t.stack.env.color = T;
    t.Push(n);
  };
  exports.ColorMethods.TextColor = function (t, e) {
    var Q = t.GetBrackets(e, "");
    var r = t.GetArgument(e);
    var T = t.configuration.packageData.get("color").model.getColor(Q, r);
    var n = t.stack.env.color;
    t.stack.env.color = T;
    var o = t.ParseArg(e);
    if (n) {
      t.stack.env.color = n;
    } else {
      delete t.stack.env.color;
    }
    var i = t.create("node", "mstyle", [o], {
      mathcolor: T
    });
    t.Push(i);
  };
  exports.ColorMethods.DefineColor = function (t, e) {
    var Q = t.GetArgument(e);
    var r = t.GetArgument(e);
    var T = t.GetArgument(e);
    t.configuration.packageData.get("color").model.defineColor(r, Q, T);
  };
  exports.ColorMethods.ColorBox = function (t, e) {
    var Q = t.GetArgument(e);
    var r = n.default.internalMath(t, t.GetArgument(e));
    var i = t.configuration.packageData.get("color").model;
    var a = t.create("node", "mpadded", r, {
      mathbackground: i.getColor("named", Q)
    });
    T.default.setProperties(a, o(t.options.color.padding));
    t.Push(a);
  };
  exports.ColorMethods.FColorBox = function (t, e) {
    var Q = t.GetArgument(e);
    var r = t.GetArgument(e);
    var i = n.default.internalMath(t, t.GetArgument(e));
    var a = t.options.color;
    var u = t.configuration.packageData.get("color").model;
    var s = t.create("node", "mpadded", i, {
      mathbackground: u.getColor("named", r),
      style: `border: ${a.borderWidth} solid ${u.getColor("named", Q)}`
    });
    T.default.setProperties(s, o(a.padding));
    t.Push(s);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}