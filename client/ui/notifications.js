import Noty from 'noty'

Noty.overrideDefaults({
    layout: 'top',
    theme: 'mint',
    closeWith: ['click', 'button']
});

function showErrorNotification(message) {
    new Noty({
        type: 'error',
        text: message,
    }).show();
}

function showInfoNotification(message) {
    new Noty({
        type: 'success',
        text: message,
    }).show();
}

export default { showErrorNotification, showInfoNotification}
