Ext.define('Devit.view.Main', {
    extend: 'Ext.ux.slidenavigation.View',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.form.Panel',
		'Ext.form.FieldSet',
		'Ext.field.Select',
		'Ext.ux.field.SliderExtended',
		'Devit.model.FlashCardModel'
    ],
    config: {
        fullscreen: true,
        /**
         *  Any component within the container with an 'x-toolbar' class
         *  will be draggable.  To disable draggin all together, set this
         *  to false.
         */
        slideSelector: 'x-toolbar',

        /**
         *  Container must be dragged 10 pixels horizontally before allowing
         *  the underlying container to actually be dragged.
         *
         *  @since 0.2.2
         */
        containerSlideDelay: 10,
        
        /**
         *  Time in milliseconds to animate the closing of the container
         *  after an item has been clicked on in the list.
         */
        selectSlideDuration: 200,

        /**
         *  Enable content masking when container is open.
         *
         *  @since 0.2.0
         */
        itemMask: true,

        /**
         *  Define the default slide button config.  Any item that has
         *  a `slideButton` value that is either `true` or a button config
         *  will use these values at the default.
         */
        slideButtonDefaults: {
            selector: 'toolbar'
        },
        
        /**
         *  This allows us to configure how the actual list container
         *  looks.  Here we've added a custom search field and have
         *  modified the width.
         */
        list: {
            maxDrag: 400,
            width: 200,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                ui: 'light',                    
                title: {
                    title: 'Menu',
                    centered: true,
                    width: 200,
                    left: 0
                }
            }]
            
        },

        /**
         *  Example of how to re-order the groups.
         */
        groups: {
            'Cards': 1,
            'Settings': 2
        },
        
        /**
         *  These are the default values to apply to the items within the
         *  container.
         */
        defaults: {
            xtype: 'container'
        },
        
        items: [{
            title: 'Flash Cards',
            group: 'Cards',

            // Enable the slide button using the defaults defined above in
            // `slideButtonDefaults`.
            slideButton: true,
            layout: 'vbox',
            defaults: {

            },
            items: [{
                xtype: 'toolbar',
                title: 'Flash Cards',
                docked: 'top'
            },
            {
            	xtype: 'listflashcards',
            	flex: 1
            }
            /*{
                docked: 'left',
                layout: 'vbox',
                width: '50%',
                items: [{
	                    xtype: 'panel',
	                    html: 'message list',
	                    flex: 1,
	                	border: 3,
	                	margin: '25 25 25 24',
	                	style: 'background-color:#F00'
	                },
	                {
	                    xtype: 'panel',
	                    html: 'message preview',
	                    flex: 1,
	                	border: 3,
	                	margin: '25 25 25 24',
	                	style: 'background-color:#F00'
	                }
	            ]
            },
            {
                xtype: 'panel',
                html: 'message list',
                flex: 1,
            	border: 3,
            	margin: '25 25 25 24',
            	style: 'background-color:#F00'
            },
            {
                xtype: 'panel',
                html: 'message preview',
                flex: 1,
            	border: 3,
            	margin: '25 25 25 24',
            	style: 'background-color:#F00'
            }*/]
        },{
            title: 'Create New Cards',
            group: 'Cards',
            slideButton: true,
            items: [{
                xtype: 'toolbar',
                title: 'Create New Cards',
                docked: 'top',
                items: [
							{
							    xtype: 'spacer'
							},
							{
			                	xtype: 'button',
			                    text: 'Save',
			                    ui: 'forward',
			                    align: 'right',
			                    action: 'save',
			                    hidden: (Ext.theme.name == "Blackberry") ? true : false
							}
						]
            },
            {
                xtype: 'formpanel',
                scrollable: true,
                maskOnOpen: true,
                items: [
                        {
                            xtype: 'fieldset',
                            id: 'fieldset1',
                            title: 'Flash Card Info',
                            defaults: {
                                labelWidth: '35%'
                            },
                            items: [
                                    {
                                        xtype         : 'textfield',
                                        name          : 'flashcardname',
                                        label         : 'Flash Card Name',
                                        placeHolder   : 'Name',
                                        autoCapitalize: true,
                                        required      : true,
                                        clearIcon     : true
                                    },
                                    {
                                        xtype: 'selectfield',
                                        name : 'cardscount',
                                        label: 'No. of Cards',
                                        required      : true,
                                        options: [
                                            {
                                                text : '4',
                                                value: '4'
                                            },
                                            {
                                                text : '5',
                                                value: '5'
                                            },
                                            {
                                                text : '6',
                                                value: '6'
                                            },
                                            {
                                                text : '7',
                                                value: '7'
                                            },
                                            {
                                                text : '8',
                                                value: '8'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'textareafield',
                                        name : 'description',
                                        label: 'Card Description',
                                        required      : true,
                                        clearIcon     : true
                                    }
                            ]
                        }
                      ]
            }]
        },{
            title: 'Settings',
            group: 'Settings',
            slideButton: true,
            items: [{
                xtype: 'toolbar',
                title: 'Settings',
                docked: 'top'
            },{
                xtype: 'formpanel',
                scrollable: true,
                maskOnOpen: true,
                items: [
                        {
                            xtype: 'fieldset',
                            id: 'fieldset1',
                            defaults: {
                                labelWidth: '35%'
                            },
                            items: [
                                {
                                    xtype: 'selectfield',
                                    name : 'theme',
                                    label: 'Theme',
                                    usePicker: true,
                                    options: [
									    {
                                            text : 'Default',
                                            value: 'default'
                                        },
										{
                                            text : 'IOS',
                                            value: 'ios'
                                        },
                                        {
                                            text : 'Windows',
                                            value: 'ie10'
                                        },
                                        {
                                            text : 'IOS Classic',
                                            value: 'ios-classic'
                                        },
                                        {
                                            text : 'Android',
                                            value: 'android'
                                        },
                                        {
                                            text : 'Blackberry',
                                            value: 'blackberry'
                                        }
                                    ]
                                },
								{
								  xtype: 'sliderfieldextended',
								  name: 'quality',
								  labelText: 'Picture Quality',
								  label: 'Picture Quality',
								  value: 20,
								  minValue: 10,
								  maxValue: 90,
								  increment: 5
								}
                            ]
                        }
                    ]
            }]
        },
        {
            title: 'About',
            group: 'Settings',
            slideButton: true,
            items: [{
                xtype: 'toolbar',
                title: 'About',
                docked: 'top'
            },
            {
                styleHtmlContent: true,
                xtype: 'panel',
                layout: 'card',
                html: 'Flash Card APP Under development'
            }]
        }
    
    ]}
});
