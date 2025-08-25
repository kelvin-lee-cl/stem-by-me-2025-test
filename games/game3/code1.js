gdjs.game_32winCode = {};
gdjs.game_32winCode.localVariables = [];
gdjs.game_32winCode.GDNewTextObjects1= [];
gdjs.game_32winCode.GDNewTextObjects2= [];
gdjs.game_32winCode.GDWhiteSquareDecoratedButtonObjects1= [];
gdjs.game_32winCode.GDWhiteSquareDecoratedButtonObjects2= [];
gdjs.game_32winCode.GDNewSpriteObjects1= [];
gdjs.game_32winCode.GDNewSpriteObjects2= [];


gdjs.game_32winCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton"), gdjs.game_32winCode.GDWhiteSquareDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.game_32winCode.GDWhiteSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.game_32winCode.GDWhiteSquareDecoratedButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.game_32winCode.GDWhiteSquareDecoratedButtonObjects1[k] = gdjs.game_32winCode.GDWhiteSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.game_32winCode.GDWhiteSquareDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


};

gdjs.game_32winCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_32winCode.GDNewTextObjects1.length = 0;
gdjs.game_32winCode.GDNewTextObjects2.length = 0;
gdjs.game_32winCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.game_32winCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.game_32winCode.GDNewSpriteObjects1.length = 0;
gdjs.game_32winCode.GDNewSpriteObjects2.length = 0;

gdjs.game_32winCode.eventsList0(runtimeScene);
gdjs.game_32winCode.GDNewTextObjects1.length = 0;
gdjs.game_32winCode.GDNewTextObjects2.length = 0;
gdjs.game_32winCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.game_32winCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.game_32winCode.GDNewSpriteObjects1.length = 0;
gdjs.game_32winCode.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['game_32winCode'] = gdjs.game_32winCode;
