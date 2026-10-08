// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'JP' to 'getDefaultConfig'
// - Renamed export 'nI' to 'getI18nInstance'
// - Renamed export 'Db' to 'i18nPluginInit'
// - Renamed export 'zv' to 'NamespaceManager'
// - Renamed export 'OO' to 'I18nContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 913585
         */
module.exports = function (module, exports, require) {
  var r;
  var classCallCheckUtil = require("class-call-check-util") /*id: 822439*/;
  var classPropertyUtil = require("class-property-util") /*id: 801584*/;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var u = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
  var c = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": "\"",
    "&#34;": "\"",
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/"
  };
  function l(e) {
    return c[e];
  }
  function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      if (t) {
        r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      n.push.apply(n, r);
    }
    return n;
  }
  function h(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] ?? {};
      if (t % 2) {
        f(Object(n), true).forEach(function (t) {
          objectPropertySetter.setObjectProperty(e, t, n[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
      } else {
        f(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
    }
    return e;
  }
  var d = {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: true,
    transWrapTextNodes: "",
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    useSuspense: true,
    unescape: function (e) {
      return e.replace(u, l);
    }
  };
  var p = reactCoreLibraryReexport.createContext();
  function g() {
    return d;
  }
  var v = function () {
    function e() {
      classCallCheckUtil.classCallCheck(this, e);
      this.usedNamespaces = {};
    }
    classPropertyUtil.defineClassProps(e, [{
      key: "addUsedNamespaces",
      value: function (e) {
        var t = this;
        e.forEach(function (e) {
          t.usedNamespaces[e] ||= true;
        });
      }
    }, {
      key: "getUsedNamespaces",
      value: function () {
        return Object.keys(this.usedNamespaces);
      }
    }]);
    return e;
  }();
  function m() {
    return r;
  }
  var y = {
    type: "3rdParty",
    init: function (e) {
      (function (e = {}) {
        d = h(h({}, d), e);
      })(e.options.react);
      r = e;
    }
  };
  require.d(exports, {
    getDefaultConfig: function () {
      return g;
    },
    getI18nInstance: function () {
      return m;
    },
    i18nPluginInit: function () {
      return y;
    },
    NamespaceManager: function () {
      return v;
    },
    I18nContext: function () {
      return p;
    }
  });
}