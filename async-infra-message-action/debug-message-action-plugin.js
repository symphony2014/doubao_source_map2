// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'debugMessageContext'
// - Resolved require(818296) to 'debug-message-context'
// - Renamed variable 'i' to 'dropdownMenuItemWrapper'
// - Resolved require(876844) to 'dropdown-menu-item-wrapper'
// - Renamed variable 'o' to 'lockIconComponent'
// - Resolved require(328198) to 'lock-icon-component'
// - Renamed variable 'a' to 'infraSendMessageDebug'
// - Resolved require(93526) to 'infra-send-message-debug'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'B' to 'useDebugMessage' (module 818296)
// - Updated imported property 'Z' to 'DropdownMenuItemWrapper' (module 876844)
// - Updated imported property 'V' to 'LockIcon' (module 328198)
// - Updated imported property 'Y' to 'messageActionDebug' (module 93526)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-action.abe50cdd.js
         * chunkId: 72995
         * moduleId: 831916
         */
module.exports = function (module, exports, require) {
  var debugMessageContext = require("debug-message-context") /*id: 818296*/;
  var dropdownMenuItemWrapper = require("dropdown-menu-item-wrapper") /*id: 876844*/;
  var lockIconComponent = require("lock-icon-component") /*id: 328198*/;
  var infraSendMessageDebug = require("infra-send-message-debug") /*id: 93526*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function l(e, t, n) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let u = e => {
    let {
      message: t
    } = e;
    let {
      open: n
    } = debugMessageContext.useDebugMessage();
    return reactJsxRuntimeCoreReexport.jsx(dropdownMenuItemWrapper.DropdownMenuItemWrapper, {
      "data-testid": "message_action_debug",
      prefix: reactJsxRuntimeCoreReexport.jsx(lockIconComponent.LockIcon, {}),
      onClick: () => {
        n({
          message: t
        });
      },
      children: "Debug Message"
    });
  };
  class d {
    constructor() {
      l(this, "pluginIdentifier", infraSendMessageDebug.messageActionDebug);
      l(this, "DropdownItemContentGroups", [u]);
    }
  }
  require.r(exports);
  require.d(exports, {
    DefaultDebugSendMessageActionButtonPlugin: function () {
      return d;
    }
  });
}