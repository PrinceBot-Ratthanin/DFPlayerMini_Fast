Blockly.JavaScript['DFPlayerMini_Fast_init'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var number_RX = block.getFieldValue('RX');
  var number_TX = block.getFieldValue('TX');
  var code = `#EXTINC #include <DFPlayerMini_Fast.h>\n
              #include <HardwareSerial.h> #END
#VARIABLE DFPlayerMini_Fast ${variable_instance}; \nHardwareSerial Myserial(1);#END
Myserial.begin(9600, SERIAL_8N1, ${number_RX}, ${number_TX});
${variable_instance}.begin(Myserial);\n`;
  return code;
};


Blockly.JavaScript['DFPlayerMini_Fast_volume'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var value_volume = Blockly.JavaScript.valueToCode(block, 'volume', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_instance + '.volume('+value_volume+');   \n';
  return code;
};
Blockly.JavaScript['DFPlayerMini_Fast_play'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var value_num = Blockly.JavaScript.valueToCode(block, 'num', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_instance + '.play('+value_num+');   \n';
  return code;
};
Blockly.JavaScript['DFPlayerMini_Fast_loop'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var value_num = Blockly.JavaScript.valueToCode(block, 'num', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_instance + '.loop('+value_num+');   \n';
  return code;
};
Blockly.JavaScript['DFPlayerMini_Fast_playFolder'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var value_folderNum = Blockly.JavaScript.valueToCode(block, 'folderNum', Blockly.JavaScript.ORDER_ATOMIC);
  var value_trackNum = Blockly.JavaScript.valueToCode(block, 'trackNum', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_instance + '.playFolder('+value_folderNum+','+value_trackNum+');   \n';
  return code;
};
Blockly.JavaScript['DFPlayerMini_Fast_playNext'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code = variable_instance + '.playNext();   \n';
  return code;
};
Blockly.JavaScript['DFPlayerMini_Fast_playPrevious'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code = variable_instance + '.playPrevious();   \n';
  return code;
};
Blockly.JavaScript['DFPlayerMini_Fast_stop'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code = variable_instance + '.stop();   \n';
  return code;
};
Blockly.JavaScript['DFPlayerMini_Fast_reset'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code = variable_instance + '.reset();   \n';
  return code;
};
Blockly.JavaScript['DFPlayerMini_Fast_resume'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code = variable_instance + '.resume();   \n';
  return code;
};
Blockly.JavaScript['DFPlayerMini_Fast_pause'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code = variable_instance + '.pause();   \n';
  return code;
};
Blockly.JavaScript['DFPlayerMini_Fast_sleep'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code = variable_instance + '.sleep();   \n';
  return code;
};
Blockly.JavaScript['DFPlayerMini_Fast_wakeUp'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code = variable_instance + '.wakeUp();   \n';
  return code;
};