import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'getCanisterId' : () => Promise<[] | [Principal]>,
  'init' : () => Promise<Principal>,
}
