// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'operatorDefinitions'
// - Resolved require(574514) to 'operator-definitions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flowpd-card-web-runtime.26dc6be7.js
         * chunkId: 21082
         * moduleId: 831632
         */
module.exports = function (module, exports, require) {
  exports.operatorStrategy = undefined;
  let operatorDefinitions = require("operator-definitions") /*id: 574514*/;
  let i = e => typeof e == "string" ? [...e].length : typeof e == "number" ? e : NaN;
  let o = e => Array.isArray(e) ? e.length : typeof e == "number" ? e : NaN;
  exports.operatorStrategy = {
    string: {
      [operatorDefinitions.CalOperator.Equal]: (e, t) => typeof e == "string" && e === t,
      [operatorDefinitions.CalOperator.NotEqual]: (e, t) => typeof e == "string" && e !== t,
      [operatorDefinitions.CalOperator.LengthGreater]: (e, t) => typeof e == "string" && [...e].length > i(t),
      [operatorDefinitions.CalOperator.LengthGreaterOrEqual]: (e, t) => typeof e == "string" && [...e].length >= i(t),
      [operatorDefinitions.CalOperator.LengthLess]: (e, t) => typeof e == "string" && [...e].length < i(t),
      [operatorDefinitions.CalOperator.LengthLessOrEqual]: (e, t) => typeof e == "string" && [...e].length <= i(t),
      [operatorDefinitions.CalOperator.Contain]: (e, t) => typeof e == "string" && typeof t == "string" && e.includes(t),
      [operatorDefinitions.CalOperator.NotContain]: (e, t) => typeof e == "string" && (typeof t != "string" || !e.includes(t)),
      [operatorDefinitions.CalOperator.IsEmpty]: e => e == null || e === "",
      [operatorDefinitions.CalOperator.NotEmpty]: e => typeof e == "string" && e !== ""
    },
    number: {
      [operatorDefinitions.CalOperator.Equal]: (e, t) => typeof e == "number" && typeof t == "number" && e === t,
      [operatorDefinitions.CalOperator.NotEqual]: (e, t) => typeof e == "number" && e !== t,
      [operatorDefinitions.CalOperator.Greater]: (e, t) => typeof e == "number" && typeof t == "number" && e > t,
      [operatorDefinitions.CalOperator.GreaterOrEqual]: (e, t) => typeof e == "number" && typeof t == "number" && e >= t,
      [operatorDefinitions.CalOperator.Less]: (e, t) => typeof e == "number" && typeof t == "number" && e < t,
      [operatorDefinitions.CalOperator.LessOrEqual]: (e, t) => typeof e == "number" && typeof t == "number" && e <= t,
      [operatorDefinitions.CalOperator.IsEmpty]: e => e == null || e === 0,
      [operatorDefinitions.CalOperator.NotEmpty]: e => typeof e == "number" && Number.isFinite(e) && e !== 0
    },
    boolean: {
      [operatorDefinitions.CalOperator.Equal]: (e, t) => typeof e == "boolean" && e === t,
      [operatorDefinitions.CalOperator.NotEqual]: (e, t) => typeof e == "boolean" && e !== t,
      [operatorDefinitions.CalOperator.IsTrue]: e => e === true,
      [operatorDefinitions.CalOperator.IsFalse]: e => e === false,
      [operatorDefinitions.CalOperator.IsEmpty]: e => e == null,
      [operatorDefinitions.CalOperator.NotEmpty]: e => typeof e == "boolean"
    },
    array: {
      [operatorDefinitions.CalOperator.LengthEqual]: (e, t) => Array.isArray(e) && e.length === o(t),
      [operatorDefinitions.CalOperator.LengthGreater]: (e, t) => Array.isArray(e) && e.length > o(t),
      [operatorDefinitions.CalOperator.LengthGreaterOrEqual]: (e, t) => Array.isArray(e) && e.length >= o(t),
      [operatorDefinitions.CalOperator.LengthLess]: (e, t) => Array.isArray(e) && e.length < o(t),
      [operatorDefinitions.CalOperator.LengthLessOrEqual]: (e, t) => Array.isArray(e) && e.length <= o(t),
      [operatorDefinitions.CalOperator.Contain]: (e, t) => Array.isArray(e) && (typeof t == "number" || typeof t == "string" || typeof t == "boolean") && e.includes(t),
      [operatorDefinitions.CalOperator.NotContain]: (e, t) => Array.isArray(e) && (typeof t != "number" && typeof t != "string" && typeof t != "boolean" || !e.includes(t)),
      [operatorDefinitions.CalOperator.IsEmpty]: e => e == null || Array.isArray(e) && e.length === 0,
      [operatorDefinitions.CalOperator.NotEmpty]: e => Array.isArray(e) && e.length > 0
    },
    object: {
      [operatorDefinitions.CalOperator.IsEmpty]: e => e == null || typeof e == "object" && Object.keys(e).length === 0,
      [operatorDefinitions.CalOperator.NotEmpty]: e => typeof e == "object" && !!e && !!(Object.keys(e).length > 0)
    },
    index: {
      [operatorDefinitions.CalOperator.Equal]: (e, t) => typeof e == "number" && e === t,
      [operatorDefinitions.CalOperator.NotEqual]: (e, t) => typeof e == "number" && e !== t
    }
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}