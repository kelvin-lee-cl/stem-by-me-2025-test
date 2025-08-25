gdjs.StartCode = {};
gdjs.StartCode.localVariables = [];
gdjs.StartCode.GDStart_9595buttonObjects1= [];
gdjs.StartCode.GDStart_9595buttonObjects2= [];
gdjs.StartCode.GDDogObjects1= [];
gdjs.StartCode.GDDogObjects2= [];


gdjs.StartCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDStart_9595buttonObjects1.length = 0;
gdjs.StartCode.GDStart_9595buttonObjects2.length = 0;
gdjs.StartCode.GDDogObjects1.length = 0;
gdjs.StartCode.GDDogObjects2.length = 0;

gdjs.StartCode.eventsList0(runtimeScene);
gdjs.StartCode.GDStart_9595buttonObjects1.length = 0;
gdjs.StartCode.GDStart_9595buttonObjects2.length = 0;
gdjs.StartCode.GDDogObjects1.length = 0;
gdjs.StartCode.GDDogObjects2.length = 0;


return;

}

gdjs['StartCode'] = gdjs.StartCode;
