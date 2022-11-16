import { selectorFamily } from "recoil";

export const _fetch = selectorFamily({
  key: "_fetch",
  get: (route, reqType, payload) => ({get}) => {
    return reqType;
  }
})