// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 757289
         */
module.exports = function (module, exports, require) {
  var e;
  e = function () {
    return function (t) {
      var e = {};
      function r(n) {
        if (e[n]) {
          return e[n].exports;
        }
        var o = e[n] = {
          i: n,
          l: false,
          exports: {}
        };
        t[n].call(o.exports, o, o.exports, r);
        o.l = true;
        return o.exports;
      }
      r.m = t;
      r.c = e;
      r.d = function (t, e, n) {
        if (!r.o(t, e)) {
          Object.defineProperty(t, e, {
            enumerable: true,
            get: n
          });
        }
      };
      r.r = function (t) {
        if (typeof Symbol != "undefined" && Symbol.toStringTag) {
          Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
          });
        }
        Object.defineProperty(t, "__esModule", {
          value: true
        });
      };
      r.t = function (t, e) {
        if (e & 1) {
          t = r(t);
        }
        if (e & 8 || e & 4 && typeof t == "object" && t && t.__esModule) {
          return t;
        }
        var n = Object.create(null);
        r.r(n);
        Object.defineProperty(n, "default", {
          enumerable: true,
          value: t
        });
        if (e & 2 && typeof t != "string") {
          for (var o in t) {
            r.d(n, o, function (e) {
              return t[e];
            }.bind(null, o));
          }
        }
        return n;
      };
      r.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default;
        } : function () {
          return t;
        };
        r.d(e, "a", e);
        return e;
      };
      r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      };
      r.p = "";
      return r(r.s = 90);
    }({
      17: function (t, e, r) {
        "use strict";

        e.__esModule = true;
        e.default = undefined;
        var n = r(18);
        var o = function () {
          function t() {}
          t.getFirstMatch = function (t, e) {
            var r = e.match(t);
            return r && r.length > 0 && r[1] || "";
          };
          t.getSecondMatch = function (t, e) {
            var r = e.match(t);
            return r && r.length > 1 && r[2] || "";
          };
          t.matchAndReturnConst = function (t, e, r) {
            if (t.test(e)) {
              return r;
            }
          };
          t.getWindowsVersionName = function (t) {
            switch (t) {
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
          t.getMacOSVersionName = function (t) {
            var e = t.split(".").splice(0, 2).map(function (t) {
              return parseInt(t, 10) || 0;
            });
            e.push(0);
            var r = e[0];
            var n = e[1];
            if (r === 10) {
              switch (n) {
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
            switch (r) {
              case 11:
                return "Big Sur";
              case 12:
                return "Monterey";
              case 13:
                return "Ventura";
              case 14:
                return "Sonoma";
              case 15:
                return "Sequoia";
              default:
                return;
            }
          };
          t.getAndroidVersionName = function (t) {
            var e = t.split(".").splice(0, 2).map(function (t) {
              return parseInt(t, 10) || 0;
            });
            e.push(0);
            if (e[0] !== 1 || !(e[1] < 5)) {
              if (e[0] === 1 && e[1] < 6) {
                return "Cupcake";
              } else if (e[0] === 1 && e[1] >= 6) {
                return "Donut";
              } else if (e[0] === 2 && e[1] < 2) {
                return "Eclair";
              } else if (e[0] === 2 && e[1] === 2) {
                return "Froyo";
              } else if (e[0] === 2 && e[1] > 2) {
                return "Gingerbread";
              } else if (e[0] === 3) {
                return "Honeycomb";
              } else if (e[0] === 4 && e[1] < 1) {
                return "Ice Cream Sandwich";
              } else if (e[0] === 4 && e[1] < 4) {
                return "Jelly Bean";
              } else if (e[0] === 4 && e[1] >= 4) {
                return "KitKat";
              } else if (e[0] === 5) {
                return "Lollipop";
              } else if (e[0] === 6) {
                return "Marshmallow";
              } else if (e[0] === 7) {
                return "Nougat";
              } else if (e[0] === 8) {
                return "Oreo";
              } else if (e[0] === 9) {
                return "Pie";
              } else {
                return undefined;
              }
            }
          };
          t.getVersionPrecision = function (t) {
            return t.split(".").length;
          };
          t.compareVersions = function (e, r, n = false) {
            var o = t.getVersionPrecision(e);
            var i = t.getVersionPrecision(r);
            var u = Math.max(o, i);
            var a = 0;
            var s = t.map([e, r], function (e) {
              var r = u - t.getVersionPrecision(e);
              var n = e + Array(r + 1).join(".0");
              return t.map(n.split("."), function (t) {
                return Array(20 - t.length).join("0") + t;
              }).reverse();
            });
            if (n) {
              a = u - Math.min(o, i);
            }
            u -= 1;
            while (u >= a) {
              if (s[0][u] > s[1][u]) {
                return 1;
              }
              if (s[0][u] === s[1][u]) {
                if (u === a) {
                  return 0;
                }
                u -= 1;
              } else if (s[0][u] < s[1][u]) {
                return -1;
              }
            }
          };
          t.map = function (t, e) {
            var r;
            var n = [];
            if (Array.prototype.map) {
              return Array.prototype.map.call(t, e);
            }
            for (r = 0; r < t.length; r += 1) {
              n.push(e(t[r]));
            }
            return n;
          };
          t.find = function (t, e) {
            var r;
            var n;
            if (Array.prototype.find) {
              return Array.prototype.find.call(t, e);
            }
            r = 0;
            n = t.length;
            for (; r < n; r += 1) {
              var o = t[r];
              if (e(o, r)) {
                return o;
              }
            }
          };
          t.assign = function (t) {
            var e;
            var r;
            var n = arguments.length;
            var o = Array(n > 1 ? n - 1 : 0);
            var i = 1;
            for (; i < n; i++) {
              o[i - 1] = arguments[i];
            }
            if (Object.assign) {
              return Object.assign.apply(Object, [t].concat(o));
            }
            e = 0;
            r = o.length;
            for (; e < r; e += 1) {
              (function () {
                var r = o[e];
                if (typeof r == "object" && r !== null) {
                  Object.keys(r).forEach(function (e) {
                    t[e] = r[e];
                  });
                }
              })();
            }
            return t;
          };
          t.getBrowserAlias = function (t) {
            return n.BROWSER_ALIASES_MAP[t];
          };
          t.getBrowserTypeByAlias = function (t) {
            return n.BROWSER_MAP[t] || "";
          };
          return t;
        }();
        e.default = o;
        t.exports = e.default;
      },
      18: function (t, e, r) {
        "use strict";

        e.__esModule = true;
        e.ENGINE_MAP = e.OS_MAP = e.PLATFORMS_MAP = e.BROWSER_MAP = e.BROWSER_ALIASES_MAP = undefined;
        e.BROWSER_ALIASES_MAP = {
          AmazonBot: "amazonbot",
          "Amazon Silk": "amazon_silk",
          "Android Browser": "android",
          BaiduSpider: "baiduspider",
          Bada: "bada",
          BingCrawler: "bingcrawler",
          BlackBerry: "blackberry",
          "ChatGPT-User": "chatgpt_user",
          Chrome: "chrome",
          ClaudeBot: "claudebot",
          Chromium: "chromium",
          Diffbot: "diffbot",
          DuckDuckBot: "duckduckbot",
          Electron: "electron",
          Epiphany: "epiphany",
          FacebookExternalHit: "facebookexternalhit",
          Firefox: "firefox",
          Focus: "focus",
          Generic: "generic",
          "Google Search": "google_search",
          Googlebot: "googlebot",
          GPTBot: "gptbot",
          "Internet Explorer": "ie",
          InternetArchiveCrawler: "internetarchivecrawler",
          "K-Meleon": "k_meleon",
          LibreWolf: "librewolf",
          Maxthon: "maxthon",
          "Meta-ExternalAds": "meta_externalads",
          "Meta-ExternalAgent": "meta_externalagent",
          "Meta-ExternalFetcher": "meta_externalfetcher",
          "Meta-WebIndexer": "meta_webindexer",
          "Microsoft Edge": "edge",
          "MZ Browser": "mz",
          "NAVER Whale Browser": "naver",
          "OAI-SearchBot": "oai_searchbot",
          Omgilibot: "omgilibot",
          Opera: "opera",
          "Opera Coast": "opera_coast",
          "Pale Moon": "pale_moon",
          PerplexityBot: "perplexitybot",
          "Perplexity-User": "perplexity_user",
          PhantomJS: "phantomjs",
          PingdomBot: "pingdombot",
          Puffin: "puffin",
          QQ: "qq",
          QQLite: "qqlite",
          QupZilla: "qupzilla",
          Roku: "roku",
          Safari: "safari",
          Sailfish: "sailfish",
          "Samsung Internet for Android": "samsung_internet",
          SeaMonkey: "seamonkey",
          Sleipnir: "sleipnir",
          "Sogou Browser": "sogou",
          Swing: "swing",
          Tizen: "tizen",
          "UC Browser": "uc",
          Vivaldi: "vivaldi",
          "WebOS Browser": "webos",
          WeChat: "wechat",
          YahooSlurp: "yahooslurp",
          "Yandex Browser": "yandex",
          YandexBot: "yandexbot",
          YouBot: "youbot"
        };
        e.BROWSER_MAP = {
          amazonbot: "AmazonBot",
          amazon_silk: "Amazon Silk",
          android: "Android Browser",
          baiduspider: "BaiduSpider",
          bada: "Bada",
          bingcrawler: "BingCrawler",
          blackberry: "BlackBerry",
          chatgpt_user: "ChatGPT-User",
          chrome: "Chrome",
          claudebot: "ClaudeBot",
          chromium: "Chromium",
          diffbot: "Diffbot",
          duckduckbot: "DuckDuckBot",
          edge: "Microsoft Edge",
          electron: "Electron",
          epiphany: "Epiphany",
          facebookexternalhit: "FacebookExternalHit",
          firefox: "Firefox",
          focus: "Focus",
          generic: "Generic",
          google_search: "Google Search",
          googlebot: "Googlebot",
          gptbot: "GPTBot",
          ie: "Internet Explorer",
          internetarchivecrawler: "InternetArchiveCrawler",
          k_meleon: "K-Meleon",
          librewolf: "LibreWolf",
          maxthon: "Maxthon",
          meta_externalads: "Meta-ExternalAds",
          meta_externalagent: "Meta-ExternalAgent",
          meta_externalfetcher: "Meta-ExternalFetcher",
          meta_webindexer: "Meta-WebIndexer",
          mz: "MZ Browser",
          naver: "NAVER Whale Browser",
          oai_searchbot: "OAI-SearchBot",
          omgilibot: "Omgilibot",
          opera: "Opera",
          opera_coast: "Opera Coast",
          pale_moon: "Pale Moon",
          perplexitybot: "PerplexityBot",
          perplexity_user: "Perplexity-User",
          phantomjs: "PhantomJS",
          pingdombot: "PingdomBot",
          puffin: "Puffin",
          qq: "QQ Browser",
          qqlite: "QQ Browser Lite",
          qupzilla: "QupZilla",
          roku: "Roku",
          safari: "Safari",
          sailfish: "Sailfish",
          samsung_internet: "Samsung Internet for Android",
          seamonkey: "SeaMonkey",
          sleipnir: "Sleipnir",
          sogou: "Sogou Browser",
          swing: "Swing",
          tizen: "Tizen",
          uc: "UC Browser",
          vivaldi: "Vivaldi",
          webos: "WebOS Browser",
          wechat: "WeChat",
          yahooslurp: "YahooSlurp",
          yandex: "Yandex Browser",
          yandexbot: "YandexBot",
          youbot: "YouBot"
        };
        e.PLATFORMS_MAP = {
          bot: "bot",
          desktop: "desktop",
          mobile: "mobile",
          tablet: "tablet",
          tv: "tv"
        };
        e.OS_MAP = {
          Android: "Android",
          Bada: "Bada",
          BlackBerry: "BlackBerry",
          ChromeOS: "Chrome OS",
          HarmonyOS: "HarmonyOS",
          iOS: "iOS",
          Linux: "Linux",
          MacOS: "macOS",
          PlayStation4: "PlayStation 4",
          Roku: "Roku",
          Tizen: "Tizen",
          WebOS: "WebOS",
          Windows: "Windows",
          WindowsPhone: "Windows Phone"
        };
        e.ENGINE_MAP = {
          Blink: "Blink",
          EdgeHTML: "EdgeHTML",
          Gecko: "Gecko",
          Presto: "Presto",
          Trident: "Trident",
          WebKit: "WebKit"
        };
      },
      90: function (t, e, r) {
        "use strict";

        e.__esModule = true;
        e.default = undefined;
        var n;
        var o = (n = r(91)) && n.__esModule ? n : {
          default: n
        };
        var i = r(18);
        var u = function () {
          function t() {}
          t.getParser = function (t, e = false) {
            if (typeof t != "string") {
              throw Error("UserAgent should be a string");
            }
            return new o.default(t, e);
          };
          t.parse = function (t) {
            return new o.default(t).getResult();
          };
          (function (t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              n.enumerable = n.enumerable || false;
              n.configurable = true;
              if ("value" in n) {
                n.writable = true;
              }
              Object.defineProperty(t, n.key, n);
            }
          })(t, [{
            key: "BROWSER_MAP",
            get: function () {
              return i.BROWSER_MAP;
            }
          }, {
            key: "ENGINE_MAP",
            get: function () {
              return i.ENGINE_MAP;
            }
          }, {
            key: "OS_MAP",
            get: function () {
              return i.OS_MAP;
            }
          }, {
            key: "PLATFORMS_MAP",
            get: function () {
              return i.PLATFORMS_MAP;
            }
          }]);
          return t;
        }();
        e.default = u;
        t.exports = e.default;
      },
      91: function (t, e, r) {
        "use strict";

        e.__esModule = true;
        e.default = undefined;
        var n = s(r(92));
        var o = s(r(93));
        var i = s(r(94));
        var u = s(r(95));
        var a = s(r(17));
        function s(t) {
          if (t && t.__esModule) {
            return t;
          } else {
            return {
              default: t
            };
          }
        }
        var c = function () {
          function t(t, e = false) {
            if (t == null || t === "") {
              throw Error("UserAgent parameter can't be empty");
            }
            this._ua = t;
            this.parsedResult = {};
            if (e !== true) {
              this.parse();
            }
          }
          var e = t.prototype;
          e.getUA = function () {
            return this._ua;
          };
          e.test = function (t) {
            return t.test(this._ua);
          };
          e.parseBrowser = function () {
            var t = this;
            this.parsedResult.browser = {};
            var e = a.default.find(n.default, function (e) {
              if (typeof e.test == "function") {
                return e.test(t);
              }
              if (Array.isArray(e.test)) {
                return e.test.some(function (e) {
                  return t.test(e);
                });
              }
              throw Error("Browser's test function is not valid");
            });
            if (e) {
              this.parsedResult.browser = e.describe(this.getUA());
            }
            return this.parsedResult.browser;
          };
          e.getBrowser = function () {
            if (this.parsedResult.browser) {
              return this.parsedResult.browser;
            } else {
              return this.parseBrowser();
            }
          };
          e.getBrowserName = function (t) {
            if (t) {
              return String(this.getBrowser().name).toLowerCase() || "";
            } else {
              return this.getBrowser().name || "";
            }
          };
          e.getBrowserVersion = function () {
            return this.getBrowser().version;
          };
          e.getOS = function () {
            if (this.parsedResult.os) {
              return this.parsedResult.os;
            } else {
              return this.parseOS();
            }
          };
          e.parseOS = function () {
            var t = this;
            this.parsedResult.os = {};
            var e = a.default.find(o.default, function (e) {
              if (typeof e.test == "function") {
                return e.test(t);
              }
              if (Array.isArray(e.test)) {
                return e.test.some(function (e) {
                  return t.test(e);
                });
              }
              throw Error("Browser's test function is not valid");
            });
            if (e) {
              this.parsedResult.os = e.describe(this.getUA());
            }
            return this.parsedResult.os;
          };
          e.getOSName = function (t) {
            var e = this.getOS().name;
            if (t) {
              return String(e).toLowerCase() || "";
            } else {
              return e || "";
            }
          };
          e.getOSVersion = function () {
            return this.getOS().version;
          };
          e.getPlatform = function () {
            if (this.parsedResult.platform) {
              return this.parsedResult.platform;
            } else {
              return this.parsePlatform();
            }
          };
          e.getPlatformType = function (t = false) {
            var e = this.getPlatform().type;
            if (t) {
              return String(e).toLowerCase() || "";
            } else {
              return e || "";
            }
          };
          e.parsePlatform = function () {
            var t = this;
            this.parsedResult.platform = {};
            var e = a.default.find(i.default, function (e) {
              if (typeof e.test == "function") {
                return e.test(t);
              }
              if (Array.isArray(e.test)) {
                return e.test.some(function (e) {
                  return t.test(e);
                });
              }
              throw Error("Browser's test function is not valid");
            });
            if (e) {
              this.parsedResult.platform = e.describe(this.getUA());
            }
            return this.parsedResult.platform;
          };
          e.getEngine = function () {
            if (this.parsedResult.engine) {
              return this.parsedResult.engine;
            } else {
              return this.parseEngine();
            }
          };
          e.getEngineName = function (t) {
            if (t) {
              return String(this.getEngine().name).toLowerCase() || "";
            } else {
              return this.getEngine().name || "";
            }
          };
          e.parseEngine = function () {
            var t = this;
            this.parsedResult.engine = {};
            var e = a.default.find(u.default, function (e) {
              if (typeof e.test == "function") {
                return e.test(t);
              }
              if (Array.isArray(e.test)) {
                return e.test.some(function (e) {
                  return t.test(e);
                });
              }
              throw Error("Browser's test function is not valid");
            });
            if (e) {
              this.parsedResult.engine = e.describe(this.getUA());
            }
            return this.parsedResult.engine;
          };
          e.parse = function () {
            this.parseBrowser();
            this.parseOS();
            this.parsePlatform();
            this.parseEngine();
            return this;
          };
          e.getResult = function () {
            return a.default.assign({}, this.parsedResult);
          };
          e.satisfies = function (t) {
            var e = this;
            var r = {};
            var n = 0;
            var o = {};
            var i = 0;
            Object.keys(t).forEach(function (e) {
              var u = t[e];
              if (typeof u == "string") {
                o[e] = u;
                i += 1;
              } else if (typeof u == "object") {
                r[e] = u;
                n += 1;
              }
            });
            if (n > 0) {
              var u = Object.keys(r);
              var s = a.default.find(u, function (t) {
                return e.isOS(t);
              });
              if (s) {
                var c = this.satisfies(r[s]);
                if (c !== undefined) {
                  return c;
                }
              }
              var f = a.default.find(u, function (t) {
                return e.isPlatform(t);
              });
              if (f) {
                var l = this.satisfies(r[f]);
                if (l !== undefined) {
                  return l;
                }
              }
            }
            if (i > 0) {
              var p = Object.keys(o);
              var d = a.default.find(p, function (t) {
                return e.isBrowser(t, true);
              });
              if (d !== undefined) {
                return this.compareVersion(o[d]);
              }
            }
          };
          e.isBrowser = function (t, e = false) {
            var r = this.getBrowserName().toLowerCase();
            var n = t.toLowerCase();
            var o = a.default.getBrowserTypeByAlias(n);
            if (e && o) {
              n = o.toLowerCase();
            }
            return n === r;
          };
          e.compareVersion = function (t) {
            var e = [0];
            var r = t;
            var n = false;
            var o = this.getBrowserVersion();
            if (typeof o == "string") {
              if (t[0] === ">" || t[0] === "<") {
                r = t.substr(1);
                if (t[1] === "=") {
                  n = true;
                  r = t.substr(2);
                } else {
                  e = [];
                }
                if (t[0] === ">") {
                  e.push(1);
                } else {
                  e.push(-1);
                }
              } else if (t[0] === "=") {
                r = t.substr(1);
              } else if (t[0] === "~") {
                n = true;
                r = t.substr(1);
              }
              return e.indexOf(a.default.compareVersions(o, r, n)) > -1;
            }
          };
          e.isOS = function (t) {
            return this.getOSName(true) === String(t).toLowerCase();
          };
          e.isPlatform = function (t) {
            return this.getPlatformType(true) === String(t).toLowerCase();
          };
          e.isEngine = function (t) {
            return this.getEngineName(true) === String(t).toLowerCase();
          };
          e.is = function (t, e = false) {
            return this.isBrowser(t, e) || this.isOS(t) || this.isPlatform(t);
          };
          e.some = function (t) {
            var e = this;
            if (t === undefined) {
              t = [];
            }
            return t.some(function (t) {
              return e.is(t);
            });
          };
          return t;
        }();
        e.default = c;
        t.exports = e.default;
      },
      92: function (t, e, r) {
        "use strict";

        e.__esModule = true;
        e.default = undefined;
        var n;
        var o = (n = r(17)) && n.__esModule ? n : {
          default: n
        };
        var i = /version\/(\d+(\.?_?\d+)+)/i;
        var u = [{
          test: [/gptbot/i],
          describe: function (t) {
            var e = {
              name: "GPTBot"
            };
            var r = o.default.getFirstMatch(/gptbot\/(\d+(\.\d+)+)/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/chatgpt-user/i],
          describe: function (t) {
            var e = {
              name: "ChatGPT-User"
            };
            var r = o.default.getFirstMatch(/chatgpt-user\/(\d+(\.\d+)+)/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/oai-searchbot/i],
          describe: function (t) {
            var e = {
              name: "OAI-SearchBot"
            };
            var r = o.default.getFirstMatch(/oai-searchbot\/(\d+(\.\d+)+)/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/claudebot/i, /claude-web/i, /claude-user/i, /claude-searchbot/i],
          describe: function (t) {
            var e = {
              name: "ClaudeBot"
            };
            var r = o.default.getFirstMatch(/(?:claudebot|claude-web|claude-user|claude-searchbot)\/(\d+(\.\d+)+)/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/omgilibot/i, /webzio-extended/i],
          describe: function (t) {
            var e = {
              name: "Omgilibot"
            };
            var r = o.default.getFirstMatch(/(?:omgilibot|webzio-extended)\/(\d+(\.\d+)+)/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/diffbot/i],
          describe: function (t) {
            var e = {
              name: "Diffbot"
            };
            var r = o.default.getFirstMatch(/diffbot\/(\d+(\.\d+)+)/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/perplexitybot/i],
          describe: function (t) {
            var e = {
              name: "PerplexityBot"
            };
            var r = o.default.getFirstMatch(/perplexitybot\/(\d+(\.\d+)+)/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/perplexity-user/i],
          describe: function (t) {
            var e = {
              name: "Perplexity-User"
            };
            var r = o.default.getFirstMatch(/perplexity-user\/(\d+(\.\d+)+)/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/youbot/i],
          describe: function (t) {
            var e = {
              name: "YouBot"
            };
            var r = o.default.getFirstMatch(/youbot\/(\d+(\.\d+)+)/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/meta-webindexer/i],
          describe: function (t) {
            var e = {
              name: "Meta-WebIndexer"
            };
            var r = o.default.getFirstMatch(/meta-webindexer\/(\d+(\.\d+)+)/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/meta-externalads/i],
          describe: function (t) {
            var e = {
              name: "Meta-ExternalAds"
            };
            var r = o.default.getFirstMatch(/meta-externalads\/(\d+(\.\d+)+)/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/meta-externalagent/i],
          describe: function (t) {
            var e = {
              name: "Meta-ExternalAgent"
            };
            var r = o.default.getFirstMatch(/meta-externalagent\/(\d+(\.\d+)+)/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/meta-externalfetcher/i],
          describe: function (t) {
            var e = {
              name: "Meta-ExternalFetcher"
            };
            var r = o.default.getFirstMatch(/meta-externalfetcher\/(\d+(\.\d+)+)/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/googlebot/i],
          describe: function (t) {
            var e = {
              name: "Googlebot"
            };
            var r = o.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/amazonbot/i],
          describe: function (t) {
            var e = {
              name: "AmazonBot"
            };
            var r = o.default.getFirstMatch(/amazonbot\/(\d+(\.\d+)+)/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/bingbot/i],
          describe: function (t) {
            var e = {
              name: "BingCrawler"
            };
            var r = o.default.getFirstMatch(/bingbot\/(\d+(\.\d+)+)/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/baiduspider/i],
          describe: function (t) {
            var e = {
              name: "BaiduSpider"
            };
            var r = o.default.getFirstMatch(/baiduspider\/(\d+(\.\d+)+)/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/duckduckbot/i],
          describe: function (t) {
            var e = {
              name: "DuckDuckBot"
            };
            var r = o.default.getFirstMatch(/duckduckbot\/(\d+(\.\d+)+)/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/ia_archiver/i],
          describe: function (t) {
            var e = {
              name: "InternetArchiveCrawler"
            };
            var r = o.default.getFirstMatch(/ia_archiver\/(\d+(\.\d+)+)/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/facebookexternalhit/i, /facebookcatalog/i],
          describe: function () {
            return {
              name: "FacebookExternalHit"
            };
          }
        }, {
          test: [/yahoo!?[\s/]*slurp/i],
          describe: function () {
            return {
              name: "YahooSlurp"
            };
          }
        }, {
          test: [/yandexbot/i, /yandexmobilebot/i],
          describe: function () {
            return {
              name: "YandexBot"
            };
          }
        }, {
          test: [/pingdom/i],
          describe: function () {
            return {
              name: "PingdomBot"
            };
          }
        }, {
          test: [/opera/i],
          describe: function (t) {
            var e = {
              name: "Opera"
            };
            var r = o.default.getFirstMatch(i, t) || o.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/opr\/|opios/i],
          describe: function (t) {
            var e = {
              name: "Opera"
            };
            var r = o.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/SamsungBrowser/i],
          describe: function (t) {
            var e = {
              name: "Samsung Internet for Android"
            };
            var r = o.default.getFirstMatch(i, t) || o.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/Whale/i],
          describe: function (t) {
            var e = {
              name: "NAVER Whale Browser"
            };
            var r = o.default.getFirstMatch(i, t) || o.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/PaleMoon/i],
          describe: function (t) {
            var e = {
              name: "Pale Moon"
            };
            var r = o.default.getFirstMatch(i, t) || o.default.getFirstMatch(/(?:PaleMoon)[\s/](\d+(?:\.\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/MZBrowser/i],
          describe: function (t) {
            var e = {
              name: "MZ Browser"
            };
            var r = o.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/focus/i],
          describe: function (t) {
            var e = {
              name: "Focus"
            };
            var r = o.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/swing/i],
          describe: function (t) {
            var e = {
              name: "Swing"
            };
            var r = o.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/coast/i],
          describe: function (t) {
            var e = {
              name: "Opera Coast"
            };
            var r = o.default.getFirstMatch(i, t) || o.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/opt\/\d+(?:.?_?\d+)+/i],
          describe: function (t) {
            var e = {
              name: "Opera Touch"
            };
            var r = o.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/yabrowser/i],
          describe: function (t) {
            var e = {
              name: "Yandex Browser"
            };
            var r = o.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/ucbrowser/i],
          describe: function (t) {
            var e = {
              name: "UC Browser"
            };
            var r = o.default.getFirstMatch(i, t) || o.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/Maxthon|mxios/i],
          describe: function (t) {
            var e = {
              name: "Maxthon"
            };
            var r = o.default.getFirstMatch(i, t) || o.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/epiphany/i],
          describe: function (t) {
            var e = {
              name: "Epiphany"
            };
            var r = o.default.getFirstMatch(i, t) || o.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/puffin/i],
          describe: function (t) {
            var e = {
              name: "Puffin"
            };
            var r = o.default.getFirstMatch(i, t) || o.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/sleipnir/i],
          describe: function (t) {
            var e = {
              name: "Sleipnir"
            };
            var r = o.default.getFirstMatch(i, t) || o.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/k-meleon/i],
          describe: function (t) {
            var e = {
              name: "K-Meleon"
            };
            var r = o.default.getFirstMatch(i, t) || o.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/micromessenger/i],
          describe: function (t) {
            var e = {
              name: "WeChat"
            };
            var r = o.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/qqbrowser/i],
          describe: function (t) {
            var e = {
              name: /qqbrowserlite/i.test(t) ? "QQ Browser Lite" : "QQ Browser"
            };
            var r = o.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/msie|trident/i],
          describe: function (t) {
            var e = {
              name: "Internet Explorer"
            };
            var r = o.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/\sedg\//i],
          describe: function (t) {
            var e = {
              name: "Microsoft Edge"
            };
            var r = o.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/edg([ea]|ios)/i],
          describe: function (t) {
            var e = {
              name: "Microsoft Edge"
            };
            var r = o.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/vivaldi/i],
          describe: function (t) {
            var e = {
              name: "Vivaldi"
            };
            var r = o.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/seamonkey/i],
          describe: function (t) {
            var e = {
              name: "SeaMonkey"
            };
            var r = o.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/sailfish/i],
          describe: function (t) {
            var e = {
              name: "Sailfish"
            };
            var r = o.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/silk/i],
          describe: function (t) {
            var e = {
              name: "Amazon Silk"
            };
            var r = o.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/phantom/i],
          describe: function (t) {
            var e = {
              name: "PhantomJS"
            };
            var r = o.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/slimerjs/i],
          describe: function (t) {
            var e = {
              name: "SlimerJS"
            };
            var r = o.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
          describe: function (t) {
            var e = {
              name: "BlackBerry"
            };
            var r = o.default.getFirstMatch(i, t) || o.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/(web|hpw)[o0]s/i],
          describe: function (t) {
            var e = {
              name: "WebOS Browser"
            };
            var r = o.default.getFirstMatch(i, t) || o.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/bada/i],
          describe: function (t) {
            var e = {
              name: "Bada"
            };
            var r = o.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/tizen/i],
          describe: function (t) {
            var e = {
              name: "Tizen"
            };
            var r = o.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/qupzilla/i],
          describe: function (t) {
            var e = {
              name: "QupZilla"
            };
            var r = o.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/librewolf/i],
          describe: function (t) {
            var e = {
              name: "LibreWolf"
            };
            var r = o.default.getFirstMatch(/(?:librewolf)[\s/](\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/firefox|iceweasel|fxios/i],
          describe: function (t) {
            var e = {
              name: "Firefox"
            };
            var r = o.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/electron/i],
          describe: function (t) {
            var e = {
              name: "Electron"
            };
            var r = o.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/sogoumobilebrowser/i, /metasr/i, /se 2\.[x]/i],
          describe: function (t) {
            var e = {
              name: "Sogou Browser"
            };
            var r = o.default.getFirstMatch(/(?:sogoumobilebrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
            var n = o.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, t);
            var i = o.default.getFirstMatch(/se ([\d.]+)x/i, t);
            var u = r || n || i;
            if (u) {
              e.version = u;
            }
            return e;
          }
        }, {
          test: [/MiuiBrowser/i],
          describe: function (t) {
            var e = {
              name: "Miui"
            };
            var r = o.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/chromium/i],
          describe: function (t) {
            var e = {
              name: "Chromium"
            };
            var r = o.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, t) || o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/chrome|crios|crmo/i],
          describe: function (t) {
            var e = {
              name: "Chrome"
            };
            var r = o.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/GSA/i],
          describe: function (t) {
            var e = {
              name: "Google Search"
            };
            var r = o.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: function (t) {
            var e = !t.test(/like android/i);
            var r = t.test(/android/i);
            return e && r;
          },
          describe: function (t) {
            var e = {
              name: "Android Browser"
            };
            var r = o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/playstation 4/i],
          describe: function (t) {
            var e = {
              name: "PlayStation 4"
            };
            var r = o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/safari|applewebkit/i],
          describe: function (t) {
            var e = {
              name: "Safari"
            };
            var r = o.default.getFirstMatch(i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/.*/i],
          describe: function (t) {
            var e = t.search("\\(") !== -1 ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
            return {
              name: o.default.getFirstMatch(e, t),
              version: o.default.getSecondMatch(e, t)
            };
          }
        }];
        e.default = u;
        t.exports = e.default;
      },
      93: function (t, e, r) {
        "use strict";

        e.__esModule = true;
        e.default = undefined;
        var n;
        var o = (n = r(17)) && n.__esModule ? n : {
          default: n
        };
        var i = r(18);
        var u = [{
          test: [/Roku\/DVP/],
          describe: function (t) {
            var e = o.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, t);
            return {
              name: i.OS_MAP.Roku,
              version: e
            };
          }
        }, {
          test: [/windows phone/i],
          describe: function (t) {
            var e = o.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, t);
            return {
              name: i.OS_MAP.WindowsPhone,
              version: e
            };
          }
        }, {
          test: [/windows /i],
          describe: function (t) {
            var e = o.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, t);
            var r = o.default.getWindowsVersionName(e);
            return {
              name: i.OS_MAP.Windows,
              version: e,
              versionName: r
            };
          }
        }, {
          test: [/Macintosh(.*?) FxiOS(.*?)\//],
          describe: function (t) {
            var e = {
              name: i.OS_MAP.iOS
            };
            var r = o.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/macintosh/i],
          describe: function (t) {
            var e = o.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, t).replace(/[_\s]/g, ".");
            var r = o.default.getMacOSVersionName(e);
            var n = {
              name: i.OS_MAP.MacOS,
              version: e
            };
            if (r) {
              n.versionName = r;
            }
            return n;
          }
        }, {
          test: [/(ipod|iphone|ipad)/i],
          describe: function (t) {
            var e = o.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, t).replace(/[_\s]/g, ".");
            return {
              name: i.OS_MAP.iOS,
              version: e
            };
          }
        }, {
          test: [/OpenHarmony/i],
          describe: function (t) {
            var e = o.default.getFirstMatch(/OpenHarmony\s+(\d+(\.\d+)*)/i, t);
            return {
              name: i.OS_MAP.HarmonyOS,
              version: e
            };
          }
        }, {
          test: function (t) {
            var e = !t.test(/like android/i);
            var r = t.test(/android/i);
            return e && r;
          },
          describe: function (t) {
            var e = o.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, t);
            var r = o.default.getAndroidVersionName(e);
            var n = {
              name: i.OS_MAP.Android,
              version: e
            };
            if (r) {
              n.versionName = r;
            }
            return n;
          }
        }, {
          test: [/(web|hpw)[o0]s/i],
          describe: function (t) {
            var e = o.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, t);
            var r = {
              name: i.OS_MAP.WebOS
            };
            if (e && e.length) {
              r.version = e;
            }
            return r;
          }
        }, {
          test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
          describe: function (t) {
            var e = o.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, t) || o.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, t) || o.default.getFirstMatch(/\bbb(\d+)/i, t);
            return {
              name: i.OS_MAP.BlackBerry,
              version: e
            };
          }
        }, {
          test: [/bada/i],
          describe: function (t) {
            var e = o.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, t);
            return {
              name: i.OS_MAP.Bada,
              version: e
            };
          }
        }, {
          test: [/tizen/i],
          describe: function (t) {
            var e = o.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, t);
            return {
              name: i.OS_MAP.Tizen,
              version: e
            };
          }
        }, {
          test: [/linux/i],
          describe: function () {
            return {
              name: i.OS_MAP.Linux
            };
          }
        }, {
          test: [/CrOS/],
          describe: function () {
            return {
              name: i.OS_MAP.ChromeOS
            };
          }
        }, {
          test: [/PlayStation 4/],
          describe: function (t) {
            var e = o.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, t);
            return {
              name: i.OS_MAP.PlayStation4,
              version: e
            };
          }
        }];
        e.default = u;
        t.exports = e.default;
      },
      94: function (t, e, r) {
        "use strict";

        e.__esModule = true;
        e.default = undefined;
        var n;
        var o = (n = r(17)) && n.__esModule ? n : {
          default: n
        };
        var i = r(18);
        var u = [{
          test: [/googlebot/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.bot,
              vendor: "Google"
            };
          }
        }, {
          test: [/amazonbot/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.bot,
              vendor: "Amazon"
            };
          }
        }, {
          test: [/gptbot/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.bot,
              vendor: "OpenAI"
            };
          }
        }, {
          test: [/chatgpt-user/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.bot,
              vendor: "OpenAI"
            };
          }
        }, {
          test: [/oai-searchbot/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.bot,
              vendor: "OpenAI"
            };
          }
        }, {
          test: [/baiduspider/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.bot,
              vendor: "Baidu"
            };
          }
        }, {
          test: [/bingbot/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.bot,
              vendor: "Bing"
            };
          }
        }, {
          test: [/duckduckbot/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.bot,
              vendor: "DuckDuckGo"
            };
          }
        }, {
          test: [/claudebot/i, /claude-web/i, /claude-user/i, /claude-searchbot/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.bot,
              vendor: "Anthropic"
            };
          }
        }, {
          test: [/omgilibot/i, /webzio-extended/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.bot,
              vendor: "Webz.io"
            };
          }
        }, {
          test: [/diffbot/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.bot,
              vendor: "Diffbot"
            };
          }
        }, {
          test: [/perplexitybot/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.bot,
              vendor: "Perplexity AI"
            };
          }
        }, {
          test: [/perplexity-user/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.bot,
              vendor: "Perplexity AI"
            };
          }
        }, {
          test: [/youbot/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.bot,
              vendor: "You.com"
            };
          }
        }, {
          test: [/ia_archiver/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.bot,
              vendor: "Internet Archive"
            };
          }
        }, {
          test: [/meta-webindexer/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.bot,
              vendor: "Meta"
            };
          }
        }, {
          test: [/meta-externalads/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.bot,
              vendor: "Meta"
            };
          }
        }, {
          test: [/meta-externalagent/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.bot,
              vendor: "Meta"
            };
          }
        }, {
          test: [/meta-externalfetcher/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.bot,
              vendor: "Meta"
            };
          }
        }, {
          test: [/facebookexternalhit/i, /facebookcatalog/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.bot,
              vendor: "Meta"
            };
          }
        }, {
          test: [/yahoo/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.bot,
              vendor: "Yahoo"
            };
          }
        }, {
          test: [/yandexbot/i, /yandexmobilebot/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.bot,
              vendor: "Yandex"
            };
          }
        }, {
          test: [/pingdom/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.bot,
              vendor: "Pingdom"
            };
          }
        }, {
          test: [/huawei/i],
          describe: function (t) {
            var e = o.default.getFirstMatch(/(can-l01)/i, t) && "Nova";
            var r = {
              type: i.PLATFORMS_MAP.mobile,
              vendor: "Huawei"
            };
            if (e) {
              r.model = e;
            }
            return r;
          }
        }, {
          test: [/nexus\s*(?:7|8|9|10).*/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.tablet,
              vendor: "Nexus"
            };
          }
        }, {
          test: [/ipad/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.tablet,
              vendor: "Apple",
              model: "iPad"
            };
          }
        }, {
          test: [/Macintosh(.*?) FxiOS(.*?)\//],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.tablet,
              vendor: "Apple",
              model: "iPad"
            };
          }
        }, {
          test: [/kftt build/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.tablet,
              vendor: "Amazon",
              model: "Kindle Fire HD 7"
            };
          }
        }, {
          test: [/silk/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.tablet,
              vendor: "Amazon"
            };
          }
        }, {
          test: [/tablet(?! pc)/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.tablet
            };
          }
        }, {
          test: function (t) {
            var e = t.test(/ipod|iphone/i);
            var r = t.test(/like (ipod|iphone)/i);
            return e && !r;
          },
          describe: function (t) {
            var e = o.default.getFirstMatch(/(ipod|iphone)/i, t);
            return {
              type: i.PLATFORMS_MAP.mobile,
              vendor: "Apple",
              model: e
            };
          }
        }, {
          test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.mobile,
              vendor: "Nexus"
            };
          }
        }, {
          test: [/Nokia/i],
          describe: function (t) {
            var e = o.default.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i, t);
            var r = {
              type: i.PLATFORMS_MAP.mobile,
              vendor: "Nokia"
            };
            if (e) {
              r.model = e;
            }
            return r;
          }
        }, {
          test: [/[^-]mobi/i],
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.mobile
            };
          }
        }, {
          test: function (t) {
            return t.getBrowserName(true) === "blackberry";
          },
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.mobile,
              vendor: "BlackBerry"
            };
          }
        }, {
          test: function (t) {
            return t.getBrowserName(true) === "bada";
          },
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.mobile
            };
          }
        }, {
          test: function (t) {
            return t.getBrowserName() === "windows phone";
          },
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.mobile,
              vendor: "Microsoft"
            };
          }
        }, {
          test: function (t) {
            var e = Number(String(t.getOSVersion()).split(".")[0]);
            return t.getOSName(true) === "android" && e >= 3;
          },
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.tablet
            };
          }
        }, {
          test: function (t) {
            return t.getOSName(true) === "android";
          },
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.mobile
            };
          }
        }, {
          test: function (t) {
            return t.getOSName(true) === "macos";
          },
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.desktop,
              vendor: "Apple"
            };
          }
        }, {
          test: function (t) {
            return t.getOSName(true) === "windows";
          },
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.desktop
            };
          }
        }, {
          test: function (t) {
            return t.getOSName(true) === "linux";
          },
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.desktop
            };
          }
        }, {
          test: function (t) {
            return t.getOSName(true) === "playstation 4";
          },
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.tv
            };
          }
        }, {
          test: function (t) {
            return t.getOSName(true) === "roku";
          },
          describe: function () {
            return {
              type: i.PLATFORMS_MAP.tv
            };
          }
        }];
        e.default = u;
        t.exports = e.default;
      },
      95: function (t, e, r) {
        "use strict";

        e.__esModule = true;
        e.default = undefined;
        var n;
        var o = (n = r(17)) && n.__esModule ? n : {
          default: n
        };
        var i = r(18);
        var u = [{
          test: function (t) {
            return t.getBrowserName(true) === "microsoft edge";
          },
          describe: function (t) {
            if (/\sedg\//i.test(t)) {
              return {
                name: i.ENGINE_MAP.Blink
              };
            }
            var e = o.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, t);
            return {
              name: i.ENGINE_MAP.EdgeHTML,
              version: e
            };
          }
        }, {
          test: [/trident/i],
          describe: function (t) {
            var e = {
              name: i.ENGINE_MAP.Trident
            };
            var r = o.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: function (t) {
            return t.test(/presto/i);
          },
          describe: function (t) {
            var e = {
              name: i.ENGINE_MAP.Presto
            };
            var r = o.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: function (t) {
            var e = t.test(/gecko/i);
            var r = t.test(/like gecko/i);
            return e && !r;
          },
          describe: function (t) {
            var e = {
              name: i.ENGINE_MAP.Gecko
            };
            var r = o.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }, {
          test: [/(apple)?webkit\/537\.36/i],
          describe: function () {
            return {
              name: i.ENGINE_MAP.Blink
            };
          }
        }, {
          test: [/(apple)?webkit/i],
          describe: function (t) {
            var e = {
              name: i.ENGINE_MAP.WebKit
            };
            var r = o.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, t);
            if (r) {
              e.version = r;
            }
            return e;
          }
        }];
        e.default = u;
        t.exports = e.default;
      }
    });
  };
  module.exports = e();
}