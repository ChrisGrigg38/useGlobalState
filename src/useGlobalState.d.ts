// useGlobalState.d.ts

interface StateResponse<T> {
   value: T,
   setValue(value: T),
}

/**
 * Initializes the global state management system custom hook
 * @param key The key for the global state
 * @param defaultState: Optional state to initialize (if it has not been init before)
 * @returns StateResponse containing the current state and setters
 */
declare function useGlobalState<T>(key: string, defaultState?: T): StateResponse<T>;
