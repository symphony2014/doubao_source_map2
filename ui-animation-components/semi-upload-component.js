// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'UploadComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 159273
         */
module.exports = function (module, exports, require) {
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var c = propTypesFactoryWrapper;
  var componentAdapterBaseClass = require("component-adapter-base-class") /*id: 519643*/;
  var isPromiseUtil = require("is-promise-util") /*id: 688982*/;
  var uniqueIdUtils = require("unique-id-utils") /*id: 912031*/;
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  var logLevelTypes = require("log-level-types") /*id: 818674*/;
  let m = `${semiIdentifier.semiIdentifier}-upload`;
  let g = "picture";
  let v = "list";
  let _ = {
    PREFIX: m,
    LIST: `${m}-list`
  };
  let b = "auto";
  let y = "custom";
  let w = {
    FILE_STATUS_UPLOADING: "uploading",
    FILE_STATUS_SUCCESS: "success",
    FILE_STATUS_UPLOAD_FAIL: "uploadFail",
    FILE_STATUS_VALIDATING: "validating",
    FILE_STATUS_VALID_FAIL: "validateFail",
    FILE_STATUS_WAIT_UPLOAD: "wait",
    FILE_LIST_PIC: g,
    FILE_LIST_DEFAULT: v,
    LIST_TYPE: [g, v],
    imageTypes: ["image", "webp", "png", "svg", "gif", "jpg", "jpeg", "bmp", "dpg"],
    DRAG_AREA_DEFAULT: "default",
    DRAG_AREA_LEGAL: "legal",
    DRAG_AREA_ILLEGAL: "illegal",
    TRIGGER_AUTO: b,
    TRIGGER_CUSTOM: y,
    UPLOAD_TRIGGER: [b, y],
    VALIDATE_STATUS: logLevelTypes.logLevels,
    PROMPT_POSITION: ["left", "right", "bottom"]
  };
  let x = {
    PROGRESS_COEFFICIENT: 0.95
  };
  function C(e, t, n, i) {
    return new (n ||= Promise)(function (r, a) {
      function o(e) {
        try {
          s(i.next(e));
        } catch (e) {
          a(e);
        }
      }
      function l(e) {
        try {
          s(i.throw(e));
        } catch (e) {
          a(e);
        }
      }
      function s(e) {
        var t;
        if (e.done) {
          r(e.value);
        } else {
          ((t = e.value) instanceof n ? t : new n(function (e) {
            e(t);
          })).then(o, l);
        }
      }
      s((i = i.apply(e, t || [])).next());
    });
  }
  function k(e) {
    if (e < 1024) {
      return `${(e / 1024).toFixed(2)}KB`;
    } else if (e >= 1024 && e < 1048576) {
      return `${(e / 1024).toFixed(1)}KB`;
    } else if (e >= 1048576) {
      return `${(e / 1048576).toFixed(1)}MB`;
    } else {
      return undefined;
    }
  }
  let {
    FILE_STATUS_UPLOADING: S,
    FILE_STATUS_SUCCESS: E,
    FILE_STATUS_UPLOAD_FAIL: T,
    FILE_STATUS_VALID_FAIL: j,
    FILE_STATUS_WAIT_UPLOAD: P,
    DRAG_AREA_DEFAULT: N,
    DRAG_AREA_LEGAL: R,
    TRIGGER_AUTO: I
  } = w;
  class O extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign({}, e));
    }
    init() {
      let {
        disabled: e,
        addOnPasting: t
      } = this.getProps();
      if (t && !e) {
        this.bindPastingHandler();
      }
    }
    destroy() {
      let {
        disabled: e,
        addOnPasting: t
      } = this.getProps();
      this.releaseMemory();
      if (t && !e) {
        this.unbindPastingHandler();
      }
    }
    getError(e) {
      let {
        action: t,
        xhr: n,
        message: i,
        fileName: r
      } = e;
      let a = n ? n.status : 0;
      let o = Error(i || `cannot post ${r} to ${t}, xhr status: ${a}'`);
      o.status = a;
      o.method = "post";
      o.url = t;
      return o;
    }
    getBody(e) {
      if (!e) {
        return;
      }
      let t = e.responseText || e.response;
      if (!t) {
        return t;
      }
      try {
        return JSON.parse(t);
      } catch (e) {
        return t;
      }
    }
    checkFileSize(e) {
      let {
        size: t
      } = e;
      let {
        maxSize: n,
        minSize: i
      } = this.getProps();
      let r = false;
      if (t > n * 1024 || t < i * 1024) {
        r = true;
      }
      return r;
    }
    handleChange(e) {
      let t = [];
      let {
        limit: n,
        transformFile: i,
        accept: r
      } = this.getProps();
      let {
        fileList: a
      } = this.getStates();
      let o = Array.from(e);
      if (r !== undefined && (o = o.filter(e => {
        let n = this.checkFileFormat(r, e);
        if (!n) {
          t.push(e);
        }
        return n;
      }), t.length !== 0 && this._adapter.notifyAcceptInvalid(t), o.length === 0)) {
        return;
      }
      o = o.map(e => {
        if (i) {
          e = i(e);
        }
        e.uid ||= uniqueIdUtils.generateUuid();
        if (this.checkFileSize(e)) {
          e._sizeInvalid = true;
          e.status = j;
          this._adapter.notifySizeError(e, a);
        }
        return e;
      });
      let l = a.length + o.length;
      if (n !== undefined && l > n) {
        this._adapter.notifyExceed(o);
        if (n === 1) {
          o = o.slice(-1);
          this._adapter.notifyFileSelect(o);
          this._adapter.resetInput();
          this.replaceFileList(o);
          return;
        }
        let e = n - a.length;
        o = o.slice(0, e);
      }
      this._adapter.notifyFileSelect(o);
      this._adapter.resetInput();
      this.addFilesToList(o);
    }
    handleReplaceChange(e) {
      if (e.length === 0) {
        return;
      }
      let {
        transformFile: t,
        uploadTrigger: n,
        accept: i
      } = this.getProps();
      let {
        replaceIdx: r,
        fileList: a
      } = this.getStates();
      let o = Array.from(e).pop();
      if (i !== undefined && !this.checkFileFormat(i, o)) {
        this._adapter.notifyAcceptInvalid([o]);
        return;
      }
      if (t) {
        o = t(o);
      }
      o.uid ||= uniqueIdUtils.generateUuid();
      if (this.checkFileSize(o)) {
        o._sizeInvalid = true;
        o.status = j;
        this._adapter.notifySizeError(o, a);
      }
      this._adapter.notifyFileSelect([o]);
      let l = this.buildFileItem(o, n);
      let s = [...a];
      s.splice(r, 1, l);
      this._adapter.notifyChange({
        currentFile: l,
        fileList: s
      });
      this._adapter.updateFileList(s, () => {
        this._adapter.resetReplaceInput();
        if (!l._sizeInvalid) {
          this.upload(l);
        }
      });
    }
    buildFileItem(e, t) {
      let {
        _sizeInvalid: n,
        status: i
      } = e;
      try {
        delete e._sizeInvalid;
        delete e.status;
      } catch (e) {}
      let r = {
        status: i || (t === I ? S : P),
        name: e.name,
        size: k(e.size),
        uid: e.uid,
        percent: 0,
        fileInstance: e,
        url: this._createURL(e)
      };
      if (n) {
        r._sizeInvalid = true;
      }
      if (this.isImage(e)) {
        r.preview = true;
      }
      return r;
    }
    replaceFileList(e) {
      let {
        uploadTrigger: t
      } = this.getProps();
      let n = e.map(e => this.buildFileItem(e, t));
      this._adapter.notifyChange({
        fileList: n,
        currentFile: n[0]
      });
      this._adapter.updateFileList(n, () => {
        if (t === I) {
          this.startUpload(n);
        }
      });
    }
    addFilesToList(e) {
      let t = this.getState("fileList").slice();
      let {
        uploadTrigger: n
      } = this.getProps();
      let i = e.map(e => this.buildFileItem(e, n));
      i.forEach(e => {
        let n = t.findIndex(t => t.uid === e.uid);
        if (n !== -1) {
          t[n] = e;
        } else {
          t.push(e);
          this._adapter.notifyChange({
            fileList: t,
            currentFile: e
          });
        }
      });
      this._adapter.updateFileList(t, () => {
        if (n === I) {
          this.startUpload(i);
        }
      });
    }
    insertFileToList(e, t) {
      let {
        limit: n,
        transformFile: i,
        accept: r,
        uploadTrigger: a
      } = this.getProps();
      let {
        fileList: o
      } = this.getStates();
      let l = [];
      let s = Array.from(e);
      if (r !== undefined && (s = s.filter(e => {
        let t = this.checkFileFormat(r, e);
        if (!t) {
          l.push(e);
        }
        return t;
      }), l.length !== 0 && this._adapter.notifyAcceptInvalid(l), s.length === 0)) {
        return;
      }
      s = s.map(e => {
        e.uid ||= uniqueIdUtils.generateUuid();
        if (this.checkFileSize(e)) {
          e._sizeInvalid = true;
          e.status = j;
          this._adapter.notifySizeError(e, o);
        }
        if (i) {
          e = i(e);
        }
        return e;
      });
      let c = o.length + s.length;
      if (n !== undefined && c > n) {
        if (n === 1) {
          s = s.slice(-1);
          this._adapter.notifyFileSelect(s);
          this._adapter.resetInput();
          this.replaceFileList(s);
          return;
        }
        let e = n - o.length;
        s = s.slice(0, e);
        this._adapter.notifyExceed(s);
      }
      let u = s.map(e => this.buildFileItem(e, a));
      let d = o.slice();
      if (t !== undefined) {
        d.splice(t, 0, ...u);
      } else {
        d.push(...u);
      }
      this._adapter.notifyFileSelect(s);
      this._adapter.notifyChange({
        fileList: d,
        currentFile: null
      });
      this._adapter.updateFileList(d, () => {
        if (a === I) {
          this.startUpload(u);
        }
      });
    }
    manualUpload() {
      let e = this.getState("fileList").filter(e => e.status === P);
      this.startUpload(e);
    }
    startUpload(e) {
      e.forEach(e => {
        if (!e._sizeInvalid) {
          this.upload(e);
        }
      });
    }
    upload(e) {
      let {
        beforeUpload: t
      } = this.getProps();
      if (t === undefined) {
        this.post(e);
        return;
      }
      if (typeof t == "function") {
        let {
          fileList: t
        } = this.getStates();
        let n = this._adapter.notifyBeforeUpload({
          file: e,
          fileList: t
        });
        switch (true) {
          case n === true:
            this.post(e);
            break;
          case n === false:
            {
              let t = {
                shouldUpload: false,
                status: w.FILE_STATUS_VALID_FAIL
              };
              this.handleBeforeUploadResultInObject(t, e);
              break;
            }
          case n && isPromiseUtil.isPromise(n):
            Promise.resolve(n).then(t => {
              let n = {
                shouldUpload: true
              };
              if (Object.prototype.toString.call(t).slice(8, -1) === "Object") {
                n = Object.assign(Object.assign({}, n), t);
              }
              this.handleBeforeUploadResultInObject(n, e);
            }, t => {
              let n = {
                shouldUpload: false,
                status: w.FILE_STATUS_VALID_FAIL
              };
              if (Object.prototype.toString.call(t).slice(8, -1) === "Object") {
                n = Object.assign(Object.assign({}, n), t);
              }
              this.handleBeforeUploadResultInObject(n, e);
            });
            break;
          case typeof n == "object":
            this.handleBeforeUploadResultInObject(n, e);
        }
      }
    }
    handleBeforeUploadResultInObject(e, t) {
      let {
        shouldUpload: n,
        status: i,
        autoRemove: r,
        validateMessage: a,
        fileInstance: o
      } = e;
      let l = this.getState("fileList").slice();
      if (r) {
        l = l.filter(e => e.uid !== t.uid);
      } else {
        let e = this._getFileIndex(t, l);
        if (e < 0) {
          return;
        }
        if (i) {
          l[e].status = i;
        }
        if (a) {
          l[e].validateMessage = a;
        }
        if (o) {
          o.uid = t.uid;
          l[e].fileInstance = o;
          l[e].size = k(o.size);
          l[e].name = o.name;
          l[e].url = this._createURL(o);
        }
        l[e].shouldUpload = n;
      }
      this._adapter.updateFileList(l);
      this._adapter.notifyChange({
        fileList: l,
        currentFile: t
      });
      if (n) {
        this.post(t);
      }
    }
    post(e) {
      let {
        fileInstance: t
      } = e;
      let n = this.getProps();
      if (typeof XMLHttpRequest == "undefined") {
        return;
      }
      let i = new XMLHttpRequest();
      let r = new FormData();
      let {
        action: a
      } = n;
      let {
        data: o
      } = n;
      if (o) {
        if (typeof o == "function") {
          o = o(t);
        }
        Object.keys(o).forEach(e => {
          r.append(e, o[e]);
        });
      }
      let l = n.name || n.fileName || t.name;
      if (n.customRequest) {
        return n.customRequest({
          fileName: l,
          data: o,
          file: e,
          fileInstance: t,
          onProgress: e => this.handleProgress({
            e,
            fileInstance: t
          }),
          onError: (e, n) => this.handleError({
            e: n,
            xhr: e,
            fileInstance: t
          }),
          onSuccess: (e, n) => this.handleSuccess({
            response: e,
            fileInstance: t,
            e: n,
            isCustomRequest: true
          }),
          withCredentials: n.withCredentials,
          action: n.action
        });
      }
      r.append(l, t);
      i.open("post", a, true);
      if (n.withCredentials && "withCredentials" in i) {
        i.withCredentials = true;
      }
      if (i.upload) {
        i.upload.onprogress = e => this.handleProgress({
          e,
          fileInstance: t
        });
      }
      i.onload = e => this.handleOnLoad({
        e,
        xhr: i,
        fileInstance: t
      });
      i.onerror = e => this.handleError({
        e,
        xhr: i,
        fileInstance: t
      });
      let s = n.headers || {};
      if (typeof s == "function") {
        s = s(t);
      }
      for (let e in s) {
        if (Object.prototype.hasOwnProperty.call(s, e) && s[e] !== null) {
          i.setRequestHeader(e, s[e]);
        }
      }
      i.send(r);
    }
    handleProgress(e) {
      let {
        e: t,
        fileInstance: n
      } = e;
      let {
        fileList: i
      } = this.getStates();
      let r = i.slice();
      let a = 0;
      if (t.total > 0) {
        a = Number((t.loaded / t.total * 100 * x.PROGRESS_COEFFICIENT).toFixed(0)) || 0;
      }
      let o = this._getFileIndex(n, r);
      if (!(o < 0)) {
        r[o].percent = a;
        r[o].status = S;
        this._adapter.notifyProgress(a, n, r);
        this._adapter.updateFileList(r);
        this._adapter.notifyChange({
          fileList: r,
          currentFile: r[o]
        });
      }
    }
    handleOnLoad(e) {
      let {
        e: t,
        xhr: n,
        fileInstance: i
      } = e;
      let {
        fileList: r
      } = this.getStates();
      let a = this._getFileIndex(i, r);
      if (!(a < 0)) {
        if (n.status < 200 || n.status >= 300) {
          this.handleError({
            e: t,
            xhr: n,
            fileInstance: i
          });
        } else {
          this.handleSuccess({
            e: t,
            xhr: n,
            fileInstance: i,
            index: a
          });
        }
      }
    }
    handleSuccess(e) {
      let {
        e: t,
        fileInstance: n,
        isCustomRequest: i = false,
        xhr: r,
        response: a
      } = e;
      let {
        fileList: o
      } = this.getStates();
      let l = null;
      let s = this._getFileIndex(n, o);
      if (s < 0) {
        return;
      }
      l = i ? a : this.getBody(r);
      let c = o.slice();
      let {
        afterUpload: u
      } = this.getProps();
      c[s].status = E;
      c[s].percent = 100;
      this._adapter.notifyProgress(100, n, c);
      c[s].response = l;
      if (t) {
        c[s].event = t;
      }
      if (u && typeof u == "function") {
        let {
          autoRemove: e,
          status: t,
          validateMessage: n,
          name: i
        } = this._adapter.notifyAfterUpload({
          response: l,
          file: c[s],
          fileList: c
        }) || {};
        if (t) {
          c[s].status = t;
        }
        if (n) {
          c[s].validateMessage = n;
        }
        if (i) {
          c[s].name = i;
        }
        if (e) {
          c.splice(s, 1);
        }
      }
      this._adapter.notifySuccess(l, n, c);
      this._adapter.notifyChange({
        fileList: c,
        currentFile: c[s]
      });
      this._adapter.updateFileList(c);
    }
    _getFileIndex(e, t) {
      return t.findIndex(t => t.uid === e.uid);
    }
    handleRemove(e) {
      let {
        disabled: t
      } = this.getProps();
      if (t) {
        return;
      }
      let {
        fileList: n
      } = this.getStates();
      Promise.resolve(this._adapter.notifyBeforeRemove(e, n)).then(t => {
        if (t === false) {
          return;
        }
        let i = n.slice();
        let r = this._getFileIndex(e, n);
        if (!(r < 0)) {
          i.splice(r, 1);
          this._adapter.notifyRemove(e.fileInstance, i, e);
          this._adapter.updateFileList(i);
          this._adapter.notifyChange({
            fileList: i,
            currentFile: e
          });
        }
      });
    }
    handleError(e) {
      let {
        e: t,
        xhr: n,
        fileInstance: i
      } = e;
      let {
        fileList: r
      } = this.getStates();
      let a = this._getFileIndex(i, r);
      if (a < 0) {
        return;
      }
      let {
        action: o
      } = this.getProps();
      let l = r.slice();
      let s = this.getError({
        action: o,
        xhr: n,
        fileName: i.name
      });
      l[a].status = T;
      l[a].response = s;
      l[a].event = t;
      this._adapter.notifyError(s, i, l, n);
      this._adapter.updateFileList(l);
      this._adapter.notifyChange({
        currentFile: l[a],
        fileList: l
      });
    }
    handleClear() {
      let {
        disabled: e
      } = this.getProps();
      let {
        fileList: t
      } = this.getStates();
      if (!e) {
        Promise.resolve(this._adapter.notifyBeforeClear(t)).then(e => {
          if (e !== false) {
            this._adapter.updateFileList([]);
            this._adapter.notifyClear();
            this._adapter.notifyChange({
              fileList: []
            });
          }
        }).catch(e => {});
      }
    }
    _createURL(e) {
      let t = URL.createObjectURL(e);
      let {
        localUrls: n
      } = this.getStates();
      let i = n.slice();
      i.push(t);
      this._adapter.updateLocalUrls(i);
      return t;
    }
    releaseMemory() {
      let {
        localUrls: e
      } = this.getStates();
      e.forEach(e => {
        this._releaseBlob(e);
      });
    }
    _releaseBlob(e) {
      try {
        URL.revokeObjectURL(e);
      } catch (e) {}
    }
    isImage(e) {
      return /(webp|svg|png|gif|jpg|jpeg|bmp|dpg)$/i.test(e.type);
    }
    isMultiple() {
      return !!this.getProp("multiple");
    }
    handleDragEnter(e) {
      e.preventDefault();
      e.stopPropagation();
      this._dragEnterTarget = e.currentTarget;
      let {
        disabled: t
      } = this.getProps();
      if (!t) {
        this._adapter.updateDragAreaStatus(R);
      }
    }
    handleDirectoryDrop(e) {
      var t;
      var n;
      var i;
      var r;
      t = this;
      n = undefined;
      i = undefined;
      r = function* () {
        let t = this.getState("fileList").slice();
        let n = [].slice.call(e.dataTransfer.items);
        let i = yield function (e) {
          return C(this, undefined, undefined, function* () {
            let t = [];
            let n = (e, i) => C(this, undefined, undefined, function* () {
              i = i || "";
              e.path = i;
              if (e.isFile) {
                t.push(new Promise((t, n) => {
                  e.file(n => {
                    if (e.fullPath && !n.webkitRelativePath) {
                      Object.defineProperties(n, {
                        webkitRelativePath: {
                          writable: true
                        }
                      });
                      n.webkitRelativePath = e.fullPath.replace(/^\//, "");
                      Object.defineProperties(n, {
                        webkitRelativePath: {
                          writable: false
                        }
                      });
                    }
                    t(n);
                  }, n);
                }));
              } else if (e.isDirectory) {
                let t = yield function (e) {
                  return C(this, undefined, undefined, function* () {
                    return new Promise((t, n) => {
                      let i = e.createReader();
                      let r = [];
                      (function e() {
                        i.readEntries(n => {
                          let i = Array.prototype.slice.apply(n);
                          r = r.concat(i);
                          if (i.length) {
                            e();
                          } else {
                            t(r);
                          }
                        }, n);
                      })();
                    });
                  });
                }(e);
                for (let r = 0; r < t.length; r++) {
                  let a = t[r];
                  yield n(a, `${i}${e.name}/`);
                }
              }
            });
            try {
              let i = e.map(e => n(e.webkitGetAsEntry()));
              yield Promise.all(i);
              return yield Promise.all(t);
            } catch (e) {
              return [];
            }
          });
        }(n);
        this.handleChange(i);
        this._adapter.updateDragAreaStatus(N);
        this._adapter.notifyDrop(e, i, t);
      };
      return new (i ||= Promise)(function (e, a) {
        function o(e) {
          try {
            s(r.next(e));
          } catch (e) {
            a(e);
          }
        }
        function l(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            a(e);
          }
        }
        function s(t) {
          var n;
          if (t.done) {
            e(t.value);
          } else {
            ((n = t.value) instanceof i ? n : new i(function (e) {
              e(n);
            })).then(o, l);
          }
        }
        s((r = r.apply(t, n || [])).next());
      });
    }
    handleDrop(e) {
      e.preventDefault();
      e.stopPropagation();
      let {
        disabled: t,
        directory: n
      } = this.getProps();
      let i = this.getState("fileList").slice();
      if (!t) {
        if (n) {
          this.handleDirectoryDrop(e);
          return;
        }
        let t = Array.from(e.dataTransfer.files);
        this.handleChange(t);
        this._adapter.updateDragAreaStatus(N);
        this._adapter.notifyDrop(e, t, i);
      }
    }
    handleDragOver(e) {
      e.preventDefault();
      e.stopPropagation();
    }
    handleDragLeave(e) {
      e.preventDefault();
      e.stopPropagation();
      if (this._dragEnterTarget === e.target) {
        this._adapter.updateDragAreaStatus(N);
      }
    }
    checkFileFormat(e, t) {
      let n = e.split(",").map(e => e.trim()).filter(e => e);
      let i = t.type || "";
      let r = i.replace(/\/.*$/, "");
      return n.some(e => {
        if (e.charAt(0) === ".") {
          var n;
          let i = t.name || "";
          let r = e.split(".").pop().toLowerCase();
          return (n = i.toLowerCase()).indexOf(r, n.length - r.length) !== -1;
        }
        if (/\/\*$/.test(e)) {
          return r === e.replace(/\/.*$/, "");
        } else {
          return !!/^[^\/]+\/[^\/]+$/.test(e) && i === e;
        }
      });
    }
    retry(e) {
      let {
        onRetry: t
      } = this.getProps();
      if (t && typeof t == "function") {
        t(e);
      }
      this.post(e);
    }
    handlePreviewClick(e) {
      this._adapter.notifyPreviewClick(e);
    }
    readFileFromClipboard(e) {
      for (let t of e) {
        for (let e of t.types) {
          if (e.startsWith("image")) {
            t.getType(e).then(e => e.arrayBuffer()).then(t => {
              let n = e.split("/")[1];
              let i = new File([t], `upload.${n}`, {
                type: e
              });
              this.handleChange([i]);
            });
          }
        }
      }
    }
    handlePasting(e) {
      if ((this._adapter.isMac() ? e.metaKey : e.ctrlKey) && e.code === "KeyV" && e.target === document.body) {
        navigator.permissions.query({
          name: "clipboard-read"
        }).then(e => {
          if (e.state === "granted" || e.state === "prompt") {
            navigator.clipboard.read().then(e => {
              this.readFileFromClipboard(e);
            });
          } else {
            this._adapter.notifyPastingError(e);
          }
        }).catch(e => {
          this._adapter.notifyPastingError(e);
        });
      }
    }
    bindPastingHandler() {
      this._adapter.registerPastingHandler(e => this.handlePasting(e));
    }
    unbindPastingHandler() {
      this._adapter.unRegisterPastingHandler();
    }
  }
  class M extends componentAdapterBaseClass.BaseAdapterClass {
    constructor(e) {
      super(Object.assign({}, e));
    }
    handleImageError(e) {
      this._adapter.updateFallbackPreview(true);
    }
  }
  var alertCircleIcon = require("alert-circle-icon") /*id: 287588*/;
  var iconComponentFactory = require("icon-component-factory") /*id: 129581*/;
  let $ = iconComponentFactory.IconFactory(function (e) {
    return reactCoreLibraryReexport.createElement("svg", Object.assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      focusable: false,
      "aria-hidden": true
    }, e), reactCoreLibraryReexport.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.49993 11.9998C4.49993 7.85775 7.85775 4.49993 11.9998 4.49993C14.6403 4.49993 16.9645 5.86506 18.3012 7.9305L16.2939 7.52902C15.4815 7.36656 14.6913 7.89337 14.5288 8.7057C14.3664 9.51803 14.8932 10.3083 15.7055 10.4707L20.7055 11.4707C21.4643 11.6225 22.214 11.1721 22.4363 10.4309L23.9363 5.43095C24.1744 4.63747 23.7241 3.80126 22.9307 3.56321C22.1372 3.32517 21.301 3.77543 21.0629 4.56891L20.6287 6.01635C18.7332 3.28781 15.5765 1.49998 11.9998 1.49998C6.20092 1.49998 1.49998 6.20092 1.49998 11.9998C1.49998 17.7987 6.20092 22.4997 11.9998 22.4997C16.5739 22.4997 20.4611 19.5757 21.9018 15.4996C22.1779 14.7186 21.7685 13.8616 20.9874 13.5855C20.2064 13.3095 19.3494 13.7189 19.0733 14.4999C18.0431 17.4149 15.263 19.4997 11.9998 19.4997C7.85775 19.4997 4.49993 16.1419 4.49993 11.9998Z",
      fill: "currentColor"
    }));
  }, "refresh");
  var clearIcon = require("clear-icon") /*id: 137025*/;
  var fileIconComponent = require("file-icon-component") /*id: 344454*/;
  var closeIconComponent = require("close-icon-component") /*id: 111418*/;
  var aiCreationLocaleWrapper = require("ai-creation-locale-wrapper") /*id: 67026*/;
  var reactFoundationComponent = require("react-foundation-component") /*id: 323591*/;
  var semiButtonWrapperComponent = require("semi-button-wrapper-component") /*id: 654274*/;
  var semiProgressComponent = require("semi-progress-component") /*id: 821198*/;
  var reactTooltipComponent = require("react-tooltip-component") /*id: 228812*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var reactElementUtils = require("react-element-utils") /*id: 105208*/;
  let X = _.PREFIX;
  let K = function (e = {}) {
    return reactCoreLibraryReexport.createElement("svg", Object.assign({
      focusable: false,
      "aria-hidden": true,
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, e), reactCoreLibraryReexport.createElement("circle", {
      cx: "7.99992",
      cy: "7.99992",
      r: "6.66667",
      fill: "white"
    }), reactCoreLibraryReexport.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M15.3332 8.00008C15.3332 12.0502 12.0499 15.3334 7.99984 15.3334C3.94975 15.3334 0.666504 12.0502 0.666504 8.00008C0.666504 3.94999 3.94975 0.666748 7.99984 0.666748C12.0499 0.666748 15.3332 3.94999 15.3332 8.00008ZM8.99984 11.6667C8.99984 11.1145 8.55212 10.6667 7.99984 10.6667C7.44755 10.6667 6.99984 11.1145 6.99984 11.6667C6.99984 12.219 7.44755 12.6667 7.99984 12.6667C8.55212 12.6667 8.99984 12.219 8.99984 11.6667ZM7.99984 3.33341C7.27573 3.33341 6.7003 3.94171 6.74046 4.66469L6.94437 8.33495C6.97549 8.89513 7.4388 9.33341 7.99984 9.33341C8.56087 9.33341 9.02419 8.89513 9.05531 8.33495L9.25921 4.66469C9.29938 3.94171 8.72394 3.33341 7.99984 3.33341Z",
      fill: "#F93920"
    }));
  };
  let J = function (e = {}) {
    return reactCoreLibraryReexport.createElement("svg", Object.assign({
      focusable: false,
      "aria-hidden": true,
      width: "28",
      height: "28",
      viewBox: "0 0 28 28",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, e), reactCoreLibraryReexport.createElement("circle", {
      cx: "14",
      cy: "14",
      r: "14",
      fill: "#16161A",
      fillOpacity: "0.6"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M9 10.25V18.25L10.25 13.25H17.875V11.75C17.875 11.4739 17.6511 11.25 17.375 11.25H14L12.75 9.75H9.5C9.22386 9.75 9 9.97386 9 10.25Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M18 18.25L19 13.25H10.2031L9 18.25H18Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }));
  };
  let q = function (e = {}) {
    return reactCoreLibraryReexport.createElement("svg", Object.assign({
      focusable: false,
      "aria-hidden": true,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, e), reactCoreLibraryReexport.createElement("path", {
      d: "M6 17V7.58824C6 7.26336 6.26863 7 6.6 7H10.5L12 8.76471H16.05C16.3814 8.76471 16.65 9.02806 16.65 9.35294V11.1176H7.5L6 17ZM6 17L7.44375 11.1176H18L16.8 17L6 17Z",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }));
  };
  class Q extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.state = {
        fallbackPreview: false
      };
      this.foundation = new M(this.adapter);
    }
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        updateFallbackPreview: e => this.setState({
          fallbackPreview: e
        })
      });
    }
    transSize(e) {
      if (typeof e == "number") {
        return k(e);
      } else {
        return e;
      }
    }
    renderValidateMessage() {
      let {
        status: e,
        validateMessage: t
      } = this.props;
      let n = null;
      switch (true) {
        case typeof t == "string" && e === w.FILE_STATUS_VALIDATING:
          n = reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement(semiSpinComponent.Spin, {
            size: "small",
            wrapperClassName: `${X}-file-card-icon-loading`
          }), t);
          break;
        case typeof t == "string":
          n = reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement(alertCircleIcon.AlertCircleIcon, {
            className: `${X}-file-card-icon-error`
          }), t);
          break;
        case reactElementUtils.isValidElement(t):
          n = t;
      }
      return n;
    }
    renderPicValidateMsg() {
      let {
        status: e,
        validateMessage: t
      } = this.props;
      let n = null;
      switch (true) {
        case t && e === w.FILE_STATUS_VALIDATING:
          n = reactCoreLibraryReexport.createElement(semiSpinComponent.Spin, {
            size: "small",
            wrapperClassName: `${X}-picture-file-card-icon-loading`
          });
          break;
        case t && (e === w.FILE_STATUS_VALID_FAIL || e === w.FILE_STATUS_UPLOAD_FAIL):
          n = reactCoreLibraryReexport.createElement("div", {
            className: `${X}-picture-file-card-icon-error`
          }, reactCoreLibraryReexport.createElement(K, null));
      }
      if (n) {
        return reactCoreLibraryReexport.createElement(reactTooltipComponent.TooltipComponent, {
          content: t,
          trigger: "hover",
          position: "bottom"
        }, n);
      } else {
        return null;
      }
    }
    renderPic(e) {
      let {
        fallbackPreview: t
      } = this.state;
      let {
        url: n,
        percent: i,
        status: r,
        disabled: o,
        style: s,
        onPreviewClick: c,
        showPicInfo: u,
        renderPicInfo: d,
        renderPicPreviewIcon: p,
        renderThumbnail: h,
        name: f,
        index: m,
        picHeight: g,
        picWidth: v
      } = this.props;
      let _ = r === w.FILE_STATUS_UPLOADING && i !== 100;
      let b = r === w.FILE_STATUS_UPLOAD_FAIL && this.props.showRetry;
      let y = r === w.FILE_STATUS_SUCCESS && this.props.showReplace;
      let x = r === w.FILE_STATUS_SUCCESS && !this.props.showReplace;
      let C = l({
        [`${X}-picture-file-card`]: true,
        [`${X}-picture-file-card-preview-fallback`]: t,
        [`${X}-picture-file-card-disabled`]: o,
        [`${X}-picture-file-card-show-pointer`]: c !== undefined,
        [`${X}-picture-file-card-error`]: r === w.FILE_STATUS_UPLOAD_FAIL,
        [`${X}-picture-file-card-uploading`]: _
      });
      let k = reactCoreLibraryReexport.createElement("div", {
        role: "button",
        tabIndex: 0,
        className: `${X}-picture-file-card-retry`,
        onClick: e => this.onRetry(e)
      }, reactCoreLibraryReexport.createElement($, {
        className: `${X}-picture-file-card-icon-retry`
      }));
      let S = reactCoreLibraryReexport.createElement(reactTooltipComponent.TooltipComponent, {
        trigger: "hover",
        position: "top",
        content: e.replace,
        showArrow: false,
        spacing: 4
      }, reactCoreLibraryReexport.createElement("div", {
        role: "button",
        tabIndex: 0,
        className: `${X}-picture-file-card-replace`,
        onClick: e => this.onReplace(e)
      }, reactCoreLibraryReexport.createElement(J, {
        className: `${X}-picture-file-card-icon-replace`
      })));
      let E = reactCoreLibraryReexport.createElement("div", {
        className: `${X}-picture-file-card-preview`
      }, typeof p == "function" ? p(this.props) : null);
      let T = reactCoreLibraryReexport.createElement("div", {
        role: "button",
        tabIndex: 0,
        className: `${X}-picture-file-card-close`,
        onClick: e => this.onRemove(e)
      }, reactCoreLibraryReexport.createElement(clearIcon.ClearIcon, {
        className: `${X}-picture-file-card-icon-close`
      }));
      let j = typeof d == "function" ? d(this.props) : reactCoreLibraryReexport.createElement("div", {
        className: `${X}-picture-file-card-pic-info`
      }, m + 1);
      let P = {};
      let N = s ? Object.assign({}, s) : {};
      if (g) {
        N.height = g;
        P.height = g;
      }
      if (v) {
        N.width = v;
        P.width = v;
      }
      let R = t ? reactCoreLibraryReexport.createElement(fileIconComponent.FileIcon, {
        size: "large"
      }) : reactCoreLibraryReexport.createElement("img", {
        src: n,
        alt: f,
        onError: e => this.foundation.handleImageError(e),
        style: P
      });
      let I = typeof h == "function" ? h(this.props) : R;
      return reactCoreLibraryReexport.createElement("div", {
        role: "listitem",
        className: C,
        style: N,
        onClick: c
      }, I, _ ? reactCoreLibraryReexport.createElement(semiProgressComponent.Progress, {
        percent: i,
        type: "circle",
        size: "small",
        orbitStroke: "#FFF",
        "aria-label": "uploading file progress"
      }) : null, b ? k : null, y && S, x && E, u && j, !o && T, this.renderPicValidateMsg());
    }
    renderFile(e) {
      let {
        name: t,
        size: n,
        percent: i,
        url: r,
        showRetry: o,
        showReplace: s,
        preview: c,
        previewFile: u,
        status: d,
        style: p,
        onPreviewClick: h,
        renderFileOperation: f
      } = this.props;
      let {
        fallbackPreview: m
      } = this.state;
      let g = l({
        [`${X}-file-card`]: true,
        [`${X}-file-card-fail`]: d === w.FILE_STATUS_VALID_FAIL || d === w.FILE_STATUS_UPLOAD_FAIL,
        [`${X}-file-card-show-pointer`]: h !== undefined
      });
      let v = l({
        [`${X}-file-card-preview`]: true,
        [`${X}-file-card-preview-placeholder`]: !c || u || m
      });
      let _ = `${X}-file-card-info`;
      let b = `${X}-file-card-close`;
      let y = `${X}-file-card-replace`;
      let x = i !== 100 && i !== undefined && d === w.FILE_STATUS_UPLOADING;
      let C = d === w.FILE_STATUS_UPLOAD_FAIL && o;
      let k = d === w.FILE_STATUS_SUCCESS && s;
      let S = this.transSize(n);
      let E = c && !m ? reactCoreLibraryReexport.createElement("img", {
        src: r,
        alt: t,
        onError: e => this.foundation.handleImageError(e)
      }) : reactCoreLibraryReexport.createElement(fileIconComponent.FileIcon, {
        size: "large"
      });
      if (u) {
        E = u(this.props);
      }
      let T = typeof f == "function" ? f(this.props) : reactCoreLibraryReexport.createElement(semiButtonWrapperComponent.SemiButtonWrapper, {
        onClick: e => this.onRemove(e),
        type: "tertiary",
        icon: reactCoreLibraryReexport.createElement(closeIconComponent.CloseIcon, null),
        theme: "borderless",
        size: "small",
        className: b
      });
      return reactCoreLibraryReexport.createElement("div", {
        role: "listitem",
        className: g,
        style: p,
        onClick: h
      }, reactCoreLibraryReexport.createElement("div", {
        className: v
      }, E), reactCoreLibraryReexport.createElement("div", {
        className: `${_}-main`
      }, reactCoreLibraryReexport.createElement("div", {
        className: `${_}-main-text`
      }, reactCoreLibraryReexport.createElement("span", {
        className: `${_}-name`
      }, t), reactCoreLibraryReexport.createElement("span", null, reactCoreLibraryReexport.createElement("span", {
        className: `${_}-size`
      }, S), k && reactCoreLibraryReexport.createElement(reactTooltipComponent.TooltipComponent, {
        trigger: "hover",
        position: "top",
        showArrow: false,
        content: e.replace
      }, reactCoreLibraryReexport.createElement(semiButtonWrapperComponent.SemiButtonWrapper, {
        onClick: e => this.onReplace(e),
        type: "tertiary",
        theme: "borderless",
        size: "small",
        icon: reactCoreLibraryReexport.createElement(q, null),
        className: y
      })))), x ? reactCoreLibraryReexport.createElement(semiProgressComponent.Progress, {
        percent: i,
        style: {
          width: "100%"
        },
        "aria-label": "uploading file progress"
      }) : null, reactCoreLibraryReexport.createElement("div", {
        className: `${_}-main-control`
      }, reactCoreLibraryReexport.createElement("span", {
        className: `${_}-validate-message`
      }, this.renderValidateMessage()), C ? reactCoreLibraryReexport.createElement("span", {
        role: "button",
        tabIndex: 0,
        className: `${_}-retry`,
        onClick: e => this.onRetry(e)
      }, e.retry) : null)), T);
    }
    onRemove(e) {
      e.stopPropagation();
      this.props.onRemove();
    }
    onReplace(e) {
      e.stopPropagation();
      this.props.onReplace();
    }
    onRetry(e) {
      e.stopPropagation();
      this.props.onRetry();
    }
    render() {
      let {
        listType: e
      } = this.props;
      if (e === w.FILE_LIST_PIC) {
        return reactCoreLibraryReexport.createElement(aiCreationLocaleWrapper.AiCreationLocale, {
          componentName: "Upload"
        }, e => this.renderPic(e));
      } else if (e === w.FILE_LIST_DEFAULT) {
        return reactCoreLibraryReexport.createElement(aiCreationLocaleWrapper.AiCreationLocale, {
          componentName: "Upload"
        }, e => this.renderFile(e));
      } else {
        return null;
      }
    }
  }
  Q.propTypes = {
    className: c.string,
    disabled: c.bool,
    listType: c.string,
    name: c.string,
    onPreviewClick: c.func,
    onRemove: c.func,
    onReplace: c.func,
    onRetry: c.func,
    percent: c.number,
    preview: c.bool,
    previewFile: c.func,
    picWidth: c.oneOfType([c.number, c.string]),
    picHeight: c.oneOfType([c.number, c.string]),
    showReplace: c.bool,
    showRetry: c.bool,
    size: c.oneOfType([c.number, c.string]),
    status: c.string,
    style: c.object,
    url: c.string,
    validateMessage: c.node,
    index: c.number
  };
  Q.defaultProps = {
    listType: w.FILE_LIST_DEFAULT,
    name: "",
    onRemove: () => undefined,
    onRetry: () => undefined,
    preview: false,
    size: ""
  };
  let Y = iconComponentFactory.IconFactory(function (e) {
    return reactCoreLibraryReexport.createElement("svg", Object.assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      focusable: false,
      "aria-hidden": true
    }, e), reactCoreLibraryReexport.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.8395 8.05827C17.1837 5.16226 14.5944 3 11.5 3C7.91015 3 5 5.91015 5 9.5C5 10.0204 5.06115 10.5264 5.17665 11.0114C2.84229 11.1772 1 13.1234 1 15.5C1 17.9853 3.01469 20 5.49995 20H17C20.3137 20 23 17.3137 23 14C23 10.9712 20.7558 8.46659 17.8395 8.05827ZM12.3201 8.26674C12.1347 8.11222 11.8653 8.11222 11.6799 8.26674L6.53047 12.5579C6.35084 12.7076 6.45669 13 6.69051 13H10V17.5C10 17.7761 10.2239 18 10.5 18H13.5C13.7761 18 14 17.7761 14 17.5V13H17.3095C17.5433 13 17.6492 12.7076 17.4695 12.5579L12.3201 8.26674Z",
      fill: "currentColor"
    }));
  }, "upload");
  function ee(e, t) {
    var n = {};
    for (var i in e) {
      if (Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0) {
        n[i] = e[i];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var r = 0;
      var i = Object.getOwnPropertySymbols(e);
      for (; r < i.length; r++) {
        if (t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) {
          n[i[r]] = e[i[r]];
        }
      }
    }
    return n;
  }
  let et = _.PREFIX;
  class en extends reactFoundationComponent.FoundationComponent {
    constructor(e) {
      super(e);
      this.inputRef = null;
      this.replaceInputRef = null;
      this.onClick = () => {
        let {
          inputRef: e,
          props: t
        } = this;
        let {
          onOpenFileDialog: n
        } = t;
        if (!this.props.disabled && e && e.current) {
          e.current.click();
          if (n) {
            n();
          }
        }
      };
      this.onChange = e => {
        let {
          files: t
        } = e.target;
        this.foundation.handleChange(t);
      };
      this.replace = e => {
        this.setState({
          replaceIdx: e
        }, () => {
          this.replaceInputRef.current.click();
        });
      };
      this.onReplaceChange = e => {
        let {
          files: t
        } = e.target;
        this.foundation.handleReplaceChange(t);
      };
      this.clear = () => {
        this.foundation.handleClear();
      };
      this.remove = e => {
        this.foundation.handleRemove(e);
      };
      this.insert = (e, t) => this.foundation.insertFileToList(e, t);
      this.upload = () => {
        this.foundation.manualUpload();
      };
      this.openFileDialog = () => {
        this.onClick();
      };
      this.renderFile = (e, t, n) => {
        let {
          name: r,
          status: o,
          validateMessage: l,
          _sizeInvalid: s,
          uid: c
        } = e;
        let {
          previewFile: u,
          listType: d,
          itemStyle: p,
          showPicInfo: h,
          renderPicInfo: f,
          renderPicPreviewIcon: m,
          renderFileOperation: g,
          renderFileItem: v,
          renderThumbnail: _,
          disabled: b,
          onPreviewClick: y,
          picWidth: x,
          picHeight: C
        } = this.props;
        let k = Object.assign(Object.assign(Object.assign({}, throttledPathFilterStringify.throttledPathStr(this.props, ["showRetry", "showReplace", ""])), e), {
          previewFile: u,
          listType: d,
          onRemove: () => this.remove(e),
          onRetry: () => {
            this.foundation.retry(e);
          },
          index: t,
          key: c || `${r}${t}`,
          style: p,
          disabled: b,
          showPicInfo: h,
          renderPicInfo: f,
          renderPicPreviewIcon: m,
          renderFileOperation: g,
          renderThumbnail: _,
          onReplace: () => {
            this.replace(t);
          },
          onPreviewClick: y !== undefined ? () => this.foundation.handlePreviewClick(e) : undefined,
          picWidth: x,
          picHeight: C
        });
        if (o === w.FILE_STATUS_UPLOAD_FAIL && !l) {
          k.validateMessage = n.fail;
        }
        if (s && !l) {
          k.validateMessage = n.illegalSize;
        }
        if (v === undefined) {
          return reactCoreLibraryReexport.createElement(Q, Object.assign({}, k));
        } else {
          return v(k);
        }
      };
      this.renderFileList = () => {
        let {
          listType: e
        } = this.props;
        if (e === w.FILE_LIST_PIC) {
          return this.renderFileListPic();
        } else if (e === w.FILE_LIST_DEFAULT) {
          return this.renderFileListDefault();
        } else {
          return null;
        }
      };
      this.renderFileListPic = () => {
        let {
          showUploadList: e,
          limit: t,
          disabled: n,
          children: i,
          draggable: r,
          hotSpotLocation: o,
          picHeight: s,
          picWidth: c
        } = this.props;
        let {
          fileList: u,
          dragAreaStatus: d
        } = this.state;
        let p = this.props.fileList || u;
        let h = !t || t > p.length;
        let f = `${et}-drag-area`;
        let m = l(`${et}-add`, {
          [`${et}-picture-add`]: true,
          [`${et}-picture-add-disabled`]: n
        });
        let g = l(`${et}-file-list`, {
          [`${et}-picture-file-list`]: true
        });
        let v = l({
          [`${f}-legal`]: d === w.DRAG_AREA_LEGAL,
          [`${f}-illegal`]: d === w.DRAG_AREA_ILLEGAL
        });
        let _ = `${et}-file-list-main`;
        let b = {
          role: "button",
          className: m,
          onClick: this.onClick,
          style: {
            height: s,
            width: c
          }
        };
        let y = {
          className: g
        };
        let x = {
          onDrop: this.onDrop,
          onDragOver: this.onDragOver,
          onDragLeave: this.onDragLeave,
          onDragEnter: this.onDragEnter
        };
        if (r) {
          Object.assign(b, x, {
            className: l(m, v)
          });
        }
        let C = reactCoreLibraryReexport.createElement("div", Object.assign({}, b, {
          "x-semi-prop": "children"
        }), i);
        if (e && p.length) {
          return reactCoreLibraryReexport.createElement(aiCreationLocaleWrapper.AiCreationLocale, {
            componentName: "Upload"
          }, e => reactCoreLibraryReexport.createElement("div", Object.assign({}, y), reactCoreLibraryReexport.createElement("div", {
            className: _,
            role: "list",
            "aria-label": "picture list"
          }, h && o === "start" ? C : null, p.map((t, n) => this.renderFile(t, n, e)), h && o === "end" ? C : null)));
        } else if (h) {
          return C;
        } else {
          return null;
        }
      };
      this.renderFileListDefault = () => {
        let {
          showUploadList: e,
          limit: t,
          disabled: n
        } = this.props;
        let {
          fileList: i
        } = this.state;
        let r = this.props.fileList || i;
        let o = l(`${et}-file-list`);
        let s = `${et}-file-list-title`;
        let c = `${et}-file-list-main`;
        let u = t !== 1 && r.length;
        let d = this.props.showClear && !n;
        let p = {
          className: o
        };
        if (e && r.length) {
          return reactCoreLibraryReexport.createElement(aiCreationLocaleWrapper.AiCreationLocale, {
            componentName: "Upload"
          }, e => reactCoreLibraryReexport.createElement("div", Object.assign({}, p), u ? reactCoreLibraryReexport.createElement("div", {
            className: s
          }, reactCoreLibraryReexport.createElement("span", {
            className: `${s}-choosen`
          }, e.selectedFiles), d ? reactCoreLibraryReexport.createElement("span", {
            role: "button",
            tabIndex: 0,
            onClick: this.clear,
            className: `${s}-clear`
          }, e.clear) : null) : null, reactCoreLibraryReexport.createElement("div", {
            className: c,
            role: "list",
            "aria-label": "file list"
          }, r.map((t, n) => this.renderFile(t, n, e)))));
        } else {
          return null;
        }
      };
      this.onDrop = e => {
        this.foundation.handleDrop(e);
      };
      this.onDragOver = e => {
        this.foundation.handleDragOver(e);
      };
      this.onDragLeave = e => {
        this.foundation.handleDragLeave(e);
      };
      this.onDragEnter = e => {
        this.foundation.handleDragEnter(e);
      };
      this.renderAddContent = () => {
        let {
          draggable: e,
          children: t,
          listType: n,
          disabled: i
        } = this.props;
        let r = l(`${et}-add`);
        if (n === w.FILE_LIST_PIC) {
          return null;
        } else if (e) {
          return this.renderDragArea();
        } else {
          return reactCoreLibraryReexport.createElement("div", {
            role: "button",
            tabIndex: 0,
            "aria-disabled": i,
            className: r,
            onClick: this.onClick
          }, t);
        }
      };
      this.renderDragArea = () => {
        let {
          dragAreaStatus: e
        } = this.state;
        let {
          children: t,
          dragIcon: n,
          dragMainText: i,
          dragSubText: r,
          disabled: o
        } = this.props;
        let s = `${et}-drag-area`;
        let c = l(s, {
          [`${s}-legal`]: e === w.DRAG_AREA_LEGAL,
          [`${s}-illegal`]: e === w.DRAG_AREA_ILLEGAL,
          [`${s}-custom`]: t
        });
        return reactCoreLibraryReexport.createElement(aiCreationLocaleWrapper.AiCreationLocale, {
          componentName: "Upload"
        }, l => reactCoreLibraryReexport.createElement("div", {
          role: "button",
          tabIndex: 0,
          "aria-disabled": o,
          className: c,
          onDrop: this.onDrop,
          onDragOver: this.onDragOver,
          onDragLeave: this.onDragLeave,
          onDragEnter: this.onDragEnter,
          onClick: this.onClick
        }, t || reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement("div", {
          className: `${s}-icon`,
          "x-semi-prop": "dragIcon"
        }, n || reactCoreLibraryReexport.createElement(Y, {
          size: "extra-large"
        })), reactCoreLibraryReexport.createElement("div", {
          className: `${s}-text`
        }, reactCoreLibraryReexport.createElement("div", {
          className: `${s}-main-text`,
          "x-semi-prop": "dragMainText"
        }, i || l.mainText), reactCoreLibraryReexport.createElement("div", {
          className: `${s}-sub-text`,
          "x-semi-prop": "dragSubText"
        }, r), reactCoreLibraryReexport.createElement("div", {
          className: `${s}-tips`
        }, e === w.DRAG_AREA_LEGAL && reactCoreLibraryReexport.createElement("span", {
          className: `${s}-tips-legal`
        }, l.legalTips), e === w.DRAG_AREA_ILLEGAL && reactCoreLibraryReexport.createElement("span", {
          className: `${s}-tips-illegal`
        }, l.illegalTips))))));
      };
      this.state = {
        fileList: e.defaultFileList || [],
        replaceIdx: -1,
        inputKey: Math.random(),
        replaceInputKey: Math.random(),
        dragAreaStatus: "default",
        localUrls: []
      };
      this.foundation = new O(this.adapter);
      this.inputRef = reactCoreLibraryReexport.createRef();
      this.replaceInputRef = reactCoreLibraryReexport.createRef();
    }
    static getDerivedStateFromProps(e) {
      let {
        fileList: t
      } = e;
      if ("fileList" in e) {
        return {
          fileList: t || []
        };
      } else {
        return null;
      }
    }
    get adapter() {
      return Object.assign(Object.assign({}, super.adapter), {
        notifyFileSelect: e => this.props.onFileChange(e),
        notifyError: (e, t, n, i) => this.props.onError(e, t, n, i),
        notifySuccess: (e, t, n) => this.props.onSuccess(e, t, n),
        notifyProgress: (e, t, n) => this.props.onProgress(e, t, n),
        notifyRemove: (e, t, n) => this.props.onRemove(e, t, n),
        notifySizeError: (e, t) => this.props.onSizeError(e, t),
        notifyExceed: e => this.props.onExceed(e),
        updateFileList: (e, t) => {
          if (typeof t == "function") {
            this.setState({
              fileList: e
            }, t);
          } else {
            this.setState({
              fileList: e
            });
          }
        },
        notifyBeforeUpload: e => {
          let {
            file: t,
            fileList: n
          } = e;
          return this.props.beforeUpload({
            file: t,
            fileList: n
          });
        },
        notifyAfterUpload: e => {
          let {
            response: t,
            file: n,
            fileList: i
          } = e;
          return this.props.afterUpload({
            response: t,
            file: n,
            fileList: i
          });
        },
        resetInput: () => {
          this.setState(e => ({
            inputKey: Math.random()
          }));
        },
        resetReplaceInput: () => {
          this.setState(e => ({
            replaceInputKey: Math.random()
          }));
        },
        isMac: () => navigator.platform.toUpperCase().indexOf("MAC") >= 0,
        registerPastingHandler: e => {
          document.body.addEventListener("keydown", e);
          this.pastingCb = e;
        },
        unRegisterPastingHandler: () => {
          if (this.pastingCb) {
            document.body.removeEventListener("keydown", this.pastingCb);
          }
        },
        notifyPastingError: e => this.props.onPastingError(e),
        updateDragAreaStatus: e => this.setState({
          dragAreaStatus: e
        }),
        notifyChange: e => {
          let {
            currentFile: t,
            fileList: n
          } = e;
          return this.props.onChange({
            currentFile: t,
            fileList: n
          });
        },
        updateLocalUrls: e => this.setState({
          localUrls: e
        }),
        notifyClear: () => this.props.onClear(),
        notifyPreviewClick: e => this.props.onPreviewClick(e),
        notifyDrop: (e, t, n) => this.props.onDrop(e, t, n),
        notifyAcceptInvalid: e => this.props.onAcceptInvalid(e),
        notifyBeforeRemove: (e, t) => this.props.beforeRemove(e, t),
        notifyBeforeClear: e => this.props.beforeClear(e)
      });
    }
    componentDidMount() {
      this.foundation.init();
    }
    componentWillUnmount() {
      this.foundation.destroy();
    }
    render() {
      let e = this.props;
      let {
        style: t,
        className: n,
        multiple: i,
        accept: r,
        disabled: o,
        children: s,
        capture: c,
        listType: u,
        prompt: d,
        promptPosition: p,
        draggable: h,
        validateMessage: f,
        validateStatus: m,
        directory: g
      } = e;
      let v = ee(e, ["style", "className", "multiple", "accept", "disabled", "children", "capture", "listType", "prompt", "promptPosition", "draggable", "validateMessage", "validateStatus", "directory"]);
      let _ = l(et, {
        [`${et}-picture`]: u === w.FILE_LIST_PIC,
        [`${et}-disabled`]: o,
        [`${et}-default`]: m === "default",
        [`${et}-error`]: m === "error",
        [`${et}-warning`]: m === "warning",
        [`${et}-success`]: m === "success"
      }, n);
      let b = l(`${et}-hidden-input`);
      let y = l(`${et}-hidden-input-replace`);
      let x = l(`${et}-prompt`);
      let C = l(`${et}-validate-message`);
      return reactCoreLibraryReexport.createElement("div", Object.assign({
        className: _,
        style: t,
        "x-prompt-pos": p
      }, this.getDataAttr(v)), reactCoreLibraryReexport.createElement("input", Object.assign({
        key: this.state.inputKey,
        capture: c,
        multiple: i,
        accept: r,
        onChange: this.onChange,
        type: "file",
        autoComplete: "off",
        tabIndex: -1,
        className: b,
        ref: this.inputRef
      }, g ? {
        directory: "directory",
        webkitdirectory: "webkitdirectory"
      } : {})), reactCoreLibraryReexport.createElement("input", {
        key: this.state.replaceInputKey,
        multiple: false,
        accept: r,
        onChange: this.onReplaceChange,
        type: "file",
        autoComplete: "off",
        tabIndex: -1,
        className: y,
        ref: this.replaceInputRef
      }), this.renderAddContent(), d ? reactCoreLibraryReexport.createElement("div", {
        className: x,
        "x-semi-prop": "prompt"
      }, d) : null, f ? reactCoreLibraryReexport.createElement("div", {
        className: C,
        "x-semi-prop": "validateMessage"
      }, f) : null, this.renderFileList());
    }
  }
  en.propTypes = {
    accept: c.string,
    action: c.string.isRequired,
    addOnPasting: c.bool,
    afterUpload: c.func,
    beforeClear: c.func,
    beforeRemove: c.func,
    beforeUpload: c.func,
    children: c.node,
    className: c.string,
    customRequest: c.func,
    data: c.oneOfType([c.object, c.func]),
    defaultFileList: c.array,
    directory: c.bool,
    disabled: c.bool,
    dragIcon: c.node,
    dragMainText: c.node,
    dragSubText: c.node,
    draggable: c.bool,
    fileList: c.array,
    fileName: c.string,
    headers: c.oneOfType([c.object, c.func]),
    hotSpotLocation: c.oneOf(["start", "end"]),
    itemStyle: c.object,
    limit: c.number,
    listType: c.oneOf(w.LIST_TYPE),
    maxSize: c.number,
    minSize: c.number,
    multiple: c.bool,
    name: c.string,
    onAcceptInvalid: c.func,
    onChange: c.func,
    onClear: c.func,
    onDrop: c.func,
    onError: c.func,
    onExceed: c.func,
    onFileChange: c.func,
    onOpenFileDialog: c.func,
    onPreviewClick: c.func,
    onProgress: c.func,
    onRemove: c.func,
    onRetry: c.func,
    onSizeError: c.func,
    onSuccess: c.func,
    onPastingError: c.func,
    previewFile: c.func,
    prompt: c.node,
    promptPosition: c.oneOf(w.PROMPT_POSITION),
    picWidth: c.oneOfType([c.number, c.string]),
    picHeight: c.oneOfType([c.number, c.string]),
    renderFileItem: c.func,
    renderPicPreviewIcon: c.func,
    renderFileOperation: c.func,
    renderPicInfo: c.func,
    renderThumbnail: c.func,
    showClear: c.bool,
    showPicInfo: c.bool,
    showReplace: c.bool,
    showRetry: c.bool,
    showUploadList: c.bool,
    style: c.object,
    timeout: c.number,
    transformFile: c.func,
    uploadTrigger: c.oneOf(w.UPLOAD_TRIGGER),
    validateMessage: c.node,
    validateStatus: c.oneOf(w.VALIDATE_STATUS),
    withCredentials: c.bool
  };
  en.defaultProps = {
    defaultFileList: [],
    disabled: false,
    listType: "list",
    hotSpotLocation: "end",
    multiple: false,
    onAcceptInvalid: emptyExportFunction.emptyFunction,
    onChange: emptyExportFunction.emptyFunction,
    beforeRemove: () => true,
    beforeClear: () => true,
    onClear: emptyExportFunction.emptyFunction,
    onDrop: emptyExportFunction.emptyFunction,
    onError: emptyExportFunction.emptyFunction,
    onExceed: emptyExportFunction.emptyFunction,
    onFileChange: emptyExportFunction.emptyFunction,
    onOpenFileDialog: emptyExportFunction.emptyFunction,
    onProgress: emptyExportFunction.emptyFunction,
    onRemove: emptyExportFunction.emptyFunction,
    onRetry: emptyExportFunction.emptyFunction,
    onSizeError: emptyExportFunction.emptyFunction,
    onSuccess: emptyExportFunction.emptyFunction,
    onPastingError: emptyExportFunction.emptyFunction,
    promptPosition: "right",
    showClear: true,
    showPicInfo: false,
    showReplace: false,
    showRetry: true,
    showUploadList: true,
    uploadTrigger: "auto",
    withCredentials: false
  };
  en.FileCard = Q;
  var ei = en;
  require.d(exports, {
    UploadComponent: function () {
      return ei;
    }
  });
}