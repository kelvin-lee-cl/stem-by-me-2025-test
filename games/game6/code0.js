gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDBrick_9595holeObjects1 = [];
gdjs.Untitled_32sceneCode.GDBrick_9595holeObjects2 = [];
gdjs.Untitled_32sceneCode.GDBrick_9595normalObjects1 = [];
gdjs.Untitled_32sceneCode.GDBrick_9595normalObjects2 = [];
gdjs.Untitled_32sceneCode.GDrabbitObjects1 = [];
gdjs.Untitled_32sceneCode.GDrabbitObjects2 = [];
gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects1 = [];
gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects2 = [];
gdjs.Untitled_32sceneCode.GDrabbit_9595bigObjects1 = [];
gdjs.Untitled_32sceneCode.GDrabbit_9595bigObjects2 = [];
gdjs.Untitled_32sceneCode.GDShieldObjects1 = [];
gdjs.Untitled_32sceneCode.GDShieldObjects2 = [];
gdjs.Untitled_32sceneCode.GDbone_9595bigObjects1 = [];
gdjs.Untitled_32sceneCode.GDbone_9595bigObjects2 = [];
gdjs.Untitled_32sceneCode.GDbone_9595smallObjects1 = [];
gdjs.Untitled_32sceneCode.GDbone_9595smallObjects2 = [];
gdjs.Untitled_32sceneCode.GDTimerObjects1 = [];
gdjs.Untitled_32sceneCode.GDTimerObjects2 = [];
gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1 = [];
gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects2 = [];
gdjs.Untitled_32sceneCode.GDDogObjects1 = [];
gdjs.Untitled_32sceneCode.GDDogObjects2 = [];


