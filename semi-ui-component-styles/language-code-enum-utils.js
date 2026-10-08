// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Gm' to 'languageCodeMap'
// - Renamed export 'SQ' to 'LanguageCodeEnum'
// - Renamed export 'T0' to 'getPreferredLanguages'
// - Renamed export 'T3' to 'languageToEnumMap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 964571
         */
module.exports = function (module, exports, require) {
  var n;
  var throttledOrderByUtil = require("throttled-order-by-util") /*id: 363890*/;
  let i = [{
    code: "zh",
    name: "Chinese",
    native: "中文"
  }, {
    code: "en",
    name: "English",
    native: "English"
  }, {
    code: "aa",
    name: "Afar",
    native: "Afar"
  }, {
    code: "ab",
    name: "Abkhazian",
    native: "Аҧсуа"
  }, {
    code: "af",
    name: "Afrikaans",
    native: "Afrikaans"
  }, {
    code: "ak",
    name: "Akan",
    native: "Akana"
  }, {
    code: "am",
    name: "Amharic",
    native: "አማርኛ"
  }, {
    code: "an",
    name: "Aragonese",
    native: "Aragonés"
  }, {
    code: "ar",
    name: "Arabic",
    native: "العربية",
    rtl: 1
  }, {
    code: "as",
    name: "Assamese",
    native: "অসমীয়া"
  }, {
    code: "av",
    name: "Avar",
    native: "Авар"
  }, {
    code: "ay",
    name: "Aymara",
    native: "Aymar"
  }, {
    code: "az",
    name: "Azerbaijani",
    native: "Azərbaycanca"
  }, {
    code: "ba",
    name: "Bashkir",
    native: "Башҡорт"
  }, {
    code: "be",
    name: "Belarusian",
    native: "Беларуская"
  }, {
    code: "bg",
    name: "Bulgarian",
    native: "Български"
  }, {
    code: "bh",
    name: "Bihari",
    native: "भोजपुरी"
  }, {
    code: "bi",
    name: "Bislama",
    native: "Bislama"
  }, {
    code: "bm",
    name: "Bambara",
    native: "Bamanankan"
  }, {
    code: "bn",
    name: "Bengali",
    native: "বাংলা"
  }, {
    code: "bo",
    name: "Tibetan",
    native: "བོད་ཡིག / Bod skad"
  }, {
    code: "br",
    name: "Breton",
    native: "Brezhoneg"
  }, {
    code: "bs",
    name: "Bosnian",
    native: "Bosanski"
  }, {
    code: "ca",
    name: "Catalan",
    native: "Català"
  }, {
    code: "ce",
    name: "Chechen",
    native: "Нохчийн"
  }, {
    code: "ch",
    name: "Chamorro",
    native: "Chamoru"
  }, {
    code: "co",
    name: "Corsican",
    native: "Corsu"
  }, {
    code: "cr",
    name: "Cree",
    native: "Nehiyaw"
  }, {
    code: "cs",
    name: "Czech",
    native: "Česky"
  }, {
    code: "cu",
    name: "Old Church Slavonic / Old Bulgarian",
    native: "словѣньскъ / slověnĭskŭ"
  }, {
    code: "cv",
    name: "Chuvash",
    native: "Чăваш"
  }, {
    code: "cy",
    name: "Welsh",
    native: "Cymraeg"
  }, {
    code: "da",
    name: "Danish",
    native: "Dansk"
  }, {
    code: "de",
    name: "German",
    native: "Deutsch"
  }, {
    code: "dv",
    name: "Divehi",
    native: "ދިވެހިބަސް",
    rtl: 1
  }, {
    code: "dz",
    name: "Dzongkha",
    native: "ཇོང་ཁ"
  }, {
    code: "ee",
    name: "Ewe",
    native: "Ɛʋɛ"
  }, {
    code: "el",
    name: "Greek",
    native: "Ελληνικά"
  }, {
    code: "eo",
    name: "Esperanto",
    native: "Esperanto"
  }, {
    code: "es",
    name: "Spanish",
    native: "Español"
  }, {
    code: "et",
    name: "Estonian",
    native: "Eesti"
  }, {
    code: "eu",
    name: "Basque",
    native: "Euskara"
  }, {
    code: "fa",
    name: "Persian",
    native: "فارسی",
    rtl: 1
  }, {
    code: "ff",
    name: "Peul",
    native: "Fulfulde"
  }, {
    code: "fi",
    name: "Finnish",
    native: "Suomi"
  }, {
    code: "fj",
    name: "Fijian",
    native: "Na Vosa Vakaviti"
  }, {
    code: "fo",
    name: "Faroese",
    native: "Føroyskt"
  }, {
    code: "fr",
    name: "French",
    native: "Français"
  }, {
    code: "fy",
    name: "West Frisian",
    native: "Frysk"
  }, {
    code: "ga",
    name: "Irish",
    native: "Gaeilge"
  }, {
    code: "gd",
    name: "Scottish Gaelic",
    native: "Gàidhlig"
  }, {
    code: "gl",
    name: "Galician",
    native: "Galego"
  }, {
    code: "gn",
    name: "Guarani",
    native: "Avañe'ẽ"
  }, {
    code: "gu",
    name: "Gujarati",
    native: "ગુજરાતી"
  }, {
    code: "gv",
    name: "Manx",
    native: "Gaelg"
  }, {
    code: "ha",
    name: "Hausa",
    native: "هَوُسَ",
    rtl: 1
  }, {
    code: "he",
    name: "Hebrew",
    native: "עברית",
    rtl: 1
  }, {
    code: "hi",
    name: "Hindi",
    native: "हिन्दी"
  }, {
    code: "ho",
    name: "Hiri Motu",
    native: "Hiri Motu"
  }, {
    code: "hr",
    name: "Croatian",
    native: "Hrvatski"
  }, {
    code: "ht",
    name: "Haitian",
    native: "Krèyol ayisyen"
  }, {
    code: "hu",
    name: "Hungarian",
    native: "Magyar"
  }, {
    code: "hy",
    name: "Armenian",
    native: "Հայերեն"
  }, {
    code: "hz",
    name: "Herero",
    native: "Otsiherero"
  }, {
    code: "ia",
    name: "Interlingua",
    native: "Interlingua"
  }, {
    code: "id",
    name: "Indonesian",
    native: "Bahasa Indonesia"
  }, {
    code: "ie",
    name: "Interlingue",
    native: "Interlingue"
  }, {
    code: "ig",
    name: "Igbo",
    native: "Igbo"
  }, {
    code: "ii",
    name: "Sichuan Yi",
    native: "ꆇꉙ / 四川彝语"
  }, {
    code: "ik",
    name: "Inupiak",
    native: "Iñupiak"
  }, {
    code: "io",
    name: "Ido",
    native: "Ido"
  }, {
    code: "is",
    name: "Icelandic",
    native: "Íslenska"
  }, {
    code: "it",
    name: "Italian",
    native: "Italiano"
  }, {
    code: "iu",
    name: "Inuktitut",
    native: "ᐃᓄᒃᑎᑐᑦ"
  }, {
    code: "ja",
    name: "Japanese",
    native: "日本語"
  }, {
    code: "jv",
    name: "Javanese",
    native: "Basa Jawa"
  }, {
    code: "ka",
    name: "Georgian",
    native: "ქართული"
  }, {
    code: "kg",
    name: "Kongo",
    native: "KiKongo"
  }, {
    code: "ki",
    name: "Kikuyu",
    native: "Gĩkũyũ"
  }, {
    code: "kj",
    name: "Kuanyama",
    native: "Kuanyama"
  }, {
    code: "kk",
    name: "Kazakh",
    native: "Қазақша"
  }, {
    code: "kl",
    name: "Greenlandic",
    native: "Kalaallisut"
  }, {
    code: "km",
    name: "Cambodian",
    native: "ភាសាខ្មែរ"
  }, {
    code: "kn",
    name: "Kannada",
    native: "ಕನ್ನಡ"
  }, {
    code: "ko",
    name: "Korean",
    native: "한국어"
  }, {
    code: "kr",
    name: "Kanuri",
    native: "Kanuri"
  }, {
    code: "ks",
    name: "Kashmiri",
    native: "कश्मीरी / كشميري",
    rtl: 1
  }, {
    code: "ku",
    name: "Kurdish",
    native: "Kurdî / كوردی",
    rtl: 1
  }, {
    code: "kv",
    name: "Komi",
    native: "Коми"
  }, {
    code: "kw",
    name: "Cornish",
    native: "Kernewek"
  }, {
    code: "ky",
    name: "Kirghiz",
    native: "Kırgızca / Кыргызча"
  }, {
    code: "la",
    name: "Latin",
    native: "Latina"
  }, {
    code: "lb",
    name: "Luxembourgish",
    native: "Lëtzebuergesch"
  }, {
    code: "lg",
    name: "Ganda",
    native: "Luganda"
  }, {
    code: "li",
    name: "Limburgian",
    native: "Limburgs"
  }, {
    code: "ln",
    name: "Lingala",
    native: "Lingála"
  }, {
    code: "lo",
    name: "Laotian",
    native: "ລາວ / Pha xa lao"
  }, {
    code: "lt",
    name: "Lithuanian",
    native: "Lietuvių"
  }, {
    code: "lu",
    name: "Luba-Katanga",
    native: "Tshiluba"
  }, {
    code: "lv",
    name: "Latvian",
    native: "Latviešu"
  }, {
    code: "mg",
    name: "Malagasy",
    native: "Malagasy"
  }, {
    code: "mh",
    name: "Marshallese",
    native: "Kajin Majel / Ebon"
  }, {
    code: "mi",
    name: "Maori",
    native: "Māori"
  }, {
    code: "mk",
    name: "Macedonian",
    native: "Македонски"
  }, {
    code: "ml",
    name: "Malayalam",
    native: "മലയാളം"
  }, {
    code: "mn",
    name: "Mongolian",
    native: "Монгол"
  }, {
    code: "mo",
    name: "Moldovan",
    native: "Moldovenească"
  }, {
    code: "mr",
    name: "Marathi",
    native: "मराठी"
  }, {
    code: "ms",
    name: "Malay",
    native: "Bahasa Melayu"
  }, {
    code: "mt",
    name: "Maltese",
    native: "bil-Malti"
  }, {
    code: "my",
    name: "Burmese",
    native: "မြန်မာစာ"
  }, {
    code: "na",
    name: "Nauruan",
    native: "Dorerin Naoero"
  }, {
    code: "nb",
    name: "Norwegian Bokmål",
    native: "Norsk bokmål"
  }, {
    code: "nd",
    name: "North Ndebele",
    native: "Sindebele"
  }, {
    code: "ne",
    name: "Nepali",
    native: "नेपाली"
  }, {
    code: "ng",
    name: "Ndonga",
    native: "Oshiwambo"
  }, {
    code: "nl",
    name: "Dutch",
    native: "Nederlands"
  }, {
    code: "nn",
    name: "Norwegian Nynorsk",
    native: "Norsk nynorsk"
  }, {
    code: "no",
    name: "Norwegian",
    native: "Norsk"
  }, {
    code: "nr",
    name: "South Ndebele",
    native: "isiNdebele"
  }, {
    code: "nv",
    name: "Navajo",
    native: "Diné bizaad"
  }, {
    code: "ny",
    name: "Chichewa",
    native: "Chi-Chewa"
  }, {
    code: "oc",
    name: "Occitan",
    native: "Occitan"
  }, {
    code: "oj",
    name: "Ojibwa",
    native: "ᐊᓂᔑᓈᐯᒧᐎᓐ / Anishinaabemowin"
  }, {
    code: "om",
    name: "Oromo",
    native: "Oromoo"
  }, {
    code: "or",
    name: "Oriya",
    native: "ଓଡ଼ିଆ"
  }, {
    code: "os",
    name: "Ossetian / Ossetic",
    native: "Иронау"
  }, {
    code: "pa",
    name: "Panjabi / Punjabi",
    native: "ਪੰਜਾਬੀ / पंजाबी / پنجابي"
  }, {
    code: "pi",
    name: "Pali",
    native: "Pāli / पाऴि"
  }, {
    code: "pl",
    name: "Polish",
    native: "Polski"
  }, {
    code: "ps",
    name: "Pashto",
    native: "پښتو",
    rtl: 1
  }, {
    code: "pt",
    name: "Portuguese",
    native: "Português"
  }, {
    code: "qu",
    name: "Quechua",
    native: "Runa Simi"
  }, {
    code: "rm",
    name: "Raeto Romance",
    native: "Rumantsch"
  }, {
    code: "rn",
    name: "Kirundi",
    native: "Kirundi"
  }, {
    code: "ro",
    name: "Romanian",
    native: "Română"
  }, {
    code: "ru",
    name: "Russian",
    native: "Русский"
  }, {
    code: "rw",
    name: "Rwandi",
    native: "Kinyarwandi"
  }, {
    code: "sa",
    name: "Sanskrit",
    native: "संस्कृतम्"
  }, {
    code: "sc",
    name: "Sardinian",
    native: "Sardu"
  }, {
    code: "sd",
    name: "Sindhi",
    native: "सिनधि"
  }, {
    code: "se",
    name: "Northern Sami",
    native: "Sámegiella"
  }, {
    code: "sg",
    name: "Sango",
    native: "Sängö"
  }, {
    code: "sh",
    name: "Serbo-Croatian",
    native: "Srpskohrvatski / Српскохрватски"
  }, {
    code: "si",
    name: "Sinhalese",
    native: "සිංහල"
  }, {
    code: "sk",
    name: "Slovak",
    native: "Slovenčina"
  }, {
    code: "sl",
    name: "Slovenian",
    native: "Slovenščina"
  }, {
    code: "sm",
    name: "Samoan",
    native: "Gagana Samoa"
  }, {
    code: "sn",
    name: "Shona",
    native: "chiShona"
  }, {
    code: "so",
    name: "Somalia",
    native: "Soomaaliga"
  }, {
    code: "sq",
    name: "Albanian",
    native: "Shqip"
  }, {
    code: "sr",
    name: "Serbian",
    native: "Српски"
  }, {
    code: "ss",
    name: "Swati",
    native: "SiSwati"
  }, {
    code: "st",
    name: "Southern Sotho",
    native: "Sesotho"
  }, {
    code: "su",
    name: "Sundanese",
    native: "Basa Sunda"
  }, {
    code: "sv",
    name: "Swedish",
    native: "Svenska"
  }, {
    code: "sw",
    name: "Swahili",
    native: "Kiswahili"
  }, {
    code: "ta",
    name: "Tamil",
    native: "தமிழ்"
  }, {
    code: "te",
    name: "Telugu",
    native: "తెలుగు"
  }, {
    code: "tg",
    name: "Tajik",
    native: "Тоҷикӣ"
  }, {
    code: "th",
    name: "Thai",
    native: "ไทย / Phasa Thai"
  }, {
    code: "ti",
    name: "Tigrinya",
    native: "ትግርኛ"
  }, {
    code: "tk",
    name: "Turkmen",
    native: "Туркмен / تركمن"
  }, {
    code: "tl",
    name: "Tagalog / Filipino",
    native: "Tagalog"
  }, {
    code: "tn",
    name: "Tswana",
    native: "Setswana"
  }, {
    code: "to",
    name: "Tonga",
    native: "Lea Faka-Tonga"
  }, {
    code: "tr",
    name: "Turkish",
    native: "Türkçe"
  }, {
    code: "ts",
    name: "Tsonga",
    native: "Xitsonga"
  }, {
    code: "tt",
    name: "Tatar",
    native: "Tatarça"
  }, {
    code: "tw",
    name: "Twi",
    native: "Twi"
  }, {
    code: "ty",
    name: "Tahitian",
    native: "Reo Mā`ohi"
  }, {
    code: "ug",
    name: "Uyghur",
    native: "Uyƣurqə / ئۇيغۇرچە"
  }, {
    code: "uk",
    name: "Ukrainian",
    native: "Українська"
  }, {
    code: "ur",
    name: "Urdu",
    native: "اردو",
    rtl: 1
  }, {
    code: "uz",
    name: "Uzbek",
    native: "Ўзбек"
  }, {
    code: "ve",
    name: "Venda",
    native: "Tshivenḓa"
  }, {
    code: "vi",
    name: "Vietnamese",
    native: "Tiếng Việt"
  }, {
    code: "vo",
    name: "Volapük",
    native: "Volapük"
  }, {
    code: "wa",
    name: "Walloon",
    native: "Walon"
  }, {
    code: "wo",
    name: "Wolof",
    native: "Wollof"
  }, {
    code: "xh",
    name: "Xhosa",
    native: "isiXhosa"
  }, {
    code: "yi",
    name: "Yiddish",
    native: "ייִדיש",
    rtl: 1
  }, {
    code: "yo",
    name: "Yoruba",
    native: "Yorùbá"
  }, {
    code: "za",
    name: "Zhuang",
    native: "Cuengh / Tôô / 壮语"
  }, {
    code: "zu",
    name: "Zulu",
    native: "isiZulu"
  }];
  let l = ["zh", "zh-TW", "en", "es", "de", "ar", "fil", "fr", "id", "ja", "it", "ko", "ms", "ru", "pt", "th", "vi"];
  let o = () => {
    let e = i.filter(e => l.includes(e.code));
    return throttledOrderByUtil.throttledOrderBy(e, e => l.indexOf(e.code));
  };
  (n = {})[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.AA = 1] = "AA";
  n[n.AB = 2] = "AB";
  n[n.AE = 3] = "AE";
  n[n.AF = 4] = "AF";
  n[n.AK = 5] = "AK";
  n[n.AM = 6] = "AM";
  n[n.AN = 7] = "AN";
  n[n.AR = 8] = "AR";
  n[n.AS = 9] = "AS";
  n[n.AV = 10] = "AV";
  n[n.AY = 11] = "AY";
  n[n.AZ = 12] = "AZ";
  n[n.BA = 13] = "BA";
  n[n.BE = 14] = "BE";
  n[n.BG = 15] = "BG";
  n[n.BH = 16] = "BH";
  n[n.BI = 17] = "BI";
  n[n.BM = 18] = "BM";
  n[n.BN = 19] = "BN";
  n[n.BO = 20] = "BO";
  n[n.BR = 21] = "BR";
  n[n.BS = 22] = "BS";
  n[n.CA = 23] = "CA";
  n[n.CE = 24] = "CE";
  n[n.CH = 25] = "CH";
  n[n.CO = 26] = "CO";
  n[n.CR = 27] = "CR";
  n[n.CS = 28] = "CS";
  n[n.CU = 29] = "CU";
  n[n.CV = 30] = "CV";
  n[n.CY = 31] = "CY";
  n[n.DA = 32] = "DA";
  n[n.DE = 33] = "DE";
  n[n.DV = 34] = "DV";
  n[n.DZ = 35] = "DZ";
  n[n.EE = 36] = "EE";
  n[n.EL = 37] = "EL";
  n[n.EN = 38] = "EN";
  n[n.EO = 39] = "EO";
  n[n.ES = 40] = "ES";
  n[n.ET = 41] = "ET";
  n[n.EU = 42] = "EU";
  n[n.FA = 43] = "FA";
  n[n.FF = 44] = "FF";
  n[n.FI = 45] = "FI";
  n[n.FJ = 46] = "FJ";
  n[n.FO = 47] = "FO";
  n[n.FR = 48] = "FR";
  n[n.FY = 49] = "FY";
  n[n.GA = 50] = "GA";
  n[n.GD = 51] = "GD";
  n[n.GL = 52] = "GL";
  n[n.GN = 53] = "GN";
  n[n.GU = 54] = "GU";
  n[n.GV = 55] = "GV";
  n[n.HA = 56] = "HA";
  n[n.HE = 57] = "HE";
  n[n.HI = 58] = "HI";
  n[n.HO = 59] = "HO";
  n[n.HR = 60] = "HR";
  n[n.HT = 61] = "HT";
  n[n.HU = 62] = "HU";
  n[n.HY = 63] = "HY";
  n[n.HZ = 64] = "HZ";
  n[n.IA = 65] = "IA";
  n[n.ID = 66] = "ID";
  n[n.IE = 67] = "IE";
  n[n.IG = 68] = "IG";
  n[n.II = 69] = "II";
  n[n.IK = 70] = "IK";
  n[n.IO = 71] = "IO";
  n[n.IS = 72] = "IS";
  n[n.IT = 73] = "IT";
  n[n.IU = 74] = "IU";
  n[n.JA = 75] = "JA";
  n[n.JV = 76] = "JV";
  n[n.KA = 77] = "KA";
  n[n.KG = 78] = "KG";
  n[n.KI = 79] = "KI";
  n[n.KJ = 80] = "KJ";
  n[n.KK = 81] = "KK";
  n[n.KL = 82] = "KL";
  n[n.KM = 83] = "KM";
  n[n.KN = 84] = "KN";
  n[n.KO = 85] = "KO";
  n[n.KR = 86] = "KR";
  n[n.KS = 87] = "KS";
  n[n.KU = 88] = "KU";
  n[n.KV = 89] = "KV";
  n[n.KW = 90] = "KW";
  n[n.KY = 91] = "KY";
  n[n.LA = 92] = "LA";
  n[n.LB = 93] = "LB";
  n[n.LG = 94] = "LG";
  n[n.LI = 95] = "LI";
  n[n.LN = 96] = "LN";
  n[n.LO = 97] = "LO";
  n[n.LT = 98] = "LT";
  n[n.LU = 99] = "LU";
  n[n.LV = 100] = "LV";
  n[n.MG = 101] = "MG";
  n[n.MH = 102] = "MH";
  n[n.MI = 103] = "MI";
  n[n.MK = 104] = "MK";
  n[n.ML = 105] = "ML";
  n[n.MN = 106] = "MN";
  n[n.MO = 107] = "MO";
  n[n.MR = 108] = "MR";
  n[n.MS = 109] = "MS";
  n[n.MT = 110] = "MT";
  n[n.MY = 111] = "MY";
  n[n.NA = 112] = "NA";
  n[n.NB = 113] = "NB";
  n[n.ND = 114] = "ND";
  n[n.NE = 115] = "NE";
  n[n.NG = 116] = "NG";
  n[n.NL = 117] = "NL";
  n[n.NN = 118] = "NN";
  n[n.NO = 119] = "NO";
  n[n.NR = 120] = "NR";
  n[n.NV = 121] = "NV";
  n[n.NY = 122] = "NY";
  n[n.OC = 123] = "OC";
  n[n.OJ = 124] = "OJ";
  n[n.OM = 125] = "OM";
  n[n.OR = 126] = "OR";
  n[n.OS = 127] = "OS";
  n[n.PA = 128] = "PA";
  n[n.PI = 129] = "PI";
  n[n.PL = 130] = "PL";
  n[n.PS = 131] = "PS";
  n[n.PT = 132] = "PT";
  n[n.QU = 133] = "QU";
  n[n.RM = 134] = "RM";
  n[n.RN = 135] = "RN";
  n[n.RO = 136] = "RO";
  n[n.RU = 137] = "RU";
  n[n.RW = 138] = "RW";
  n[n.SA = 139] = "SA";
  n[n.SC = 140] = "SC";
  n[n.SD = 141] = "SD";
  n[n.SE = 142] = "SE";
  n[n.SG = 143] = "SG";
  n[n.SH = 144] = "SH";
  n[n.SI = 145] = "SI";
  n[n.SK = 146] = "SK";
  n[n.SL = 147] = "SL";
  n[n.SM = 148] = "SM";
  n[n.SN = 149] = "SN";
  n[n.SO = 150] = "SO";
  n[n.SQ = 151] = "SQ";
  n[n.SR = 152] = "SR";
  n[n.SS = 153] = "SS";
  n[n.ST = 154] = "ST";
  n[n.SU = 155] = "SU";
  n[n.SV = 156] = "SV";
  n[n.SW = 157] = "SW";
  n[n.TA = 158] = "TA";
  n[n.TE = 159] = "TE";
  n[n.TG = 160] = "TG";
  n[n.TH = 161] = "TH";
  n[n.TI = 162] = "TI";
  n[n.TK = 163] = "TK";
  n[n.TL = 164] = "TL";
  n[n.TN = 165] = "TN";
  n[n.TO = 166] = "TO";
  n[n.TR = 167] = "TR";
  n[n.TS = 168] = "TS";
  n[n.TT = 169] = "TT";
  n[n.TW = 170] = "TW";
  n[n.TY = 171] = "TY";
  n[n.UG = 172] = "UG";
  n[n.UK = 173] = "UK";
  n[n.UR = 174] = "UR";
  n[n.UZ = 175] = "UZ";
  n[n.VE = 176] = "VE";
  n[n.VI = 177] = "VI";
  n[n.VO = 178] = "VO";
  n[n.WA = 179] = "WA";
  n[n.WO = 180] = "WO";
  n[n.XH = 181] = "XH";
  n[n.YI = 182] = "YI";
  n[n.YO = 183] = "YO";
  n[n.ZA = 184] = "ZA";
  n[n.ZH = 185] = "ZH";
  n[n.ZU = 186] = "ZU";
  n[n.HI_LATN = 1001] = "HI_LATN";
  n[n.ZH_HANT = 1002] = "ZH_HANT";
  n[n.ZH_HANT_HK = 1003] = "ZH_HANT_HK";
  n[n.ZH_HANT_TW = 1004] = "ZH_HANT_TW";
  n[n.CEB = 2001] = "CEB";
  n[n.CKB = 2002] = "CKB";
  n[n.KMR = 2003] = "KMR";
  n[n.UMB = 2004] = "UMB";
  n[n.NSO = 2005] = "NSO";
  n[n.KAM = 2006] = "KAM";
  n[n.LUO = 2007] = "LUO";
  n[n.FUV = 2008] = "FUV";
  n[n.LZH = 3001] = "LZH";
  n[n.YUE = 3002] = "YUE";
  n[n.CMN = 3003] = "CMN";
  n[n.WUU = 3004] = "WUU";
  n[n.NAN = 3005] = "NAN";
  let s = n;
  let c = {
    aa: s.AA,
    ab: s.AB,
    ae: s.AE,
    af: s.AF,
    ak: s.AK,
    am: s.AM,
    an: s.AN,
    ar: s.AR,
    as: s.AS,
    av: s.AV,
    ay: s.AY,
    az: s.AZ,
    ba: s.BA,
    be: s.BE,
    bg: s.BG,
    bh: s.BH,
    bi: s.BI,
    bm: s.BM,
    bn: s.BN,
    bo: s.BO,
    br: s.BR,
    bs: s.BS,
    ca: s.CA,
    ce: s.CE,
    ch: s.CH,
    co: s.CO,
    cr: s.CR,
    cs: s.CS,
    cu: s.CU,
    cv: s.CV,
    cy: s.CY,
    da: s.DA,
    de: s.DE,
    dv: s.DV,
    dz: s.DZ,
    ee: s.EE,
    el: s.EL,
    en: s.EN,
    eo: s.EO,
    es: s.ES,
    et: s.ET,
    eu: s.EU,
    fa: s.FA,
    ff: s.FF,
    fi: s.FI,
    fj: s.FJ,
    fo: s.FO,
    fr: s.FR,
    fy: s.FY,
    ga: s.GA,
    gd: s.GD,
    gl: s.GL,
    gn: s.GN,
    gu: s.GU,
    gv: s.GV,
    ha: s.HA,
    he: s.HE,
    hi: s.HI,
    ho: s.HO,
    hr: s.HR,
    ht: s.HT,
    hu: s.HU,
    hy: s.HY,
    hz: s.HZ,
    ia: s.IA,
    id: s.ID,
    ie: s.IE,
    ig: s.IG,
    ii: s.II,
    ik: s.IK,
    io: s.IO,
    is: s.IS,
    it: s.IT,
    iu: s.IU,
    ja: s.JA,
    jv: s.JV,
    ka: s.KA,
    kg: s.KG,
    ki: s.KI,
    kj: s.KJ,
    kk: s.KK,
    kl: s.KL,
    km: s.KM,
    kn: s.KN,
    ko: s.KO,
    kr: s.KR,
    ks: s.KS,
    ku: s.KU,
    kv: s.KV,
    kw: s.KW,
    ky: s.KY,
    la: s.LA,
    lb: s.LB,
    lg: s.LG,
    li: s.LI,
    ln: s.LN,
    lo: s.LO,
    lt: s.LT,
    lu: s.LU,
    lv: s.LV,
    mg: s.MG,
    mh: s.MH,
    mi: s.MI,
    mk: s.MK,
    ml: s.ML,
    mn: s.MN,
    mo: s.MO,
    mr: s.MR,
    ms: s.MS,
    mt: s.MT,
    my: s.MY,
    na: s.NA,
    nb: s.NB,
    nd: s.ND,
    ne: s.NE,
    ng: s.NG,
    nl: s.NL,
    nn: s.NN,
    no: s.NO,
    nr: s.NR,
    nv: s.NV,
    ny: s.NY,
    oc: s.OC,
    oj: s.OJ,
    om: s.OM,
    or: s.OR,
    os: s.OS,
    pa: s.PA,
    pi: s.PI,
    pl: s.PL,
    ps: s.PS,
    pt: s.PT,
    qu: s.QU,
    rm: s.RM,
    rn: s.RN,
    ro: s.RO,
    ru: s.RU,
    rw: s.RW,
    sa: s.SA,
    sc: s.SC,
    sd: s.SD,
    se: s.SE,
    sg: s.SG,
    sh: s.SH,
    si: s.SI,
    sk: s.SK,
    sl: s.SL,
    sm: s.SM,
    sn: s.SN,
    so: s.SO,
    sq: s.SQ,
    sr: s.SR,
    ss: s.SS,
    st: s.ST,
    su: s.SU,
    sv: s.SV,
    sw: s.SW,
    ta: s.TA,
    te: s.TE,
    tg: s.TG,
    th: s.TH,
    ti: s.TI,
    tk: s.TK,
    tl: s.TL,
    tn: s.TN,
    to: s.TO,
    tr: s.TR,
    ts: s.TS,
    tt: s.TT,
    tw: s.TW,
    ty: s.TY,
    ug: s.UG,
    uk: s.UK,
    ur: s.UR,
    uz: s.UZ,
    ve: s.VE,
    vi: s.VI,
    vo: s.VO,
    wa: s.WA,
    wo: s.WO,
    xh: s.XH,
    yi: s.YI,
    yo: s.YO,
    za: s.ZA,
    zh: s.ZH,
    "zh-CN": s.ZH,
    "zh-Hans": s.ZH,
    zu: s.ZU,
    "hi-Latn": s.HI_LATN,
    "hi-latn": s.HI_LATN,
    "zh-Hant": s.ZH_HANT,
    "zh-hant": s.ZH_HANT,
    "zh-Hant-hk": s.ZH_HANT_HK,
    "zh-hant-hk": s.ZH_HANT_HK,
    "zh-Hant-tw": s.ZH_HANT_TW,
    "zh-hant-tw": s.ZH_HANT_TW,
    ceb: s.CEB,
    ckb: s.CKB,
    kmr: s.KMR,
    umb: s.UMB,
    nso: s.NSO,
    kam: s.KAM,
    luo: s.LUO,
    fuv: s.FUV,
    lzh: s.LZH,
    yue: s.YUE,
    cmn: s.CMN,
    wuu: s.WUU,
    nan: s.NAN
  };
  let d = {
    [s.AA]: "aa",
    [s.AB]: "ab",
    [s.AE]: "ae",
    [s.AF]: "af",
    [s.AK]: "ak",
    [s.AM]: "am",
    [s.AN]: "an",
    [s.AR]: "ar",
    [s.AS]: "as",
    [s.AV]: "av",
    [s.AY]: "ay",
    [s.AZ]: "az",
    [s.BA]: "ba",
    [s.BE]: "be",
    [s.BG]: "bg",
    [s.BH]: "bh",
    [s.BI]: "bi",
    [s.BM]: "bm",
    [s.BN]: "bn",
    [s.BO]: "bo",
    [s.BR]: "br",
    [s.BS]: "bs",
    [s.CA]: "ca",
    [s.CE]: "ce",
    [s.CH]: "ch",
    [s.CO]: "co",
    [s.CR]: "cr",
    [s.CS]: "cs",
    [s.CU]: "cu",
    [s.CV]: "cv",
    [s.CY]: "cy",
    [s.DA]: "da",
    [s.DE]: "de",
    [s.DV]: "dv",
    [s.DZ]: "dz",
    [s.EE]: "ee",
    [s.EL]: "el",
    [s.EN]: "en",
    [s.EO]: "eo",
    [s.ES]: "es",
    [s.ET]: "et",
    [s.EU]: "eu",
    [s.FA]: "fa",
    [s.FF]: "ff",
    [s.FI]: "fi",
    [s.FJ]: "fj",
    [s.FO]: "fo",
    [s.FR]: "fr",
    [s.FY]: "fy",
    [s.GA]: "ga",
    [s.GD]: "gd",
    [s.GL]: "gl",
    [s.GN]: "gn",
    [s.GU]: "gu",
    [s.GV]: "gv",
    [s.HA]: "ha",
    [s.HE]: "he",
    [s.HI]: "hi",
    [s.HO]: "ho",
    [s.HR]: "hr",
    [s.HT]: "ht",
    [s.HU]: "hu",
    [s.HY]: "hy",
    [s.HZ]: "hz",
    [s.IA]: "ia",
    [s.ID]: "id",
    [s.IE]: "ie",
    [s.IG]: "ig",
    [s.II]: "ii",
    [s.IK]: "ik",
    [s.IO]: "io",
    [s.IS]: "is",
    [s.IT]: "it",
    [s.IU]: "iu",
    [s.JA]: "ja",
    [s.JV]: "jv",
    [s.KA]: "ka",
    [s.KG]: "kg",
    [s.KI]: "ki",
    [s.KJ]: "kj",
    [s.KK]: "kk",
    [s.KL]: "kl",
    [s.KM]: "km",
    [s.KN]: "kn",
    [s.KO]: "ko",
    [s.KR]: "kr",
    [s.KS]: "ks",
    [s.KU]: "ku",
    [s.KV]: "kv",
    [s.KW]: "kw",
    [s.KY]: "ky",
    [s.LA]: "la",
    [s.LB]: "lb",
    [s.LG]: "lg",
    [s.LI]: "li",
    [s.LN]: "ln",
    [s.LO]: "lo",
    [s.LT]: "lt",
    [s.LU]: "lu",
    [s.LV]: "lv",
    [s.MG]: "mg",
    [s.MH]: "mh",
    [s.MI]: "mi",
    [s.MK]: "mk",
    [s.ML]: "ml",
    [s.MN]: "mn",
    [s.MO]: "mo",
    [s.MR]: "mr",
    [s.MS]: "ms",
    [s.MT]: "mt",
    [s.MY]: "my",
    [s.NA]: "na",
    [s.NB]: "nb",
    [s.ND]: "nd",
    [s.NE]: "ne",
    [s.NG]: "ng",
    [s.NL]: "nl",
    [s.NN]: "nn",
    [s.NO]: "no",
    [s.NR]: "nr",
    [s.NV]: "nv",
    [s.NY]: "ny",
    [s.OC]: "oc",
    [s.OJ]: "oj",
    [s.OM]: "om",
    [s.OR]: "or",
    [s.OS]: "os",
    [s.PA]: "pa",
    [s.PI]: "pi",
    [s.PL]: "pl",
    [s.PS]: "ps",
    [s.PT]: "pt",
    [s.QU]: "qu",
    [s.RM]: "rm",
    [s.RN]: "rn",
    [s.RO]: "ro",
    [s.RU]: "ru",
    [s.RW]: "rw",
    [s.SA]: "sa",
    [s.SC]: "sc",
    [s.SD]: "sd",
    [s.SE]: "se",
    [s.SG]: "sg",
    [s.SH]: "sh",
    [s.SI]: "si",
    [s.SK]: "sk",
    [s.SL]: "sl",
    [s.SM]: "sm",
    [s.SN]: "sn",
    [s.SO]: "so",
    [s.SQ]: "sq",
    [s.SR]: "sr",
    [s.SS]: "ss",
    [s.ST]: "st",
    [s.SU]: "su",
    [s.SV]: "sv",
    [s.SW]: "sw",
    [s.TA]: "ta",
    [s.TE]: "te",
    [s.TG]: "tg",
    [s.TH]: "th",
    [s.TI]: "ti",
    [s.TK]: "tk",
    [s.TL]: "tl",
    [s.TN]: "tn",
    [s.TO]: "to",
    [s.TR]: "tr",
    [s.TS]: "ts",
    [s.TT]: "tt",
    [s.TW]: "tw",
    [s.TY]: "ty",
    [s.UG]: "ug",
    [s.UK]: "uk",
    [s.UR]: "ur",
    [s.UZ]: "uz",
    [s.VE]: "ve",
    [s.VI]: "vi",
    [s.VO]: "vo",
    [s.WA]: "wa",
    [s.WO]: "wo",
    [s.XH]: "xh",
    [s.YI]: "yi",
    [s.YO]: "yo",
    [s.ZA]: "za",
    [s.ZH]: "zh",
    [s.ZU]: "zu",
    [s.HI_LATN]: "hi-Latn",
    [s.ZH_HANT]: "zh-Hant",
    [s.ZH_HANT_HK]: "zh-Hant-hk",
    [s.ZH_HANT_TW]: "zh-Hant-tw",
    [s.CEB]: "ceb",
    [s.CKB]: "ckb",
    [s.KMR]: "kmr",
    [s.UMB]: "umb",
    [s.NSO]: "nso",
    [s.KAM]: "kam",
    [s.LUO]: "luo",
    [s.FUV]: "fuv",
    [s.LZH]: "lzh",
    [s.YUE]: "yue",
    [s.CMN]: "cmn",
    [s.WUU]: "wuu",
    [s.NAN]: "nan"
  };
  require.d(exports, {
    languageCodeMap: function () {
      return d;
    },
    LanguageCodeEnum: function () {
      return s;
    },
    getPreferredLanguages: function () {
      return o;
    },
    languageToEnumMap: function () {
      return c;
    }
  });
}