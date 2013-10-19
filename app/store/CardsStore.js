Ext.define('Devit.store.CardsStore', {
  extend: 'Ext.data.Store',
  config: {
    model: 'Devit.model.CardsModel',
    autoLoad: true,
    autoSync: true,
    proxy: {
      type: 'localstorage',
      id: 'cardsstore'
    },
    storeId: 'cardsstore'
  }
});