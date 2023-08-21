import { useEffect } from 'react';

/**
 * Set a handler on an arbitrary target
 *
 * @param type The type of event to listen for.
 * @param callback The event handler.
 * @param target The event target, `window` if not specified.
 * @param options The options for `addEventListener`.
 */
function useHandler<K extends keyof GlobalEventHandlersEventMap, T extends GlobalEventHandlers>(type: K, callback: (event: GlobalEventHandlersEventMap[K]) => any, target: T = (window as unknown) as T, options?: boolean | AddEventListenerOptions) {
    useEffect(() => {
        target.addEventListener(type, callback, options);
        return () => target.removeEventListener(type, callback, options);
    }, [callback, options, target, type]);
};

export { useHandler };
