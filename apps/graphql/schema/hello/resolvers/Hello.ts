import type { HelloResolvers } from "./../../types.generated";
export const Hello: HelloResolvers = {
  message: async (_parent, _arg, _ctx) => {
    return _parent.message;
  },
  info: async (_parent, _arg, _ctx) => {
    return _parent.info;
  },
};