gdjs.Untitled_32sceneCode.eventsList0 = function (runtimeScene) {

}; gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDDogObjects1Objects = Hashtable.newFrom({ "Dog": gdjs.Untitled_32sceneCode.GDDogObjects1 });
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBrick_95959595normalObjects1Objects = Hashtable.newFrom({ "Brick_normal": gdjs.Untitled_32sceneCode.GDBrick_9595normalObjects1 });
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBrick_95959595normalObjects1Objects = Hashtable.newFrom({ "Brick_normal": gdjs.Untitled_32sceneCode.GDBrick_9595normalObjects1 });
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDDogObjects1Objects = Hashtable.newFrom({ "Dog": gdjs.Untitled_32sceneCode.GDDogObjects1 });
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDShieldObjects1Objects = Hashtable.newFrom({ "Shield": gdjs.Untitled_32sceneCode.GDShieldObjects1 });
gdjs.Untitled_32sceneCode.eventsList1 = function (runtimeScene) {

}; gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDDogObjects1Objects = Hashtable.newFrom({ "Dog": gdjs.Untitled_32sceneCode.GDDogObjects1 });
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDbone_95959595smallObjects1Objects = Hashtable.newFrom({ "bone_small": gdjs.Untitled_32sceneCode.GDbone_9595smallObjects1 });
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDDogObjects1Objects = Hashtable.newFrom({ "Dog": gdjs.Untitled_32sceneCode.GDDogObjects1 });
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDbone_95959595bigObjects1Objects = Hashtable.newFrom({ "bone_big": gdjs.Untitled_32sceneCode.GDbone_9595bigObjects1 });
gdjs.Untitled_32sceneCode.asyncCallback11019324 = function (runtimeScene, asyncObjectsList) {
    asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
    gdjs.copyArray(asyncObjectsList.getObjects("show_the_score"), gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects2);

    {
        for (var i = 0, len = gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects2.length; i < len; ++i) {
            gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects2[i].setCharacterSize(gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects2[i].getCharacterSize() - (80));
        }
    } gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.eventsList2 = function (runtimeScene) {

    {


        {
            {
                const asyncObjectsList = new gdjs.LongLivedObjectsList();
                asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
                for (const obj of gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects1) asyncObjectsList.addObject("show_the_score", obj);
                runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback11019324(runtimeScene, asyncObjectsList)));
            }
        }

    }


}; gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDDogObjects1Objects = Hashtable.newFrom({ "Dog": gdjs.Untitled_32sceneCode.GDDogObjects1 });
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDrabbitObjects1Objects = Hashtable.newFrom({ "rabbit": gdjs.Untitled_32sceneCode.GDrabbitObjects1 });
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDDogObjects1Objects = Hashtable.newFrom({ "Dog": gdjs.Untitled_32sceneCode.GDDogObjects1 });
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDrabbit_95959595bigObjects1Objects = Hashtable.newFrom({ "rabbit_big": gdjs.Untitled_32sceneCode.GDrabbit_9595bigObjects1 });
gdjs.Untitled_32sceneCode.asyncCallback11752244 = function (runtimeScene, asyncObjectsList) {
    asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
    gdjs.copyArray(asyncObjectsList.getObjects("show_the_score"), gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects2);

    {
        for (var i = 0, len = gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects2.length; i < len; ++i) {
            gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects2[i].setCharacterSize(gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects2[i].getCharacterSize() - (80));
        }
    } gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.eventsList3 = function (runtimeScene) {

    {


        {
            {
                const asyncObjectsList = new gdjs.LongLivedObjectsList();
                asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
                for (const obj of gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects1) asyncObjectsList.addObject("show_the_score", obj);
                runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback11752244(runtimeScene, asyncObjectsList)));
            }
        }

    }


}; gdjs.Untitled_32sceneCode.eventsList4 = function (runtimeScene) {

}; gdjs.Untitled_32sceneCode.eventsList5 = function (runtimeScene) {

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


        gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
    }


    {


        let isConditionTrue_0 = false;
        isConditionTrue_0 = false;
        isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
        if (isConditionTrue_0) {
            gdjs.copyArray(runtimeScene.getObjects("Dog"), gdjs.Untitled_32sceneCode.GDDogObjects1);
            {
                gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDDogObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDDogObjects1[0] : null), true, "", 0);
            } {
                gdjs.evtTools.camera.setCameraZoom(runtimeScene, 3, "", 0);
            }
        }

    }


    {


        let isConditionTrue_0 = false;
        {
            gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Untitled_32sceneCode.GDTimerObjects1);
            {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDTimerObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.round(Math.abs(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Every 1 second") - 5))));
                }
            }
        }

    }


    {


        let isConditionTrue_0 = false;
        isConditionTrue_0 = false;
        isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Every 1 second") >= 5;
        if (isConditionTrue_0) {
            // 呼叫遊戲失敗函數
            if (typeof window.gameLose === 'function') {
                window.gameLose(0);
            }
            {
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game over", false);
            }
        }

    }


    {

        gdjs.copyArray(runtimeScene.getObjects("Dog"), gdjs.Untitled_32sceneCode.GDDogObjects1);

        let isConditionTrue_0 = false;
        isConditionTrue_0 = false;
        for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDDogObjects1.length; i < l; ++i) {
            if (gdjs.Untitled_32sceneCode.GDDogObjects1[i].getBehavior("TopDownMovement").isMoving()) {
                isConditionTrue_0 = true;
                gdjs.Untitled_32sceneCode.GDDogObjects1[k] = gdjs.Untitled_32sceneCode.GDDogObjects1[i];
                ++k;
            }
        }
        gdjs.Untitled_32sceneCode.GDDogObjects1.length = k;
        if (isConditionTrue_0) {
            /* Reuse gdjs.Untitled_32sceneCode.GDDogObjects1 */
            {
                gdjs.evtTools.camera.setCameraX(runtimeScene, ((gdjs.Untitled_32sceneCode.GDDogObjects1.length === 0) ? 0 : gdjs.Untitled_32sceneCode.GDDogObjects1[0].getPointX("")), "", 0);
            } {
                gdjs.evtTools.camera.setCameraY(runtimeScene, ((gdjs.Untitled_32sceneCode.GDDogObjects1.length === 0) ? 0 : gdjs.Untitled_32sceneCode.GDDogObjects1[0].getPointY("")), "", 0);
            }
        }

    }


    {


        let isConditionTrue_0 = false;
        {
        }

    }


    {

        gdjs.copyArray(runtimeScene.getObjects("Brick_normal"), gdjs.Untitled_32sceneCode.GDBrick_9595normalObjects1);
        gdjs.copyArray(runtimeScene.getObjects("Dog"), gdjs.Untitled_32sceneCode.GDDogObjects1);

        let isConditionTrue_0 = false;
        isConditionTrue_0 = false;
        isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDDogObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBrick_95959595normalObjects1Objects, false, runtimeScene, false);
        if (isConditionTrue_0) {
            /* Reuse gdjs.Untitled_32sceneCode.GDBrick_9595normalObjects1 */
            /* Reuse gdjs.Untitled_32sceneCode.GDDogObjects1 */
            {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDDogObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDDogObjects1[i].separateFromObjectsList(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBrick_95959595normalObjects1Objects, false);
                }
            }
        }

    }


    {

        gdjs.copyArray(runtimeScene.getObjects("Dog"), gdjs.Untitled_32sceneCode.GDDogObjects1);
        gdjs.copyArray(runtimeScene.getObjects("Shield"), gdjs.Untitled_32sceneCode.GDShieldObjects1);

        let isConditionTrue_0 = false;
        isConditionTrue_0 = false;
        isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDDogObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDShieldObjects1Objects, false, runtimeScene, false);
        if (isConditionTrue_0) {
            /* Reuse gdjs.Untitled_32sceneCode.GDDogObjects1 */
            /* Reuse gdjs.Untitled_32sceneCode.GDShieldObjects1 */
            {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDShieldObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDShieldObjects1[i].putAround(((gdjs.Untitled_32sceneCode.GDDogObjects1.length === 0) ? 0 : gdjs.Untitled_32sceneCode.GDDogObjects1[0].getAABBRight()), ((gdjs.Untitled_32sceneCode.GDDogObjects1.length === 0) ? 0 : gdjs.Untitled_32sceneCode.GDDogObjects1[0].getAABBCenterY()), 10, 0);
                }
            }
        }

    }


    {


        gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
    }


    {

        gdjs.copyArray(runtimeScene.getObjects("Dog"), gdjs.Untitled_32sceneCode.GDDogObjects1);
        gdjs.copyArray(runtimeScene.getObjects("bone_small"), gdjs.Untitled_32sceneCode.GDbone_9595smallObjects1);

        let isConditionTrue_0 = false;
        isConditionTrue_0 = false;
        isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDDogObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDbone_95959595smallObjects1Objects, false, runtimeScene, false);
        if (isConditionTrue_0) {
            /* Reuse gdjs.Untitled_32sceneCode.GDDogObjects1 */
            /* Reuse gdjs.Untitled_32sceneCode.GDbone_9595smallObjects1 */
            gdjs.copyArray(runtimeScene.getObjects("show_the_score"), gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects1);
            {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDbone_9595smallObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDbone_9595smallObjects1[i].deleteFromScene(runtimeScene);
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDDogObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDDogObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDDogObjects1[i].getVariables().getFromIndex(0)).add(1);
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects1[i].getBehavior("Text").setText(((gdjs.Untitled_32sceneCode.GDDogObjects1.length === 0) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDDogObjects1[0].getVariables()).getFromIndex(0).getAsString());
                }
            }
        }

    }


    {

        gdjs.copyArray(runtimeScene.getObjects("Dog"), gdjs.Untitled_32sceneCode.GDDogObjects1);
        gdjs.copyArray(runtimeScene.getObjects("bone_big"), gdjs.Untitled_32sceneCode.GDbone_9595bigObjects1);

        let isConditionTrue_0 = false;
        isConditionTrue_0 = false;
        isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDDogObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDbone_95959595bigObjects1Objects, false, runtimeScene, false);
        if (isConditionTrue_0) {
            /* Reuse gdjs.Untitled_32sceneCode.GDDogObjects1 */
            /* Reuse gdjs.Untitled_32sceneCode.GDbone_9595bigObjects1 */
            gdjs.copyArray(runtimeScene.getObjects("show_the_score"), gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects1);
            {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDbone_9595bigObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDbone_9595bigObjects1[i].deleteFromScene(runtimeScene);
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDDogObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDDogObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDDogObjects1[i].getVariables().getFromIndex(0)).add(5);
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects1[i].setCharacterSize(gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects1[i].getCharacterSize() + (80));
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects1[i].getBehavior("Text").setText(((gdjs.Untitled_32sceneCode.GDDogObjects1.length === 0) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDDogObjects1[0].getVariables()).getFromIndex(0).getAsString());
                }
            }
            { //Subevents
                gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);
            } //End of subevents
        }

    }


    {

        gdjs.copyArray(runtimeScene.getObjects("Dog"), gdjs.Untitled_32sceneCode.GDDogObjects1);
        gdjs.copyArray(runtimeScene.getObjects("rabbit"), gdjs.Untitled_32sceneCode.GDrabbitObjects1);

        let isConditionTrue_0 = false;
        isConditionTrue_0 = false;
        isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDDogObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDrabbitObjects1Objects, false, runtimeScene, false);
        if (isConditionTrue_0) {
            /* Reuse gdjs.Untitled_32sceneCode.GDDogObjects1 */
            /* Reuse gdjs.Untitled_32sceneCode.GDrabbitObjects1 */
            gdjs.copyArray(runtimeScene.getObjects("show_the_score"), gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects1);
            {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDrabbitObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDrabbitObjects1[i].deleteFromScene(runtimeScene);
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDDogObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDDogObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDDogObjects1[i].getVariables().getFromIndex(0)).sub(1);
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects1[i].getBehavior("Text").setText(((gdjs.Untitled_32sceneCode.GDDogObjects1.length === 0) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDDogObjects1[0].getVariables()).getFromIndex(0).getAsString());
                }
            }
        }

    }


    {

        gdjs.copyArray(runtimeScene.getObjects("Dog"), gdjs.Untitled_32sceneCode.GDDogObjects1);
        gdjs.copyArray(runtimeScene.getObjects("rabbit_big"), gdjs.Untitled_32sceneCode.GDrabbit_9595bigObjects1);

        let isConditionTrue_0 = false;
        isConditionTrue_0 = false;
        isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDDogObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDrabbit_95959595bigObjects1Objects, false, runtimeScene, false);
        if (isConditionTrue_0) {
            /* Reuse gdjs.Untitled_32sceneCode.GDDogObjects1 */
            /* Reuse gdjs.Untitled_32sceneCode.GDrabbit_9595bigObjects1 */
            gdjs.copyArray(runtimeScene.getObjects("show_the_score"), gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects1);
            {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDrabbit_9595bigObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDrabbit_9595bigObjects1[i].deleteFromScene(runtimeScene);
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDDogObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDDogObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDDogObjects1[i].getVariables().getFromIndex(0)).sub(5);
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects1[i].setCharacterSize(gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects1[i].getCharacterSize() + (80));
                }
            } {
                for (var i = 0, len = gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects1.length; i < len; ++i) {
                    gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects1[i].getBehavior("Text").setText(((gdjs.Untitled_32sceneCode.GDDogObjects1.length === 0) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDDogObjects1[0].getVariables()).getFromIndex(0).getAsString());
                }
            }
            { //Subevents
                gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);
            } //End of subevents
        }

    }


    {


        gdjs.Untitled_32sceneCode.eventsList4(runtimeScene);
    }


    {

        gdjs.copyArray(runtimeScene.getObjects("Dog"), gdjs.Untitled_32sceneCode.GDDogObjects1);

        let isConditionTrue_0 = false;
        isConditionTrue_0 = false;
        for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDDogObjects1.length; i < l; ++i) {
            if (gdjs.Untitled_32sceneCode.GDDogObjects1[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDDogObjects1[i].getVariables().getFromIndex(0)) >= 25) {
                isConditionTrue_0 = true;
                gdjs.Untitled_32sceneCode.GDDogObjects1[k] = gdjs.Untitled_32sceneCode.GDDogObjects1[i];
                ++k;
            }
        }
        gdjs.Untitled_32sceneCode.GDDogObjects1.length = k;
        if (isConditionTrue_0) {
            // 呼叫遊戲勝利函數
            if (typeof window.gameWin === 'function') {
                window.gameWin(300);
            }
            {
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Winning", false);
            }
        }

    }


    {


        let isConditionTrue_0 = false;
        isConditionTrue_0 = false;
        {
            isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 0);
        }
        if (isConditionTrue_0) {
            {
                gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
            }
        }

    }


};

