define(function(require, exports, module) {
    "use strict";
    var CommandManager = brackets.getModule("command/CommandManager");
    var Menus = brackets.getModule("command/Menus");
    var EditorManager = brackets.getModule("editor/EditorManager");
    var right_click_search_biswiki = "RightClickExtended.biswiki";

    var AppInit = brackets.getModule("utils/AppInit");

    var strings = require("strings");
    
    function log(msg) {

        console.log('Checked:' + msg);
    }
    function handleRightClickSearchBIS() {

        var thisEditor = EditorManager.getCurrentFullEditor();
        var keyword = thisEditor._codeMirror.getSelection();
        console.log(keyword);
        if ((keyword.length > 0)) {
            var url = "https://community.bistudio.com/wiki?search=" + keyword;
            brackets.app.openURLInDefaultBrowser(url);
        }
    }

    AppInit.appReady(function() {
        log(strings);
        CommandManager.register(strings.RIGHT_CLICK_SEARCH_TITLE_BISWIKI, right_click_search_biswiki, handleRightClickSearchBIS);
        Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU).addMenuDivider();
        Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU).addMenuItem(right_click_search_biswiki);

    });
});