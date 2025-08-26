gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDWarriorObjects1 = [];
gdjs.Untitled_32sceneCode.GDWarriorObjects2 = [];
gdjs.Untitled_32sceneCode.GDmr_9595bananaanananananaObjects1 = [];
gdjs.Untitled_32sceneCode.GDmr_9595bananaanananananaObjects2 = [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1 = [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2 = [];
gdjs.Untitled_32sceneCode.GDNewSprite3Objects1 = [];
gdjs.Untitled_32sceneCode.GDNewSprite3Objects2 = [];
gdjs.Untitled_32sceneCode.GDNewText2Objects1 = [];
gdjs.Untitled_32sceneCode.GDNewText2Objects2 = [];
gdjs.Untitled_32sceneCode.GDNewSprite7Objects1 = [];
gdjs.Untitled_32sceneCode.GDNewSprite7Objects2 = [];
gdjs.Untitled_32sceneCode.GDNewSprite8Objects1 = [];
gdjs.Untitled_32sceneCode.GDNewSprite8Objects2 = [];
gdjs.Untitled_32sceneCode.GDNewSprite10Objects1 = [];
gdjs.Untitled_32sceneCode.GDNewSprite10Objects2 = [];
gdjs.Untitled_32sceneCode.GDmr_9595bananaananananana2Objects1 = [];
gdjs.Untitled_32sceneCode.GDmr_9595bananaananananana2Objects2 = [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1 = [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2 = [];
gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1 = [];
gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects2 = [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDWarriorObjects1Objects = Hashtable.newFrom({ "Warrior": gdjs.Untitled_32sceneCode.GDWarriorObjects1 });
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDmr_95959595bananaanananananaObjects1Objects = Hashtable.newFrom({ "mr_bananaananananana": gdjs.Untitled_32sceneCode.GDmr_9595bananaanananananaObjects1 });
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDWarriorObjects1Objects = Hashtable.newFrom({ "Warrior": gdjs.Untitled_32sceneCode.GDWarriorObjects1 });
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDmr_95959595bananaananananana2Objects1Objects = Hashtable.newFrom({ "mr_bananaananananana2": gdjs.Untitled_32sceneCode.GDmr_9595bananaananananana2Objects1 });
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDWarriorObjects1Objects = Hashtable.newFrom({ "Warrior": gdjs.Untitled_32sceneCode.GDWarriorObjects1 });
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({ "NewSprite2": gdjs.Untitled_32sceneCode.GDNewSprite2Objects1 });
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDWarriorObjects1Objects = Hashtable.newFrom({ "Warrior": gdjs.Untitled_32sceneCode.GDWarriorObjects1 });
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({ "NewSprite3": gdjs.Untitled_32sceneCode.GDNewSprite3Objects1 });
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({ "NewSprite3": gdjs.Untitled_32sceneCode.GDNewSprite3Objects1 });
gdjs.Untitled_32sceneCode.eventsList0 = function (runtimeScene) {

    // 遊戲開始時發送初始分數
    {
        let isConditionTrue_0 = false;
        isConditionTrue_0 = false;
        isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        if (isConditionTrue_0) {
            if (typeof window.updateScore === 'function') {
                window.updateScore(0);
            }
        }
    }

    {


        let isConditionTrue_0 = false;
        {
            gdjs.copyArray(runtimeScene.getObjects("NewSprite10"), gdjs.Untitled_32sceneCode.GDNewSprite10Objects1);
            {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSprite10Objects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDNewSprite10Objects1[i].hide();
                }
            }
        }

    }


    {

        gdjs.copyArray(runtimeScene.getObjects("Warrior"), gdjs.Untitled_32sceneCode.GDWarriorObjects1);
        gdjs.copyArray(runtimeScene.getObjects("mr_bananaananananana"), gdjs.Untitled_32sceneCode.GDmr_9595bananaanananananaObjects1);

        let isConditionTrue_0 = false;
        isConditionTrue_0 = false;
        isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDWarriorObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDmr_95959595bananaanananananaObjects1Objects, false, runtimeScene, true);
        if (isConditionTrue_0) {
            gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.Untitled_32sceneCode.GDNewText2Objects1);
            /* Reuse gdjs.Untitled_32sceneCode.GDWarriorObjects1 */
            /* Reuse gdjs.Untitled_32sceneCode.GDmr_9595bananaanananananaObjects1 */
            {
                gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDWarriorObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDWarriorObjects1[0] : null), true, "", 0);
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDWarriorObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDWarriorObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDWarriorObjects1[i].getVariables().getFromIndex(0)).add(3);
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDNewText2Objects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDNewText2Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(((gdjs.Untitled_32sceneCode.GDWarriorObjects1.length === 0) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDWarriorObjects1[0].getVariables()).getFromIndex(0).getAsNumber()));
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDmr_9595bananaanananananaObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDmr_9595bananaanananananaObjects1[i].hide();
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDmr_9595bananaanananananaObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDmr_9595bananaanananananaObjects1[i].deleteFromScene(runtimeScene);
                }
            }
        }

    }


    {

        gdjs.copyArray(runtimeScene.getObjects("Warrior"), gdjs.Untitled_32sceneCode.GDWarriorObjects1);
        gdjs.copyArray(runtimeScene.getObjects("mr_bananaananananana2"), gdjs.Untitled_32sceneCode.GDmr_9595bananaananananana2Objects1);

        let isConditionTrue_0 = false;
        isConditionTrue_0 = false;
        isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDWarriorObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDmr_95959595bananaananananana2Objects1Objects, false, runtimeScene, true);
        if (isConditionTrue_0) {
            gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.Untitled_32sceneCode.GDNewText2Objects1);
            /* Reuse gdjs.Untitled_32sceneCode.GDWarriorObjects1 */
            /* Reuse gdjs.Untitled_32sceneCode.GDmr_9595bananaananananana2Objects1 */
            {
                gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDWarriorObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDWarriorObjects1[0] : null), true, "", 0);
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDWarriorObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDWarriorObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDWarriorObjects1[i].getVariables().getFromIndex(0)).add(10);
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDNewText2Objects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDNewText2Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(((gdjs.Untitled_32sceneCode.GDWarriorObjects1.length === 0) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDWarriorObjects1[0].getVariables()).getFromIndex(0).getAsNumber()));
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDmr_9595bananaananananana2Objects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDmr_9595bananaananananana2Objects1[i].hide();
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDmr_9595bananaananananana2Objects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDmr_9595bananaananananana2Objects1[i].deleteFromScene(runtimeScene);
                }
            }
        }

    }


    {

        gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Untitled_32sceneCode.GDNewSprite2Objects1);
        gdjs.copyArray(runtimeScene.getObjects("Warrior"), gdjs.Untitled_32sceneCode.GDWarriorObjects1);

        let isConditionTrue_0 = false;
        isConditionTrue_0 = false;
        isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDWarriorObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite2Objects1Objects, false, runtimeScene, true);
        if (isConditionTrue_0) {
            /* Reuse gdjs.Untitled_32sceneCode.GDNewSprite2Objects1 */
            gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.Untitled_32sceneCode.GDNewText2Objects1);
            /* Reuse gdjs.Untitled_32sceneCode.GDWarriorObjects1 */
            {
                gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDWarriorObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDWarriorObjects1[0] : null), true, "", 0);
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDWarriorObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDWarriorObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDWarriorObjects1[i].getVariables().getFromIndex(0)).sub(2);
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDNewText2Objects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDNewText2Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(((gdjs.Untitled_32sceneCode.GDWarriorObjects1.length === 0) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDWarriorObjects1[0].getVariables()).getFromIndex(0).getAsNumber()));
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDNewSprite2Objects1[i].hide();
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDNewSprite2Objects1[i].deleteFromScene(runtimeScene);
                }
            }
        }

    }


    {


        let isConditionTrue_0 = false;
        {
            gdjs.copyArray(runtimeScene.getObjects("Warrior"), gdjs.Untitled_32sceneCode.GDWarriorObjects1);
            {
                gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDWarriorObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDWarriorObjects1[0] : null), true, "", 0);
            }
        }

    }


    {

        gdjs.copyArray(runtimeScene.getObjects("Warrior"), gdjs.Untitled_32sceneCode.GDWarriorObjects1);

        let isConditionTrue_0 = false;
        isConditionTrue_0 = false;
        for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDWarriorObjects1.length; i < l; ++i) {
            if (gdjs.Untitled_32sceneCode.GDWarriorObjects1[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDWarriorObjects1[i].getVariables().getFromIndex(0)) >= 15) {
                isConditionTrue_0 = true;
                gdjs.Untitled_32sceneCode.GDWarriorObjects1[k] = gdjs.Untitled_32sceneCode.GDWarriorObjects1[i];
                ++k;
            }
        }
        gdjs.Untitled_32sceneCode.GDWarriorObjects1.length = k;
        if (isConditionTrue_0) {
            gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);
            gdjs.copyArray(runtimeScene.getObjects("NewSprite10"), gdjs.Untitled_32sceneCode.GDNewSprite10Objects1);
            gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Untitled_32sceneCode.GDNewSprite3Objects1);
            gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.Untitled_32sceneCode.GDNewSprite7Objects1);
            gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.Untitled_32sceneCode.GDNewSprite8Objects1);
            gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.Untitled_32sceneCode.GDNewText2Objects1);
            /* Reuse gdjs.Untitled_32sceneCode.GDWarriorObjects1 */
            gdjs.copyArray(runtimeScene.getObjects("mr_bananaananananana"), gdjs.Untitled_32sceneCode.GDmr_9595bananaanananananaObjects1);
            {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDWarriorObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDWarriorObjects1[i].hide();
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSprite3Objects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDNewSprite3Objects1[i].hide();
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSprite8Objects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDNewSprite8Objects1[i].hide();
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].hide();
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDmr_9595bananaanananananaObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDmr_9595bananaanananananaObjects1[i].hide();
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDNewText2Objects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDNewText2Objects1[i].hide();
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSprite7Objects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDNewSprite7Objects1[i].hide();
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDWarriorObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDWarriorObjects1[i].setPosition(-(493), -(330));
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSprite10Objects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDNewSprite10Objects1[i].hide(false);
                }
                // 呼叫遊戲勝利函數
                if (typeof window.gameWin === 'function') {
                    window.gameWin(300);
                }
            } {
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "win", false);
            }
        }

    }


    {

        gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Untitled_32sceneCode.GDNewSprite3Objects1);
        gdjs.copyArray(runtimeScene.getObjects("Warrior"), gdjs.Untitled_32sceneCode.GDWarriorObjects1);

        let isConditionTrue_0 = false;
        isConditionTrue_0 = false;
        isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDWarriorObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite3Objects1Objects, false, runtimeScene, false);
        if (isConditionTrue_0) {
            /* Reuse gdjs.Untitled_32sceneCode.GDNewSprite3Objects1 */
            /* Reuse gdjs.Untitled_32sceneCode.GDWarriorObjects1 */
            {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDWarriorObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDWarriorObjects1[i].separateFromObjectsList(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite3Objects1Objects, false);
                }
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
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game start", false);
            }
        }

    }


};

