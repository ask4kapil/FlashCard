Ext.define('Devit.view.ListFlashCards', {
    extend: 'Ext.dataview.List',
    xtype: 'listflashcards',
    config: {
    	itemTpl: '<div class="contact">{name} <strong>{description}</strong></div>',
    	store: 'flashcardstore'
    }
});