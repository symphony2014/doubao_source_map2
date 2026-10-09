// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$3' to 'colorToMatrixString'
// - Renamed export 'np' to 'rgbToHex'
// - Renamed export 'r0' to 'intToRgba'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_ud_url_preview_open.ff701428.js
         * chunkId: 31314
         * moduleId: 712415
         */
module.exports = function (module, exports, require) {
  function n(e) {
    let t = e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    if (!t || !t[1] || !t[2] || !t[3]) {
      return e;
    }
    let i = t.slice(1, 4).map(e => parseInt(e, 10).toString(16).padStart(2, "0"));
    return `#${i[0]}${i[1]}${i[2]}`;
  }
  function r(e) {
    return function (e) {
      if (!e) {
        return "";
      }
      let t = parseFloat((e.r / 255).toFixed(3));
      let i = parseFloat((e.g / 255).toFixed(3));
      let n = parseFloat((e.b / 255).toFixed(3));
      return `${t} 0 0 0 0 0 ${i} 0 0 0 0 0 ${n} 0 0 0 0 0 ${e.a} 0`;
    }(function (e) {
      let t = e.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
      if (t) {
        return {
          r: parseInt(t[1], 16),
          g: parseInt(t[2], 16),
          b: parseInt(t[3], 16),
          a: 1
        };
      } else {
        return null;
      }
    }(e));
  }
  function o(e) {
    var t;
    t = function (e) {
      let t = Number(e).toString(16).padStart(8, "0");
      return {
        r: parseInt(t.slice(0, 2), 16),
        g: parseInt(t.slice(2, 4), 16),
        b: parseInt(t.slice(4, 6), 16),
        a: parseInt(t.slice(6, 8), 16) / 255
      };
    }(e);
    return `rgba(${t.r}, ${t.g}, ${t.b}, ${t.a})`;
  }
  require.d(exports, {
    colorToMatrixString: function () {
      return r;
    },
    rgbToHex: function () {
      return n;
    },
    intToRgba: function () {
      return o;
    }
  });
}