gdjs.Untitled_32sceneCode.func = function (runtimeScene) {
    runtimeScene.getOnceTriggers().startNewFrame();

    gdjs.Untitled_32sceneCode.GDWarriorObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDWarriorObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDmr_9595bananaanananananaObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDmr_9595bananaanananananaObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite3Objects1.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite3Objects2.length = 0;
    gdjs.Untitled_32sceneCode.GDNewText2Objects1.length = 0;
    gdjs.Untitled_32sceneCode.GDNewText2Objects2.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite7Objects1.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite7Objects2.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite8Objects1.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite8Objects2.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite10Objects1.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite10Objects2.length = 0;
    gdjs.Untitled_32sceneCode.GDmr_9595bananaananananana2Objects1.length = 0;
    gdjs.Untitled_32sceneCode.GDmr_9595bananaananananana2Objects2.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;
    gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects2.length = 0;

    gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
    gdjs.Untitled_32sceneCode.GDWarriorObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDWarriorObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDmr_9595bananaanananananaObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDmr_9595bananaanananananaObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite3Objects1.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite3Objects2.length = 0;
    gdjs.Untitled_32sceneCode.GDNewText2Objects1.length = 0;
    gdjs.Untitled_32sceneCode.GDNewText2Objects2.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite7Objects1.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite7Objects2.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite8Objects1.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite8Objects2.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite10Objects1.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite10Objects2.length = 0;
    gdjs.Untitled_32sceneCode.GDmr_9595bananaananananana2Objects1.length = 0;
    gdjs.Untitled_32sceneCode.GDmr_9595bananaananananana2Objects2.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
    gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;
    gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects2.length = 0;


    return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
