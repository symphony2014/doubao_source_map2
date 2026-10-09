// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'FileCircleIcon'
// - Renamed export '_' to 'assignPolyfill'
// - Renamed export 'a' to 'FileStatusCircleIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-drive-file-circle-icon.402dd018.js
         * chunkId: 15335
         * moduleId: 28763
         */
module.exports = function (module, exports, require) {
  var objectOmitKeys = require("object-omit-keys") /*id: 875179*/;
  var objectAssignPolyfill_4 = require("object-assign-polyfill_4") /*id: 825959*/;
  var c = objectAssignPolyfill_4;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var fileTypeDefinitions = require("file-type-definitions") /*id: 36132*/;
  var fileStatusCircleIcon = require("file-status-circle-icon") /*id: 225312*/;
  function f() {
    return (f = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) {
          if (Object.prototype.hasOwnProperty.call(r, n)) {
            e[n] = r[n];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  var s = function () {
    function e(e) {
      var t = this;
      this._insertTag = function (e) {
        var r;
        r = t.tags.length === 0 ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling;
        t.container.insertBefore(e, r);
        t.tags.push(e);
      };
      this.isSpeedy = e.speedy === undefined || e.speedy;
      this.tags = [];
      this.ctr = 0;
      this.nonce = e.nonce;
      this.key = e.key;
      this.container = e.container;
      this.prepend = e.prepend;
      this.insertionPoint = e.insertionPoint;
      this.before = null;
    }
    var t = e.prototype;
    t.hydrate = function (e) {
      e.forEach(this._insertTag);
    };
    t.insert = function (e) {
      if (this.ctr % (this.isSpeedy ? 65000 : 1) == 0) {
        var t;
        this._insertTag(((t = document.createElement("style")).setAttribute("data-emotion", this.key), this.nonce !== undefined && t.setAttribute("nonce", this.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t));
      }
      var r = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var n = function (e) {
          if (e.sheet) {
            return e.sheet;
          }
          for (var t = 0; t < document.styleSheets.length; t++) {
            if (document.styleSheets[t].ownerNode === e) {
              return document.styleSheets[t];
            }
          }
        }(r);
        try {
          n.insertRule(e, n.cssRules.length);
        } catch (e) {}
      } else {
        r.appendChild(document.createTextNode(e));
      }
      this.ctr++;
    };
    t.flush = function () {
      this.tags.forEach(function (e) {
        return e.parentNode && e.parentNode.removeChild(e);
      });
      this.tags = [];
      this.ctr = 0;
    };
    return e;
  }();
  var u = {};
  var h = ["icon", "className", "svgProps"];
  var m = "universe-icon";
  var v = `
.${m} {
  display: inline-block;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.${m} > * {
  line-height: 1;
}

.${m} svg {
  display: inline-block;
  vertical-align: -0.14em;
}

.${m}::before {
  display: none;
}`;
  var p = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var r;
    var n;
    var a = e.icon;
    var c = e.className;
    var o = e.svgProps;
    var l = function (e, t) {
      if (e == null) {
        return {};
      }
      var r;
      var n;
      var a = function (e, t) {
        if (e == null) {
          return {};
        }
        var r;
        var n;
        var a = {};
        var c = Object.keys(e);
        for (n = 0; n < c.length; n++) {
          r = c[n];
          if (!(t.indexOf(r) >= 0)) {
            a[r] = e[r];
          }
        }
        return a;
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(e);
        for (n = 0; n < c.length; n++) {
          r = c[n];
          if (!(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r)) {
            a[r] = e[r];
          }
        }
      }
      return a;
    }(e, h);
    if (typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined) {
      r = m;
      n = v;
      if (!u[r]) {
        u[r] = true;
        new s({
          speedy: false,
          key: r,
          container: document.head
        }).insert(n);
      }
    }
    return reactCoreLibraryReexport.createElement("span", f({
      className: function () {
        var e;
        var t;
        var r = 0;
        var n = "";
        while (r < arguments.length) {
          if ((e = arguments[r++]) && (t = function e(t) {
            var r;
            var n;
            var a = "";
            if (typeof t == "string" || typeof t == "number") {
              a += t;
            } else if (typeof t == "object") {
              if (Array.isArray(t)) {
                for (r = 0; r < t.length; r++) {
                  if (t[r] && (n = e(t[r]))) {
                    if (a) {
                      a += " ";
                    }
                    a += n;
                  }
                }
              } else {
                for (r in t) {
                  if (t[r]) {
                    if (a) {
                      a += " ";
                    }
                    a += r;
                  }
                }
              }
            }
            return a;
          }(e))) {
            if (n) {
              n += " ";
            }
            n += t;
          }
        }
        return n;
      }(m, c),
      ref: t
    }, l), reactCoreLibraryReexport.createElement(a, o));
  });
  function g(e) {
    return reactCoreLibraryReexport.createElement("svg", f({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, e), reactCoreLibraryReexport.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12 0-2.643-.855-5.087-2.303-7.07L19.3 7.327a8.667 8.667 0 0 1-9.038 13.165v-4.127L4.93 21.697h.002A11.946 11.946 0 0 0 12 24Zm0-24c2.54 0 4.895.79 6.835 2.136l-.003.002h.004l-5.333 5.334V3.463a8.667 8.667 0 0 0-8.957 12.961l-2.41 2.411A11.945 11.945 0 0 1 0 12C0 5.373 5.373 0 12 0Z",
      fill: "currentColor"
    }));
  }
  var d = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement(p, f({
      icon: g
    }, e, {
      ref: t,
      svgProps: {
        "data-icon": "DriveloadOutlined"
      }
    }));
  });
  function w(e) {
    return reactCoreLibraryReexport.createElement("svg", f({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, e), reactCoreLibraryReexport.createElement("path", {
      d: "M11.996 22.98c-6.067 0-10.983-4.918-10.983-10.984S5.93 1.013 11.996 1.013c6.066 0 10.983 4.917 10.983 10.983 0 6.066-4.917 10.984-10.983 10.984Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M17.537 10.746a1.38 1.38 0 0 0-.005-1.95 1.378 1.378 0 0 0-1.95-.005l-4.89 4.89-2.285-2.285a1.375 1.375 0 0 0-1.942.012 1.373 1.373 0 0 0-.013 1.942c1.178 1.175 2.356 2.348 3.53 3.528.392.394 1.03.394 1.422 0 2.037-2.051 4.087-4.09 6.133-6.132Z",
      fill: "#fff"
    }));
  }
  var E = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement(p, f({
      icon: w
    }, e, {
      ref: t,
      svgProps: {
        "data-icon": "SucceedFilled"
      }
    }));
  });
  function M(e) {
    return reactCoreLibraryReexport.createElement("svg", f({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, e), reactCoreLibraryReexport.createElement("path", {
      d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Z",
      fill: "currentColor"
    }), reactCoreLibraryReexport.createElement("path", {
      d: "M11 8a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V8Zm0 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z",
      fill: "#fff"
    }));
  }
  var S = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement(p, f({
      icon: M
    }, e, {
      ref: t,
      svgProps: {
        "data-icon": "WarningFilled"
      }
    }));
  });
  var x = ["icon", "width", "badge", "badgePlacement", "syncStatus", "style"];
  function Z(e) {
    var r = e.icon;
    var a = e.width;
    var f = e.badge;
    var s = e.badgePlacement;
    var u = e.syncStatus;
    var h = e.style;
    var m = h === undefined ? {} : h;
    var v = objectOmitKeys.omitKeys(e, x);
    var p = reactCoreLibraryReexport.useMemo(function () {
      var e = null;
      if (f) {
        e = f;
      } else if (u) {
        var t = u.toLowerCase();
        var r = {
          color: fileTypeDefinitions.statusColors[t]
        };
        switch (t) {
          case fileTypeDefinitions.statusConstants.FAIL:
            e = reactCoreLibraryReexport.createElement(S, {
              style: r
            });
            break;
          case fileTypeDefinitions.statusConstants.PROGRESS:
          case fileTypeDefinitions.statusConstants.STOP:
            e = reactCoreLibraryReexport.createElement(d, {
              style: r
            });
            break;
          case fileTypeDefinitions.statusConstants.SUCCESS:
            e = reactCoreLibraryReexport.createElement(E, {
              style: r
            });
        }
      }
      if (e) {
        return reactCoreLibraryReexport.createElement(fileStatusCircleIcon.StatusIconSvg, null, e);
      } else {
        return null;
      }
    }, [f, u]);
    var g = (m.width || a) ?? "1em";
    return reactCoreLibraryReexport.createElement(fileStatusCircleIcon.FileCircleIcon, c({
      badgePlacement: s === undefined ? "bottomRight" : s,
      width: g,
      style: m
    }, v), r, p);
  }
  require.d(exports, {
    FileCircleIcon: function () {
      return p;
    },
    assignPolyfill: function () {
      return f;
    },
    FileStatusCircleIcon: function () {
      return Z;
    }
  });
}