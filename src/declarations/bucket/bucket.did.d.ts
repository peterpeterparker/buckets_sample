import type { Principal } from '@dfinity/principal';
export interface Bucket { 'say' : () => Promise<string> }
export interface _SERVICE extends Bucket {}
