// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ei' to 'getTransformValues'
// - Renamed export 'lw' to 'layoutCalculator'
// - Renamed export 'mP' to 'isNumericValidator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 682877
         */
module.exports = function (module, exports, require) {
  var cssTransformParser = require("css-transform-parser") /*id: 677451*/;
  var cssTransformProps_1 = require("css-transform-props_1") /*id: 736118*/;
  var numberTypeValidators = require("number-type-validators") /*id: 730157*/;
  var cssUnitUtils = require("css-unit-utils") /*id: 466130*/;
  let a = t => t === numberTypeValidators.numberValidator || t === cssUnitUtils.pixelUnit;
  let l = new Set(["x", "y", "z"]);
  let u = cssTransformProps_1.transformProps.filter(t => !l.has(t));
  function h(t) {
    let e = [];
    u.forEach(i => {
      let n = t.getValue(i);
      if (n !== undefined) {
        e.push([i, n.get()]);
        n.set(+!!i.startsWith("scale"));
      }
    });
    return e;
  }
  let d = {
    width: (t, e) => {
      let {
        x: i
      } = t;
      let {
        paddingLeft: n = "0",
        paddingRight: r = "0"
      } = e;
      return i.max - i.min - parseFloat(n) - parseFloat(r);
    },
    height: (t, e) => {
      let {
        y: i
      } = t;
      let {
        paddingTop: n = "0",
        paddingBottom: r = "0"
      } = e;
      return i.max - i.min - parseFloat(n) - parseFloat(r);
    },
    top: (t, e) => {
      let {
        top: i
      } = e;
      return parseFloat(i);
    },
    left: (t, e) => {
      let {
        left: i
      } = e;
      return parseFloat(i);
    },
    bottom: (t, e) => {
      let {
        y: i
      } = t;
      let {
        top: n
      } = e;
      return parseFloat(n) + (i.max - i.min);
    },
    right: (t, e) => {
      let {
        x: i
      } = t;
      let {
        left: n
      } = e;
      return parseFloat(n) + (i.max - i.min);
    },
    x: (t, e) => {
      let {
        transform: i
      } = e;
      return cssTransformParser.parseTransform(i, "x");
    },
    y: (t, e) => {
      let {
        transform: i
      } = e;
      return cssTransformParser.parseTransform(i, "y");
    }
  };
  d.translateX = d.x;
  d.translateY = d.y;
  require.d(exports, {
    getTransformValues: function () {
      return h;
    },
    layoutCalculator: function () {
      return d;
    },
    isNumericValidator: function () {
      return a;
    }
  });
}