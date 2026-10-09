// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Bq' to 'createActionManager'
// - Renamed export 'Mn' to 'actionTypes'
// - Renamed export 'Py' to 'actionConstants'
// - Renamed export 'WC' to 'ActionManagerMap'
// - Renamed export 'Yo' to 'getActionStatus'
// - Renamed export 'lp' to 'defaultActionMgr'
// - Renamed export 'm5' to 'fileTypes'
// - Renamed export 'tQ' to 'alwaysAllowAction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 445984
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var l;
  var eventEmitterUmd = require("event-emitter-umd") /*id: 692502*/;
  var u = eventEmitterUmd;
  function a(e, n, r) {
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
  (o = s || {}).DOCCONTENTCOPY = "docContentCopy";
  o.FILECONTENTCOPY = "fileContentCopy";
  o.DOCCREATECOPY = "docCreateCopy";
  o.FILECREATECOPY = "fileCreateCopy";
  o.DOCEXPORT = "docExport";
  o.FILEEXPORT = "fileExport";
  o.DOCPRINT = "docPrint";
  o.FILEPRINT = "filePrint";
  o.DOCDOWNLOAD = "docDownload";
  o.FILEDOWNLOAD = "fileDownload";
  o.DOCDELETE = "docDelete";
  o.FILEDELETE = "fileDelete";
  o.DOCPREVIEW = "docPreview";
  o.FILEPREVIEW = "filePreview";
  o.ATTACHMENTDOWNLOAD = "attachmentDownload";
  o.UPLOAD = "upload";
  o.EXTERNALACCESS = "externalAccess";
  var s = o;
  (i = d || {}).DOC = "doc";
  i.MINDNOTE = "mindnote";
  i.SHEET = "sheet";
  i.BITABLE = "bitable";
  i.FILE = "file";
  i.SPACE = "space";
  i.WIKI = "wiki";
  i.TEMPLATE = "template";
  var d = i;
  (l = f || {}).EXPORT = "export";
  l.PRINT = "print";
  l.COPY = "copy";
  l.CREATE_COPY = "createCopy";
  l.SAVE_GLOBAL_TPL = "saveGlobalTemplate";
  l.SAVE_PARTIAL_TPL = "savePartialTemplate";
  var f = l;
  class h {
    getActionStatus() {
      return true;
    }
    get file() {
      return {};
    }
    checkAction(e, n) {
      return true;
    }
    constructor() {
      a(this, "name", "action");
      a(this, "eventEmitter", new u());
      a(this, "source", undefined);
      a(this, "syncActions", []);
      a(this, "t", undefined);
      a(this, "locale", () => "zh");
      a(this, "inited", false);
      a(this, "initTask", undefined);
      a(this, "getReportError", undefined);
      a(this, "getReportRequest", undefined);
      a(this, "getReportInfo", undefined);
      a(this, "reportInited", undefined);
      a(this, "init", async () => {});
      a(this, "runResetTaskFn", () => {});
      a(this, "registChildManager", () => {});
      a(this, "checkActionWrapper", (e, n) => r => {
        var o = this;
        return async function () {
          var i = arguments.length;
          var l = Array(i);
          var c = 0;
          for (; c < i; c++) {
            l[c] = arguments[c];
          }
          if (await o.checkAction(e, n)) {
            return await r(...l);
          }
        };
      });
      a(this, "checkActionDecorator", (e, n) => (r, o, i) => {
        var l;
        if (!i) {
          return i;
        }
        let c = this;
        let u = i.value || ((l = i.initializer) === null || l === undefined ? undefined : l.call(i));
        if (u) {
          return {
            configurable: true,
            get() {
              var r = this;
              return async function () {
                var o = arguments.length;
                var i = Array(o);
                var l = 0;
                for (; l < o; l++) {
                  i[l] = arguments[l];
                }
                if (await c.checkAction(e, n)) {
                  return await u.apply(r, i);
                }
              };
            }
          };
        }
      });
      let e = () => () => {};
      this.getReportError = e;
      this.getReportRequest = e;
      this.getReportInfo = e;
      this.reportInited = e;
      this.t = e => e;
      this.initTask = Promise.resolve();
    }
  }
  a(h, "onCheckResultChange", () => {});
  let _ = new h();
  function p() {
    return new h();
  }
  let g = () => ({
    visible: true,
    disabled: false,
    disabledTips: null
  });
  function E() {
    return true;
  }
  let m = new class {
    constructor() {
      a(this, "actionMangerMap", undefined);
      a(this, "set", (e, n) => {
        this.actionMangerMap.set(e, n);
      });
      a(this, "get", e => this.actionMangerMap.get(e));
      a(this, "delete", e => {
        this.actionMangerMap.delete(e);
      });
      this.actionMangerMap = new Map();
    }
  }();
  require.d(exports, {
    createActionManager: function () {
      return p;
    },
    actionTypes: function () {
      return f;
    },
    actionConstants: function () {
      return s;
    },
    ActionManagerMap: function () {
      return m;
    },
    getActionStatus: function () {
      return g;
    },
    defaultActionMgr: function () {
      return _;
    },
    fileTypes: function () {
      return d;
    },
    alwaysAllowAction: function () {
      return E;
    }
  });
}