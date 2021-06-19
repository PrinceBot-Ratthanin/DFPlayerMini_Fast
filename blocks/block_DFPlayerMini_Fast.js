Blockly.Blocks['DFPlayerMini_Fast_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("myMP3",null,["Plugin.DFPlayer_Serial"],["Plugin.DFPlayer_Serial"]),"instance")
        .appendField("Setup DFPlayer RX")
        .appendField(new Blockly.FieldNumber(23, 1), "RX")
        .appendField("TX")
        .appendField(new Blockly.FieldNumber(19, 1), "TX");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("Setup your LCD i2c");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['DFPlayerMini_Fast_volume'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("myMP3",null,["Plugin.DFPlayer_Serial"],["Plugin.DFPlayer_Serial"]),"instance")
    this.appendValueInput("volume")
        .setCheck("Number")
        .appendField("Set Volume:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text on screen");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['DFPlayerMini_Fast_play'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("myMP3",null,["Plugin.DFPlayer_Serial"],["Plugin.DFPlayer_Serial"]),"instance")
    this.appendValueInput("num")
        .setCheck("Number")
        .appendField("DFPlayer Play:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text on screen");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['DFPlayerMini_Fast_loop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("myMP3",null,["Plugin.DFPlayer_Serial"],["Plugin.DFPlayer_Serial"]),"instance")
    this.appendValueInput("num")
        .setCheck("Number")
        .appendField("DFPlayer loop:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text on screen");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['DFPlayerMini_Fast_playFolder'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("myMP3",null,["Plugin.DFPlayer_Serial"],["Plugin.DFPlayer_Serial"]),"instance")
    this.appendValueInput("folderNum")
        .setCheck("Number")
        .appendField("DFPlayer playFolder:");
    this.appendValueInput("trackNum")
        .setCheck("Number")
        .appendField("trackNum:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text on screen");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['DFPlayerMini_Fast_playNext'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("myMP3",null,["Plugin.DFPlayer_Serial"],["Plugin.DFPlayer_Serial"]),"instance")
        .appendField("DFPlayer playNext"); 
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text on screen");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['DFPlayerMini_Fast_playPrevious'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("myMP3",null,["Plugin.DFPlayer_Serial"],["Plugin.DFPlayer_Serial"]),"instance")
        .appendField("DFPlayer playPrevious"); 
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text on screen");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['DFPlayerMini_Fast_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("myMP3",null,["Plugin.DFPlayer_Serial"],["Plugin.DFPlayer_Serial"]),"instance")
        .appendField("DFPlayer stop"); 
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text on screen");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['DFPlayerMini_Fast_reset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("myMP3",null,["Plugin.DFPlayer_Serial"],["Plugin.DFPlayer_Serial"]),"instance")
        .appendField("DFPlayer reset"); 
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text on screen");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['DFPlayerMini_Fast_resume'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("myMP3",null,["Plugin.DFPlayer_Serial"],["Plugin.DFPlayer_Serial"]),"instance")
        .appendField("DFPlayer resume"); 
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text on screen");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['DFPlayerMini_Fast_pause'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("myMP3",null,["Plugin.DFPlayer_Serial"],["Plugin.DFPlayer_Serial"]),"instance")
        .appendField("DFPlayer pause"); 
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text on screen");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['DFPlayerMini_Fast_sleep'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("myMP3",null,["Plugin.DFPlayer_Serial"],["Plugin.DFPlayer_Serial"]),"instance")
        .appendField("DFPlayer sleep"); 
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text on screen");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['DFPlayerMini_Fast_wakeUp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("myMP3",null,["Plugin.DFPlayer_Serial"],["Plugin.DFPlayer_Serial"]),"instance")
        .appendField("DFPlayer wakeUp"); 
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("print text on screen");
 this.setHelpUrl("");
  }
};
