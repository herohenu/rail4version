Ext.define('AM.store.Patients', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Patient',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        api: {

            read: 'patients.json',
            update: 'data/updateUsers.json',
            crate:'patients/create'

        },
        reader: {
            type: 'json',
            root: 'patients',
            successProperty: 'success'
        }
    }
});