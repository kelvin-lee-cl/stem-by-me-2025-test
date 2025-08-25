gdjs.Win_32Screen_321Code = {};
gdjs.Win_32Screen_321Code.localVariables = [];
gdjs.Win_32Screen_321Code.GDMedievalButtonBeigeObjects1= [];
gdjs.Win_32Screen_321Code.GDMedievalButtonBeigeObjects2= [];


gdjs.Win_32Screen_321Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MedievalButtonBeige"), gdjs.Win_32Screen_321Code.GDMedievalButtonBeigeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Win_32Screen_321Code.GDMedievalButtonBeigeObjects1.length;i<l;++i) {
    if ( gdjs.Win_32Screen_321Code.GDMedievalButtonBeigeObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Win_32Screen_321Code.GDMedievalButtonBeigeObjects1[k] = gdjs.Win_32Screen_321Code.GDMedievalButtonBeigeObjects1[i];
        ++k;
    }
}
gdjs.Win_32Screen_321Code.GDMedievalButtonBeigeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map 2", false);
}}

}


};

gdjs.Win_32Screen_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Win_32Screen_321Code.GDMedievalButtonBeigeObjects1.length = 0;
gdjs.Win_32Screen_321Code.GDMedievalButtonBeigeObjects2.length = 0;

gdjs.Win_32Screen_321Code.eventsList0(runtimeScene);
gdjs.Win_32Screen_321Code.GDMedievalButtonBeigeObjects1.length = 0;
gdjs.Win_32Screen_321Code.GDMedievalButtonBeigeObjects2.length = 0;


return;

}

gdjs['Win_32Screen_321Code'] = gdjs.Win_32Screen_321Code;
