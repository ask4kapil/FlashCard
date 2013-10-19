Ext.define('Devit.store.FlashCardStore', {
  extend: 'Ext.data.Store',
  config: {
    model: 'Devit.model.FlashCardModel',
    autoLoad: true,
    autoSync: true,
    proxy: {
      type: 'localstorage',
      id: 'flashcardstore'
    },
    storeId: 'flashcardstore'
  }
});