// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'urlLinkValidator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 542431
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var i = "\\b([/?#][-a-zA-Z0-9@:%_+.~#?&/=;()$,!\\*\\[\\]{}^|<>]*)?";
  var o = /localhost(:[0-9]{2,5})?/;
  var a = /(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}(2[0-4][0-9]|25[0-5]|1[0-9]{2}|[1-9][0-9]|[0-9])(:[0-9]{2,5})?/;
  var s = "([\\-a-zA-Z0-9:%_+~#@]{1,256}\\.){1,50}";
  var l = "[a-z\\-]{2,15}";
  var u = "[\\w.!#$%&'*+-/=?^_\\`{|}~]{1,2000}@[A-Za-z0-9_.-]+\\.";
  var c = new (function () {
    function e() {
      this.PROTOCOL = "https?|s?ftp|ftps|nfs|ssh";
      this.TOP_DOMAIN = "com|org|net|int|edu|gov|mil|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gh|gi|gl|gm|gn|gp|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mf|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|site|top|wtf|xxx|xyz|cloud|engineering|help|one";
      this.LENGTH_LIMITED_EMAIL_REG = RegExp("^(?!data:)((mailto:" + u + l + ")|(" + u + "(" + this.TOP_DOMAIN + ")))\\b", "gi");
      this.IP_REG = this.getIpReg();
      this.URL_REG = this.getUrlReg();
      this.LINK_REG = this.getLinkReg();
    }
    var t = e.prototype;
    t.getIpReg = function () {
      return RegExp("((" + this.PROTOCOL + ")://)?((" + o.source + ")|(" + a.source + "))" + i, "gi");
    };
    t.getUrlReg = function () {
      return RegExp("(((" + this.PROTOCOL + "):\\/\\/" + s + l + ")|(" + s + "(" + this.TOP_DOMAIN + ")))(:[0-9]{2,5})?" + i, "gi");
    };
    t.getLinkReg = function () {
      return RegExp("(" + this.IP_REG.source + ")|(" + this.URL_REG.source + ")|(" + this.LENGTH_LIMITED_EMAIL_REG.source + ")", "gi");
    };
    t.addExtraProtocols = function (e) {
      var t = e.length > 0 ? "|" : "";
      this.PROTOCOL = this.PROTOCOL + t + e.join("|");
      this.IP_REG = this.getIpReg();
      this.URL_REG = this.getUrlReg();
      this.LINK_REG = this.getLinkReg();
    };
    t.isValidLink = function (e, t) {
      var r = new RegExp(RegExp("" + (t ?? this.LINK_REG).source, "gi")).exec(e);
      return !!r && r.index === 0;
    };
    t.getRegex = function (e = []) {
      return RegExp("^(#|(" + typescriptHelpers_1.spreadArray(["", "https?", "mailto", "ftp", "file"], e).join("|") + "):)");
    };
    t.completeURLProtocol = function (e = "", t = []) {
      var r = new RegExp(this.LENGTH_LIMITED_EMAIL_REG).test(e);
      if (this.getRegex(t).test(e)) {
        return e;
      } else if (r) {
        return "mailto:" + e;
      } else {
        if (!e.startsWith("http")) {
          e = "http://" + e;
        }
        return e;
      }
    };
    return e;
  }())();
  exports.urlLinkValidator = c;
}