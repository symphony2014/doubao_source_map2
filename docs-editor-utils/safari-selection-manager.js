// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ee' to 'isSafariAtVersion'
// - Renamed export 'QD' to 'SelectionManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 441280
         */
module.exports = function (module, exports, require) {
  var versionCompareUtil = require("version-compare-util") /*id: 147266*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  function l(e, n, r) {
    var o;
    if ((n = typeof (o = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var o = r.call(e, n || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = r;
    }
    return e;
  }
  function c(e = "17.0") {
    return !!browserEnvironmentDetectionUtils.browserDetector.isSafari && (browserEnvironmentDetectionUtils.browserDetector.isLark ? versionCompareUtil.compareVersions(`${browserEnvironmentDetectionUtils.browserDetector.osversion}`, e) : versionCompareUtil.compareVersions(`${browserEnvironmentDetectionUtils.browserDetector.version}`, e));
  }
  class u {
    register(e, n) {
      this.editors.set(e, n);
    }
    unregister(e) {
      this.editors.delete(e);
    }
    destroy() {
      document.removeEventListener("selectionchange", this.handleSelectionChange);
      this.editors.clear();
    }
    getEditor(e) {
      return this.editors.get(e);
    }
    constructor() {
      l(this, "currentRange", undefined);
      l(this, "editors", new Map());
      l(this, "selectedEditor", null);
      l(this, "handleSelectionChange", () => {
        var e;
        var n;
        var r;
        var o;
        let i;
        let l = getSelection();
        if (l == null ? undefined : l.rangeCount) {
          i = c() ? l == null ? undefined : l.getRangeAt(0).cloneRange() : l == null ? undefined : l.getRangeAt(0);
        }
        if (!i) {
          if (this.selectedEditor) {
            if ((e = this.editors.get(this.selectedEditor)) !== null && e !== undefined) {
              e.onBlur();
            }
          }
          this.selectedEditor = null;
          this.currentRange = i;
          return;
        }
        if (!this.currentRange || (r = this.currentRange, o = i, (r.startContainer !== o.startContainer || r.startOffset !== o.startOffset || r.endContainer !== o.endContainer || r.endOffset !== o.endOffset) && (r.startContainer !== o.endContainer || r.startOffset !== o.endOffset || r.endContainer !== o.startContainer || r.endOffset !== o.startOffset))) {
          let e = this.selectedEditor;
          this.selectedEditor = null;
          this.editors.forEach((e, n) => {
            let {
              anchorNode: r
            } = l;
            if (n.getContainer().contains(r)) {
              e.onSelect();
              this.selectedEditor = n;
            }
          });
          if (e && e !== this.selectedEditor) {
            if ((n = this.editors.get(e)) !== null && n !== undefined) {
              n.onBlur();
            }
          }
        }
        this.currentRange = i;
      });
      document.addEventListener("selectionchange", this.handleSelectionChange);
    }
  }
  require.d(exports, {
    isSafariAtVersion: function () {
      return c;
    },
    SelectionManager: function () {
      return u;
    }
  });
}