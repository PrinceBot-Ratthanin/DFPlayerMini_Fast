Blockly.JavaScript['DFPlayerMini_Fast_init'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var number_RX = block.getFieldValue('RX');
  var number_TX = block.getFieldValue('TX');
  var code = `#EXTINC #include <DFPlayer_Mini_Mp3.h>\n
              #include <HardwareSerial.h> #END
#VARIABLE HardwareSerial Myserial(1);#END
Myserial.begin(9600, SERIAL_8N1, ${number_RX}, ${number_TX});
mp3_set_serial(Myserial);\n`;
  return code;
};


Blockly.JavaScript['DFPlayerMini_Fast_volume'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var value_volume = Blockly.JavaScript.valueToCode(block, 'volume', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'mp3_set_volume('+value_volume+');   \n';
  return code;
};
Blockly.JavaScript['DFPlayerMini_Fast_play'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var value_num = Blockly.JavaScript.valueToCode(block, 'num', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'mp3_play('+value_num+');   \n';
  return code;
};
Blockly.JavaScript['DFPlayerMini_Fast_loop'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var value_num = Blockly.JavaScript.valueToCode(block, 'num', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'mp3_single_loop('+value_num+');   \n';
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
  var code = 'mp3_next();\n';
  return code;
};
Blockly.JavaScript['DFPlayerMini_Fast_playPrevious'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code = 'mp3_prev();\n';
  return code;
};
Blockly.JavaScript['DFPlayerMini_Fast_stop'] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var code =  'mp3_stop();   \n';
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
  var code = 'mp3_pause();   \n';
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