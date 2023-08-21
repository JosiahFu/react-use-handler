import { useEffect } from 'react';

function useHandler<K extends keyof GlobalEventHandlersEventMap, T extends GlobalEventHandlers>(type: K, callback: (event: GlobalEventHandlersEventMap[K]) => any, target: T = (window as unknown) as T, options?: boolean | AddEventListenerOptions) {
    useEffect(() => {
        target.addEventListener(type, callback, options);
        return () => target.removeEventListener(type, callback, options);
    }, [callback, options, target, type]);
};

export { useHandler };
