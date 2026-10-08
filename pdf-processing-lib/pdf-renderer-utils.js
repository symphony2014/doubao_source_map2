// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$K' to 'isDefined'
// - Renamed export 'DE' to 'isRenderCancelled'
// - Renamed export 'LJ' to 'cancelRequest'
// - Renamed export 'Lj' to 'isBlob'
// - Renamed export 'T8' to 'isNotNullish'
// - Renamed export 'XZ' to 'scalePageDimensions'
// - Renamed export 'eP' to 'isArrayBuffer'
// - Renamed export 'eR' to 'readFileAsBuffer'
// - Renamed export 'gJ' to 'isDataUri'
// - Renamed export 'jU' to 'isBrowser'
// - Renamed export 'tN' to 'checkPdfProtocol'
// - Renamed export 'us' to 'decodeDataUri'
// - Renamed export 'x_' to 'getDevicePixelRatio'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 665248
         */
module.exports = function (module, exports, require) {
  var invariantCheck = require("invariant-check") /*id: 415427*/;
  var emptyConstructorStub = require("empty-constructor-stub") /*id: 706041*/;
  let o = typeof document != "undefined";
  let s = o && window.location.protocol === "file:";
  function a(t) {
    return t !== undefined;
  }
  function l(t) {
    return a(t) && t !== null;
  }
  function h(t) {
    return typeof t == "string";
  }
  function c(t) {
    return t instanceof ArrayBuffer;
  }
  function u(t) {
    invariantCheck.invariant(o, "isBlob can only be used in a browser environment");
    return t instanceof Blob;
  }
  function d(t) {
    return h(t) && /^data:/.test(t);
  }
  function f(t) {
    invariantCheck.invariant(d(t), "Invalid data URI.");
    let [e = "", r = ""] = t.split(",");
    if (e.split(";").indexOf("base64") !== -1) {
      return atob(r);
    } else {
      return unescape(r);
    }
  }
  function p() {
    return o && window.devicePixelRatio || 1;
  }
  let g = "On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.";
  function m() {
    emptyConstructorStub(!s, `Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. ${g}`);
  }
  function v(t) {
    if (t && t.cancel) {
      t.cancel();
    }
  }
  function y(t, e) {
    Object.defineProperty(t, "width", {
      get() {
        return this.view[2] * e;
      },
      configurable: true
    });
    Object.defineProperty(t, "height", {
      get() {
        return this.view[3] * e;
      },
      configurable: true
    });
    Object.defineProperty(t, "originalWidth", {
      get() {
        return this.view[2];
      },
      configurable: true
    });
    Object.defineProperty(t, "originalHeight", {
      get() {
        return this.view[3];
      },
      configurable: true
    });
    return t;
  }
  function b(t) {
    return t.name === "RenderingCancelledException";
  }
  function A(t) {
    return new Promise((e, r) => {
      let i = new FileReader();
      i.onload = () => {
        if (!i.result) {
          return r(Error("Error while reading a file."));
        }
        e(i.result);
      };
      i.onerror = t => {
        if (!t.target) {
          return r(Error("Error while reading a file."));
        }
        let {
          error: e
        } = t.target;
        if (!e) {
          return r(Error("Error while reading a file."));
        }
        switch (e.code) {
          case e.NOT_FOUND_ERR:
            return r(Error("Error while reading a file: File not found."));
          case e.SECURITY_ERR:
            return r(Error("Error while reading a file: Security error."));
          case e.ABORT_ERR:
            return r(Error("Error while reading a file: Aborted."));
          default:
            return r(Error("Error while reading a file."));
        }
      };
      i.readAsArrayBuffer(t);
    });
  }
  require.d(exports, {
    isDefined: function () {
      return a;
    },
    isRenderCancelled: function () {
      return b;
    },
    cancelRequest: function () {
      return v;
    },
    isBlob: function () {
      return u;
    },
    isNotNullish: function () {
      return l;
    },
    scalePageDimensions: function () {
      return y;
    },
    isArrayBuffer: function () {
      return c;
    },
    readFileAsBuffer: function () {
      return A;
    },
    isDataUri: function () {
      return d;
    },
    isBrowser: function () {
      return o;
    },
    checkPdfProtocol: function () {
      return m;
    },
    decodeDataUri: function () {
      return f;
    },
    getDevicePixelRatio: function () {
      return p;
    }
  });
}