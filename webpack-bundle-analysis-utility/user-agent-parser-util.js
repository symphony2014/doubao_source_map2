// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'esModuleInteropHelper_2'
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(310819) to 'enhanced-user-agent-parser'
// - Resolved require(499114) to 'app-version-parser'
// - Renamed variable 'a' to 'objectAssignPolyfill_5'
// - Resolved require(65551) to 'object-assign-polyfill_5'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 97038.67ba788d.js
         * chunkId: 97038
         * moduleId: 955867
         */
module.exports = function (module, exports, require) {
  var esModuleInteropHelper_2 = require("es-module-interop-helper_2") /*id: 299302*/;
  exports.default = undefined;
  var o = esModuleInteropHelper_2(require("enhanced-user-agent-parser") /*id: 310819*/);
  var i = esModuleInteropHelper_2(require("app-version-parser") /*id: 499114*/);
  var objectAssignPolyfill_5 = require("object-assign-polyfill_5") /*id: 65551*/;
  var s = new i.default();
  function u() {
    var e;
    var t;
    var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var i = arguments.length > 2 ? arguments[2] : undefined;
    var u = arguments.length > 3 ? arguments[3] : undefined;
    var c = o.default(r, n, u);
    var f = c.os;
    var l = c.browser;
    r = r.toLowerCase();
    n = n.toLowerCase();
    if (!f.ios && !f.android) {
      if (e = r.match(/windows phone ([\d.]+)/)) {
        f.wp = true;
        f.version = e[1];
      } else if (e = r.match(/(?:web|hpw)os[\s/]([\d.]+)/)) {
        f.webos = true;
        f.version = e[1];
        if (r.match(/touchpad/)) {
          f.touchpad = true;
        }
      } else if (e = r.match(/blackberry.*version\/([\d.]+)/)) {
        f.blackberry = true;
        f.version = e[1];
      } else if (e = r.match(/bb10.*version\/([\d.]+)/)) {
        f.bb10 = true;
        f.version = e[1];
      } else if (e = r.match(/rim\stablet\sos\s([\d.]+)/)) {
        f.rimtabletos = true;
        f.version = e[1];
      } else if (e = r.match(/kindle\/([\d.]+)/)) {
        f.kindle = true;
        f.version = e[1];
      } else if (e = r.match(/(?:mobile|tablet); rv:([\d.]+).*firefox\/[\d.]+/)) {
        f.firefoxos = true;
        f.version = e[1];
      }
    }
    if (e = r.match(/webkit\/?([\d.]+)/)) {
      l.webkit = true;
      l.version = e[1];
    }
    if (e = r.match(/(?:chrome|crios)\/([\d.]+)/)) {
      l.chrome = true;
      l.version = e[1];
    } else if (e = r.match(/(?:msie\s|trident\/\d(?=[^?]+).*rv:)([\d.]+)/)) {
      l.ie = true;
      l.version = e[1];
    } else if (e = r.match(/firefox\/([\d.]+)/)) {
      l.firefox = true;
      l.version = e[1];
    } else if (r.match(/playbook/)) {
      l.playbook = true;
    }
    if (r.match(/ucbrowser/)) {
      l.ucbrowser = true;
    } else if (r.match(/qqbrowser/)) {
      l.qqbrowser = true;
    }
    if (!l.chrome && r.match(/ip(?:one|od|ad).*applewebkit(?!.*safari)/)) {
      l.webview = true;
    }
    if (e = r.match(/silk\/([\d._]+)/)) {
      l.silk = true;
      l.version = e[1];
    }
    if (f.android && r.match(/kindle fire/)) {
      l.silk = true;
    }
    if ((l.webview || (e = r.match(/version\/([\d.]+)(?:[^m]*mobile)?[^s]*safari/))) && (r.match(/macintosh; intel/) || f.ios || /win(?:\d{2}|dows)/.test(n))) {
      l.safari = true;
      if (!f.ios) {
        l.version = e[1];
      }
    }
    if (!l.weixin && !l.qq && !l.weibo) {
      if (e = r.match(/fbav\/([\d.]+)/)) {
        l.facebook = true;
        l.version = e[1];
        if (e = r.match(/fbsn\/ios;fbsv\/([\d.]+)/)) {
          f.ios = true;
          f.version = e[1];
        }
      } else if (Object.keys(t = s.parse(r)).length) {
        objectAssignPolyfill_5(l, t);
      } else if (i) {
        l.robot = RegExp("\\+https:\\/\\/developers.google.com\\/\\+\\/web\\/snippet\\/|ad\\smonitoring|adsbot|baiduspider|bingbot|cloudflare|crawler|curl|embedly|exabot|facebookexternalhit|google|googlebot|gurujibot|heritrix|linkedinbot|msnbot|phantomjs|phantom\\.js|pingdom|python|rtlnieuws|slackbot|slurp|spbot|telegrambot|test\\scertificate|testing|tiabot|tumblr |twitterbot|web\\sscraper|wget|yandexbot|apex|applebot|duckduckbot|facebot|flipboard|gsa-crawler|ia_archiver|pinterest|skypeuripreview|odklbot|archive.org_bot|ltx71|guzzlehttp|vkshare|discordbot|whatsapp").test(r);
      }
    }
    l.livestream_all = l.livestream || l.livestream_pro || l.virgo || l.livestream_lite;
    f.tablet = f.ipad || l.playbook || f.android && !r.match(/mobile/) || l.firefox && !!r.match(/tablet/) || l.ie && !r.match(/phone/) && !!r.match(/touch/);
    f.phone = !f.tablet && !f.ipod && (f.android || f.iphone || f.webos || f.blackberry || f.bb10 || l.chrome && !!r.match(/android|crios\/[\d.]+/) || l.firefox && !!r.match(/mobile/) || l.ie && !!r.match(/touch/));
    return {
      browser: l,
      os: f
    };
  }
  s.add(Object.keys(i.default.strategies));
  u.default = u;
  exports.default = u;
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}