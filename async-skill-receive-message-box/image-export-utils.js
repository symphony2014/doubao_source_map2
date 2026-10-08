// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Gp' to 'copyImage'
// - Renamed export 'l8' to 'copyImageToClipboard'
// - Renamed export 'pf' to 'exportImage'
// - Renamed export 'tg' to 'downloadImage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 195626
         */
module.exports = function (module, exports, require) {
  var domToImageConverter = require("dom-to-image-converter") /*id: 977249*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  let {
    domToPng: o
  } = domToImageConverter;
  let a = (e, t, n) => {
    if (n) {
      e.setAttribute(t, n);
      return;
    }
    e.removeAttribute(t);
  };
  let l = e => {
    let t = atob(e);
    let n = new Uint8Array(t.length);
    for (let e = 0; e < t.length; e++) {
      n[e] = t.charCodeAt(e);
    }
    return n;
  };
  let s = function (e, t = 2, n = false) {
    let i = "";
    let r = e.querySelector("svg > g");
    let o = e.getBoundingClientRect();
    let {
      width: l,
      height: s
    } = o;
    if (r && !n) {
      let n = e.style.cssText;
      let c = r.style.transform;
      let d = r.getAttribute("transform");
      r.style.transform = "";
      r.removeAttribute("transform");
      let u = r.getBoundingClientRect();
      let _ = u.width + 96;
      let m = u.height + 96;
      let v = new DOMMatrixReadOnly(window.getComputedStyle(r).transform);
      r.style.transform = `matrix(1, ${v.b}, ${v.c}, 1, ${v.e + o.x - u.x}, ${v.f + o.y - u.y})`;
      e.style.width = `${_}px`;
      e.style.height = `${m}px`;
      e.style.transform = `scale(${t}) translate(48px, 48px)`;
      e.style.transformOrigin = "top left";
      l = _ * t;
      s = m * t;
      i = new XMLSerializer().serializeToString(e);
      r.style.transform = c;
      a(r, "transform", d || "");
      a(e, "style", n);
    } else {
      let {
        width: n,
        height: r
      } = e;
      l = n.baseVal.value * t;
      s = r.baseVal.value * t;
      if (t !== 1) {
        let t = e.cloneNode(true);
        t.setAttribute("width", String(l));
        t.setAttribute("height", String(s));
        i = new XMLSerializer().serializeToString(t);
      } else {
        i = new XMLSerializer().serializeToString(e);
      }
    }
    return {
      svgCode: i,
      width: l,
      height: s
    };
  };
  let c = (e, t, n, i, r) => {
    let {
      naturalWidth: o,
      naturalHeight: a
    } = e;
    let l = n && i ? n : o;
    let s = n && i ? i : a;
    return new Promise(n => {
      let i = document.createElement("canvas");
      let o = i.getContext("2d");
      let a = 0;
      let c = 0;
      if (typeof r == "number") {
        a = r;
        c = r;
      } else if (Array.isArray(r)) {
        a = typeof r[0] == "number" ? r[0] : 0;
        c = typeof r[1] == "number" ? r[0] : 0;
      }
      i.width = t ? Math.max(l + a * 2, t.width) : l + a * 2;
      i.height = t ? s + t.height + c * 2 : s + c * 2;
      if (!o) {
        n("");
        return;
      }
      o.fillStyle = "#ffffff";
      o.fillRect(0, 0, i.width, i.height);
      o.drawImage(e, (i.width - l) / 2, c);
      if (t) {
        let e = new Image();
        e.src = t.toDataURL("image/png");
        e.onload = () => {
          o.fillStyle = "rgba(241, 244, 251, 1)";
          o.fillRect(0, s + c * 2, i.width, t.height);
          o.drawImage(e, 0, s + c * 2);
          n(i.toDataURL("image/png"));
        };
      } else {
        n(i.toDataURL("image/png"));
      }
    });
  };
  let d = function (e, t, n = 2, i = false) {
    return new Promise(r => {
      try {
        let o = new Image();
        let {
          svgCode: a,
          width: l,
          height: d
        } = s(e, n, i);
        o.src = `data:image/svg+xml;utf8,${encodeURIComponent(a)}`;
        o.onload = () => {
          let e = c(o, t, l, d);
          r(e);
        };
      } catch (e) {
        r("");
      }
    });
  };
  let u = async function (e, t, n = 2, i = false, a = false) {
    try {
      let l;
      if (a && t) {
        l = t.toDataURL("image/png");
      } else if (e instanceof HTMLImageElement) {
        l = await c(e, t);
      } else if (!userAgentDeviceDetector.isMobileOrIOS() || i) {
        l = await d(e, t, n, i);
      } else {
        let {
          svgCode: t,
          width: i,
          height: r
        } = s(e, n);
        let a = document.createElement("img");
        a.src = `data:image/svg+xml;utf8,${encodeURIComponent(t)}`;
        l = await o(a, {
          width: i,
          height: r,
          backgroundColor: "rgba(241, 244, 251, 1)"
        });
      }
      _(l);
      return true;
    } catch (e) {
      return false;
    }
  };
  let _ = function (e, t = "png") {
    let n = document.createElement("a");
    n.href = e;
    n.download = `exported_image.${t}`;
    n.click();
  };
  let m = async e => {
    let t = new Blob([l(e.replace("data:image/png;base64,", ""))], {
      type: "image/png"
    });
    await navigator.clipboard.write([new ClipboardItem({
      "image/png": t
    })]);
  };
  let v = async function (e, t, n = 2, i = false, r = false) {
    try {
      let o;
      if (!(o = r && t ? t.toDataURL("image/png") : e instanceof HTMLImageElement ? await c(e, t) : await d(e, t, n, i))) {
        return false;
      }
      await m(o);
      return true;
    } catch (e) {
      return false;
    }
  };
  require.d(exports, {
    copyImage: function () {
      return v;
    },
    copyImageToClipboard: function () {
      return m;
    },
    exportImage: function () {
      return u;
    },
    downloadImage: function () {
      return _;
    }
  });
}