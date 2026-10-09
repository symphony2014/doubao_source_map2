// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'processImage'
// - Renamed export 'w' to 'fileToBase64'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23337.bf4ac03a.js
         * chunkId: 23337
         * moduleId: 478010
         */
module.exports = function (module, exports, require) {
  function t(M) {
    return new Promise(e => {
      let i = new FileReader();
      i.addEventListener("load", () => {
        var M;
        e((M = i.result) === null || M === undefined ? undefined : M.toString());
      });
      i.readAsDataURL(M);
    });
  }
  function N(M) {
    return M * Math.PI / 180;
  }
  async function a(M, e, i = 0, t = {
    horizontal: false,
    vertical: false
  }) {
    let a = await new Promise((e, i) => {
      let t = new Image();
      t.addEventListener("load", () => e(t));
      t.addEventListener("error", M => i(M));
      t.setAttribute("crossOrigin", "anonymous");
      t.src = M;
    });
    let A = document.createElement("canvas");
    let l = A.getContext("2d");
    if (!l) {
      return null;
    }
    let j = N(i);
    let {
      width: D,
      height: s
    } = function (M, e, i) {
      let t = N(i);
      return {
        width: Math.abs(Math.cos(t) * M) + Math.abs(Math.sin(t) * e),
        height: Math.abs(Math.sin(t) * M) + Math.abs(Math.cos(t) * e)
      };
    }(a.width, a.height, i);
    A.width = D;
    A.height = s;
    l.translate(D / 2, s / 2);
    l.rotate(j);
    l.scale(t.horizontal ? -1 : 1, t.vertical ? -1 : 1);
    l.translate(-a.width / 2, -a.height / 2);
    l.drawImage(a, 0, 0);
    let r = document.createElement("canvas");
    let c = r.getContext("2d");
    if (!c) {
      return null;
    }
    r.width = e.width;
    r.height = e.height;
    c.drawImage(A, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height);
    let g = "image/jpeg";
    return {
      base64: r.toDataURL(g),
      blob: await new Promise(M => {
        r.toBlob(e => {
          M(e);
        }, g);
      }),
      fileType: g
    };
  }
  require.d(exports, {
    processImage: function () {
      return a;
    },
    fileToBase64: function () {
      return t;
    }
  });
}