// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$E' to 'isLabeledSelect'
// - Renamed export 'Cy' to 'deepEqual'
// - Renamed export 'Dt' to 'isAndroid'
// - Renamed export 'i1' to 'isLabeledInput'
// - Renamed export 'kK' to 'hasType'
// - Renamed export 'ww' to 'extractElementText'
// - Renamed export 'xp' to 'isParagraph'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 16749
         */
module.exports = function (module, exports, require) {
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  let r = e => "type" in e;
  let o = e => e.type === "paragraph";
  let a = e => e.type === "labeled_input";
  let l = e => e.type === "labeled_select";
  let s = e => e.map(e => {
    if (r(e)) {
      if (l(e)) {
        return e.value;
      }
      let {
        children: t
      } = e;
      let n = t.map(e => s([e])).join("");
      if (o(e)) {
        return `${n}
`;
      } else {
        return n;
      }
    }
    return e.text;
  }).join("");
  let u = () => typeof navigator != "undefined" && /Android/.test(navigator.userAgent);
  let c = (e, t) => deepEqualUtil_1.deepEqual(JSON.parse(JSON.stringify(e)), JSON.parse(JSON.stringify(t)));
  require.d(exports, {
    isLabeledSelect: function () {
      return l;
    },
    deepEqual: function () {
      return c;
    },
    isAndroid: function () {
      return u;
    },
    isLabeledInput: function () {
      return a;
    },
    hasType: function () {
      return r;
    },
    extractElementText: function () {
      return s;
    },
    isParagraph: function () {
      return o;
    }
  });
}