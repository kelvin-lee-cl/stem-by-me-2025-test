gdjs.game_32overCode = {};
gdjs.game_32overCode.localVariables = [];
gdjs.game_32overCode.GDNewTextObjects1= [];
gdjs.game_32overCode.GDNewTextObjects2= [];
gdjs.game_32overCode.GDWhiteSquareDecoratedButtonObjects1= [];
gdjs.game_32overCode.GDWhiteSquareDecoratedButtonObjects2= [];
gdjs.game_32overCode.GDNewSpriteObjects1= [];
gdjs.game_32overCode.GDNewSpriteObjects2= [];
gdjs.game_32overCode.GDloseObjects1= [];
gdjs.game_32overCode.GDloseObjects2= [];
gdjs.game_32overCode.GDNewSprite2Objects1= [];
gdjs.game_32overCode.GDNewSprite2Objects2= [];
gdjs.game_32overCode.GDNewSprite3Objects1= [];
gdjs.game_32overCode.GDNewSprite3Objects2= [];


gdjs.game_32overCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton"), gdjs.game_32overCode.GDWhiteSquareDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.game_32overCode.GDWhiteSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.game_32overCode.GDWhiteSquareDecoratedButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.game_32overCode.GDWhiteSquareDecoratedButtonObjects1[k] = gdjs.game_32overCode.GDWhiteSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.game_32overCode.GDWhiteSquareDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


};

gdjs.game_32overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_32overCode.GDNewTextObjects1.length = 0;
gdjs.game_32overCode.GDNewTextObjects2.length = 0;
gdjs.game_32overCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.game_32overCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.game_32overCode.GDNewSpriteObjects1.length = 0;
gdjs.game_32overCode.GDNewSpriteObjects2.length = 0;
gdjs.game_32overCode.GDloseObjects1.length = 0;
gdjs.game_32overCode.GDloseObjects2.length = 0;
gdjs.game_32overCode.GDNewSprite2Objects1.length = 0;
gdjs.game_32overCode.GDNewSprite2Objects2.length = 0;
gdjs.game_32overCode.GDNewSprite3Objects1.length = 0;
gdjs.game_32overCode.GDNewSprite3Objects2.length = 0;

gdjs.game_32overCode.eventsList0(runtimeScene);
gdjs.game_32overCode.GDNewTextObjects1.length = 0;
gdjs.game_32overCode.GDNewTextObjects2.length = 0;
gdjs.game_32overCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.game_32overCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.game_32overCode.GDNewSpriteObjects1.length = 0;
gdjs.game_32overCode.GDNewSpriteObjects2.length = 0;
gdjs.game_32overCode.GDloseObjects1.length = 0;
gdjs.game_32overCode.GDloseObjects2.length = 0;
gdjs.game_32overCode.GDNewSprite2Objects1.length = 0;
gdjs.game_32overCode.GDNewSprite2Objects2.length = 0;
gdjs.game_32overCode.GDNewSprite3Objects1.length = 0;
gdjs.game_32overCode.GDNewSprite3Objects2.length = 0;


return;

}

gdjs['game_32overCode'] = gdjs.game_32overCode;
