gdjs.game_32startCode = {};
gdjs.game_32startCode.localVariables = [];
gdjs.game_32startCode.GDWhiteSquareDecoratedButtonObjects1= [];
gdjs.game_32startCode.GDWhiteSquareDecoratedButtonObjects2= [];


gdjs.game_32startCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton"), gdjs.game_32startCode.GDWhiteSquareDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.game_32startCode.GDWhiteSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.game_32startCode.GDWhiteSquareDecoratedButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.game_32startCode.GDWhiteSquareDecoratedButtonObjects1[k] = gdjs.game_32startCode.GDWhiteSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.game_32startCode.GDWhiteSquareDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


};

gdjs.game_32startCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_32startCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.game_32startCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;

gdjs.game_32startCode.eventsList0(runtimeScene);
gdjs.game_32startCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.game_32startCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;


return;

}

gdjs['game_32startCode'] = gdjs.game_32startCode;
