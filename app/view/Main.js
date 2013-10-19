Ext.define('Devit.view.Main', {
    extend: 'Ext.ux.slidenavigation.View',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.form.Panel',
		'Ext.form.FieldSet',
		'Ext.field.Select',
		'Ext.ux.field.SliderExtended'
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
                    title: 'Navigation',
                    centered: false,
                    width: 200,
                    left: 0
                }
                
                /**
                 *  Here's an example of how to add a different type of
                 *  component into the toolbar of the list.
                 */
                /*
                items: [{
                    docked: 'top',
                    xtype: 'searchfield',
                    placeHolder: 'search',
                    width: 180
                }]
                */
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
            style: 'background: #fff',
            xtype: 'container'
        },
        
        items: [{
            title: 'Flash Cards',
            group: 'Cards',

            // Enable the slide button using the defaults defined above in
            // `slideButtonDefaults`.
            slideButton: true,
            items: [{
                xtype: 'toolbar',
                title: 'Flash Cards',
                docked: 'top'
            },{
                xtype: 'panel',
               
                // Mask this item when the container is opened
                maskOnOpen: true
            }]
        },{
            title: 'Create New Cards',
            group: 'Cards',
            slideButton: true,
            /**
             *  Here's an example of how an item can simply execute a
             *  function, rather than display a new component.
             */
            handler: function() {
                Ext.Msg.alert('Item 2', 'You clicked Item 2.');
            }
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
                                    id: 'theme',
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
        }
    
    ]}
});
