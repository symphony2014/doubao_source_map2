// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(648808) to 'unicode-char-regex'
// - Resolved require(794577) to 'control-char-regex'
// - Resolved require(813646) to 'unicode-whitespace-regex'
// - Resolved require(175976) to 'unicode-punctuation-regex'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 656379
         */
module.exports = function (module, exports, require) {
  module.exports = function (t) {
    var e = {};
    e.src_Any = require("unicode-char-regex") /*id: 648808*/.source;
    e.src_Cc = require("control-char-regex") /*id: 794577*/.source;
    e.src_Z = require("unicode-whitespace-regex") /*id: 813646*/.source;
    e.src_P = require("unicode-punctuation-regex") /*id: 175976*/.source;
    e.src_ZPCc = [e.src_Z, e.src_P, e.src_Cc].join("|");
    e.src_ZCc = [e.src_Z, e.src_Cc].join("|");
    var n = "[><｜]";
    e.src_pseudo_letter = "(?:(?!" + n + "|" + e.src_ZPCc + ")" + e.src_Any + ")";
    e.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
    e.src_auth = "(?:(?:(?!" + e.src_ZCc + "|[@/\\[\\]()]).)+@)?";
    e.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?";
    e.src_host_terminator = "(?=$|" + n + "|" + e.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + e.src_ZPCc + "))";
    e.src_path = "(?:[/?#](?:(?!" + e.src_ZCc + "|" + n + "|[()[\\]{}.,\"'?!\\-;]).|\\[(?:(?!" + e.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + e.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + e.src_ZCc + "|[}]).)*\\}|\\\"(?:(?!" + e.src_ZCc + "|[\"]).)+\\\"|\\'(?:(?!" + e.src_ZCc + "|[']).)+\\'|\\'(?=" + e.src_pseudo_letter + "|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + e.src_ZCc + "|[.]).|" + (t && t["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + e.src_ZCc + ").|;(?!" + e.src_ZCc + ").|\\!+(?!" + e.src_ZCc + "|[!]).|\\?(?!" + e.src_ZCc + "|[?]).)+|\\/)?";
    e.src_email_name = "[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\\"\\.a-zA-Z0-9_]*";
    e.src_xn = "xn--[a-z0-9\\-]{1,59}";
    e.src_domain_root = "(?:" + e.src_xn + "|" + e.src_pseudo_letter + "{1,63})";
    e.src_domain = "(?:" + e.src_xn + "|(?:" + e.src_pseudo_letter + ")|(?:" + e.src_pseudo_letter + "(?:-|" + e.src_pseudo_letter + "){0,61}" + e.src_pseudo_letter + "))";
    e.src_host = "(?:(?:(?:(?:" + e.src_domain + ")\\.)*" + e.src_domain + "))";
    e.tpl_host_fuzzy = "(?:" + e.src_ip4 + "|(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%)))";
    e.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%))";
    e.src_host_strict = e.src_host + e.src_host_terminator;
    e.tpl_host_fuzzy_strict = e.tpl_host_fuzzy + e.src_host_terminator;
    e.src_host_port_strict = e.src_host + e.src_port + e.src_host_terminator;
    e.tpl_host_port_fuzzy_strict = e.tpl_host_fuzzy + e.src_port + e.src_host_terminator;
    e.tpl_host_port_no_ip_fuzzy_strict = e.tpl_host_no_ip_fuzzy + e.src_port + e.src_host_terminator;
    e.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + e.src_ZPCc + "|>|$))";
    e.tpl_email_fuzzy = "(^|" + n + "|\"|\\(|" + e.src_ZCc + ")(" + e.src_email_name + "@" + e.tpl_host_fuzzy_strict + ")";
    e.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + e.src_ZPCc + "))((?![$+<=>^`|｜])" + e.tpl_host_port_fuzzy_strict + e.src_path + ")";
    e.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + e.src_ZPCc + "))((?![$+<=>^`|｜])" + e.tpl_host_port_no_ip_fuzzy_strict + e.src_path + ")";
    return e;
  };
}