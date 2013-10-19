Ext.define('Devit.model.CardsModel', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'id', },
            {name: 'flashcardid'},
            {name: 'location', type: 'string'},
            {name: 'description', type: 'string'}
        ],
        proxy: {
            type: 'localstorage',
            id: 'cardsmodel'
        }
    }
});