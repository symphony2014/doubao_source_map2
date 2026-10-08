// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'GrammarConverter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78089.de6f103c.js
         * chunkId: 78089
         * moduleId: 467186
         */
module.exports = function (module, exports, require) {
  var n;
  var i;
  var grammarTypeValidators = require("grammar-type-validators") /*id: 279057*/;
  var grammarTypeNameResolver = require("grammar-type-name-resolver") /*id: 120148*/;
  class o {
    convert(e, t) {
      let r = t.grammarSource;
      if (grammarTypeValidators.isCrossReference(r)) {
        r = grammarTypeNameResolver.getTerminalType(r);
      }
      if (grammarTypeValidators.isRuleCall(r)) {
        let n = r.rule.ref;
        if (!n) {
          throw Error("This cst node was not parsed by a rule.");
        }
        return this.runConverter(n, e, t);
      }
      return e;
    }
    runConverter(e, t, r) {
      var n;
      switch (e.name.toUpperCase()) {
        case "INT":
          return i.convertInt(t);
        case "STRING":
          return i.convertString(t);
        case "ID":
          return i.convertID(t);
      }
      switch ((n = grammarTypeNameResolver.getRuleTypeName(e)) === null || n === undefined ? undefined : n.toLowerCase()) {
        case "number":
          return i.convertNumber(t);
        case "boolean":
          return i.convertBoolean(t);
        case "bigint":
          return i.convertBigint(t);
        case "date":
          return i.convertDate(t);
        default:
          return t;
      }
    }
  }
  (n = i ||= {}).convertString = function (e) {
    let t = "";
    for (let r = 1; r < e.length - 1; r++) {
      let n = e.charAt(r);
      if (n === "\\") {
        t += function (e) {
          switch (e) {
            case "b":
              return "\b";
            case "f":
              return "\f";
            case "n":
              return "\n";
            case "r":
              return "\r";
            case "t":
              return "\t";
            case "v":
              return "";
            case "0":
              return "\0";
            default:
              return e;
          }
        }(e.charAt(++r));
      } else {
        t += n;
      }
    }
    return t;
  };
  n.convertID = function (e) {
    if (e.charAt(0) === "^") {
      return e.substring(1);
    } else {
      return e;
    }
  };
  n.convertInt = function (e) {
    return parseInt(e);
  };
  n.convertBigint = function (e) {
    return BigInt(e);
  };
  n.convertDate = function (e) {
    return new Date(e);
  };
  n.convertNumber = function (e) {
    return Number(e);
  };
  n.convertBoolean = function (e) {
    return e.toLowerCase() === "true";
  };
  require.d(exports, {
    GrammarConverter: function () {
      return o;
    }
  });
}