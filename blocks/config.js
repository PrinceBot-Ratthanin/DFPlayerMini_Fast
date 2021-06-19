module.exports = [
	{
		name : "DFPlayerMini_Fast",
		blocks : [
			"DFPlayerMini_Fast_init",
            
            {
                xml:
                   `<block type="DFPlayerMini_Fast_volume">
                        <value name="volume">
                            <shadow type="math_number">
                                <field name="NUM">20</field>
                            </shadow>
                        </value>
                    </block>`
            },
            {
                xml:
                   `<block type="DFPlayerMini_Fast_play">
                        <value name="num">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
            },
            {
                xml:
                   `<block type="DFPlayerMini_Fast_loop">
                        <value name="num">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
            },
            
            {
                xml:
                   `<block type="DFPlayerMini_Fast_playFolder">
                        <value name="folderNum">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="trackNum">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
            },
            "DFPlayerMini_Fast_playNext",
            "DFPlayerMini_Fast_playPrevious",
            "DFPlayerMini_Fast_stop",
            "DFPlayerMini_Fast_reset",
            "DFPlayerMini_Fast_resume",
            "DFPlayerMini_Fast_pause",
            "DFPlayerMini_Fast_sleep",
            "DFPlayerMini_Fast_wakeUp",


			/*{
				xml:
            	   `<block type="lcd_i2c_print">
                        <value name="text">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello world!</field>
                            </shadow>
                        </value>
                    </block>`
			}, 
			{
				xml:
            	   `<block type="lcd_i2c_print_xy">
                        <value name="text">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello world!</field>
                            </shadow>
                        </value>
                        <value name="row">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="col">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
			},*/
			
		]
	}	
];