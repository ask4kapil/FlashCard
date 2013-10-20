Ext.define('Devit.model.FlashCardModel', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'id', },
            {name: 'name', type: 'string'},
            {name: 'cards', type: 'number'},
            {name: 'description', type: 'string'}
        ],
        proxy: {
            type: 'localstorage',
            id: 'flashcardstore'
        }
    }
});