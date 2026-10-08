// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Jh' to 'isValidEmailTld'
// - Renamed export 'Ub' to 'isValidWhiteboardUrl'
// - Renamed export 'bs' to 'hasValidUrlProtocol'
// - Renamed export 'fb' to 'isValidUnknownUrl'
// - Renamed export 'ob' to 'isValidMinutesUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 262405
         */
module.exports = function (module, exports, require) {
  var driveUrlParserAxios = require("drive-url-parser-axios") /*id: 508792*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var urlRegexConstants = require("url-regex-constants") /*id: 631514*/;
  function c(e = "") {
    return new RegExp(urlRegexConstants.emailTldRegex).test(e);
  }
  require("url-regex-validator") /*id: 959147*/;
  let u = /^(https:\/\/[a-zA-Z0-9-_]+.(cn|sg|jp|us|jp)?\.(feishu|larkoffice|larksuite|larkenterprise)(-pre)?\.(cn|net|com)\/minutes)\/(.*)/;
  let a = e => new RegExp(u).test(e);
  function s(e = "") {
    return RegExp(`^(${urlRegexConstants.protocolList}|mailto):`).test(e);
  }
  function d(e) {
    return false;
  }
  function f(e) {
    if (!platformDocUtils.O_4(e)) {
      return false;
    }
    let {
      blockTypeNum: r,
      blockToken: l
    } = driveUrlParserAxios.parseDriveUrl(e) ?? {};
    return !!r && !!l && driveUrlParserAxios.isWhiteboardType(r);
  }
  require.d(exports, {
    isValidEmailTld: function () {
      return c;
    },
    isValidWhiteboardUrl: function () {
      return f;
    },
    hasValidUrlProtocol: function () {
      return s;
    },
    isValidUnknownUrl: function () {
      return d;
    },
    isValidMinutesUrl: function () {
      return a;
    }
  });
}