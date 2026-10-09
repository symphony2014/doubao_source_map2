// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B8' to 'getDocxData'
// - Renamed export 'ZP' to 'DocxClipboard'
// - Renamed export 'if' to 'setDocxData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7245.ed228716.js
         * chunkId: 7245
         * moduleId: 709733
         */
module.exports = function (module, exports, require) {
  var clipboardSecurityHandler = require("clipboard-security-handler") /*id: 558244*/;
  var docxBlockTypeConstants = require("docx-block-type-constants") /*id: 49433*/;
  var docxSnapshotHandler = require("docx-snapshot-handler") /*id: 595708*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docComponentStubConfig = require("doc-component-stub-config") /*id: 436674*/;
  var runtimeEnvFlags = require("runtime-env-flags") /*id: 573139*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  function u(e, o, r) {
    var n;
    if ((o = typeof (n = function (e, o) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, o || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (o === "string" ? String : Number)(e);
    }(o, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, o, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[o] = r;
    }
    return e;
  }
  class p {
    setData(e, o) {
      if (this.useJsb) {
        let r = docxBlockTypeConstants.mimeTypeMap[e];
        if (r) {
          p.jsbData[r] = o;
        }
      } else {
        p.data[e] = o;
      }
    }
    getData(e) {
      if (runtimeEnvFlags.isE2eTesting) {
        return this.clipboardData.getData(e) || p.data[e];
      }
      if (this.useJsb) {
        let o = docxBlockTypeConstants.mimeTypeMap[e];
        if (o) {
          return p.jsbData[o];
        } else {
          return "";
        }
      }
      return p.data[e];
    }
    encodeClipboardData(e) {
      if (this.useJsb) {
        docComponentStubConfig.clipboardUtils.setData({
          ...p.jsbData,
          token: e
        });
      } else {
        clipboardSecurityHandler.clipboardSecurityManager.setData({
          clipboardData: this.clipboardData,
          data: p.data,
          token: e
        });
      }
    }
    decodeClipboardData(e) {
      if (this.useJsb) {
        p.jsbData = docComponentStubConfig.clipboardUtils.getDataSync(e);
      } else {
        p.data = clipboardSecurityHandler.clipboardSecurityManager.getData({
          clipboardData: this.clipboardData,
          type: Object.values(docxBlockTypeConstants.fileTypes),
          token: e
        });
      }
    }
    getTypes() {
      return this.clipboardData.types || Object.keys(p.data || {});
    }
    resetDataBeforeSetData() {
      p.data = {};
      p.jsbData = {};
    }
    constructor(e) {
      this.clipboardData = e;
      u(this, "useJsb", browserEnvironmentDetectionUtils.browserDetector.isMobile && !browserEnvironmentDetectionUtils.browserDetector.isH5 && !browserEnvironmentDetectionUtils.browserDetector.isOpendoc);
    }
  }
  function h(e, o, r) {
    o[e.id] = e;
    g(r, e);
  }
  function g(e, o) {
    e[o.id] = Object.assign(e[o.id] || {}, function (e) {
      let {
        snapshot: o
      } = e;
      switch (o.type) {
        case docBlockTypeConstants.blockTypeConstants.FILE:
          return {
            token: o.file.token
          };
        case docBlockTypeConstants.blockTypeConstants.IMAGE:
          return {
            oldRecord: e
          };
        default:
          return {};
      }
    }(o));
  }
  function m(e, o = {}, r) {
    Object.entries(e).forEach(e => {
      let [n, s] = e;
      let {
        snapshot: c,
        id: d
      } = s;
      switch (c.type) {
        case docBlockTypeConstants.blockTypeConstants.IMAGE:
        case docBlockTypeConstants.blockTypeConstants.FILE:
          g(o, s);
          break;
        case docBlockTypeConstants.blockTypeConstants.SHEET:
          {
            let e = r.getData(docxBlockTypeConstants.fileTypes.HTML);
            let a = new DOMParser().parseFromString(e, "text/html").body;
            let l = a.querySelector(`.old-record-id-${d} byte-sheet-html-origin`) || a.querySelector(`.old-record-id-${d} table`);
            let s = [];
            a.querySelectorAll(`.old-record-id-${n} style`).forEach(e => s.push(e.outerHTML));
            o[n] = {
              html: l,
              styles: s
            };
            break;
          }
        case docBlockTypeConstants.blockTypeConstants.MINDMAP:
        case docBlockTypeConstants.blockTypeConstants.BITABLE:
        case docBlockTypeConstants.blockTypeConstants.BASE_REFER:
          {
            let e = r.getData(docxBlockTypeConstants.fileTypes.HTML);
            let a = new DOMParser().parseFromString(e, "text/html").body.querySelector(`.block-id-${n}`);
            if (a) {
              o[n] = {
                html: a
              };
            }
            break;
          }
        case docBlockTypeConstants.blockTypeConstants.WHITEBOARD:
          docxSnapshotHandler.updateDocxSnapshot(o, s);
      }
    });
    return o;
  }
  u(p, "data", {});
  u(p, "jsbData", undefined);
  require.d(exports, {
    getDocxData: function () {
      return h;
    },
    DocxClipboard: function () {
      return p;
    },
    setDocxData: function () {
      return m;
    }
  });
}