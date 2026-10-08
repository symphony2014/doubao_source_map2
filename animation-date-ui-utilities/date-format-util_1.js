// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(737353) to 'is-valid-date-util'
// - Resolved require(675123) to 'date-sub-milliseconds'
// - Resolved require(728393) to 'to-date-util'
// - Resolved require(260316) to 'utc-date-format-handlers'
// - Resolved require(331357) to 'date-time-format-patterns'
// - Resolved require(116169) to 'date-timezone-offset-util'
// - Renamed variable 'd' to 'dateFnsProtectedTokens'
// - Resolved require(73360) to 'date-fns-protected-tokens'
// - Resolved require(546552) to 'utils-to-integer'
// - Resolved require(529193) to 'validate-arg-count'
// - Renamed variable 'f' to 'defaultOptionsManager'
// - Resolved require(613388) to 'default-options-manager'
// - Resolved require(230758) to 'en-us-date-locale_2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 135530
         */
module.exports = function (module, exports, require) {
  var a = require("es-module-interop-helper_2") /*id: 299302*/.default;
  exports.default = function (e, t, n) {
    h.default(2, arguments);
    var D;
    var P;
    var O;
    var N;
    var F = String(t);
    var Y = defaultOptionsManager.getDefaultOptions();
    var L = (n == null ? undefined : n.locale) ?? Y.locale ?? p.default;
    var j = c.default((n == null ? undefined : n.firstWeekContainsDate) ?? (n == null ? undefined : (D = n.locale) === null || D === undefined ? undefined : D.options?.firstWeekContainsDate) ?? Y.firstWeekContainsDate ?? ((P = Y.locale) === null || P === undefined ? undefined : P.options?.firstWeekContainsDate) ?? 1);
    if (!(j >= 1) || !(j <= 7)) {
      throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    }
    var U = c.default((n == null ? undefined : n.weekStartsOn) ?? (n == null ? undefined : (O = n.locale) === null || O === undefined ? undefined : O.options?.weekStartsOn) ?? Y.weekStartsOn ?? ((N = Y.locale) === null || N === undefined ? undefined : N.options?.weekStartsOn) ?? 0);
    if (!(U >= 0) || !(U <= 6)) {
      throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    if (!L.localize) {
      throw RangeError("locale must contain localize property");
    }
    if (!L.formatLong) {
      throw RangeError("locale must contain formatLong property");
    }
    var H = o.default(e);
    if (!r.default(H)) {
      throw RangeError("Invalid time value");
    }
    var $ = u.default(H);
    var V = i.default(H, $);
    var W = {
      firstWeekContainsDate: j,
      weekStartsOn: U,
      locale: L,
      _originalDate: H
    };
    return F.match(m).map(function (e) {
      var t = e[0];
      if (t === "p" || t === "P") {
        return l.default[t](e, L.formatLong);
      } else {
        return e;
      }
    }).join("").match(g).map(function (a) {
      if (a === "''") {
        return "'";
      }
      var r;
      var i;
      var o = a[0];
      if (o === "'") {
        if (i = (r = a).match(v)) {
          return i[1].replace(y, "'");
        } else {
          return r;
        }
      }
      var l = s.default[o];
      if (l) {
        if ((n == null || !n.useAdditionalWeekYearTokens) && dateFnsProtectedTokens.isProtectedWeekYearToken(a)) {
          dateFnsProtectedTokens.throwProtectedError(a, t, String(e));
        }
        if ((n == null || !n.useAdditionalDayOfYearTokens) && dateFnsProtectedTokens.isProtectedDayOfYearToken(a)) {
          dateFnsProtectedTokens.throwProtectedError(a, t, String(e));
        }
        return l(V, a, L.localize, W);
      }
      if (o.match(T)) {
        throw RangeError("Format string contains an unescaped latin alphabet character `" + o + "`");
      }
      return a;
    }).join("");
  };
  var r = a(require("is-valid-date-util") /*id: 737353*/);
  var i = a(require("date-sub-milliseconds") /*id: 675123*/);
  var o = a(require("to-date-util") /*id: 728393*/);
  var s = a(require("utc-date-format-handlers") /*id: 260316*/);
  var l = a(require("date-time-format-patterns") /*id: 331357*/);
  var u = a(require("date-timezone-offset-util") /*id: 116169*/);
  var dateFnsProtectedTokens = require("date-fns-protected-tokens") /*id: 73360*/;
  var c = a(require("utils-to-integer") /*id: 546552*/);
  var h = a(require("validate-arg-count") /*id: 529193*/);
  var defaultOptionsManager = require("default-options-manager") /*id: 613388*/;
  var p = a(require("en-us-date-locale_2") /*id: 230758*/);
  var g = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
  var m = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
  var v = /^'([^]*?)'?$/;
  var y = /''/g;
  var T = /[a-zA-Z]/;
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}