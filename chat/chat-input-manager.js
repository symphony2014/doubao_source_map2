// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'chatInputManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 372488
         */
module.exports = function (module, exports, require) {
  function i(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  let r = new class {
    constructor() {
      i(this, "inputRef", null);
      i(this, "bindInputRef", e => {
        this.inputRef = e;
      });
      i(this, "unbindInputRef", () => {
        this.inputRef = null;
      });
      i(this, "focusOnInput", () => {
        if (this.inputRef) {
          this.inputRef.focus();
        }
      });
    }
  }();
  require.d(exports, {
    chatInputManager: function () {
      return r;
    }
  });
}