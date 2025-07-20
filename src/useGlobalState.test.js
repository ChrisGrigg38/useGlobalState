import { renderHook } from "@testing-library/react";
import { useGlobalState } from './useGlobalState'

describe('useGlobalState', function() {
    it('Should be set to the default value of the global state', function() {
      const { result } = renderHook(useGlobalState);
      //assert.equal(-1, [1,2,3].indexOf(5));
    });
});