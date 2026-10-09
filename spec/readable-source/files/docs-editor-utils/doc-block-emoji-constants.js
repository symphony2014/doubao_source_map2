// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J_' to 'defaultEmojiHex'
// - Renamed export 'P0' to 'calloutEmojiClass'
// - Renamed export 'YG' to 'emojiHexList'
// - Renamed export '_d' to 'blockTypeClassMap'
// - Renamed export 'il' to 'supportedBlockTypes'
// - Renamed export 'lP' to 'defaultEmojiList'
// - Renamed export 'nH' to 'emojiLimit'
// - Renamed export 'vE' to 'changeIconToastKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 664589
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  let i = "callout-block-emoji";
  let l = t("CreationDoc_Docs_CalloutBlock_ChangeIcon_Toast");
  t("block.poll_emoji_recent");
  t("block.poll_emoji_people");
  t("block.poll_emoji_nature");
  t("block.poll_emoji_foods");
  t("block.poll_emoji_activity");
  t("block.poll_emoji_places");
  t("block.poll_emoji_objects");
  t("block.poll_emoji_symbols");
  t("block.poll_emoji_flags");
  t("block.poll_emoji_custom");
  let c = ["bulb", "pushpin", "white_check_mark", "negative_squared_cross_mark", "heart", "+1", "tada", "no_entry_sign", "exclamation"];
  let u = 18;
  let a = "1f4a1";
  let s = ["bulb", "+1", "star2", "tada", "pushpin", "books", "pencil2", "writing_hand", "heart", "round_pushpin", "baguette_bread", "soccer", "musical_keyboard", "musical_score", "umbrella_on_ground", "art", "first_place_medal", "trophy", "gift", "sunrise", "camping", "beach_with_umbrella", "desert_island", "bullettrain_front", "glass_of_milk", "chestnut", "cake", "bread", "unicorn_face", "monkey_face"];
  ["1F600", "1F601", "1F602", "1F603", "1F604", "1F605", "1F606", "1F609", "1F60A", "1F60B", "1F60E", "1F60D", "1F618", "1F617", "1F619", "1F61A", "1F642", "1F917", "1F914", "1F610", "1F611", "1F636", "1F644", "1F60F", "1F623", "1F625", "1F62E", "1F910", "1F62F", "1F62A", "1F62B", "1F634", "1F60C", "1F61B", "1F61C", "1F61D", "1F612", "1F613", "1F614", "1F615", "1F643", "1F911", "1F632", "1F641", "1F616", "1F61E", "1F61F", "1F624", "1F622", "1F62D", "1F626", "1F627", "1F628", "1F629", "1F62C", "1F630", "1F631", "1F633", "1F635", "1F621", "1F620", "1F637", "1F912", "1F915", "1F607", "1F913", "1F608", "1F47F", "1F479", "1F47A", "1F480", "1F47B", "1F47D", "1F47E", "1F916", "1F4A9", "1F63A", "1F638", "1F639", "1F63B", "1F63C", "1F63D", "1F640", "1F63F", "1F63E", "1F648", "1F649", "1F64A", "1F476", "1F466", "1F467", "1F468", "1F469", "1F474", "1F475", "1F46E", "1F482", "1F477", "1F478", "1F473", "1F472", "1F471", "1F470", "1F47C", "1F385", "1F64D", "1F64E", "1F645", "1F646", "1F481", "1F64B", "1F647", "1F486", "1F487", "1F6B6", "1F3C3", "1F483", "1F46F", "1F6C0", "1F6CC", "1F464", "1F465", "1F3C7", "1F3C2", "1F3C4", "1F6A3", "1F3CA", "1F6B4", "1F6B5", "1F46B", "1F46C", "1F46D", "1F48F", "1F491", "1F46A", "1F4AA", "1F448", "1F449", "1F446", "1F595", "1F447", "1F596", "1F918", "270B", "1F44C", "1F44D", "1F44E", "270A", "1F44A", "1F44B", "1F44F", "1F450", "1F64C", "1F64F", "1F485", "1F442", "1F443", "1F463", "1F440", "1F445", "1F444", "1F48B", "1F498", "1F493", "1F494", "1F495", "1F496", "1F497", "1F499", "1F49A", "1F49B", "1F49C", "1F49D", "1F49E", "1F49F", "1F48C", "1F4A4", "1F4A2", "1F4A3", "1F4A5", "1F4A6", "1F4A8", "1F4AB", "1F4AC", "1F4AD", "1F453", "1F454", "1F455", "1F456", "1F457", "1F458", "1F459", "1F45A", "1F45B", "1F45C", "1F45D", "1F392", "1F45E", "1F45F", "1F460", "1F461", "1F462", "1F451", "1F452", "1F3A9", "1F393", "1F4FF", "1F484", "1F48D", "1F48E", "1F435", "1F412", "1F436", "1F415", "1F429", "1F43A", "1F431", "1F408", "1F981", "1F42F", "1F405", "1F406", "1F434", "1F40E", "1F984", "1F42E", "1F402", "1F403", "1F404", "1F437", "1F416", "1F417", "1F43D", "1F40F", "1F411", "1F410", "1F42A", "1F42B", "1F418", "1F42D", "1F401", "1F400", "1F439", "1F430", "1F407", "1F43B", "1F428", "1F43C", "1F43E", "1F983", "1F414", "1F413", "1F423", "1F424", "1F425", "1F426", "1F427", "1F438", "1F40A", "1F422", "1F40D", "1F432", "1F409", "1F433", "1F40B", "1F42C", "1F41F", "1F420", "1F421", "1F419", "1F41A", "1F980", "1F40C", "1F41B", "1F41C", "1F41D", "1F41E", "1F982", "1F490", "1F338", "1F4AE", "1F339", "1F33A", "1F33B", "1F33C", "1F337", "1F331", "1F332", "1F333", "1F334", "1F335", "1F33E", "1F33F", "1F340", "1F341", "1F342", "1F343", "1F347", "1F348", "1F349", "1F34A", "1F34B", "1F34C", "1F34D", "1F34E", "1F34F", "1F350", "1F351", "1F352", "1F353", "1F345", "1F346", "1F33D", "1F344", "1F330", "1F35E", "1F9C0", "1F356", "1F357", "1F354", "1F35F", "1F355", "1F32D", "1F32E", "1F32F", "1F373", "1F372", "1F37F", "1F371", "1F358", "1F359", "1F35A", "1F35B", "1F35C", "1F35D", "1F360", "1F362", "1F363", "1F364", "1F365", "1F361", "1F366", "1F367", "1F368", "1F369", "1F36A", "1F382", "1F370", "1F36B", "1F36C", "1F36D", "1F36E", "1F36F", "1F37C", "2615", "1F375", "1F376", "1F37E", "1F377", "1F378", "1F379", "1F37A", "1F37B", "1F374", "1F52A", "1F3FA", "1F383", "1F384", "1F386", "1F387", "2728", "1F388", "1F389", "1F38A", "1F38B", "1F38D", "1F38E", "1F38F", "1F390", "1F391", "1F380", "1F381", "1F3AB", "1F3C6", "1F3C5", "26BD", "26BE", "1F3C0", "1F3D0", "1F3C8", "1F3C9", "1F3BE", "1F3B1", "1F3B3", "1F3CF", "1F3D1", "1F3D2", "1F3D3", "1F3F8", "1F3AF", "26F3", "1F3A3", "1F3BD", "1F3BF", "1F3AE", "1F3B2", "1F0CF", "1F004", "1F3B4", "1F30D", "1F30E", "1F30F", "1F310", "1F5FE", "1F30B", "1F5FB", "1F3E0", "1F3E1", "1F3E2", "1F3E3", "1F3E4", "1F3E5", "1F3E6", "1F3E8", "1F3E9", "1F3EA", "1F3EB", "1F3EC", "1F3ED", "1F3EF", "1F3F0", "1F492", "1F5FC", "1F5FD", "26EA", "1F54C", "1F54D", "1F54B", "26F2", "26FA", "1F301", "1F303", "1F304", "1F305", "1F306", "1F307", "1F309", "1F30C", "1F3A0", "1F3A1", "1F3A2", "1F488", "1F3AA", "1F3AD", "1F3A8", "1F3B0", "1F682", "1F683", "1F684", "1F685", "1F686", "1F687", "1F688", "1F689", "1F68A", "1F69D", "1F69E", "1F68B", "1F68C", "1F68D", "1F68E", "1F690", "1F691", "1F692", "1F693", "1F694", "1F695", "1F696", "1F697", "1F698", "1F699", "1F69A", "1F69B", "1F69C", "1F6B2", "1F68F", "26FD", "1F6A8", "1F6A5", "1F6A6", "1F6A7", "2693", "26F5", "1F6A4", "1F6A2", "1F6EB", "1F6EC", "1F4BA", "1F681", "1F69F", "1F6A0", "1F6A1", "1F680", "1F6AA", "1F6BD", "1F6BF", "1F6C1", "231B", "23F3", "231A", "23F0", "1F55B", "1F567", "1F550", "1F55C", "1F551", "1F55D", "1F552", "1F55E", "1F553", "1F55F", "1F554", "1F560", "1F555", "1F561", "1F556", "1F562", "1F557", "1F563", "1F558", "1F564", "1F559", "1F565", "1F55A", "1F566", "1F311", "1F312", "1F313", "1F314", "1F315", "1F316", "1F317", "1F318", "1F319", "1F31A", "1F31B", "1F31C", "1F31D", "1F31E", "2B50", "1F31F", "1F320", "26C5", "1F300", "1F308", "1F302", "2614", "26A1", "26C4", "1F525", "1F4A7", "1F30A", "1F507", "1F508", "1F509", "1F50A", "1F4E2", "1F4E3", "1F4EF", "1F514", "1F515", "1F3BC", "1F3B5", "1F3B6", "1F3A4", "1F3A7", "1F4FB", "1F3B7", "1F3B8", "1F3B9", "1F3BA", "1F3BB", "1F4F1", "1F4F2", "1F4DE", "1F4DF", "1F4E0", "1F50B", "1F50C", "1F4BB", "1F4BD", "1F4BE", "1F4BF", "1F4C0", "1F3A5", "1F3AC", "1F4FA", "1F4F7", "1F4F8", "1F4F9", "1F4FC", "1F50D", "1F50E", "1F52C", "1F52D", "1F4E1", "1F4A1", "1F526", "1F3EE", "1F4D4", "1F4D5", "1F4D6", "1F4D7", "1F4D8", "1F4D9", "1F4DA", "1F4D3", "1F4D2", "1F4C3", "1F4DC", "1F4C4", "1F4F0", "1F4D1", "1F516", "1F4B0", "1F4B4", "1F4B5", "1F4B6", "1F4B7", "1F4B8", "1F4B3", "1F4B9", "1F4B1", "1F4B2", "1F4E7", "1F4E8", "1F4E9", "1F4E4", "1F4E5", "1F4E6", "1F4EB", "1F4EA", "1F4EC", "1F4ED", "1F4EE", "1F4DD", "1F4BC", "1F4C1", "1F4C2", "1F4C5", "1F4C6", "1F4C7", "1F4C8", "1F4C9", "1F4CA", "1F4CB", "1F4CC", "1F4CD", "1F4CE", "1F4CF", "1F4D0", "1F512", "1F513", "1F50F", "1F510", "1F511", "1F528", "1F52B", "1F3F9", "1F527", "1F529", "1F517", "1F489", "1F48A", "1F6AC", "1F5FF", "1F52E", "1F3E7", "1F6AE", "1F6B0", "267F", "1F6B9", "1F6BA", "1F6BB", "1F6BC", "1F6BE", "1F6C2", "1F6C3", "1F6C4", "1F6C5", "1F6B8", "26D4", "1F6AB", "1F6B3", "1F6AD", "1F6AF", "1F6B1", "1F6B7", "1F4F5", "1F51E", "1F503", "1F504", "1F519", "1F51A", "1F51B", "1F51C", "1F51D", "1F6D0", "1F54E", "1F52F", "2648", "2649", "264A", "264B", "264C", "264D", "264E", "264F", "2650", "2651", "2652", "2653", "26CE", "1F500", "1F501", "1F502", "23E9", "23EA", "1F53C", "23EB", "1F53D", "23EC", "1F3A6", "1F505", "1F506", "1F4F6", "1F4F3", "1F4F4", "1F531", "1F4DB", "1F530", "2B55", "2705", "274C", "274E", "2795", "2796", "2797", "27B0", "27BF", "2753", "2754", "2755", "2757", "1F51F", "1F4AF", "1F520", "1F521", "1F522", "1F523", "1F524", "1F18E", "1F191", "1F192", "1F193", "1F194", "1F195", "1F196", "1F197", "1F198", "1F199", "1F19A", "1F201", "1F236", "1F22F", "1F250", "1F239", "1F21A", "1F232", "1F251", "1F238", "1F234", "1F233", "1F23A", "1F235", "25FD", "25FE", "2B1B", "2B1C", "1F536", "1F537", "1F538", "1F539", "1F53A", "1F53B", "1F4A0", "1F518", "1F532", "1F533", "26AA", "26AB", "1F534", "1F535"].reduce((e, n) => {
    e[n] = true;
    return e;
  }, {});
  let d = [...docBlockTypeConstants.headingTypeArray, ...docBlockTypeConstants.listBlockTypes, ...docBlockTypeConstants.textBlockTypes, docBlockTypeConstants.blockTypeConstants.QUOTE, docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER, docBlockTypeConstants.blockTypeConstants.TASK].reduce((e, n) => {
    e[n] = true;
    return e;
  }, {});
  let f = {
    [docBlockTypeConstants.blockTypeConstants.TEXT]: "emoji-for-text",
    [docBlockTypeConstants.blockTypeConstants.HEADING1]: "emoji-for-heading1",
    [docBlockTypeConstants.blockTypeConstants.HEADING2]: "emoji-for-heading2",
    [docBlockTypeConstants.blockTypeConstants.HEADING3]: "emoji-for-heading3",
    [docBlockTypeConstants.blockTypeConstants.HEADING4]: "emoji-for-heading4",
    [docBlockTypeConstants.blockTypeConstants.HEADING5]: "emoji-for-heading5",
    [docBlockTypeConstants.blockTypeConstants.HEADING6]: "emoji-for-heading6",
    [docBlockTypeConstants.blockTypeConstants.HEADING7]: "emoji-for-heading7",
    [docBlockTypeConstants.blockTypeConstants.HEADING8]: "emoji-for-heading8",
    [docBlockTypeConstants.blockTypeConstants.HEADING9]: "emoji-for-heading9",
    [docBlockTypeConstants.blockTypeConstants.BULLET]: "emoji-for-bullet",
    [docBlockTypeConstants.blockTypeConstants.TODO]: "emoji-for-todo",
    [docBlockTypeConstants.blockTypeConstants.TASK]: "emoji-for-task",
    [docBlockTypeConstants.blockTypeConstants.QUOTE]: "emoji-for-quote",
    [docBlockTypeConstants.blockTypeConstants.ORDERED]: "emoji-for-order"
  };
  require.d(exports, {
    defaultEmojiHex: function () {
      return a;
    },
    calloutEmojiClass: function () {
      return i;
    },
    emojiHexList: function () {
      return s;
    },
    blockTypeClassMap: function () {
      return f;
    },
    supportedBlockTypes: function () {
      return d;
    },
    defaultEmojiList: function () {
      return c;
    },
    emojiLimit: function () {
      return u;
    },
    changeIconToastKey: function () {
      return l;
    }
  });
}