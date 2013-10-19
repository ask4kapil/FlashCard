/**
 *  @class SlideNavigationExample.controller.Main
 *
 *  This {@link Ext.app.Controller} serves as a demonstration of how to
 *  listen to various events relating to a {@link Ext.ux.slidenavigation.View}.
 *
 */
Ext.define("Devit.controller.Main", {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
			selectfield: 				'selectfield'
        },

        control: {
		
			selectfield: {
				initialize:function(selectbox)
				{
					var theme = localStorage.getItem("theme");
					var search = window.location.search;
					if(search.indexOf("platform=") != -1)
					{
						theme = search.substr(search.indexOf("platform=") + "platform=".length, search.length);
						selectbox.selected = true;
						selectbox.setValue(theme);
					}
					else if(theme !== null)
					{
						selectbox.selected = true;
						selectbox.setValue(theme);
					}
					selectbox.selected = false;
				},
				change: function(selectbox, newValue, oldValue, eOpts)
				{
					 if(selectbox.selected !== undefined && selectbox.selected != true)
					 {
						localStorage.setItem("theme",newValue);
						window.location.assign(location.pathname + '?platform='+newValue);
					 }
					 else
						selectbox.selected = false;
				}
			}
        }
    }
});