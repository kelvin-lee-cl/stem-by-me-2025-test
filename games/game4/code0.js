gdjs.Map_321Code = {};
gdjs.Map_321Code.localVariables = [];
gdjs.Map_321Code.GDDogObjects1= [];
gdjs.Map_321Code.GDDogObjects2= [];
gdjs.Map_321Code.GDBoneObjects1= [];
gdjs.Map_321Code.GDBoneObjects2= [];
gdjs.Map_321Code.GDMap_95951Objects1= [];
gdjs.Map_321Code.GDMap_95951Objects2= [];
gdjs.Map_321Code.GDSwordObjects1= [];
gdjs.Map_321Code.GDSwordObjects2= [];
gdjs.Map_321Code.GDWallObjects1= [];
gdjs.Map_321Code.GDWallObjects2= [];
gdjs.Map_321Code.GDCatObjects1= [];
gdjs.Map_321Code.GDCatObjects2= [];
gdjs.Map_321Code.GDBgObjects1= [];
gdjs.Map_321Code.GDBgObjects2= [];
gdjs.Map_321Code.GDPoemObjects1= [];
gdjs.Map_321Code.GDPoemObjects2= [];
gdjs.Map_321Code.GDRedFlatBarObjects1= [];
gdjs.Map_321Code.GDRedFlatBarObjects2= [];
gdjs.Map_321Code.GDGame_9595Over_9595Objects1= [];
gdjs.Map_321Code.GDGame_9595Over_9595Objects2= [];
gdjs.Map_321Code.GDFwendObjects1= [];
gdjs.Map_321Code.GDFwendObjects2= [];
gdjs.Map_321Code.GDYou_9595WinObjects1= [];
gdjs.Map_321Code.GDYou_9595WinObjects2= [];
gdjs.Map_321Code.GDNewSpriteObjects1= [];
gdjs.Map_321Code.GDNewSpriteObjects2= [];
gdjs.Map_321Code.GDrespaObjects1= [];
gdjs.Map_321Code.GDrespaObjects2= [];
gdjs.Map_321Code.GDFlatLightJoystickObjects1= [];
gdjs.Map_321Code.GDFlatLightJoystickObjects2= [];


