// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'writeAssistantSidebarApplication'
// - Resolved require(387738) to 'write-assistant-sidebar-application'
// - Updated imported property 'i' to 'writeAssistantRoute' (module 387738)
// - Updated imported property 'W' to 'WriteAssistantSidebarLink' (module 387738)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-sidebar-application.33c8e164.js
         * chunkId: 35409
         * moduleId: 834702
         */
module.exports = function (module, exports, require) {
  var writeAssistantSidebarApplication = require("write-assistant-sidebar-application") /*id: 387738*/;
  function i(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class o {
    constructor() {
      i(this, "route", writeAssistantSidebarApplication.writeAssistantRoute);
      i(this, "Content", writeAssistantSidebarApplication.WriteAssistantSidebarLink);
    }
  }
  require.r(exports);
  require.d(exports, {
    WriteSidebarApplicationPlugin: function () {
      return o;
    }
  });
}