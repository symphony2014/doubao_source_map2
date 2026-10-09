// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'uniqueIdProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 9960.98cb0478.js
         * chunkId: 9960
         * moduleId: 809545
         */
module.exports = function (module, exports, require) {
  var editorCommands = require("editor-commands") /*id: 361547*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var flowDocChatMemberIo = require("flow-doc-chat-member-io") /*id: 956604*/;
  function a(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  class l {
    constructor() {
      a(this, "_startTime", undefined);
      a(this, "init", e => {
        this._startTime = e;
      });
      a(this, "getUniqueId", () => {
        if (!this._startTime) {
          throw "startTime is undefined";
        }
        return `${flowDocChatMemberIo.getChatIoInstance().getMemberId()}.${this._startTime}`;
      });
      docxEditorEventConstantsAndManager.globalEventEmitter.on(editorCommands.editorCommands.WillCreateDoc, this.init);
    }
  }
  a(l, "uniqueIdInstance", null);
  a(l, "getInstance", () => {
    if (l.uniqueIdInstance === null) {
      l.uniqueIdInstance = new l();
    }
    return l.uniqueIdInstance;
  });
  let {
    getUniqueId: c
  } = l.getInstance();
  require.d(exports, {
    uniqueIdProvider: function () {
      return c;
    }
  });
}