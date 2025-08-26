gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1 = [];
gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects2 = [];
gdjs.Untitled_32sceneCode.GDNewSprite5Objects1 = [];
gdjs.Untitled_32sceneCode.GDNewSprite5Objects2 = [];
gdjs.Untitled_32sceneCode.GDwallObjects1 = [];
gdjs.Untitled_32sceneCode.GDwallObjects2 = [];
gdjs.Untitled_32sceneCode.GD_95950Objects1 = [];
gdjs.Untitled_32sceneCode.GD_95950Objects2 = [];
gdjs.Untitled_32sceneCode.GDmonsterObjects1 = [];
gdjs.Untitled_32sceneCode.GDmonsterObjects2 = [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1 = [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2 = [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1 = [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2 = [];
gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1 = [];
gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects2 = [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDwallObjects1Objects = Hashtable.newFrom({ "wall": gdjs.Untitled_32sceneCode.GDwallObjects1 });
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCHING_95959595CHONG_95959595DING_95959595DONGObjects1Objects = Hashtable.newFrom({ "CHING_CHONG_DING_DONG": gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1 });
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDmonsterObjects1Objects = Hashtable.newFrom({ "monster": gdjs.Untitled_32sceneCode.GDmonsterObjects1 });
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCHING_95959595CHONG_95959595DING_95959595DONGObjects1Objects = Hashtable.newFrom({ "CHING_CHONG_DING_DONG": gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1 });
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({ "NewSprite2": gdjs.Untitled_32sceneCode.GDNewSprite2Objects1 });
gdjs.Untitled_32sceneCode.eventsList0 = function (runtimeScene) {

    {


        let isConditionTrue_0 = false;
        {
            gdjs.copyArray(runtimeScene.getObjects("CHING_CHONG_DING_DONG"), gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1);
            gdjs.copyArray(runtimeScene.getObjects("wall"), gdjs.Untitled_32sceneCode.GDwallObjects1);
            {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1[i].separateFromObjectsList(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDwallObjects1Objects, true);
                }
            }
        }

    }


    {


        let isConditionTrue_0 = false;
        {
        }

    }


    {


        let isConditionTrue_0 = false;
        {
        }

    }


    {

        gdjs.copyArray(runtimeScene.getObjects("CHING_CHONG_DING_DONG"), gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1);
        gdjs.copyArray(runtimeScene.getObjects("monster"), gdjs.Untitled_32sceneCode.GDmonsterObjects1);

        let isConditionTrue_0 = false;
        isConditionTrue_0 = false;
        isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCHING_95959595CHONG_95959595DING_95959595DONGObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDmonsterObjects1Objects, false, runtimeScene, false);
        if (isConditionTrue_0) {
            /* Reuse gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1 */
            gdjs.copyArray(runtimeScene.getObjects("_0"), gdjs.Untitled_32sceneCode.GD_95950Objects1);
            /* Reuse gdjs.Untitled_32sceneCode.GDmonsterObjects1 */
            {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1[i].getVariables().getFromIndex(0)).add(1);
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GD_95950Objects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GD_95950Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(((gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1.length === 0) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1[0].getVariables()).getFromIndex(0).getAsNumber()));
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDmonsterObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDmonsterObjects1[i].deleteFromScene(runtimeScene);
                }
            }
            // Send score update to parent page
            if (typeof window.updateScore === 'function') {
                var currentScore = ((gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1.length === 0) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1[0].getVariables()).getFromIndex(0).getAsNumber();
                window.updateScore(currentScore);
            }
        }

    }


    {


        let isConditionTrue_0 = false;
        isConditionTrue_0 = false;
        isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        if (isConditionTrue_0) {
            isConditionTrue_0 = false;
            {
                isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 0);
            }
        }
        if (isConditionTrue_0) {
            {
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start game", false);
            }
        }
    }

    // Send initial score when game starts
    {
        let isConditionTrue_0 = false;
        isConditionTrue_0 = false;
        isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        if (isConditionTrue_0) {
            // Send initial score to parent page
            if (typeof window.updateScore === 'function') {
                gdjs.copyArray(runtimeScene.getObjects("CHING_CHONG_DING_DONG"), gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1);
                if (gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1.length > 0) {
                    var initialScore = gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1[0].getVariableNumber(gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1[0].getVariables().getFromIndex(0));
                    window.updateScore(initialScore);
                }
            }
        }

    }

    // Add lose condition when score goes below 0
    {
        gdjs.copyArray(runtimeScene.getObjects("CHING_CHONG_DING_DONG"), gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1);

        let isConditionTrue_0 = false;
        isConditionTrue_0 = false;
        for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1.length; i < l; ++i) {
            if (gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1[i].getVariables().getFromIndex(0)) < 0) {
                isConditionTrue_0 = true;
                gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1[k] = gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1[i];
                ++k;
            }
        }
        gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1.length = k;
        if (isConditionTrue_0) {
        // Call game lose function before scene change
        if (typeof window.gameLose === 'function') {
            window.gameLose(0); // Send 0 points for losing
        }
            gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game over", false);
        }
    }


    {

        gdjs.copyArray(runtimeScene.getObjects("CHING_CHONG_DING_DONG"), gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1);

        let isConditionTrue_0 = false;
        isConditionTrue_0 = false;
        for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1.length; i < l; ++i) {
            if (gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1[i].getVariables().getFromIndex(0)) >= 28) {
                isConditionTrue_0 = true;
                gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1[k] = gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1[i];
                ++k;
            }
        }
        gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1.length = k;
        if (isConditionTrue_0) {
            // Call game win function before scene change
            if (typeof window.gameWin === 'function') {
                window.gameWin(300); // Send 300 points for winning
            }
            gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game over", false);
        }

    }


    {

        gdjs.copyArray(runtimeScene.getObjects("CHING_CHONG_DING_DONG"), gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1);
        gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Untitled_32sceneCode.GDNewSprite2Objects1);

        let isConditionTrue_0 = false;
        isConditionTrue_0 = false;
        isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCHING_95959595CHONG_95959595DING_95959595DONGObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
        if (isConditionTrue_0) {
            /* Reuse gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1 */
            /* Reuse gdjs.Untitled_32sceneCode.GDNewSprite2Objects1 */
            gdjs.copyArray(runtimeScene.getObjects("_0"), gdjs.Untitled_32sceneCode.GD_95950Objects1);
            {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1[i].getVariables().getFromIndex(0)).add(5);
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDNewSprite2Objects1[i].deleteFromScene(runtimeScene);
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GD_95950Objects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GD_95950Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(((gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1.length === 0) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1[0].getVariables()).getFromIndex(0).getAsNumber()));
                }
            }
            // Send score update to parent page
            if (typeof window.updateScore === 'function') {
                var currentScore = ((gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1.length === 0) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1[0].getVariables()).getFromIndex(0).getAsNumber();
                window.updateScore(currentScore);
            }
        }

    }


};

gdjs.Untitled_32sceneCode.func = function (runtimeScene) {
    runtimeScene.getOnceTriggers().startNewFrame();

    gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite5Objects1.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite5Objects2.length = 0;
    gdjs.Untitled_32sceneCode.GDwallObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDwallObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GD_95950Objects1.length = 0;
    gdjs.Untitled_32sceneCode.GD_95950Objects2.length = 0;
    gdjs.Untitled_32sceneCode.GDmonsterObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDmonsterObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;
    gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects2.length = 0;

    gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
    gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDCHING_9595CHONG_9595DING_9595DONGObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite5Objects1.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite5Objects2.length = 0;
    gdjs.Untitled_32sceneCode.GDwallObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDwallObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GD_95950Objects1.length = 0;
    gdjs.Untitled_32sceneCode.GD_95950Objects2.length = 0;
    gdjs.Untitled_32sceneCode.GDmonsterObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDmonsterObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;
    gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects2.length = 0;


    return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
