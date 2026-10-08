// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'konvaPropertyFactory'
// - Resolved require(637238) to 'konva-property-factory'
// - Renamed variable 'a' to 'konvaCoreNodeBase'
// - Resolved require(395622) to 'konva-core-node-base'
// - Renamed variable 'n' to 'konvaPropertyValidators'
// - Resolved require(525858) to 'konva-property-validators'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 161051
         */
module.exports = function (module, exports, require) {
  exports.Blur = undefined;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaCoreNodeBase = require("konva-core-node-base") /*id: 395622*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  function s() {
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 0;
    this.next = null;
  }
  var o = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259];
  var h = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
  exports.Blur = function (t) {
    var e = Math.round(this.blurRadius());
    if (e > 0) {
      (function (t, e) {
        var i;
        var r;
        var a;
        var n;
        var l;
        var d;
        var c;
        var u;
        var f;
        var g;
        var p;
        var v;
        var m;
        var y;
        var _;
        var b;
        var x;
        var S;
        var C;
        var w;
        var P;
        var T;
        var E;
        var M;
        var k = t.data;
        var A = t.width;
        var O = t.height;
        var F = e + e + 1;
        var D = A - 1;
        var R = O - 1;
        var N = e + 1;
        var G = N * (N + 1) / 2;
        var I = new s();
        var L = null;
        var U = I;
        var B = null;
        var j = null;
        var $ = o[e];
        var V = h[e];
        for (a = 1; a < F; a++) {
          U = U.next = new s();
          if (a === N) {
            L = U;
          }
        }
        r = 0;
        U.next = I;
        c = d = 0;
        for (; r < O; r++) {
          b = x = S = C = u = f = g = p = 0;
          v = N * (w = k[d]);
          m = N * (P = k[d + 1]);
          y = N * (T = k[d + 2]);
          _ = N * (E = k[d + 3]);
          u += G * w;
          f += G * P;
          g += G * T;
          p += G * E;
          U = I;
          a = 0;
          for (; a < N; a++) {
            U.r = w;
            U.g = P;
            U.b = T;
            U.a = E;
            U = U.next;
          }
          for (a = 1; a < N; a++) {
            n = d + ((D < a ? D : a) << 2);
            u += (U.r = w = k[n]) * (M = N - a);
            f += (U.g = P = k[n + 1]) * M;
            g += (U.b = T = k[n + 2]) * M;
            p += (U.a = E = k[n + 3]) * M;
            b += w;
            x += P;
            S += T;
            C += E;
            U = U.next;
          }
          i = 0;
          B = I;
          j = L;
          for (; i < A; i++) {
            k[d + 3] = E = p * $ >> V;
            if (E !== 0) {
              E = 255 / E;
              k[d] = (u * $ >> V) * E;
              k[d + 1] = (f * $ >> V) * E;
              k[d + 2] = (g * $ >> V) * E;
            } else {
              k[d] = k[d + 1] = k[d + 2] = 0;
            }
            u -= v;
            f -= m;
            g -= y;
            p -= _;
            v -= B.r;
            m -= B.g;
            y -= B.b;
            _ -= B.a;
            n = c + ((n = i + e + 1) < D ? n : D) << 2;
            b += B.r = k[n];
            x += B.g = k[n + 1];
            S += B.b = k[n + 2];
            C += B.a = k[n + 3];
            u += b;
            f += x;
            g += S;
            p += C;
            B = B.next;
            v += w = j.r;
            m += P = j.g;
            y += T = j.b;
            _ += E = j.a;
            b -= w;
            x -= P;
            S -= T;
            C -= E;
            j = j.next;
            d += 4;
          }
          c += A;
        }
        for (i = 0; i < A; i++) {
          x = S = C = b = f = g = p = u = 0;
          v = N * (w = k[d = i << 2]);
          m = N * (P = k[d + 1]);
          y = N * (T = k[d + 2]);
          _ = N * (E = k[d + 3]);
          u += G * w;
          f += G * P;
          g += G * T;
          p += G * E;
          U = I;
          a = 0;
          for (; a < N; a++) {
            U.r = w;
            U.g = P;
            U.b = T;
            U.a = E;
            U = U.next;
          }
          a = 1;
          l = A;
          for (; a <= e; a++) {
            d = l + i << 2;
            u += (U.r = w = k[d]) * (M = N - a);
            f += (U.g = P = k[d + 1]) * M;
            g += (U.b = T = k[d + 2]) * M;
            p += (U.a = E = k[d + 3]) * M;
            b += w;
            x += P;
            S += T;
            C += E;
            U = U.next;
            if (a < R) {
              l += A;
            }
          }
          r = 0;
          d = i;
          B = I;
          j = L;
          for (; r < O; r++) {
            k[(n = d << 2) + 3] = E = p * $ >> V;
            if (E > 0) {
              E = 255 / E;
              k[n] = (u * $ >> V) * E;
              k[n + 1] = (f * $ >> V) * E;
              k[n + 2] = (g * $ >> V) * E;
            } else {
              k[n] = k[n + 1] = k[n + 2] = 0;
            }
            u -= v;
            f -= m;
            g -= y;
            p -= _;
            v -= B.r;
            m -= B.g;
            y -= B.b;
            _ -= B.a;
            n = i + ((n = r + N) < R ? n : R) * A << 2;
            u += b += B.r = k[n];
            f += x += B.g = k[n + 1];
            g += S += B.b = k[n + 2];
            p += C += B.a = k[n + 3];
            B = B.next;
            v += w = j.r;
            m += P = j.g;
            y += T = j.b;
            _ += E = j.a;
            b -= w;
            x -= P;
            S -= T;
            C -= E;
            j = j.next;
            d += A;
          }
        }
      })(t, e);
    }
  };
  konvaPropertyFactory.Factory.addGetterSetter(konvaCoreNodeBase.Node, "blurRadius", 0, konvaPropertyValidators.getNumberValidator(), konvaPropertyFactory.Factory.afterSetFilter);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}