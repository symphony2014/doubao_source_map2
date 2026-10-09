// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'TriggerMethodType'
// - Renamed export 'w' to 'triggerManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 911967
         */
module.exports = function (module, exports, require) {
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  function r(e, t, n) {
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
  var o = {
    ChatChange: 0,
    PageChange: 1,
    ScrollChange: 2
  };
  class a extends eventEmitterWrapper_1.eventEmitter {
    setCurrentMethod(e) {
      this.current_method = e;
    }
    getEndMethod() {
      switch (this.current_method) {
        case o.ChatChange:
          return "leave_chat";
        case o.ScrollChange:
          return "scroll";
        case o.PageChange:
          return "switch_tab";
        default:
          return "leave_chat";
      }
    }
    getStartMethod() {
      switch (this.current_method) {
        case o.ChatChange:
          return "enter_chat_or_new_message";
        case o.ScrollChange:
          return "scroll";
        case o.PageChange:
          return "switch_tab";
        default:
          return "enter_chat_or_new_message";
      }
    }
    addVisibleChangeListener(e) {
      let {
        show: t,
        hide: n
      } = e;
      if (!this.listenerCount("page_visible_show")) {
        window.addEventListener("visibilitychange", this.visiblityChangedHandler);
      }
      this.on("page_visible_show", t);
      this.on("page_visible_hide", n);
    }
    visiblityChangedHandler() {
      if (document.visibilityState === "hidden") {
        this.current_method = o.PageChange;
        this.emit("page_visible_hide");
      } else if (document.visibilityState === "visible") {
        this.current_method = o.PageChange;
        this.emit("page_visible_show");
      }
    }
    removeVisibleChangeListener(e) {
      let {
        show: t,
        hide: n
      } = e;
      this.off("page_visible_show", t);
      this.off("page_visible_hide", n);
      if (!this.listenerCount("page_visible_show")) {
        window.removeEventListener("visibilitychange", this.visiblityChangedHandler);
      }
    }
    handleUpdateTriggerMethodToScroll() {
      this.current_method = o.ScrollChange;
      if (this.clearTriggerMethodTimer) {
        clearTimeout(this.clearTriggerMethodTimer);
      }
      this.clearTriggerMethodTimer = setTimeout(() => {
        this.current_method = o.ChatChange;
      }, 500);
    }
    addScrollContainerListener(e) {
      if (e != null) {
        e.addEventListener("scroll", this.handleUpdateTriggerMethodToScroll);
      }
      return () => {
        if (e != null) {
          e.removeEventListener("scroll", this.handleUpdateTriggerMethodToScroll);
        }
      };
    }
    constructor() {
      super();
      r(this, "current_method", o.ChatChange);
      r(this, "clearTriggerMethodTimer", undefined);
      this.visiblityChangedHandler = this.visiblityChangedHandler.bind(this);
      this.handleUpdateTriggerMethodToScroll = this.handleUpdateTriggerMethodToScroll.bind(this);
    }
  }
  let l = new a();
  require.d(exports, {
    TriggerMethodType: function () {
      return o;
    },
    triggerManager: function () {
      return l;
    }
  });
}