gdjs.start_32gameCode = {};
gdjs.start_32gameCode.localVariables = [];
gdjs.start_32gameCode.GDWhiteSquareDecoratedButtonObjects1= [];
gdjs.start_32gameCode.GDWhiteSquareDecoratedButtonObjects2= [];


gdjs.start_32gameCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton"), gdjs.start_32gameCode.GDWhiteSquareDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.start_32gameCode.GDWhiteSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.start_32gameCode.GDWhiteSquareDecoratedButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.start_32gameCode.GDWhiteSquareDecoratedButtonObjects1[k] = gdjs.start_32gameCode.GDWhiteSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.start_32gameCode.GDWhiteSquareDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


};

gdjs.start_32gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.start_32gameCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.start_32gameCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;

gdjs.start_32gameCode.eventsList0(runtimeScene);
gdjs.start_32gameCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.start_32gameCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;


return;

}

gdjs['start_32gameCode'] = gdjs.start_32gameCode;
