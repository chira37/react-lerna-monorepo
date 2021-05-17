export function subscribe(event, callback) {
    document.addEventListener(event, (e) => callback(e.detail));

    return {
        unsubscribe: function unsubscribe() {
            document.removeEventListener(event);
        },
    };
}

export function publish(event, data) {
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
}
