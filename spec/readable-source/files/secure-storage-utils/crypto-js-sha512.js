// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(689014) to 'crypto-js-core-lib'
// - Resolved require(705049) to 'crypto-js-x64-extension'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55711.a6eb22ed.js
         * chunkId: 55711
         * moduleId: 457393
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    (function () {
      var t = e.lib.Hasher;
      var r = e.x64;
      var n = r.Word;
      var o = r.WordArray;
      var i = e.algo;
      function a() {
        return n.create.apply(n, arguments);
      }
      var c = [a(1116352408, 3609767458), a(1899447441, 602891725), a(3049323471, 3964484399), a(3921009573, 2173295548), a(961987163, 4081628472), a(1508970993, 3053834265), a(2453635748, 2937671579), a(2870763221, 3664609560), a(3624381080, 2734883394), a(310598401, 1164996542), a(607225278, 1323610764), a(1426881987, 3590304994), a(1925078388, 4068182383), a(2162078206, 991336113), a(2614888103, 633803317), a(3248222580, 3479774868), a(3835390401, 2666613458), a(4022224774, 944711139), a(264347078, 2341262773), a(604807628, 2007800933), a(770255983, 1495990901), a(1249150122, 1856431235), a(1555081692, 3175218132), a(1996064986, 2198950837), a(2554220882, 3999719339), a(2821834349, 766784016), a(2952996808, 2566594879), a(3210313671, 3203337956), a(3336571891, 1034457026), a(3584528711, 2466948901), a(113926993, 3758326383), a(338241895, 168717936), a(666307205, 1188179964), a(773529912, 1546045734), a(1294757372, 1522805485), a(1396182291, 2643833823), a(1695183700, 2343527390), a(1986661051, 1014477480), a(2177026350, 1206759142), a(2456956037, 344077627), a(2730485921, 1290863460), a(2820302411, 3158454273), a(3259730800, 3505952657), a(3345764771, 106217008), a(3516065817, 3606008344), a(3600352804, 1432725776), a(4094571909, 1467031594), a(275423344, 851169720), a(430227734, 3100823752), a(506948616, 1363258195), a(659060556, 3750685593), a(883997877, 3785050280), a(958139571, 3318307427), a(1322822218, 3812723403), a(1537002063, 2003034995), a(1747873779, 3602036899), a(1955562222, 1575990012), a(2024104815, 1125592928), a(2227730452, 2716904306), a(2361852424, 442776044), a(2428436474, 593698344), a(2756734187, 3733110249), a(3204031479, 2999351573), a(3329325298, 3815920427), a(3391569614, 3928383900), a(3515267271, 566280711), a(3940187606, 3454069534), a(4118630271, 4000239992), a(116418474, 1914138554), a(174292421, 2731055270), a(289380356, 3203993006), a(460393269, 320620315), a(685471733, 587496836), a(852142971, 1086792851), a(1017036298, 365543100), a(1126000580, 2618297676), a(1288033470, 3409855158), a(1501505948, 4234509866), a(1607167915, 987167468), a(1816402316, 1246189591)];
      var f = [];
      (function () {
        for (var e = 0; e < 80; e++) {
          f[e] = a();
        }
      })();
      var s = i.SHA512 = t.extend({
        _doReset: function () {
          this._hash = new o.init([new n.init(1779033703, 4089235720), new n.init(3144134277, 2227873595), new n.init(1013904242, 4271175723), new n.init(2773480762, 1595750129), new n.init(1359893119, 2917565137), new n.init(2600822924, 725511199), new n.init(528734635, 4215389547), new n.init(1541459225, 327033209)]);
        },
        _doProcessBlock: function (e, t) {
          var r = this._hash.words;
          var n = r[0];
          var o = r[1];
          var i = r[2];
          var a = r[3];
          var s = r[4];
          var u = r[5];
          var h = r[6];
          var l = r[7];
          var d = n.high;
          var x = n.low;
          var v = o.high;
          var p = o.low;
          var y = i.high;
          var _ = i.low;
          var b = a.high;
          var g = a.low;
          var m = s.high;
          var w = s.low;
          var B = u.high;
          var S = u.low;
          var k = h.high;
          var E = h.low;
          var A = l.high;
          var I = l.low;
          var C = d;
          var z = x;
          var D = v;
          var R = p;
          var O = y;
          var H = _;
          var M = b;
          var j = g;
          var N = m;
          var F = w;
          var P = B;
          var L = S;
          var T = k;
          var W = E;
          var U = A;
          var K = I;
          var X = 0;
          for (; X < 80; X++) {
            var q = f[X];
            if (X < 16) {
              var G = q.high = e[t + X * 2] | 0;
              var Q = q.low = e[t + X * 2 + 1] | 0;
            } else {
              var V = f[X - 15];
              var Y = V.high;
              var Z = V.low;
              var J = (Y >>> 1 | Z << 31) ^ (Y >>> 8 | Z << 24) ^ Y >>> 7;
              var $ = (Z >>> 1 | Y << 31) ^ (Z >>> 8 | Y << 24) ^ (Z >>> 7 | Y << 25);
              var ee = f[X - 2];
              var et = ee.high;
              var er = ee.low;
              var en = (et >>> 19 | er << 13) ^ (et << 3 | er >>> 29) ^ et >>> 6;
              var eo = (er >>> 19 | et << 13) ^ (er << 3 | et >>> 29) ^ (er >>> 6 | et << 26);
              var ei = f[X - 7];
              var ea = ei.high;
              var ec = ei.low;
              var ef = f[X - 16];
              var es = ef.high;
              var eu = ef.low;
              var Q = $ + ec;
              var G = J + ea + +(Q >>> 0 < $ >>> 0);
              var Q = Q + eo;
              var G = G + en + +(Q >>> 0 < eo >>> 0);
              var Q = Q + eu;
              var G = G + es + +(Q >>> 0 < eu >>> 0);
              q.high = G;
              q.low = Q;
            }
            var eh = N & P ^ ~N & T;
            var el = F & L ^ ~F & W;
            var ed = C & D ^ C & O ^ D & O;
            var ex = z & R ^ z & H ^ R & H;
            var ev = (C >>> 28 | z << 4) ^ (C << 30 | z >>> 2) ^ (C << 25 | z >>> 7);
            var ep = (z >>> 28 | C << 4) ^ (z << 30 | C >>> 2) ^ (z << 25 | C >>> 7);
            var ey = (N >>> 14 | F << 18) ^ (N >>> 18 | F << 14) ^ (N << 23 | F >>> 9);
            var e_ = (F >>> 14 | N << 18) ^ (F >>> 18 | N << 14) ^ (F << 23 | N >>> 9);
            var eb = c[X];
            var eg = eb.high;
            var em = eb.low;
            var ew = K + e_;
            var eB = U + ey + +(ew >>> 0 < K >>> 0);
            var ew = ew + el;
            var eB = eB + eh + +(ew >>> 0 < el >>> 0);
            var ew = ew + em;
            var eB = eB + eg + +(ew >>> 0 < em >>> 0);
            var ew = ew + Q;
            var eB = eB + G + +(ew >>> 0 < Q >>> 0);
            var eS = ep + ex;
            var ek = ev + ed + +(eS >>> 0 < ep >>> 0);
            U = T;
            K = W;
            T = P;
            W = L;
            P = N;
            L = F;
            N = M + eB + +((F = j + ew | 0) >>> 0 < j >>> 0) | 0;
            M = O;
            j = H;
            O = D;
            H = R;
            D = C;
            R = z;
            C = eB + ek + +((z = ew + eS | 0) >>> 0 < ew >>> 0) | 0;
          }
          x = n.low = x + z;
          n.high = d + C + +(x >>> 0 < z >>> 0);
          p = o.low = p + R;
          o.high = v + D + +(p >>> 0 < R >>> 0);
          _ = i.low = _ + H;
          i.high = y + O + +(_ >>> 0 < H >>> 0);
          g = a.low = g + j;
          a.high = b + M + +(g >>> 0 < j >>> 0);
          w = s.low = w + F;
          s.high = m + N + +(w >>> 0 < F >>> 0);
          S = u.low = S + L;
          u.high = B + P + +(S >>> 0 < L >>> 0);
          E = h.low = E + W;
          h.high = k + T + +(E >>> 0 < W >>> 0);
          I = l.low = I + K;
          l.high = A + U + +(I >>> 0 < K >>> 0);
        },
        _doFinalize: function () {
          var e = this._data;
          var t = e.words;
          var r = this._nDataBytes * 8;
          var n = e.sigBytes * 8;
          t[n >>> 5] |= 128 << 24 - n % 32;
          t[(n + 128 >>> 10 << 5) + 30] = Math.floor(r / 4294967296);
          t[(n + 128 >>> 10 << 5) + 31] = r;
          e.sigBytes = t.length * 4;
          this._process();
          return this._hash.toX32();
        },
        clone: function () {
          var e = t.clone.call(this);
          e._hash = this._hash.clone();
          return e;
        },
        blockSize: 32
      });
      e.SHA512 = t._createHelper(s);
      e.HmacSHA512 = t._createHmacHelper(s);
    })();
    return e.SHA512;
  };
  module.exports = n(require("crypto-js-core-lib") /*id: 689014*/, require("crypto-js-x64-extension") /*id: 705049*/);
}