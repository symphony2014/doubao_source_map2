// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'docxUtilityHelpers'
// - Resolved require(859002) to 'docx-utility-helpers'
// - Renamed variable 'i' to 'renderEventConstants'
// - Resolved require(189091) to 'render-event-constants'
// - Renamed variable 'l' to 'devicePageConstants'
// - Resolved require(53073) to 'device-page-constants'
// - Updated imported property 'g4' to 'captureException' (module 859002)
// - Updated imported property 'kz' to 'viewportChanged' (module 189091)
// - Updated imported property 'G' to 'deviceTypes' (module 53073)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: performance-monitor-scroll-collector.87392171.js
         * chunkId: 71247
         * moduleId: 185854
         */
module.exports = function (module, exports, require) {
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var renderEventConstants = require("render-event-constants") /*id: 189091*/;
  var devicePageConstants = require("device-page-constants") /*id: 53073*/;
  function n(t, e, r) {
    var o;
    if ((e = typeof (o = function (t, e) {
      if (typeof t != "object" || !t) {
        return t;
      }
      var r = t[Symbol.toPrimitive];
      if (r !== undefined) {
        var o = r.call(t, e || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (e === "string" ? String : Number)(t);
    }(e, "string")) == "symbol" ? o : o + "") in t) {
      Object.defineProperty(t, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[e] = r;
    }
    return t;
  }
  class s {
    reset() {
      this.collaborationBlockSet.clear();
      this.scrollBlockSet.clear();
      this.renderBlockSet.clear();
      this.scrollStartTime = 0;
      this.scrollEndTime = 0;
      this.reportInfo = undefined;
    }
    getBlockTypeById(t) {
      let e = {};
      t.forEach(t => {
        let {
          type: r = "unknown"
        } = this.blockManager.getBlockViewByBlockIdNotCheck(t) || {};
        e[r] ||= 0;
        e[r]++;
      });
      return e;
    }
    handleRenderContext(t) {
      if (t) {
        for (let e of t[1].keys()) {
          this.renderBlockSet.add(e);
        }
      }
    }
    handleChangeNodeContext(t) {
      if (!t) {
        return;
      }
      let [e, r] = t;
      if (!r) {
        try {
          JSON.parse(e).forEach(t => {
            this.collaborationBlockSet.add(Number(t.nodeId));
          });
        } catch (t) {
          docxUtilityHelpers.captureException(t, {
            useSlardarWeb: true,
            extra: {
              nodesString: e,
              isScrollCollectorError: "1"
            }
          });
        }
      }
    }
    bind() {
      if (!this.isBind) {
        this.blockManager.addListener(renderEventConstants.viewportChanged, this.handleViewportChanged);
        this.isBind = true;
      }
    }
    off() {
      if (this.isBind) {
        this.blockManager.removeListener(renderEventConstants.viewportChanged, this.handleViewportChanged);
        this.isBind = false;
      }
    }
    handleScrollStart(t) {
      this.reset();
      this.bind();
      this.scrollStartTime = t;
    }
    handleScrollEnd(t) {
      this.scrollEndTime = t;
      this.off();
      this.getCollectorExtraInfo();
      this.scrollType = devicePageConstants.deviceTypes.OTHER;
    }
    getCollectorExtraInfo() {
      if (!this.scrollStartTime || !this.scrollEndTime) {
        return {};
      }
      if (!this.reportInfo) {
        var e;
        this.reportInfo = {
          downlink: ((e = window.navigator) === null || e === undefined ? undefined : e.connection?.downlink) ?? -1,
          scroll_block_list: JSON.stringify(this.getBlockTypeById(this.scrollBlockSet)),
          render_block_list: JSON.stringify(this.getBlockTypeById(this.renderBlockSet)),
          collaboration: JSON.stringify(this.getBlockTypeById(this.collaborationBlockSet)),
          scroll_type: this.scrollType
        };
      }
      return this.reportInfo;
    }
    destroy() {
      document.removeEventListener("wheel", this.handleWheel);
    }
    constructor({
      blockManager: t
    }) {
      n(this, "blockManager", undefined);
      n(this, "reportInfo", undefined);
      n(this, "scrollStartTime", undefined);
      n(this, "scrollEndTime", undefined);
      n(this, "collaborationBlockSet", new Set());
      n(this, "scrollType", devicePageConstants.deviceTypes.OTHER);
      n(this, "scrollBlockSet", new Set());
      n(this, "renderBlockSet", new Set());
      n(this, "isBind", false);
      n(this, "handleViewportChanged", t => {
        let {
          viewportBlocks: e
        } = t;
        e.forEach(t => {
          this.scrollBlockSet.add(t);
        });
      });
      n(this, "handleWheel", t => {
        if (this.scrollType !== devicePageConstants.deviceTypes.OTHER) {
          return;
        }
        let {
          deltaY: e,
          deltaMode: r,
          wheelDeltaY: o
        } = t;
        this.scrollType = (o ? o === e * -3 : r === 0) ? devicePageConstants.deviceTypes.TRACKPAD : devicePageConstants.deviceTypes.MOUSE;
      });
      this.blockManager = t;
      document.addEventListener("wheel", this.handleWheel);
    }
  }
  require.r(exports);
  require.d(exports, {
    ScrollCollectorExtraInfo: function () {
      return s;
    }
  });
}