gdjs.Map_321Code.mapOfGDgdjs_9546Map_9595321Code_9546GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Map_321Code.GDWallObjects1});
gdjs.Map_321Code.mapOfGDgdjs_9546Map_9595321Code_9546GDDogObjects1Objects = Hashtable.newFrom({"Dog": gdjs.Map_321Code.GDDogObjects1});
gdjs.Map_321Code.mapOfGDgdjs_9546Map_9595321Code_9546GDSwordObjects1Objects = Hashtable.newFrom({"Sword": gdjs.Map_321Code.GDSwordObjects1});
gdjs.Map_321Code.mapOfGDgdjs_9546Map_9595321Code_9546GDDogObjects1Objects = Hashtable.newFrom({"Dog": gdjs.Map_321Code.GDDogObjects1});
gdjs.Map_321Code.mapOfGDgdjs_9546Map_9595321Code_9546GDCatObjects1Objects = Hashtable.newFrom({"Cat": gdjs.Map_321Code.GDCatObjects1});
gdjs.Map_321Code.mapOfGDgdjs_9546Map_9595321Code_9546GDSwordObjects1Objects = Hashtable.newFrom({"Sword": gdjs.Map_321Code.GDSwordObjects1});
gdjs.Map_321Code.mapOfGDgdjs_9546Map_9595321Code_9546GDCatObjects1Objects = Hashtable.newFrom({"Cat": gdjs.Map_321Code.GDCatObjects1});
gdjs.Map_321Code.mapOfGDgdjs_9546Map_9595321Code_9546GDDogObjects1Objects = Hashtable.newFrom({"Dog": gdjs.Map_321Code.GDDogObjects1});
gdjs.Map_321Code.mapOfGDgdjs_9546Map_9595321Code_9546GDBoneObjects1Objects = Hashtable.newFrom({"Bone": gdjs.Map_321Code.GDBoneObjects1});
gdjs.Map_321Code.mapOfGDgdjs_9546Map_9595321Code_9546GDFwendObjects1Objects = Hashtable.newFrom({"Fwend": gdjs.Map_321Code.GDFwendObjects1});
gdjs.Map_321Code.mapOfGDgdjs_9546Map_9595321Code_9546GDDogObjects1Objects = Hashtable.newFrom({"Dog": gdjs.Map_321Code.GDDogObjects1});
gdjs.Map_321Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Dog"), gdjs.Map_321Code.GDDogObjects1);
gdjs.copyArray(runtimeScene.getObjects("Game_Over_"), gdjs.Map_321Code.GDGame_9595Over_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.Map_321Code.GDWallObjects1);
gdjs.copyArray(runtimeScene.getObjects("You_Win"), gdjs.Map_321Code.GDYou_9595WinObjects1);
{for(var i = 0, len = gdjs.Map_321Code.GDDogObjects1.length ;i < len;++i) {
    gdjs.Map_321Code.GDDogObjects1[i].separateFromObjectsList(gdjs.Map_321Code.mapOfGDgdjs_9546Map_9595321Code_9546GDWallObjects1Objects, false);
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Map_321Code.GDDogObjects1.length !== 0 ? gdjs.Map_321Code.GDDogObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.Map_321Code.GDGame_9595Over_9595Objects1.length ;i < len;++i) {
    gdjs.Map_321Code.GDGame_9595Over_9595Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Map_321Code.GDYou_9595WinObjects1.length ;i < len;++i) {
    gdjs.Map_321Code.GDYou_9595WinObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dog"), gdjs.Map_321Code.GDDogObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sword"), gdjs.Map_321Code.GDSwordObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Map_321Code.mapOfGDgdjs_9546Map_9595321Code_9546GDDogObjects1Objects, gdjs.Map_321Code.mapOfGDgdjs_9546Map_9595321Code_9546GDSwordObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Map_321Code.GDDogObjects1 */
/* Reuse gdjs.Map_321Code.GDSwordObjects1 */
{for(var i = 0, len = gdjs.Map_321Code.GDSwordObjects1.length ;i < len;++i) {
    gdjs.Map_321Code.GDSwordObjects1[i].putAroundObject((gdjs.Map_321Code.GDDogObjects1.length !== 0 ? gdjs.Map_321Code.GDDogObjects1[0] : null), 5, 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cat"), gdjs.Map_321Code.GDCatObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dog"), gdjs.Map_321Code.GDDogObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Map_321Code.mapOfGDgdjs_9546Map_9595321Code_9546GDDogObjects1Objects, gdjs.Map_321Code.mapOfGDgdjs_9546Map_9595321Code_9546GDCatObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Map_321Code.GDDogObjects1 */
gdjs.copyArray(runtimeScene.getObjects("RedFlatBar"), gdjs.Map_321Code.GDRedFlatBarObjects1);
{for(var i = 0, len = gdjs.Map_321Code.GDDogObjects1.length ;i < len;++i) {
    gdjs.Map_321Code.GDDogObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Map_321Code.GDRedFlatBarObjects1.length ;i < len;++i) {
    gdjs.Map_321Code.GDRedFlatBarObjects1[i].SetValue(gdjs.Map_321Code.GDRedFlatBarObjects1[i].Value(null) - (1000), null);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Respawn Screen", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedFlatBar"), gdjs.Map_321Code.GDRedFlatBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Map_321Code.GDRedFlatBarObjects1.length;i<l;++i) {
    if ( gdjs.Map_321Code.GDRedFlatBarObjects1[i].IsEmpty(null) ) {
        isConditionTrue_0 = true;
        gdjs.Map_321Code.GDRedFlatBarObjects1[k] = gdjs.Map_321Code.GDRedFlatBarObjects1[i];
        ++k;
    }
}
gdjs.Map_321Code.GDRedFlatBarObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dog"), gdjs.Map_321Code.GDDogObjects1);
gdjs.copyArray(runtimeScene.getObjects("Game_Over_"), gdjs.Map_321Code.GDGame_9595Over_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("Sword"), gdjs.Map_321Code.GDSwordObjects1);
{for(var i = 0, len = gdjs.Map_321Code.GDDogObjects1.length ;i < len;++i) {
    gdjs.Map_321Code.GDDogObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Map_321Code.GDGame_9595Over_9595Objects1.length ;i < len;++i) {
    gdjs.Map_321Code.GDGame_9595Over_9595Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Map_321Code.GDSwordObjects1.length ;i < len;++i) {
    gdjs.Map_321Code.GDSwordObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Map_321Code.GDDogObjects1.length ;i < len;++i) {
    gdjs.Map_321Code.GDDogObjects1[i].activateBehavior("TopDownMovement", false);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Respawn Screen", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cat"), gdjs.Map_321Code.GDCatObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sword"), gdjs.Map_321Code.GDSwordObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Map_321Code.mapOfGDgdjs_9546Map_9595321Code_9546GDSwordObjects1Objects, gdjs.Map_321Code.mapOfGDgdjs_9546Map_9595321Code_9546GDCatObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Map_321Code.GDCatObjects1 */
gdjs.copyArray(runtimeScene.getObjects("RedFlatBar"), gdjs.Map_321Code.GDRedFlatBarObjects1);
/* Reuse gdjs.Map_321Code.GDSwordObjects1 */
{for(var i = 0, len = gdjs.Map_321Code.GDCatObjects1.length ;i < len;++i) {
    gdjs.Map_321Code.GDCatObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Map_321Code.GDSwordObjects1.length ;i < len;++i) {
    gdjs.Map_321Code.GDSwordObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Map_321Code.GDRedFlatBarObjects1.length ;i < len;++i) {
    gdjs.Map_321Code.GDRedFlatBarObjects1[i].SetValue(gdjs.Map_321Code.GDRedFlatBarObjects1[i].Value(null) - (199), null);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bone"), gdjs.Map_321Code.GDBoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dog"), gdjs.Map_321Code.GDDogObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Map_321Code.mapOfGDgdjs_9546Map_9595321Code_9546GDDogObjects1Objects, gdjs.Map_321Code.mapOfGDgdjs_9546Map_9595321Code_9546GDBoneObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Map_321Code.GDBoneObjects1 */
gdjs.copyArray(runtimeScene.getObjects("RedFlatBar"), gdjs.Map_321Code.GDRedFlatBarObjects1);
{for(var i = 0, len = gdjs.Map_321Code.GDRedFlatBarObjects1.length ;i < len;++i) {
    gdjs.Map_321Code.GDRedFlatBarObjects1[i].SetValue(gdjs.Map_321Code.GDRedFlatBarObjects1[i].Value(null) + (100), null);
}
}{for(var i = 0, len = gdjs.Map_321Code.GDBoneObjects1.length ;i < len;++i) {
    gdjs.Map_321Code.GDBoneObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dog"), gdjs.Map_321Code.GDDogObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fwend"), gdjs.Map_321Code.GDFwendObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Map_321Code.mapOfGDgdjs_9546Map_9595321Code_9546GDFwendObjects1Objects, gdjs.Map_321Code.mapOfGDgdjs_9546Map_9595321Code_9546GDDogObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Map_321Code.GDDogObjects1 */
gdjs.copyArray(runtimeScene.getObjects("RedFlatBar"), gdjs.Map_321Code.GDRedFlatBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("You_Win"), gdjs.Map_321Code.GDYou_9595WinObjects1);
{for(var i = 0, len = gdjs.Map_321Code.GDRedFlatBarObjects1.length ;i < len;++i) {
    gdjs.Map_321Code.GDRedFlatBarObjects1[i].SetValue(500, null);
}
}{for(var i = 0, len = gdjs.Map_321Code.GDYou_9595WinObjects1.length ;i < len;++i) {
    gdjs.Map_321Code.GDYou_9595WinObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Map_321Code.GDDogObjects1.length ;i < len;++i) {
    gdjs.Map_321Code.GDDogObjects1[i].activateBehavior("TopDownMovement", false);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Win Screen 1", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Map_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Map_321Code.GDDogObjects1.length = 0;
gdjs.Map_321Code.GDDogObjects2.length = 0;
gdjs.Map_321Code.GDBoneObjects1.length = 0;
gdjs.Map_321Code.GDBoneObjects2.length = 0;
gdjs.Map_321Code.GDMap_95951Objects1.length = 0;
gdjs.Map_321Code.GDMap_95951Objects2.length = 0;
gdjs.Map_321Code.GDSwordObjects1.length = 0;
gdjs.Map_321Code.GDSwordObjects2.length = 0;
gdjs.Map_321Code.GDWallObjects1.length = 0;
gdjs.Map_321Code.GDWallObjects2.length = 0;
gdjs.Map_321Code.GDCatObjects1.length = 0;
gdjs.Map_321Code.GDCatObjects2.length = 0;
gdjs.Map_321Code.GDBgObjects1.length = 0;
gdjs.Map_321Code.GDBgObjects2.length = 0;
gdjs.Map_321Code.GDPoemObjects1.length = 0;
gdjs.Map_321Code.GDPoemObjects2.length = 0;
gdjs.Map_321Code.GDRedFlatBarObjects1.length = 0;
gdjs.Map_321Code.GDRedFlatBarObjects2.length = 0;
gdjs.Map_321Code.GDGame_9595Over_9595Objects1.length = 0;
gdjs.Map_321Code.GDGame_9595Over_9595Objects2.length = 0;
gdjs.Map_321Code.GDFwendObjects1.length = 0;
gdjs.Map_321Code.GDFwendObjects2.length = 0;
gdjs.Map_321Code.GDYou_9595WinObjects1.length = 0;
gdjs.Map_321Code.GDYou_9595WinObjects2.length = 0;
gdjs.Map_321Code.GDNewSpriteObjects1.length = 0;
gdjs.Map_321Code.GDNewSpriteObjects2.length = 0;
gdjs.Map_321Code.GDrespaObjects1.length = 0;
gdjs.Map_321Code.GDrespaObjects2.length = 0;
gdjs.Map_321Code.GDFlatLightJoystickObjects1.length = 0;
gdjs.Map_321Code.GDFlatLightJoystickObjects2.length = 0;

gdjs.Map_321Code.eventsList0(runtimeScene);
gdjs.Map_321Code.GDDogObjects1.length = 0;
gdjs.Map_321Code.GDDogObjects2.length = 0;
gdjs.Map_321Code.GDBoneObjects1.length = 0;
gdjs.Map_321Code.GDBoneObjects2.length = 0;
gdjs.Map_321Code.GDMap_95951Objects1.length = 0;
gdjs.Map_321Code.GDMap_95951Objects2.length = 0;
gdjs.Map_321Code.GDSwordObjects1.length = 0;
gdjs.Map_321Code.GDSwordObjects2.length = 0;
gdjs.Map_321Code.GDWallObjects1.length = 0;
gdjs.Map_321Code.GDWallObjects2.length = 0;
gdjs.Map_321Code.GDCatObjects1.length = 0;
gdjs.Map_321Code.GDCatObjects2.length = 0;
gdjs.Map_321Code.GDBgObjects1.length = 0;
gdjs.Map_321Code.GDBgObjects2.length = 0;
gdjs.Map_321Code.GDPoemObjects1.length = 0;
gdjs.Map_321Code.GDPoemObjects2.length = 0;
gdjs.Map_321Code.GDRedFlatBarObjects1.length = 0;
gdjs.Map_321Code.GDRedFlatBarObjects2.length = 0;
gdjs.Map_321Code.GDGame_9595Over_9595Objects1.length = 0;
gdjs.Map_321Code.GDGame_9595Over_9595Objects2.length = 0;
gdjs.Map_321Code.GDFwendObjects1.length = 0;
gdjs.Map_321Code.GDFwendObjects2.length = 0;
gdjs.Map_321Code.GDYou_9595WinObjects1.length = 0;
gdjs.Map_321Code.GDYou_9595WinObjects2.length = 0;
gdjs.Map_321Code.GDNewSpriteObjects1.length = 0;
gdjs.Map_321Code.GDNewSpriteObjects2.length = 0;
gdjs.Map_321Code.GDrespaObjects1.length = 0;
gdjs.Map_321Code.GDrespaObjects2.length = 0;
gdjs.Map_321Code.GDFlatLightJoystickObjects1.length = 0;
gdjs.Map_321Code.GDFlatLightJoystickObjects2.length = 0;


return;

}

gdjs['Map_321Code'] = gdjs.Map_321Code;
