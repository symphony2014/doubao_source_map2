// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'StatusIconSvg'
// - Renamed export 'I' to 'FileCircleIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-drive-file-circle-icon.402dd018.js
         * chunkId: 15335
         * moduleId: 225312
         */
module.exports = function (module, exports, require) {
  var n;
  var a;
  var c;
  var i;
  var arraySliceMethodResolver_4 = require("array-slice-method-resolver_4") /*id: 817117*/;
  var objectFreezePolyfill_2 = require("object-freeze-polyfill_2") /*id: 41653*/;
  var objectDefinePropertiesPolyfill_1 = require("object-define-properties-polyfill_1") /*id: 517443*/;
  function s(e, t) {
    t ||= arraySliceMethodResolver_4(e).call(e, 0);
    return objectFreezePolyfill_2(objectDefinePropertiesPolyfill_1(e, {
      raw: {
        value: objectFreezePolyfill_2(t)
      }
    }));
  }
  var arrayConcatMethodResolver = require("array-concat-method-resolver") /*id: 362642*/;
  var h = arrayConcatMethodResolver;
  var styledComponentsCore = require("styled-components-core") /*id: 842965*/;
  var fileTypeDefinitions = require("file-type-definitions") /*id: 36132*/;
  var p = styledComponentsCore.default.div(n ||= s(["\n  position: absolute;\n  svg {\n    color: ", ";\n  }\n"]), function (e) {
    var t = e.status;
    if (t) {
      return fileTypeDefinitions.statusColors[t];
    } else {
      return "unset";
    }
  });
  var g = styledComponentsCore.default.div(a ||= s(["\n  ", "\n\n  position: relative;\n  display: inline-block;\n  line-height: 0;\n"]), function (e) {
    var r;
    var n;
    var a;
    var i;
    var o;
    var l;
    var f;
    var u;
    var g;
    var d;
    var w;
    var E;
    var M;
    var S;
    var x;
    var Z = e.width;
    var A = e.badgePlacement;
    var P = String(Z).match(/^((0\.\d*)|(\d*\.?\d*))([a-zA-Z]*)$/);
    var F = Number(P[1]);
    var O = (P[4] || undefined) ?? "px";
    var R = h(r = `${F * 0.4}`).call(r, O);
    switch (A) {
      case fileTypeDefinitions.positionConstants.BOTTOMCENTER:
        S = h(n = `${F * -0.2}`).call(n, O);
        x = h(a = `${F * 0.3}`).call(a, O);
        break;
      case fileTypeDefinitions.positionConstants.BOTTOMLEFT:
        S = h(i = `${(Math.sqrt(2) * -0.25 + 0.3) * F}`).call(i, O);
        x = h(o = `${(Math.sqrt(2) * 0.25 + 0.3) * F}`).call(o, O);
        break;
      case fileTypeDefinitions.positionConstants.BOTTOMRIGHT:
        S = h(l = `${(Math.sqrt(2) * -0.25 + 0.3) * F}`).call(l, O);
        x = h(f = `${(Math.sqrt(2) * -0.25 + 0.3) * F}`).call(f, O);
        break;
      case fileTypeDefinitions.positionConstants.TOPCENTER:
        S = h(u = `${F * 0.8}`).call(u, O);
        x = h(g = `${F * 0.3}`).call(g, O);
        break;
      case fileTypeDefinitions.positionConstants.TOPLEFT:
        S = h(d = `${(Math.sqrt(2) * 0.25 + 0.3) * F}`).call(d, O);
        x = h(w = `${(Math.sqrt(2) * 0.25 + 0.3) * F}`).call(w, O);
        break;
      case fileTypeDefinitions.positionConstants.TOPRIGHT:
        S = h(E = `${(Math.sqrt(2) * 0.25 + 0.3) * F}`).call(E, O);
        x = h(M = `${(Math.sqrt(2) * -0.25 + 0.3) * F}`).call(M, O);
    }
    return styledComponentsCore.css(c ||= s(["\n      font-size: ", "", ";\n      ", " {\n        position: absolute;\n        font-size: ", ";\n        bottom: ", ";\n        right: ", ";\n      }\n    "]), F, O, p, R, S, x);
  });
  styledComponentsCore.default.img(i ||= s(["\n  display: inline-block;\n  height: auto;\n"]));
  require.d(exports, {
    StatusIconSvg: function () {
      return p;
    },
    FileCircleIcon: function () {
      return g;
    }
  });
}