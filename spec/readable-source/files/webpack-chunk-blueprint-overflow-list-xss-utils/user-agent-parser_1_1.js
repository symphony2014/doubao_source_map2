// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 956882
         */
module.exports = function (module, exports, require) {
  var t;
  t = function () {
    return function (e) {
      var t = {};
      function n(r) {
        if (t[r]) {
          return t[r].exports;
        }
        var i = t[r] = {
          i: r,
          l: false,
          exports: {}
        };
        e[r].call(i.exports, i, i.exports, n);
        i.l = true;
        return i.exports;
      }
      n.m = e;
      n.c = t;
      n.d = function (e, t, r) {
        if (!n.o(e, t)) {
          Object.defineProperty(e, t, {
            enumerable: true,
            get: r
          });
        }
      };
      n.r = function (e) {
        if (typeof Symbol != "undefined" && Symbol.toStringTag) {
          Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          });
        }
        Object.defineProperty(e, "__esModule", {
          value: true
        });
      };
      n.t = function (e, t) {
        if (t & 1) {
          e = n(e);
        }
        if (t & 8 || t & 4 && typeof e == "object" && e && e.__esModule) {
          return e;
        }
        var r = Object.create(null);
        n.r(r);
        Object.defineProperty(r, "default", {
          enumerable: true,
          value: e
        });
        if (t & 2 && typeof e != "string") {
          for (var i in e) {
            n.d(r, i, function (t) {
              return e[t];
            }.bind(null, i));
          }
        }
        return r;
      };
      n.n = function (e) {
        var t = e && e.__esModule ? function () {
          return e.default;
        } : function () {
          return e;
        };
        n.d(t, "a", t);
        return t;
      };
      n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
      n.p = "";
      return n(n.s = 90);
    }({
      17: function (e, t, n) {
        "use strict";

        t.__esModule = true;
        t.default = undefined;
        var r = n(18);
        var i = function () {
          function e() {}
          e.getFirstMatch = function (e, t) {
            var n = t.match(e);
            return n && n.length > 0 && n[1] || "";
          };
          e.getSecondMatch = function (e, t) {
            var n = t.match(e);
            return n && n.length > 1 && n[2] || "";
          };
          e.matchAndReturnConst = function (e, t, n) {
            if (e.test(t)) {
              return n;
            }
          };
          e.getWindowsVersionName = function (e) {
            switch (e) {
              case "NT":
                return "NT";
              case "XP":
              case "NT 5.1":
                return "XP";
              case "NT 5.0":
                return "2000";
              case "NT 5.2":
                return "2003";
              case "NT 6.0":
                return "Vista";
              case "NT 6.1":
                return "7";
              case "NT 6.2":
                return "8";
              case "NT 6.3":
                return "8.1";
              case "NT 10.0":
                return "10";
              default:
                return;
            }
          };
          e.getMacOSVersionName = function (e) {
            var t = e.split(".").splice(0, 2).map(function (e) {
              return parseInt(e, 10) || 0;
            });
            t.push(0);
            if (t[0] === 10) {
              switch (t[1]) {
                case 5:
                  return "Leopard";
                case 6:
                  return "Snow Leopard";
                case 7:
                  return "Lion";
                case 8:
                  return "Mountain Lion";
                case 9:
                  return "Mavericks";
                case 10:
                  return "Yosemite";
                case 11:
                  return "El Capitan";
                case 12:
                  return "Sierra";
                case 13:
                  return "High Sierra";
                case 14:
                  return "Mojave";
                case 15:
                  return "Catalina";
                default:
                  return;
              }
            }
          };
          e.getAndroidVersionName = function (e) {
            var t = e.split(".").splice(0, 2).map(function (e) {
              return parseInt(e, 10) || 0;
            });
            t.push(0);
            if (t[0] !== 1 || !(t[1] < 5)) {
              if (t[0] === 1 && t[1] < 6) {
                return "Cupcake";
              } else if (t[0] === 1 && t[1] >= 6) {
                return "Donut";
              } else if (t[0] === 2 && t[1] < 2) {
                return "Eclair";
              } else if (t[0] === 2 && t[1] === 2) {
                return "Froyo";
              } else if (t[0] === 2 && t[1] > 2) {
                return "Gingerbread";
              } else if (t[0] === 3) {
                return "Honeycomb";
              } else if (t[0] === 4 && t[1] < 1) {
                return "Ice Cream Sandwich";
              } else if (t[0] === 4 && t[1] < 4) {
                return "Jelly Bean";
              } else if (t[0] === 4 && t[1] >= 4) {
                return "KitKat";
              } else if (t[0] === 5) {
                return "Lollipop";
              } else if (t[0] === 6) {
                return "Marshmallow";
              } else if (t[0] === 7) {
                return "Nougat";
              } else if (t[0] === 8) {
                return "Oreo";
              } else if (t[0] === 9) {
                return "Pie";
              } else {
                return undefined;
              }
            }
          };
          e.getVersionPrecision = function (e) {
            return e.split(".").length;
          };
          e.compareVersions = function (t, n, r = false) {
            var i = e.getVersionPrecision(t);
            var o = e.getVersionPrecision(n);
            var a = Math.max(i, o);
            var s = 0;
            var u = e.map([t, n], function (t) {
              var n = a - e.getVersionPrecision(t);
              var r = t + Array(n + 1).join(".0");
              return e.map(r.split("."), function (e) {
                return Array(20 - e.length).join("0") + e;
              }).reverse();
            });
            if (r) {
              s = a - Math.min(i, o);
            }
            a -= 1;
            while (a >= s) {
              if (u[0][a] > u[1][a]) {
                return 1;
              }
              if (u[0][a] === u[1][a]) {
                if (a === s) {
                  return 0;
                }
                a -= 1;
              } else if (u[0][a] < u[1][a]) {
                return -1;
              }
            }
          };
          e.map = function (e, t) {
            var n;
            var r = [];
            if (Array.prototype.map) {
              return Array.prototype.map.call(e, t);
            }
            for (n = 0; n < e.length; n += 1) {
              r.push(t(e[n]));
            }
            return r;
          };
          e.find = function (e, t) {
            var n;
            var r;
            if (Array.prototype.find) {
              return Array.prototype.find.call(e, t);
            }
            n = 0;
            r = e.length;
            for (; n < r; n += 1) {
              var i = e[n];
              if (t(i, n)) {
                return i;
              }
            }
          };
          e.assign = function (e) {
            var t;
            var n;
            var r = arguments.length;
            var i = Array(r > 1 ? r - 1 : 0);
            var o = 1;
            for (; o < r; o++) {
              i[o - 1] = arguments[o];
            }
            if (Object.assign) {
              return Object.assign.apply(Object, [e].concat(i));
            }
            t = 0;
            n = i.length;
            for (; t < n; t += 1) {
              (function () {
                var n = i[t];
                if (typeof n == "object" && n !== null) {
                  Object.keys(n).forEach(function (t) {
                    e[t] = n[t];
                  });
                }
              })();
            }
            return e;
          };
          e.getBrowserAlias = function (e) {
            return r.BROWSER_ALIASES_MAP[e];
          };
          e.getBrowserTypeByAlias = function (e) {
            return r.BROWSER_MAP[e] || "";
          };
          return e;
        }();
        t.default = i;
        e.exports = t.default;
      },
      18: function (e, t, n) {
        "use strict";

        t.__esModule = true;
        t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = undefined;
        t.BROWSER_ALIASES_MAP = {
          "Amazon Silk": "amazon_silk",
          "Android Browser": "android",
          Bada: "bada",
          BlackBerry: "blackberry",
          Chrome: "chrome",
          Chromium: "chromium",
          Electron: "electron",
          Epiphany: "epiphany",
          Firefox: "firefox",
          Focus: "focus",
          Generic: "generic",
          "Google Search": "google_search",
          Googlebot: "googlebot",
          "Internet Explorer": "ie",
          "K-Meleon": "k_meleon",
          Maxthon: "maxthon",
          "Microsoft Edge": "edge",
          "MZ Browser": "mz",
          "NAVER Whale Browser": "naver",
          Opera: "opera",
          "Opera Coast": "opera_coast",
          PhantomJS: "phantomjs",
          Puffin: "puffin",
          QupZilla: "qupzilla",
          QQ: "qq",
          QQLite: "qqlite",
          Safari: "safari",
          Sailfish: "sailfish",
          "Samsung Internet for Android": "samsung_internet",
          SeaMonkey: "seamonkey",
          Sleipnir: "sleipnir",
          Swing: "swing",
          Tizen: "tizen",
          "UC Browser": "uc",
          Vivaldi: "vivaldi",
          "WebOS Browser": "webos",
          WeChat: "wechat",
          "Yandex Browser": "yandex",
          Roku: "roku"
        };
        t.BROWSER_MAP = {
          amazon_silk: "Amazon Silk",
          android: "Android Browser",
          bada: "Bada",
          blackberry: "BlackBerry",
          chrome: "Chrome",
          chromium: "Chromium",
          electron: "Electron",
          epiphany: "Epiphany",
          firefox: "Firefox",
          focus: "Focus",
          generic: "Generic",
          googlebot: "Googlebot",
          google_search: "Google Search",
          ie: "Internet Explorer",
          k_meleon: "K-Meleon",
          maxthon: "Maxthon",
          edge: "Microsoft Edge",
          mz: "MZ Browser",
          naver: "NAVER Whale Browser",
          opera: "Opera",
          opera_coast: "Opera Coast",
          phantomjs: "PhantomJS",
          puffin: "Puffin",
          qupzilla: "QupZilla",
          qq: "QQ Browser",
          qqlite: "QQ Browser Lite",
          safari: "Safari",
          sailfish: "Sailfish",
          samsung_internet: "Samsung Internet for Android",
          seamonkey: "SeaMonkey",
          sleipnir: "Sleipnir",
          swing: "Swing",
          tizen: "Tizen",
          uc: "UC Browser",
          vivaldi: "Vivaldi",
          webos: "WebOS Browser",
          wechat: "WeChat",
          yandex: "Yandex Browser"
        };
        t.PLATFORMS_MAP = {
          tablet: "tablet",
          mobile: "mobile",
          desktop: "desktop",
          tv: "tv"
        };
        t.OS_MAP = {
          WindowsPhone: "Windows Phone",
          Windows: "Windows",
          MacOS: "macOS",
          iOS: "iOS",
          Android: "Android",
          WebOS: "WebOS",
          BlackBerry: "BlackBerry",
          Bada: "Bada",
          Tizen: "Tizen",
          Linux: "Linux",
          ChromeOS: "Chrome OS",
          PlayStation4: "PlayStation 4",
          Roku: "Roku"
        };
        t.ENGINE_MAP = {
          EdgeHTML: "EdgeHTML",
          Blink: "Blink",
          Trident: "Trident",
          Presto: "Presto",
          Gecko: "Gecko",
          WebKit: "WebKit"
        };
      },
      90: function (e, t, n) {
        "use strict";

        t.__esModule = true;
        t.default = undefined;
        var r;
        var i = (r = n(91)) && r.__esModule ? r : {
          default: r
        };
        var o = n(18);
        var a = function () {
          function e() {}
          e.getParser = function (e, t = false) {
            if (typeof e != "string") {
              throw Error("UserAgent should be a string");
            }
            return new i.default(e, t);
          };
          e.parse = function (e) {
            return new i.default(e).getResult();
          };
          (function (e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || false;
              r.configurable = true;
              if ("value" in r) {
                r.writable = true;
              }
              Object.defineProperty(e, r.key, r);
            }
          })(e, [{
            key: "BROWSER_MAP",
            get: function () {
              return o.BROWSER_MAP;
            }
          }, {
            key: "ENGINE_MAP",
            get: function () {
              return o.ENGINE_MAP;
            }
          }, {
            key: "OS_MAP",
            get: function () {
              return o.OS_MAP;
            }
          }, {
            key: "PLATFORMS_MAP",
            get: function () {
              return o.PLATFORMS_MAP;
            }
          }]);
          return e;
        }();
        t.default = a;
        e.exports = t.default;
      },
      91: function (e, t, n) {
        "use strict";

        t.__esModule = true;
        t.default = undefined;
        var r = u(n(92));
        var i = u(n(93));
        var o = u(n(94));
        var a = u(n(95));
        var s = u(n(17));
        function u(e) {
          if (e && e.__esModule) {
            return e;
          } else {
            return {
              default: e
            };
          }
        }
        var c = function () {
          function e(e, t = false) {
            if (e == null || e === "") {
              throw Error("UserAgent parameter can't be empty");
            }
            this._ua = e;
            this.parsedResult = {};
            if (t !== true) {
              this.parse();
            }
          }
          var t = e.prototype;
          t.getUA = function () {
            return this._ua;
          };
          t.test = function (e) {
            return e.test(this._ua);
          };
          t.parseBrowser = function () {
            var e = this;
            this.parsedResult.browser = {};
            var t = s.default.find(r.default, function (t) {
              if (typeof t.test == "function") {
                return t.test(e);
              }
              if (t.test instanceof Array) {
                return t.test.some(function (t) {
                  return e.test(t);
                });
              }
              throw Error("Browser's test function is not valid");
            });
            if (t) {
              this.parsedResult.browser = t.describe(this.getUA());
            }
            return this.parsedResult.browser;
          };
          t.getBrowser = function () {
            if (this.parsedResult.browser) {
              return this.parsedResult.browser;
            } else {
              return this.parseBrowser();
            }
          };
          t.getBrowserName = function (e) {
            if (e) {
              return String(this.getBrowser().name).toLowerCase() || "";
            } else {
              return this.getBrowser().name || "";
            }
          };
          t.getBrowserVersion = function () {
            return this.getBrowser().version;
          };
          t.getOS = function () {
            if (this.parsedResult.os) {
              return this.parsedResult.os;
            } else {
              return this.parseOS();
            }
          };
          t.parseOS = function () {
            var e = this;
            this.parsedResult.os = {};
            var t = s.default.find(i.default, function (t) {
              if (typeof t.test == "function") {
                return t.test(e);
              }
              if (t.test instanceof Array) {
                return t.test.some(function (t) {
                  return e.test(t);
                });
              }
              throw Error("Browser's test function is not valid");
            });
            if (t) {
              this.parsedResult.os = t.describe(this.getUA());
            }
            return this.parsedResult.os;
          };
          t.getOSName = function (e) {
            var t = this.getOS().name;
            if (e) {
              return String(t).toLowerCase() || "";
            } else {
              return t || "";
            }
          };
          t.getOSVersion = function () {
            return this.getOS().version;
          };
          t.getPlatform = function () {
            if (this.parsedResult.platform) {
              return this.parsedResult.platform;
            } else {
              return this.parsePlatform();
            }
          };
          t.getPlatformType = function (e = false) {
            var t = this.getPlatform().type;
            if (e) {
              return String(t).toLowerCase() || "";
            } else {
              return t || "";
            }
          };
          t.parsePlatform = function () {
            var e = this;
            this.parsedResult.platform = {};
            var t = s.default.find(o.default, function (t) {
              if (typeof t.test == "function") {
                return t.test(e);
              }
              if (t.test instanceof Array) {
                return t.test.some(function (t) {
                  return e.test(t);
                });
              }
              throw Error("Browser's test function is not valid");
            });
            if (t) {
              this.parsedResult.platform = t.describe(this.getUA());
            }
            return this.parsedResult.platform;
          };
          t.getEngine = function () {
            if (this.parsedResult.engine) {
              return this.parsedResult.engine;
            } else {
              return this.parseEngine();
            }
          };
          t.getEngineName = function (e) {
            if (e) {
              return String(this.getEngine().name).toLowerCase() || "";
            } else {
              return this.getEngine().name || "";
            }
          };
          t.parseEngine = function () {
            var e = this;
            this.parsedResult.engine = {};
            var t = s.default.find(a.default, function (t) {
              if (typeof t.test == "function") {
                return t.test(e);
              }
              if (t.test instanceof Array) {
                return t.test.some(function (t) {
                  return e.test(t);
                });
              }
              throw Error("Browser's test function is not valid");
            });
            if (t) {
              this.parsedResult.engine = t.describe(this.getUA());
            }
            return this.parsedResult.engine;
          };
          t.parse = function () {
            this.parseBrowser();
            this.parseOS();
            this.parsePlatform();
            this.parseEngine();
            return this;
          };
          t.getResult = function () {
            return s.default.assign({}, this.parsedResult);
          };
          t.satisfies = function (e) {
            var t = this;
            var n = {};
            var r = 0;
            var i = {};
            var o = 0;
            Object.keys(e).forEach(function (t) {
              var a = e[t];
              if (typeof a == "string") {
                i[t] = a;
                o += 1;
              } else if (typeof a == "object") {
                n[t] = a;
                r += 1;
              }
            });
            if (r > 0) {
              var a = Object.keys(n);
              var u = s.default.find(a, function (e) {
                return t.isOS(e);
              });
              if (u) {
                var c = this.satisfies(n[u]);
                if (c !== undefined) {
                  return c;
                }
              }
              var l = s.default.find(a, function (e) {
                return t.isPlatform(e);
              });
              if (l) {
                var f = this.satisfies(n[l]);
                if (f !== undefined) {
                  return f;
                }
              }
            }
            if (o > 0) {
              var h = Object.keys(i);
              var d = s.default.find(h, function (e) {
                return t.isBrowser(e, true);
              });
              if (d !== undefined) {
                return this.compareVersion(i[d]);
              }
            }
          };
          t.isBrowser = function (e, t = false) {
            var n = this.getBrowserName().toLowerCase();
            var r = e.toLowerCase();
            var i = s.default.getBrowserTypeByAlias(r);
            if (t && i) {
              r = i.toLowerCase();
            }
            return r === n;
          };
          t.compareVersion = function (e) {
            var t = [0];
            var n = e;
            var r = false;
            var i = this.getBrowserVersion();
            if (typeof i == "string") {
              if (e[0] === ">" || e[0] === "<") {
                n = e.substr(1);
                if (e[1] === "=") {
                  r = true;
                  n = e.substr(2);
                } else {
                  t = [];
                }
                if (e[0] === ">") {
                  t.push(1);
                } else {
                  t.push(-1);
                }
              } else if (e[0] === "=") {
                n = e.substr(1);
              } else if (e[0] === "~") {
                r = true;
                n = e.substr(1);
              }
              return t.indexOf(s.default.compareVersions(i, n, r)) > -1;
            }
          };
          t.isOS = function (e) {
            return this.getOSName(true) === String(e).toLowerCase();
          };
          t.isPlatform = function (e) {
            return this.getPlatformType(true) === String(e).toLowerCase();
          };
          t.isEngine = function (e) {
            return this.getEngineName(true) === String(e).toLowerCase();
          };
          t.is = function (e, t = false) {
            return this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e);
          };
          t.some = function (e) {
            var t = this;
            if (e === undefined) {
              e = [];
            }
            return e.some(function (e) {
              return t.is(e);
            });
          };
          return e;
        }();
        t.default = c;
        e.exports = t.default;
      },
      92: function (e, t, n) {
        "use strict";

        t.__esModule = true;
        t.default = undefined;
        var r;
        var i = (r = n(17)) && r.__esModule ? r : {
          default: r
        };
        var o = /version\/(\d+(\.?_?\d+)+)/i;
        var a = [{
          test: [/googlebot/i],
          describe: function (e) {
            var t = {
              name: "Googlebot"
            };
            var n = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || i.default.getFirstMatch(o, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/opera/i],
          describe: function (e) {
            var t = {
              name: "Opera"
            };
            var n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/opr\/|opios/i],
          describe: function (e) {
            var t = {
              name: "Opera"
            };
            var n = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || i.default.getFirstMatch(o, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/SamsungBrowser/i],
          describe: function (e) {
            var t = {
              name: "Samsung Internet for Android"
            };
            var n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/Whale/i],
          describe: function (e) {
            var t = {
              name: "NAVER Whale Browser"
            };
            var n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/MZBrowser/i],
          describe: function (e) {
            var t = {
              name: "MZ Browser"
            };
            var n = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(o, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/focus/i],
          describe: function (e) {
            var t = {
              name: "Focus"
            };
            var n = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(o, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/swing/i],
          describe: function (e) {
            var t = {
              name: "Swing"
            };
            var n = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(o, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/coast/i],
          describe: function (e) {
            var t = {
              name: "Opera Coast"
            };
            var n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/opt\/\d+(?:.?_?\d+)+/i],
          describe: function (e) {
            var t = {
              name: "Opera Touch"
            };
            var n = i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/yabrowser/i],
          describe: function (e) {
            var t = {
              name: "Yandex Browser"
            };
            var n = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/ucbrowser/i],
          describe: function (e) {
            var t = {
              name: "UC Browser"
            };
            var n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/Maxthon|mxios/i],
          describe: function (e) {
            var t = {
              name: "Maxthon"
            };
            var n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/epiphany/i],
          describe: function (e) {
            var t = {
              name: "Epiphany"
            };
            var n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/puffin/i],
          describe: function (e) {
            var t = {
              name: "Puffin"
            };
            var n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/sleipnir/i],
          describe: function (e) {
            var t = {
              name: "Sleipnir"
            };
            var n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/k-meleon/i],
          describe: function (e) {
            var t = {
              name: "K-Meleon"
            };
            var n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/micromessenger/i],
          describe: function (e) {
            var t = {
              name: "WeChat"
            };
            var n = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/qqbrowser/i],
          describe: function (e) {
            var t = {
              name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
            };
            var n = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/msie|trident/i],
          describe: function (e) {
            var t = {
              name: "Internet Explorer"
            };
            var n = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/\sedg\//i],
          describe: function (e) {
            var t = {
              name: "Microsoft Edge"
            };
            var n = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/edg([ea]|ios)/i],
          describe: function (e) {
            var t = {
              name: "Microsoft Edge"
            };
            var n = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/vivaldi/i],
          describe: function (e) {
            var t = {
              name: "Vivaldi"
            };
            var n = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/seamonkey/i],
          describe: function (e) {
            var t = {
              name: "SeaMonkey"
            };
            var n = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/sailfish/i],
          describe: function (e) {
            var t = {
              name: "Sailfish"
            };
            var n = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/silk/i],
          describe: function (e) {
            var t = {
              name: "Amazon Silk"
            };
            var n = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/phantom/i],
          describe: function (e) {
            var t = {
              name: "PhantomJS"
            };
            var n = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/slimerjs/i],
          describe: function (e) {
            var t = {
              name: "SlimerJS"
            };
            var n = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
          describe: function (e) {
            var t = {
              name: "BlackBerry"
            };
            var n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/(web|hpw)[o0]s/i],
          describe: function (e) {
            var t = {
              name: "WebOS Browser"
            };
            var n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/bada/i],
          describe: function (e) {
            var t = {
              name: "Bada"
            };
            var n = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/tizen/i],
          describe: function (e) {
            var t = {
              name: "Tizen"
            };
            var n = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/qupzilla/i],
          describe: function (e) {
            var t = {
              name: "QupZilla"
            };
            var n = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/firefox|iceweasel|fxios/i],
          describe: function (e) {
            var t = {
              name: "Firefox"
            };
            var n = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/electron/i],
          describe: function (e) {
            var t = {
              name: "Electron"
            };
            var n = i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/MiuiBrowser/i],
          describe: function (e) {
            var t = {
              name: "Miui"
            };
            var n = i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/chromium/i],
          describe: function (e) {
            var t = {
              name: "Chromium"
            };
            var n = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/chrome|crios|crmo/i],
          describe: function (e) {
            var t = {
              name: "Chrome"
            };
            var n = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/GSA/i],
          describe: function (e) {
            var t = {
              name: "Google Search"
            };
            var n = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: function (e) {
            var t = !e.test(/like android/i);
            var n = e.test(/android/i);
            return t && n;
          },
          describe: function (e) {
            var t = {
              name: "Android Browser"
            };
            var n = i.default.getFirstMatch(o, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/playstation 4/i],
          describe: function (e) {
            var t = {
              name: "PlayStation 4"
            };
            var n = i.default.getFirstMatch(o, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/safari|applewebkit/i],
          describe: function (e) {
            var t = {
              name: "Safari"
            };
            var n = i.default.getFirstMatch(o, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/.*/i],
          describe: function (e) {
            var t = e.search("\\(") !== -1 ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
            return {
              name: i.default.getFirstMatch(t, e),
              version: i.default.getSecondMatch(t, e)
            };
          }
        }];
        t.default = a;
        e.exports = t.default;
      },
      93: function (e, t, n) {
        "use strict";

        t.__esModule = true;
        t.default = undefined;
        var r;
        var i = (r = n(17)) && r.__esModule ? r : {
          default: r
        };
        var o = n(18);
        var a = [{
          test: [/Roku\/DVP/],
          describe: function (e) {
            var t = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
            return {
              name: o.OS_MAP.Roku,
              version: t
            };
          }
        }, {
          test: [/windows phone/i],
          describe: function (e) {
            var t = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
            return {
              name: o.OS_MAP.WindowsPhone,
              version: t
            };
          }
        }, {
          test: [/windows /i],
          describe: function (e) {
            var t = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e);
            var n = i.default.getWindowsVersionName(t);
            return {
              name: o.OS_MAP.Windows,
              version: t,
              versionName: n
            };
          }
        }, {
          test: [/Macintosh(.*?) FxiOS(.*?)\//],
          describe: function (e) {
            var t = {
              name: o.OS_MAP.iOS
            };
            var n = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/macintosh/i],
          describe: function (e) {
            var t = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, ".");
            var n = i.default.getMacOSVersionName(t);
            var r = {
              name: o.OS_MAP.MacOS,
              version: t
            };
            if (n) {
              r.versionName = n;
            }
            return r;
          }
        }, {
          test: [/(ipod|iphone|ipad)/i],
          describe: function (e) {
            var t = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
            return {
              name: o.OS_MAP.iOS,
              version: t
            };
          }
        }, {
          test: function (e) {
            var t = !e.test(/like android/i);
            var n = e.test(/android/i);
            return t && n;
          },
          describe: function (e) {
            var t = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e);
            var n = i.default.getAndroidVersionName(t);
            var r = {
              name: o.OS_MAP.Android,
              version: t
            };
            if (n) {
              r.versionName = n;
            }
            return r;
          }
        }, {
          test: [/(web|hpw)[o0]s/i],
          describe: function (e) {
            var t = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e);
            var n = {
              name: o.OS_MAP.WebOS
            };
            if (t && t.length) {
              n.version = t;
            }
            return n;
          }
        }, {
          test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
          describe: function (e) {
            var t = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || i.default.getFirstMatch(/\bbb(\d+)/i, e);
            return {
              name: o.OS_MAP.BlackBerry,
              version: t
            };
          }
        }, {
          test: [/bada/i],
          describe: function (e) {
            var t = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
            return {
              name: o.OS_MAP.Bada,
              version: t
            };
          }
        }, {
          test: [/tizen/i],
          describe: function (e) {
            var t = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
            return {
              name: o.OS_MAP.Tizen,
              version: t
            };
          }
        }, {
          test: [/linux/i],
          describe: function () {
            return {
              name: o.OS_MAP.Linux
            };
          }
        }, {
          test: [/CrOS/],
          describe: function () {
            return {
              name: o.OS_MAP.ChromeOS
            };
          }
        }, {
          test: [/PlayStation 4/],
          describe: function (e) {
            var t = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
            return {
              name: o.OS_MAP.PlayStation4,
              version: t
            };
          }
        }];
        t.default = a;
        e.exports = t.default;
      },
      94: function (e, t, n) {
        "use strict";

        t.__esModule = true;
        t.default = undefined;
        var r;
        var i = (r = n(17)) && r.__esModule ? r : {
          default: r
        };
        var o = n(18);
        var a = [{
          test: [/googlebot/i],
          describe: function () {
            return {
              type: "bot",
              vendor: "Google"
            };
          }
        }, {
          test: [/huawei/i],
          describe: function (e) {
            var t = i.default.getFirstMatch(/(can-l01)/i, e) && "Nova";
            var n = {
              type: o.PLATFORMS_MAP.mobile,
              vendor: "Huawei"
            };
            if (t) {
              n.model = t;
            }
            return n;
          }
        }, {
          test: [/nexus\s*(?:7|8|9|10).*/i],
          describe: function () {
            return {
              type: o.PLATFORMS_MAP.tablet,
              vendor: "Nexus"
            };
          }
        }, {
          test: [/ipad/i],
          describe: function () {
            return {
              type: o.PLATFORMS_MAP.tablet,
              vendor: "Apple",
              model: "iPad"
            };
          }
        }, {
          test: [/Macintosh(.*?) FxiOS(.*?)\//],
          describe: function () {
            return {
              type: o.PLATFORMS_MAP.tablet,
              vendor: "Apple",
              model: "iPad"
            };
          }
        }, {
          test: [/kftt build/i],
          describe: function () {
            return {
              type: o.PLATFORMS_MAP.tablet,
              vendor: "Amazon",
              model: "Kindle Fire HD 7"
            };
          }
        }, {
          test: [/silk/i],
          describe: function () {
            return {
              type: o.PLATFORMS_MAP.tablet,
              vendor: "Amazon"
            };
          }
        }, {
          test: [/tablet(?! pc)/i],
          describe: function () {
            return {
              type: o.PLATFORMS_MAP.tablet
            };
          }
        }, {
          test: function (e) {
            var t = e.test(/ipod|iphone/i);
            var n = e.test(/like (ipod|iphone)/i);
            return t && !n;
          },
          describe: function (e) {
            var t = i.default.getFirstMatch(/(ipod|iphone)/i, e);
            return {
              type: o.PLATFORMS_MAP.mobile,
              vendor: "Apple",
              model: t
            };
          }
        }, {
          test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
          describe: function () {
            return {
              type: o.PLATFORMS_MAP.mobile,
              vendor: "Nexus"
            };
          }
        }, {
          test: [/[^-]mobi/i],
          describe: function () {
            return {
              type: o.PLATFORMS_MAP.mobile
            };
          }
        }, {
          test: function (e) {
            return e.getBrowserName(true) === "blackberry";
          },
          describe: function () {
            return {
              type: o.PLATFORMS_MAP.mobile,
              vendor: "BlackBerry"
            };
          }
        }, {
          test: function (e) {
            return e.getBrowserName(true) === "bada";
          },
          describe: function () {
            return {
              type: o.PLATFORMS_MAP.mobile
            };
          }
        }, {
          test: function (e) {
            return e.getBrowserName() === "windows phone";
          },
          describe: function () {
            return {
              type: o.PLATFORMS_MAP.mobile,
              vendor: "Microsoft"
            };
          }
        }, {
          test: function (e) {
            var t = Number(String(e.getOSVersion()).split(".")[0]);
            return e.getOSName(true) === "android" && t >= 3;
          },
          describe: function () {
            return {
              type: o.PLATFORMS_MAP.tablet
            };
          }
        }, {
          test: function (e) {
            return e.getOSName(true) === "android";
          },
          describe: function () {
            return {
              type: o.PLATFORMS_MAP.mobile
            };
          }
        }, {
          test: function (e) {
            return e.getOSName(true) === "macos";
          },
          describe: function () {
            return {
              type: o.PLATFORMS_MAP.desktop,
              vendor: "Apple"
            };
          }
        }, {
          test: function (e) {
            return e.getOSName(true) === "windows";
          },
          describe: function () {
            return {
              type: o.PLATFORMS_MAP.desktop
            };
          }
        }, {
          test: function (e) {
            return e.getOSName(true) === "linux";
          },
          describe: function () {
            return {
              type: o.PLATFORMS_MAP.desktop
            };
          }
        }, {
          test: function (e) {
            return e.getOSName(true) === "playstation 4";
          },
          describe: function () {
            return {
              type: o.PLATFORMS_MAP.tv
            };
          }
        }, {
          test: function (e) {
            return e.getOSName(true) === "roku";
          },
          describe: function () {
            return {
              type: o.PLATFORMS_MAP.tv
            };
          }
        }];
        t.default = a;
        e.exports = t.default;
      },
      95: function (e, t, n) {
        "use strict";

        t.__esModule = true;
        t.default = undefined;
        var r;
        var i = (r = n(17)) && r.__esModule ? r : {
          default: r
        };
        var o = n(18);
        var a = [{
          test: function (e) {
            return e.getBrowserName(true) === "microsoft edge";
          },
          describe: function (e) {
            if (/\sedg\//i.test(e)) {
              return {
                name: o.ENGINE_MAP.Blink
              };
            }
            var t = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
            return {
              name: o.ENGINE_MAP.EdgeHTML,
              version: t
            };
          }
        }, {
          test: [/trident/i],
          describe: function (e) {
            var t = {
              name: o.ENGINE_MAP.Trident
            };
            var n = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: function (e) {
            return e.test(/presto/i);
          },
          describe: function (e) {
            var t = {
              name: o.ENGINE_MAP.Presto
            };
            var n = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: function (e) {
            var t = e.test(/gecko/i);
            var n = e.test(/like gecko/i);
            return t && !n;
          },
          describe: function (e) {
            var t = {
              name: o.ENGINE_MAP.Gecko
            };
            var n = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }, {
          test: [/(apple)?webkit\/537\.36/i],
          describe: function () {
            return {
              name: o.ENGINE_MAP.Blink
            };
          }
        }, {
          test: [/(apple)?webkit/i],
          describe: function (e) {
            var t = {
              name: o.ENGINE_MAP.WebKit
            };
            var n = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
            if (n) {
              t.version = n;
            }
            return t;
          }
        }];
        t.default = a;
        e.exports = t.default;
      }
    });
  };
  module.exports = t();
}