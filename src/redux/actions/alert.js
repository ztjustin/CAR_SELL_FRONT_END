export const alertConstants = {
    SUCCESS: 'ALERT_SUCCESS',
    ERROR: 'ALERT_ERROR',
    CLEAR: 'ALERT_CLEAR'
};

export const success = (message) => {
    return { type: alertConstants.SUCCESS, message };
}

export const error = (message) => {
    return { type: alertConstants.ERROR, message };
}

export const clear = () => {
    return { type: alertConstants.CLEAR };
}