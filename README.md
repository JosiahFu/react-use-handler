# `react-use-handler`

A react hook to set global/arbitrary event handlers.

## Example Usage

```ts
useHandler('click', useCallback(() => closeDialog(), []));
// It is recommended to wrap the function with useCallback to prevent the
// function from being changed every render
```

Using an event target other than `window`:

```ts
useHandler('resize', useCallback(() => fixSizing(), []), document);
```
