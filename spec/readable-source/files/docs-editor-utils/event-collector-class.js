// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'eventTypeEnum'
// - Renamed export 'v' to 'EventCollector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 425897
         */
module.exports = function (module, exports, require) {
  var o;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var docxEventHelper = require("docx-event-helper") /*id: 997602*/;
  function c(e, n, r) {
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
  (o = {}).Click = "click";
  o.View = "view";
  let u = o;
  class a {
    deleteExtraData(e) {
      if (Array.isArray(e)) {
        e.forEach(e => {
          delete this.extraParams[e];
        });
      } else {
        delete this.extraParams[e];
      }
    }
    setExtraData(e, n = false) {
      Object.assign(this.extraParams, e);
      if (n) {
        this.send();
      }
    }
    setBlockView(e, n = false) {
      this.blockView = e;
      if (n) {
        this.send();
      }
    }
    send() {
      if (this.sended && this.isOnce) {
        return;
      }
      let e = this.sendEventType === u.Click ? docxEventHelper.collectEventWithTarget : docxEventHelper.collectEventWithIdle;
      if (this.blockmanager) {
        e = this.sendEventType === u.Click ? this.blockmanager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectPageClick : this.blockmanager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectPageView;
      }
      if (this.blockView) {
        e(this.eventName, this.blockView, this.extraParams);
        this.sended = true;
      }
    }
    constructor(e) {
      var i;
      c(this, "extraParams", undefined);
      c(this, "eventName", undefined);
      c(this, "blockView", undefined);
      c(this, "sendEventType", undefined);
      c(this, "sended", undefined);
      c(this, "isOnce", undefined);
      c(this, "blockmanager", undefined);
      this.blockView = e.blockView ?? null;
      this.extraParams = e.extraParams ?? {};
      this.eventName = e.eventName;
      this.sendEventType = e.sendEventType ?? u.Click;
      this.sended = false;
      this.isOnce = (i = e.isOnce) === null || i === undefined || i;
      this.blockmanager = e.blockmanager;
    }
  }
  require.d(exports, {
    eventTypeEnum: function () {
      return u;
    },
    EventCollector: function () {
      return a;
    }
  });
}