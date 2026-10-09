// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'ScrollEventTypes'
// - Renamed export 'y' to 'createScrollManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 361839
         */
module.exports = function (module, exports, require) {
  var n;
  var debugLoggerFactory = require("debug-logger-factory") /*id: 102743*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var scrollableTouchWheelUtils = require("scrollable-touch-wheel-utils") /*id: 863817*/;
  let a = debugLoggerFactory.createEnabledLogger("scrollable:scrollManage:hookInstance");
  (n = {}).COMMENT_SCROLL = "comment_scroll";
  n.VC_REPLAY = "vc_replay";
  let c = n;
  let d = e => {
    a(e.logId, "creatHook");
    let i = new docxEditorEventConstantsAndManager.EventEmitter();
    let r = null;
    return {
      getScrollContainer: () => e.getScrollContainer(),
      getScrollModel: () => e.scrollModel,
      getScrollManage: () => e,
      emitSubScroll: (r, n) => {
        a(e.logId, "%s.emitSubScroll: %o", n, r);
        i.emit("SubScroll", r, n);
      },
      onSubScroll: e => {
        i.on("SubScroll", e);
        return () => {
          i.removeListener("SubScroll", e);
        };
      },
      emitSubNativeScrollDelta: (r, n, o) => {
        a(e.logId, "%s.emitSubNativeScrollDelta: deltaX=%o", o, n);
        i.emit("EmitSubNativeScrollDelta", r, n, o);
      },
      registerSubNativeScrollDelta: e => {
        i.on("EmitSubNativeScrollDelta", e);
        return () => {
          i.removeListener("EmitSubNativeScrollDelta", e);
        };
      },
      executeSubScroll: scrollableTouchWheelUtils.createThrottledHandler((r, n) => {
        a(e.logId, "%s.executeSubScroll: deltaX=%o", n, r);
        i.emit("ExecuteSubScroll", r, n);
      }),
      registerSubScroll: e => {
        i.on("ExecuteSubScroll", e);
        return () => {
          i.removeListener("ExecuteSubScroll", e);
        };
      },
      executeScroll: scrollableTouchWheelUtils.createThrottledHandler((e, r) => {
        i.emit("ExecuteScroll", e, r);
      }),
      registerScroll: e => {
        i.on("ExecuteScroll", e);
        return () => {
          i.removeListener("ExecuteScroll", e);
        };
      },
      emitScroll(r, n) {
        a(e.logId, "%s.emitScroll: scrollLeft=%s scrollWidth=%s", n, r.scrollLeft, r.scrollWidth);
        i.emit("Scroll", r, n);
      },
      onScroll: e => {
        i.on("Scroll", e);
        return () => {
          i.removeListener("Scroll", e);
        };
      },
      removeScroll: e => {
        i.removeListener("Scroll", e);
      },
      destroy: () => {
        i.removeAllListeners();
      },
      onSubViewChange: function (e, n = false) {
        i.on("SubViewChange", e);
        if (n && r) {
          e(r);
        }
        return () => {
          i.removeListener("SubViewChange", e);
        };
      },
      emitSubViewChange: e => {
        r = e;
        i.emit("SubViewChange", e);
      },
      onShadowStyleChange: e => {
        i.on("ShadowStyleChange", e);
        return () => {
          i.removeListener("ShadowStyleChange", e);
        };
      },
      emitShadowStyleChange: e => {
        i.emit("ShadowStyleChange", e);
      },
      emitShadowChange: r => {
        a(e.logId, "emitShadowChange: %s", r);
        i.emit("ShadowChange", r);
      },
      onShadowChange: e => {
        i.on("ShadowChange", e);
        return () => {
          i.removeListener("ShadowChange", e);
        };
      },
      emitSetWrapperClass: e => {
        i.emit("SetWrapperClass", e);
      },
      onSetWrapperClass: e => {
        i.on("SetWrapperClass", e);
        return () => {
          i.removeListener("SetWrapperClass", e);
        };
      },
      setIsNeedNativeScroll: r => {
        a(e.logId, "setIsNeedNativeScroll: %s", r);
        i.emit("setIsNeedNativeScroll", r);
      },
      onIsNeedNativeScrollChange: e => {
        i.on("setIsNeedNativeScroll", e);
        return () => {
          i.removeListener("setIsNeedNativeScroll", e);
        };
      },
      setIsShowScrollBar: e => {
        i.emit("setIsShowScrollBar", e);
      },
      onSetIsShowScrollBar: e => {
        i.on("setIsShowScrollBar", e);
        return () => {
          i.removeListener("setIsShowScrollBar", e);
        };
      },
      getScrollContainerWidth: () => e.scrollModel.scrollContainerWidth,
      getScrollStatus: () => e.scrollModel.mainScrollStatus || {
        scrollWidth: 0,
        clientWidth: 0,
        scrollLeft: 0
      },
      onGridChange: e => {
        i.on("GridChange", e);
        return () => {
          i.removeListener("GridChange", e);
        };
      },
      emitGridChange: () => {
        i.emit("GridChange");
      },
      setIsNeedPaddingLeft(r) {
        a(e.logId, "setIsNeedPaddingLeft: %s", r);
        i.emit("setPositionDefaultX", r);
      },
      onIsNeedPaddingLeft: e => {
        i.on("setPositionDefaultX", e);
        return () => {
          i.removeListener("setPositionDefaultX", e);
        };
      },
      setAfterRender(e) {
        i.emit("setAfterRender", e);
      },
      onAfterRender: e => {
        i.on("setAfterRender", e);
        return () => {
          i.removeListener("setAfterRender", e);
        };
      },
      getMaxScrollLeft: () => e.scrollModel.totalMaxScrollLeft || 0,
      setScrollerRightPadding: i => e.scrollModel.setScrollerRightPadding(i)
    };
  };
  require.d(exports, {
    ScrollEventTypes: function () {
      return c;
    },
    createScrollManager: function () {
      return d;
    }
  });
}