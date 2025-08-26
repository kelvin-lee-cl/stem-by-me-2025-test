gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDPikachuObjects1 = [];
gdjs.Untitled_32sceneCode.GDPikachuObjects2 = [];
gdjs.Untitled_32sceneCode.GDGudetamaObjects1 = [];
gdjs.Untitled_32sceneCode.GDGudetamaObjects2 = [];
gdjs.Untitled_32sceneCode.GDMushroom_9595CatObjects1 = [];
gdjs.Untitled_32sceneCode.GDMushroom_9595CatObjects2 = [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1 = [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2 = [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1 = [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2 = [];
gdjs.Untitled_32sceneCode.GDScoreObjects1 = [];
gdjs.Untitled_32sceneCode.GDScoreObjects2 = [];
gdjs.Untitled_32sceneCode.GDcoinsObjects1 = [];
gdjs.Untitled_32sceneCode.GDcoinsObjects2 = [];
gdjs.Untitled_32sceneCode.GDgame_9595over_9595screenObjects1 = [];
gdjs.Untitled_32sceneCode.GDgame_9595over_9595screenObjects2 = [];
gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1 = [];
gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects2 = [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({ "NewSprite2": gdjs.Untitled_32sceneCode.GDNewSprite2Objects1 });
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({ "NewSprite2": gdjs.Untitled_32sceneCode.GDNewSprite2Objects1 });
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGudetamaObjects1Objects = Hashtable.newFrom({ "Gudetama": gdjs.Untitled_32sceneCode.GDGudetamaObjects1 });
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDMushroom_95959595CatObjects1Objects = Hashtable.newFrom({ "Mushroom_Cat": gdjs.Untitled_32sceneCode.GDMushroom_9595CatObjects1 });
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGudetamaObjects1Objects = Hashtable.newFrom({ "Gudetama": gdjs.Untitled_32sceneCode.GDGudetamaObjects1 });
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcoinsObjects1Objects = Hashtable.newFrom({ "coins": gdjs.Untitled_32sceneCode.GDcoinsObjects1 });
gdjs.Untitled_32sceneCode.eventsList0 = function (runtimeScene) {

    {


        let isConditionTrue_0 = false;
        {
            gdjs.copyArray(runtimeScene.getObjects("Gudetama"), gdjs.Untitled_32sceneCode.GDGudetamaObjects1);
            gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Untitled_32sceneCode.GDNewSprite2Objects1);
            gdjs.copyArray(runtimeScene.getObjects("Pikachu"), gdjs.Untitled_32sceneCode.GDPikachuObjects1);
            {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDGudetamaObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDGudetamaObjects1[i].separateFromObjectsList(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite2Objects1Objects, false);
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDPikachuObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDPikachuObjects1[i].separateFromObjectsList(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite2Objects1Objects, false);
                }
            } {
                gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDGudetamaObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDGudetamaObjects1[0] : null), true, "", 0);
            } {
                gdjs.evtTools.camera.setCameraZoom(runtimeScene, 5, "", 0);
            }
        }

    }


    {

        gdjs.copyArray(runtimeScene.getObjects("Gudetama"), gdjs.Untitled_32sceneCode.GDGudetamaObjects1);
        gdjs.copyArray(runtimeScene.getObjects("Mushroom_Cat"), gdjs.Untitled_32sceneCode.GDMushroom_9595CatObjects1);

        let isConditionTrue_0 = false;
        isConditionTrue_0 = false;
        isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGudetamaObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDMushroom_95959595CatObjects1Objects, false, runtimeScene, false);
        if (isConditionTrue_0) {
            /* Reuse gdjs.Untitled_32sceneCode.GDGudetamaObjects1 */
            /* Reuse gdjs.Untitled_32sceneCode.GDMushroom_9595CatObjects1 */
            gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Untitled_32sceneCode.GDScoreObjects1);
            {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDGudetamaObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDGudetamaObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDGudetamaObjects1[i].getVariables().getFromIndex(0)).sub(32);
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDScoreObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDScoreObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(((gdjs.Untitled_32sceneCode.GDGudetamaObjects1.length === 0) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDGudetamaObjects1[0].getVariables()).getFromIndex(0).getAsNumber()));
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDMushroom_9595CatObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDMushroom_9595CatObjects1[i].deleteFromScene(runtimeScene);
                }
            }
            // Send score update to parent page
            if (typeof window.updateScore === 'function') {
                var currentScore = ((gdjs.Untitled_32sceneCode.GDGudetamaObjects1.length === 0) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDGudetamaObjects1[0].getVariables()).getFromIndex(0).getAsNumber();
                window.updateScore(currentScore);
            }
        }

    }


    {

        gdjs.copyArray(runtimeScene.getObjects("Gudetama"), gdjs.Untitled_32sceneCode.GDGudetamaObjects1);
        gdjs.copyArray(runtimeScene.getObjects("coins"), gdjs.Untitled_32sceneCode.GDcoinsObjects1);

        let isConditionTrue_0 = false;
        isConditionTrue_0 = false;
        isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDGudetamaObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcoinsObjects1Objects, false, runtimeScene, false);
        if (isConditionTrue_0) {
            /* Reuse gdjs.Untitled_32sceneCode.GDGudetamaObjects1 */
            gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Untitled_32sceneCode.GDScoreObjects1);
            /* Reuse gdjs.Untitled_32sceneCode.GDcoinsObjects1 */
            {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDGudetamaObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDGudetamaObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDGudetamaObjects1[i].getVariables().getFromIndex(0)).add(30);
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDScoreObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDScoreObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(((gdjs.Untitled_32sceneCode.GDGudetamaObjects1.length === 0) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDGudetamaObjects1[0].getVariables()).getFromIndex(0).getAsNumber()));
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDcoinsObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDcoinsObjects1[i].deleteFromScene(runtimeScene);
                }
            }
            // Send score update to parent page
            if (typeof window.updateScore === 'function') {
                var currentScore = ((gdjs.Untitled_32sceneCode.GDGudetamaObjects1.length === 0) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDGudetamaObjects1[0].getVariables()).getFromIndex(0).getAsNumber();
                window.updateScore(currentScore);
            }
        }

    }


    {

        gdjs.copyArray(runtimeScene.getObjects("Gudetama"), gdjs.Untitled_32sceneCode.GDGudetamaObjects1);

        let isConditionTrue_0 = false;
        isConditionTrue_0 = false;
        for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDGudetamaObjects1.length; i < l; ++i) {
            if (gdjs.Untitled_32sceneCode.GDGudetamaObjects1[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDGudetamaObjects1[i].getVariables().getFromIndex(0)) >= 150) {
                isConditionTrue_0 = true;
                gdjs.Untitled_32sceneCode.GDGudetamaObjects1[k] = gdjs.Untitled_32sceneCode.GDGudetamaObjects1[i];
                ++k;
            }
        }
        gdjs.Untitled_32sceneCode.GDGudetamaObjects1.length = k;
        if (isConditionTrue_0) {
            // 呼叫遊戲勝利函數
            if (typeof window.gameWin === 'function') {
                window.gameWin(300);
            }
            {
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game win", false);
            }
        }

    }


    {


        let isConditionTrue_0 = false;
        isConditionTrue_0 = false;
        isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        if (isConditionTrue_0) {
            // Send initial score update
            if (typeof window.updateScore === 'function') {
                window.updateScore(0);
            }

            isConditionTrue_0 = false;
            {
                isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 0);
            }
        }
        if (isConditionTrue_0) {
            {
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gmae start", false);
            }
        }

    }


    {

        gdjs.copyArray(runtimeScene.getObjects("Gudetama"), gdjs.Untitled_32sceneCode.GDGudetamaObjects1);

        let isConditionTrue_0 = false;
        isConditionTrue_0 = false;
        for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDGudetamaObjects1.length; i < l; ++i) {
            if (gdjs.Untitled_32sceneCode.GDGudetamaObjects1[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDGudetamaObjects1[i].getVariables().getFromIndex(0)) <= -(150)) {
                isConditionTrue_0 = true;
                gdjs.Untitled_32sceneCode.GDGudetamaObjects1[k] = gdjs.Untitled_32sceneCode.GDGudetamaObjects1[i];
                ++k;
            }
        }
        gdjs.Untitled_32sceneCode.GDGudetamaObjects1.length = k;
        if (isConditionTrue_0) {
            // Call game lose function before scene change
            if (typeof window.gameLose === 'function') {
                window.gameLose(0); // Send 0 points for losing
            }
            {
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game over", false);
            }
        }

    }


};

gdjs.Untitled_32sceneCode.func = function (runtimeScene) {
    runtimeScene.getOnceTriggers().startNewFrame();

    gdjs.Untitled_32sceneCode.GDPikachuObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDPikachuObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDGudetamaObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDGudetamaObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDMushroom_9595CatObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDMushroom_9595CatObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;
    gdjs.Untitled_32sceneCode.GDScoreObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDScoreObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDcoinsObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDcoinsObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDgame_9595over_9595screenObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDgame_9595over_9595screenObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects2.length = 0;

    gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
    gdjs.Untitled_32sceneCode.GDPikachuObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDPikachuObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDGudetamaObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDGudetamaObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDMushroom_9595CatObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDMushroom_9595CatObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;
    gdjs.Untitled_32sceneCode.GDScoreObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDScoreObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDcoinsObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDcoinsObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDgame_9595over_9595screenObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDgame_9595over_9595screenObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects2.length = 0;


    return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
