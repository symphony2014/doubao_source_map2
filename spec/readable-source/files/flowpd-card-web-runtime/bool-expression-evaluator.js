// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'operatorDefinitions'
// - Resolved require(574514) to 'operator-definitions'
// - Renamed variable 'i' to 'operatorStrategyDefinitions'
// - Resolved require(831632) to 'operator-strategy-definitions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flowpd-card-web-runtime.26dc6be7.js
         * chunkId: 21082
         * moduleId: 864118
         */
module.exports = function (module, exports, require) {
  exports.operatorStrategy = exports.evalBoolExpression = exports.LAST_INDEX = exports.FIRST_INDEX = undefined;
  let operatorDefinitions = require("operator-definitions") /*id: 574514*/;
  let operatorStrategyDefinitions = require("operator-strategy-definitions") /*id: 831632*/;
  Object.defineProperty(exports, "operatorStrategy", {
    enumerable: true,
    get: function () {
      return operatorStrategyDefinitions.operatorStrategy;
    }
  });
  exports.FIRST_INDEX = "{{first_index}}";
  exports.LAST_INDEX = "{{last_index}}";
  let o = (e, t) => e == null ? t : typeof e == "number" ? "number" : typeof e == "string" ? "string" : typeof e == "boolean" ? "boolean" : Array.isArray(e) ? "array" : "object";
  let a = ({
    condition: e,
    left: r,
    calcFn: i,
    isLast: o
  }) => {
    if ((e == null ? undefined : e.left)?.dynamic_key === "index" && e.right && (e.right.dynamic_key === exports.FIRST_INDEX || e.right.dynamic_key === exports.LAST_INDEX)) {
      if (e.right.dynamic_key === exports.FIRST_INDEX) {
        return i(r, 0);
      }
      if (e.right.dynamic_key === exports.LAST_INDEX) {
        if (e.operator === operatorDefinitions.CalOperator.Equal) {
          return o;
        } else {
          return !o;
        }
      }
    }
    return null;
  };
  exports.evalBoolExpression = (e, r, s) => {
    let u = e => (e == null ? undefined : e.value) !== undefined ? e.value : e.dynamic_key ? r(e == null ? undefined : e.dynamic_key) : undefined;
    if (!e) {
      return false;
    }
    let c = e.condition ? (e => {
      if (!e || !e.operator || !e.left?.type) {
        return false;
      }
      let n = u(e.left);
      let {
        operator: l
      } = e;
      let c = o(n, e.left.type);
      if (c !== e.left.type && (e.left.type !== "index" || c !== "number")) {
        return false;
      }
      let f = operatorStrategyDefinitions.operatorStrategy[c]?.[l];
      if (!f) {
        return false;
      }
      let d = a({
        condition: e,
        left: n,
        calcFn: f,
        isLast: !!s
      });
      if (typeof d == "boolean") {
        return d;
      } else if (f.length > 1) {
        return f(n, e.right ? e.right.value !== undefined ? e.right.value : typeof e.right.dynamic_key == "string" ? u(e.right) : undefined : undefined);
      } else {
        return f(n);
      }
    })(e.condition) : undefined;
    if (e.children?.length && e.logical_operator) {
      if (c === undefined) {
        c = e.logical_operator === operatorDefinitions.LogicalOperator.And;
      }
      return e.children.reduce((i, o) => e.logical_operator === operatorDefinitions.LogicalOperator.And ? i && exports.evalBoolExpression(o, r, s) : i || exports.evalBoolExpression(o, r, s), c);
    } else {
      return !!c;
    }
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}