gdjs.Respawn_32ScreenCode = {};
gdjs.Respawn_32ScreenCode.localVariables = [];
gdjs.Respawn_32ScreenCode.GDYou_9595Lose_9595Objects1= [];
gdjs.Respawn_32ScreenCode.GDYou_9595Lose_9595Objects2= [];
gdjs.Respawn_32ScreenCode.GDCommandsObjects1= [];
gdjs.Respawn_32ScreenCode.GDCommandsObjects2= [];


gdjs.Respawn_32ScreenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("You_Lose_"), gdjs.Respawn_32ScreenCode.GDYou_9595Lose_9595Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Respawn_32ScreenCode.GDYou_9595Lose_9595Objects1.length;i<l;++i) {
    if ( gdjs.Respawn_32ScreenCode.GDYou_9595Lose_9595Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Respawn_32ScreenCode.GDYou_9595Lose_9595Objects1[k] = gdjs.Respawn_32ScreenCode.GDYou_9595Lose_9595Objects1[i];
        ++k;
    }
}
gdjs.Respawn_32ScreenCode.GDYou_9595Lose_9595Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map 1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Commands"), gdjs.Respawn_32ScreenCode.GDCommandsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Respawn_32ScreenCode.GDCommandsObjects1.length;i<l;++i) {
    if ( gdjs.Respawn_32ScreenCode.GDCommandsObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Respawn_32ScreenCode.GDCommandsObjects1[k] = gdjs.Respawn_32ScreenCode.GDCommandsObjects1[i];
        ++k;
    }
}
gdjs.Respawn_32ScreenCode.GDCommandsObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map 2", false);
}}

}


};

gdjs.Respawn_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Respawn_32ScreenCode.GDYou_9595Lose_9595Objects1.length = 0;
gdjs.Respawn_32ScreenCode.GDYou_9595Lose_9595Objects2.length = 0;
gdjs.Respawn_32ScreenCode.GDCommandsObjects1.length = 0;
gdjs.Respawn_32ScreenCode.GDCommandsObjects2.length = 0;

gdjs.Respawn_32ScreenCode.eventsList0(runtimeScene);
gdjs.Respawn_32ScreenCode.GDYou_9595Lose_9595Objects1.length = 0;
gdjs.Respawn_32ScreenCode.GDYou_9595Lose_9595Objects2.length = 0;
gdjs.Respawn_32ScreenCode.GDCommandsObjects1.length = 0;
gdjs.Respawn_32ScreenCode.GDCommandsObjects2.length = 0;


return;

}

gdjs['Respawn_32ScreenCode'] = gdjs.Respawn_32ScreenCode;
