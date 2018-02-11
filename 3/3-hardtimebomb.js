var globalVars = Object.keys(this);
for (var i = 0; i < globalVars.length; i++) {
    if (globalVars[i].indexOf("boom") !== -1) {
        Bomb.CutTheWire(eval(globalVars[i]));
    }
}

