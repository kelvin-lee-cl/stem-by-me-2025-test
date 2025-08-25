gdjs.winCode = {};
gdjs.winCode.localVariables = [];
gdjs.winCode.GDNewSpriteObjects1= [];
gdjs.winCode.GDNewSpriteObjects2= [];
gdjs.winCode.GDNewTextObjects1= [];
gdjs.winCode.GDNewTextObjects2= [];
gdjs.winCode.GDWhiteSquareDecoratedButtonObjects1= [];
gdjs.winCode.GDWhiteSquareDecoratedButtonObjects2= [];


gdjs.winCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton"), gdjs.winCode.GDWhiteSquareDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.winCode.GDWhiteSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.winCode.GDWhiteSquareDecoratedButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.winCode.GDWhiteSquareDecoratedButtonObjects1[k] = gdjs.winCode.GDWhiteSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.winCode.GDWhiteSquareDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


};

gdjs.winCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.winCode.GDNewSpriteObjects1.length = 0;
gdjs.winCode.GDNewSpriteObjects2.length = 0;
gdjs.winCode.GDNewTextObjects1.length = 0;
gdjs.winCode.GDNewTextObjects2.length = 0;
gdjs.winCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.winCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;

gdjs.winCode.eventsList0(runtimeScene);
gdjs.winCode.GDNewSpriteObjects1.length = 0;
gdjs.winCode.GDNewSpriteObjects2.length = 0;
gdjs.winCode.GDNewTextObjects1.length = 0;
gdjs.winCode.GDNewTextObjects2.length = 0;
gdjs.winCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.winCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;


return;

}

gdjs['winCode'] = gdjs.winCode;