gdjs.Untitled_32sceneCode.func = function (runtimeScene) {
    runtimeScene.getOnceTriggers().startNewFrame();

    gdjs.Untitled_32sceneCode.GDBrick_9595holeObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDBrick_9595holeObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDBrick_9595normalObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDBrick_9595normalObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDrabbitObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDrabbitObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDrabbit_9595bigObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDrabbit_9595bigObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDShieldObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDShieldObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDbone_9595bigObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDbone_9595bigObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDbone_9595smallObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDbone_9595smallObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDTimerObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDTimerObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDDogObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDDogObjects2.length = 0;

    gdjs.Untitled_32sceneCode.eventsList5(runtimeScene);
    gdjs.Untitled_32sceneCode.GDBrick_9595holeObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDBrick_9595holeObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDBrick_9595normalObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDBrick_9595normalObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDrabbitObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDrabbitObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDshow_9595the_9595scoreObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDrabbit_9595bigObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDrabbit_9595bigObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDShieldObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDShieldObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDbone_9595bigObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDbone_9595bigObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDbone_9595smallObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDbone_9595smallObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDTimerObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDTimerObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects2.length = 0;
    gdjs.Untitled_32sceneCode.GDDogObjects1.length = 0;
    gdjs.Untitled_32sceneCode.GDDogObjects2.length = 0;


    return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
