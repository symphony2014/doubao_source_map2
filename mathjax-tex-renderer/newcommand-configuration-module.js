// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Renamed variable 'u' to 'mmlBeginEnvItem'
// - Resolved require(603746) to 'mml-begin-env-item'
// - Resolved require(656307) to 'mathjax-symbol-macro-utils'
// - Resolved require(516934) to 'newcommand-macros-command-map'
// - Resolved require(921652) to 'tex-parser-handlers'
// - Resolved require(664746) to 'symbol-parse-maps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 632594
         */
module.exports = function (module, exports, require) {
  var r;
  var T = this && this.__createBinding || (Object.create ? function (t, e, Q, r = Q) {
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
  var n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
    Object.defineProperty(t, "default", {
      enumerable: true,
      value: e
    });
  } : function (t, e) {
    t.default = e;
  });
  var o = this && this.__importStar || function (t) {
    if (t && t.__esModule) {
      return t;
    }
    var e = {};
    if (t != null) {
      for (var Q in t) {
        if (Q !== "default" && Object.prototype.hasOwnProperty.call(t, Q)) {
          T(e, t, Q);
        }
      }
    }
    n(e, t);
    return e;
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
  exports.NewcommandConfiguration = undefined;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  var mmlBeginEnvItem = require("mml-begin-env-item") /*id: 603746*/;
  var s = i(require("mathjax-symbol-macro-utils") /*id: 656307*/);
  require("newcommand-macros-command-map") /*id: 516934*/;
  var l = i(require("tex-parser-handlers") /*id: 921652*/);
  var c = o(require("symbol-parse-maps") /*id: 664746*/);
  exports.NewcommandConfiguration = mathjaxParserConfiguration.Configuration.create("newcommand", {
    handler: {
      macro: ["Newcommand-macros"]
    },
    items: ((r = {})[mmlBeginEnvItem.BeginEnvItem.prototype.kind] = mmlBeginEnvItem.BeginEnvItem, r),
    options: {
      maxMacros: 1000
    },
    init: function (t) {
      new c.DelimiterMap(s.default.NEW_DELIMITER, l.default.delimiter, {});
      new c.CommandMap(s.default.NEW_COMMAND, {}, {});
      new c.EnvironmentMap(s.default.NEW_ENVIRONMENT, l.default.environment, {}, {});
      t.append(mathjaxParserConfiguration.Configuration.local({
        handler: {
          character: [],
          delimiter: [s.default.NEW_DELIMITER],
          macro: [s.default.NEW_DELIMITER, s.default.NEW_COMMAND],
          environment: [s.default.NEW_ENVIRONMENT]
        },
        priority: -1
      }));
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}