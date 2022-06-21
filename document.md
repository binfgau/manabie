#

## Tối ưu context value

- Khi sử dụng context trong React, value của context provider thay đổi thì tất cả những component sử dụng context đó sẽ bị render lại. Nó re-render ngay khi chúng ta đã memo component đó.
- Ex:

```
export const AppStateProvider = ({
  appState,
  appDispatch,
  children,
}: AppStateProviderProps): JSX.Element => {
  const value: [AppState, Dispatch<AppAction>] = () => [appState, appDispatch]
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
```

- Nếu AppStateProvider re-render thì const value = [appState, appDispatch] được tạo mới, cho dù appState, appDispatch không thay đổi. Do đó nó sẽ làm cho tất cả các consumer re-render.

- Một trong những cách fix nhanh nhất là chúng ta có thể sử dụng React.useMemo như sau:

```
export const AppStateProvider = ({
  appState,
  appDispatch,
  children,
}: AppStateProviderProps): JSX.Element => {
  const value: [AppState, Dispatch<AppAction>] = useMemo(
    () => [appState, appDispatch],
    [appState, appDispatch]
  );
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
```

- Điều này đảm bảo rằng nếu lỡ như AppStateProvider có re-render vì một lý do không mong muốn nào đó thì value sẽ không thay đổi nếu count không đổi.

http://thaunguyen.com/blog/reactjs/tu-hoc-reactjs-react-performace-toi-uu-context-value

##
