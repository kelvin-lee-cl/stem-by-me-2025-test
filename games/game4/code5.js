gdjs.LV2_32RespawnCode = {};
gdjs.LV2_32RespawnCode.localVariables = [];
gdjs.LV2_32RespawnCode.GDMedievalButtonBeigeObjects1= [];
gdjs.LV2_32RespawnCode.GDMedievalButtonBeigeObjects2= [];


gdjs.LV2_32RespawnCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBeige"), gdjs.LV2_32RespawnCode.GDMedievalButtonBeigeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LV2_32RespawnCode.GDMedievalButtonBeigeObjects1.length;i<l;++i) {
    if ( gdjs.LV2_32RespawnCode.GDMedievalButtonBeigeObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LV2_32RespawnCode.GDMedievalButtonBeigeObjects1[k] = gdjs.LV2_32RespawnCode.GDMedievalButtonBeigeObjects1[i];
        ++k;
    }
}
gdjs.LV2_32RespawnCode.GDMedievalButtonBeigeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map 2", false);
}}

}


};

gdjs.LV2_32RespawnCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LV2_32RespawnCode.GDMedievalButtonBeigeObjects1.length = 0;
gdjs.LV2_32RespawnCode.GDMedievalButtonBeigeObjects2.length = 0;

gdjs.LV2_32RespawnCode.eventsList0(runtimeScene);
gdjs.LV2_32RespawnCode.GDMedievalButtonBeigeObjects1.length = 0;
gdjs.LV2_32RespawnCode.GDMedievalButtonBeigeObjects2.length = 0;


return;

}

gdjs['LV2_32RespawnCode'] = gdjs.LV2_32RespawnCode;
