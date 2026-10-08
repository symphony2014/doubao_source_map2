// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'getIconByStatus'
// - Renamed export 'T' to 'FileStatusConstants'
// - Renamed export 'a' to 'DriveCircleIcon'
// - Renamed export 'g' to 'getIconColor'
// - Renamed export 'm' to 'mapStatusToValue'
// - Renamed export 'u' to 'isValidStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-drive-file-circle-icon.402dd018.js
         * chunkId: 15335
         * moduleId: 274623
         */
module.exports = function (module, exports, require) {
  var fileStatusCircleIconModule = require("file-status-circle-icon-module") /*id: 28763*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var getArrayForeachStrategy = require("get-array-foreach-strategy") /*id: 699923*/;
  var i = getArrayForeachStrategy;
  var o = reactCoreLibraryReexport.createContext("light");
  function l(e) {
    var t = e.children;
    var r = e.mode;
    return reactCoreLibraryReexport.createElement(o.Provider, {
      value: r === undefined ? "light" : r
    }, t);
  }
  function f() {
    return reactCoreLibraryReexport.useContext(o);
  }
  var s = {
    light: {
      c1: "#FFC60A",
      c3: "#FFA53D"
    },
    dark: {
      c1: "#FFCB1F",
      c3: "#E58312"
    }
  };
  function u(e) {
    var t = s[f()] || s.light;
    return reactCoreLibraryReexport.createElement("svg", fileStatusCircleIconModule.assignPolyfill({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, e), reactCoreLibraryReexport.createElement("path", {
      d: "M1 6h22v13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6Z",
      fill: t.c1
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M1 4a2 2 0 0 1 2-2h5.275a4 4 0 0 1 1.404.255l2.642.99a4 4 0 0 0 1.404.255H21a2 2 0 0 1 2 2V6H1V4Z",
      fill: t.c3
    }));
  }
  var h = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement(fileStatusCircleIconModule.FileCircleIcon, fileStatusCircleIconModule.assignPolyfill({
      icon: u
    }, e, {
      ref: t
    }));
  });
  var m = {
    light: {
      c1: "#8F959E"
    },
    dark: {
      c1: "#939393"
    }
  };
  function v(e) {
    var t = m[f()] || m.light;
    return reactCoreLibraryReexport.createElement("svg", fileStatusCircleIconModule.assignPolyfill({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, e), reactCoreLibraryReexport.createElement("circle", {
      cx: 12,
      cy: 12,
      r: 12,
      fill: t.c1
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M14.67 7.175c-.637-.603-1.473-.902-2.512-.902-1.168 0-2.082.374-2.745 1.136-.562.656-.864 1.283-.908 2.273l-.003.158a.249.249 0 0 0 .25.251h.772a.251.251 0 0 0 .251-.248c.001-.066.002-.126.004-.154.034-.684.212-1.041.53-1.44.402-.535.992-.799 1.801-.799.722 0 1.264.184 1.638.558.356.371.542.877.542 1.51 0 .433-.157.845-.476 1.255-.102.127-.248.278-.719.749-.744.65-1.203 1.18-1.446 1.7-.2.399-.301.852-.301 1.34v.37c0 .138.112.25.25.25h.788a.25.25 0 0 0 .25-.25v-.37c0-.413.102-.784.313-1.145.158-.268.36-.479.713-.788.709-.64 1.102-1.022 1.278-1.246a3.078 3.078 0 0 0 .638-1.896c0-.965-.303-1.74-.909-2.312Zm-3.056 9.28a.25.25 0 0 0-.25.25v.773c0 .138.112.25.25.25h.772a.25.25 0 0 0 .25-.25v-.773a.25.25 0 0 0-.25-.25h-.772Z",
      fill: "#fff"
    }));
  }
  var p = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement(fileStatusCircleIconModule.FileCircleIcon, fileStatusCircleIconModule.assignPolyfill({
      icon: v
    }, e, {
      ref: t
    }));
  });
  var g = {
    light: {
      c1: "#50CEFB",
      c3: "#049FD7"
    },
    dark: {
      c1: "#5FD4FE",
      c3: "#2EA5D1"
    }
  };
  function d(e) {
    var t = g[f()] || g.light;
    return reactCoreLibraryReexport.createElement("svg", fileStatusCircleIconModule.assignPolyfill({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, e), reactCoreLibraryReexport.createElement("path", {
      d: "M1 6h22v13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6Z",
      fill: t.c1
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M8.94 10.478c.103-.595.562-.978 1.126-.978.564 0 1.009.447 1.123.978a3.76 3.76 0 0 1 0 1.53c-.047.239-.255.674-.255.674s-.219.5-.129.842c.067.253.208.332.533.514.114.063.25.14.414.24.367.226.65.447.841.62.143-.09.31-.185.503-.275.686-.322.725-.524.75-.654l.002-.008c.026-.13 0-.353-.127-.615a2.97 2.97 0 0 1-.191-.54s-.115-.748-.028-1.224c.086-.475.475-.782.952-.782s.854.358.95.782c.054.235.118.666 0 1.224-.04.191-.215.54-.215.54s-.186.4-.11.673c.057.203.176.266.452.411.096.051.211.112.35.193.534.31.857.61.94.724l.023.03c.08.106.173.23.153.394-.021.18-.259.229-.259.229h-9.44c-.1 0-.231-.01-.287-.286-.056-.276.18-.53.18-.53s.442-.496 1.27-.906c.81-.402.857-.655.887-.817l.002-.01c.03-.162-.001-.44-.15-.769-.15-.328-.226-.674-.226-.674s-.136-.936-.034-1.53Z",
      fill: "#fff"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M1 4a2 2 0 0 1 2-2h5.275a4 4 0 0 1 1.404.255l2.642.99a4 4 0 0 0 1.404.255H21a2 2 0 0 1 2 2V6H1V4Z",
      fill: t.c3
    }));
  }
  var w = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement(fileStatusCircleIconModule.FileCircleIcon, fileStatusCircleIconModule.assignPolyfill({
      icon: d
    }, e, {
      ref: t
    }));
  });
  var E = {
    light: {
      c0: {
        opacity: 0.9
      },
      c1: "#8F959E",
      c3: 0.6,
      c4: "#646A73"
    },
    dark: {
      c0: {},
      c1: "#939393",
      c3: 0.7,
      c4: "#5F5F5F"
    }
  };
  function M(e) {
    var t = E[f()] || E.light;
    return reactCoreLibraryReexport.createElement("svg", fileStatusCircleIconModule.assignPolyfill({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, e), reactCoreLibraryReexport.createElement("path", {
      d: "M3 3a2 2 0 0 1 2-2h9.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V21a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3Z",
      fill: t.c1
    }), reactCoreLibraryReexport.createElement("path", {
      opacity: t.c3,
      d: "M15 1.483a.2.2 0 0 1 .341-.142L20.66 6.66a.2.2 0 0 1-.142.341H17a2 2 0 0 1-2-2V1.483Z",
      fill: t.c4
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M14.288 9.864c-.546-.517-1.262-.773-2.153-.773-1 0-1.784.32-2.353.974-.48.562-.74 1.1-.777 1.948l-.003.1a.248.248 0 0 0 .25.25h.59a.252.252 0 0 0 .252-.248l.002-.096c.03-.586.182-.893.455-1.234.344-.46.85-.685 1.543-.685.62 0 1.084.158 1.404.478.305.318.465.751.465 1.295 0 .37-.135.724-.408 1.075-.087.109-.213.238-.616.642-.638.557-1.032 1.011-1.24 1.457a2.55 2.55 0 0 0-.258 1.148v.282c0 .138.112.25.25.25h.605a.25.25 0 0 0 .25-.25v-.282c0-.354.087-.671.267-.98.136-.23.31-.411.612-.676.607-.55.944-.877 1.095-1.069a2.638 2.638 0 0 0 .547-1.625c0-.827-.26-1.49-.779-1.98Zm-2.583 7.954a.25.25 0 0 0-.25.25v.591c0 .138.112.25.25.25h.59a.25.25 0 0 0 .25-.25v-.59a.25.25 0 0 0-.25-.25h-.59Z",
      fill: "#fff"
    }));
  }
  var S = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement(fileStatusCircleIconModule.FileCircleIcon, fileStatusCircleIconModule.assignPolyfill({
      icon: M
    }, e, {
      ref: t
    }));
  });
  var x = {
    light: {
      c0: {
        opacity: 0.9
      },
      c1: "#8F959E",
      c3: 0.6,
      c4: "#646A73"
    },
    dark: {
      c0: {},
      c1: "#939393",
      c3: 0.7,
      c4: "#5F5F5F"
    }
  };
  function Z(e) {
    var t = x[f()] || x.light;
    return reactCoreLibraryReexport.createElement("svg", fileStatusCircleIconModule.assignPolyfill({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, e), reactCoreLibraryReexport.createElement("path", {
      d: "M3 3a2 2 0 0 1 2-2h9.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V21a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3Z",
      fill: t.c1
    }), reactCoreLibraryReexport.createElement("path", {
      opacity: t.c3,
      d: "M15 1.483a.2.2 0 0 1 .341-.142L20.66 6.66a.2.2 0 0 1-.142.341H17a2 2 0 0 1-2-2V1.483Z",
      fill: t.c4
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M14.288 9.864c-.546-.517-1.262-.773-2.153-.773-1 0-1.784.32-2.353.974-.48.562-.74 1.1-.777 1.948l-.003.1a.248.248 0 0 0 .25.25h.59a.252.252 0 0 0 .252-.248l.002-.096c.03-.586.182-.893.455-1.234.344-.46.85-.685 1.543-.685.62 0 1.084.158 1.404.478.305.318.465.751.465 1.295 0 .37-.135.724-.408 1.075-.087.109-.213.238-.616.642-.638.557-1.032 1.011-1.24 1.457a2.55 2.55 0 0 0-.258 1.148v.282c0 .138.112.25.25.25h.605a.25.25 0 0 0 .25-.25v-.282c0-.354.087-.671.267-.98.136-.23.31-.411.612-.676.607-.55.944-.877 1.095-1.069a2.638 2.638 0 0 0 .547-1.625c0-.827-.26-1.49-.779-1.98Zm-2.583 7.954a.25.25 0 0 0-.25.25v.591c0 .138.112.25.25.25h.59a.25.25 0 0 0 .25-.25v-.59a.25.25 0 0 0-.25-.25h-.59Z",
      fill: "#fff"
    }));
  }
  var A = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement(fileStatusCircleIconModule.FileCircleIcon, fileStatusCircleIconModule.assignPolyfill({
      icon: Z
    }, e, {
      ref: t
    }));
  });
  function P(e, t) {
    var r = {};
    i(e).call(e, function (e) {
      return r[e] = t;
    });
    return r;
  }
  function F(e) {
    if (!e) {
      return "";
    }
    var t = String(e).split(".").pop();
    if (t && t !== e) {
      return t.toLowerCase();
    } else {
      return "";
    }
  }
  function O(e, t, r, n, a = false, c, i, o = false) {
    if (o) {
      if (!e && !t) {
        return A;
      }
      if (e) {
        var l = c[e];
        if (l) {
          return l;
        }
      }
      if (t) {
        var f = i[F(t.toLowerCase())];
        if (f) {
          return f;
        }
      }
      return A;
    }
    if (!e && !t) {
      if (a) {
        return p;
      } else {
        return S;
      }
    }
    if (e) {
      var s = r[e];
      if (s) {
        return s;
      }
    }
    if (t) {
      var u = n[F(t.toLowerCase())];
      if (u) {
        return u;
      }
    }
    if (a) {
      return p;
    } else {
      return S;
    }
  }
  require.d(exports, {
    getIconByStatus: function () {
      return h;
    },
    FileStatusConstants: function () {
      return l;
    },
    DriveCircleIcon: function () {
      return w;
    },
    getIconColor: function () {
      return O;
    },
    mapStatusToValue: function () {
      return P;
    },
    isValidStatus: function () {
      return f;
    }
  });
}