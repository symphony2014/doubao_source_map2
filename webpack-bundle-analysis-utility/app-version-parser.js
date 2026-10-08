// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'esModuleInteropHelper_2'
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(592187) to 'class-instance-check-helper'
// - Resolved require(855975) to 'class-property-definer'
// - Resolved require(739258) to 'define-property-safe-util_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 97038.67ba788d.js
         * chunkId: 97038
         * moduleId: 499114
         */
module.exports = function (module, exports, require) {
  var esModuleInteropHelper_2 = require("es-module-interop-helper_2") /*id: 299302*/;
  exports.default = undefined;
  var o = esModuleInteropHelper_2(require("class-instance-check-helper") /*id: 592187*/);
  var i = esModuleInteropHelper_2(require("class-property-definer") /*id: 855975*/);
  var a = esModuleInteropHelper_2(require("define-property-safe-util_1") /*id: 739258*/);
  function s(e) {
    if (e.match(/^\d+$/)) {
      if (e.length === 6) {
        return e.match(/\d{2}/g).map(function (e) {
          return +e;
        }).join(".");
      } else {
        return e.split("").join(".");
      }
    } else {
      return e;
    }
  }
  var u = function () {
    function e() {
      o.default(this, e);
      a.default(this, "cache", undefined);
      this.cache = [];
    }
    i.default(e, [{
      key: "add",
      value: function (t) {
        var r = this;
        t.forEach(function (t) {
          var n;
          if (typeof t == "string") {
            if (!e.strategies[t]) {
              return;
            }
            n = e.strategies[t];
          } else {
            n = t;
          }
          r.cache.push(n);
        });
      }
    }, {
      key: "parse",
      value: function (e) {
        e = e.toLowerCase();
        var t = 0;
        var r = this.cache.length;
        for (; t < r; ++t) {
          var n = this.cache[t](e);
          if (n) {
            return n;
          }
        }
        return {};
      }
    }]);
    return e;
  }();
  a.default(u, "strategies", {
    livestream: function (e) {
      var t = e.match(/live_stream_([\d.]+)/);
      if (t) {
        return {
          livestream: true,
          version: s(t[1] || "")
        };
      }
    },
    livestream_pro: function (e) {
      var t = e.match(/live_stream_pro_([\d.]+)/);
      if (t) {
        return {
          livestream_pro: true,
          version: s(t[1] || "")
        };
      }
    },
    livestream_lite: function (e) {
      var t = e.match(/live_stream_lite_([\d.]+)/);
      if (t) {
        return {
          livestream_lite: true,
          version: s(t[1] || "")
        };
      }
    },
    virgo: function (e) {
      var t = e.match(/live_i18n_([\d.]+)/);
      if (t) {
        var r = t[1];
        if (r.match(/^\d+$/)) {
          r = r.split("").join(".");
        }
        return {
          virgo: true,
          version: r
        };
      }
    },
    aweme: function (e) {
      var t = e.match(/aweme_([\d.]+)/);
      if (t) {
        return {
          aweme: true,
          version: s(t[1] || "")
        };
      }
    },
    aweme_lite: function (e) {
      var t = e.match(/(?:aweme|douyin)_lite_([\d.]+)/);
      if (t) {
        return {
          aweme_lite: true,
          version: s(t[1] || "")
        };
      }
    },
    aweme_hotsoon: function (e) {
      var t = e.match(/aweme_hotsoon_([\d.]+)/);
      if (t) {
        return {
          aweme_hotsoon: true,
          version: s(t[1] || "")
        };
      }
    },
    tiktok: function (e) {
      var t = e.match(/(?:trill|musical_ly)_([\d.]+)/);
      if (t) {
        var r = t[1];
        if (r.match(/^\d+$/)) {
          r = r.split("").join(".");
        }
        return {
          tiktok: true,
          version: r
        };
      }
    },
    dcd: function (e) {
      var t = e.match(/automobile.([\d.]+)/);
      if (t) {
        return {
          dcd: true,
          version: t[1]
        };
      }
    },
    xigua: function (e) {
      var t = e.match(/videoarticle\/([\d.]+)/);
      if (t) {
        return {
          xigua: true,
          version: t[1]
        };
      }
    },
    manyhouse: function (e) {
      var t = e.match(/manyhouse\/([\d.]+)/);
      if (t) {
        return {
          manyhouse: true,
          version: t[1]
        };
      }
    },
    dragon: function (e) {
      var t = e.match(/dragon\/([\d.]+)/);
      if (t) {
        return {
          dragon: true,
          version: t[1]
        };
      }
    },
    toutiao: function (e) {
      var t = e.match(/newsarticle\/([\d.]+)/);
      if (t) {
        var r = {
          toutiao: true,
          version: t[1]
        };
        if (e.match(/newslite(?:inhouse)?/)) {
          r.toutiao_lite = true;
        }
        if (e.match(/mode\/basic/)) {
          r.toutiao_basic = true;
        }
        return r;
      }
    },
    lark: function (e) {
      if (e.match(/lark/)) {
        return {
          lark: true
        };
      }
    },
    topbuzz: function (e) {
      if (e.match(/topbuzz/)) {
        return {
          topbuzz: true
        };
      }
    },
    ulike: function (e) {
      var t = e.match(/ulike\/([\d.]+)/);
      if (t) {
        return {
          ulike: true,
          version: t[1]
        };
      }
    },
    faceu: function (e) {
      var t = e.match(/faceu\/([\d.]+)/);
      if (t) {
        return {
          faceu: true,
          version: t[1]
        };
      }
    },
    maya: function (e) {
      var t = e.match(/maya\/([\d.]+)/);
      if (t) {
        return {
          maya: true,
          version: t[1]
        };
      }
    },
    flipchat: function (e) {
      var t = e.match(/flipchat\/([\d.]+)/);
      if (t) {
        return {
          flipchat: true,
          version: t[1]
        };
      }
    }
  });
  u.default = u;
  exports.default = u;
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}