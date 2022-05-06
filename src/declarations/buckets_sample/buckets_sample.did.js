export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getCanisterId' : IDL.Func([], [IDL.Opt(IDL.Principal)], ['query']),
    'init' : IDL.Func([], [IDL.Principal], []),
  });
};
export const init = ({ IDL }) => { return []; };
