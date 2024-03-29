import { base } from 'viem/chains';
import {
    Hex,
} from 'viem';

export const NEXT_PUBLIC_URL = process.env.NODE_ENV == "development" ? 'https://96c1-2600-1700-9cc0-3ab0-3c56-3e09-491d-2b8e.ngrok-free.app' : 'https://eyes-closed.netlify.app';
export const API_URL = process.env.NODE_ENV == "development" ? 'https://96c1-2600-1700-9cc0-3ab0-3c56-3e09-491d-2b8e.ngrok-free.app' : 'https://eyes-closed.netlify.app';
export const CHAIN = base;
export const CONTRACT_ADDRESS = '0x34572eb8bc116582170629c9a309f8ed75ac6984';
export const TOKEN_ID = 1n; // First collection is 1
export const test_address = "0x3592D1C427190ac1BBd0344C77681Fa5A2E36EB6"
export const MINTER_PRIVATE_KEY = `0x${process.env.MINTER_PRIVATE_KEY}` as Hex | undefined;
export const RPC_URL = "https://base-rpc.publicnode.com"
export const BUY_MY_COFFEE_CONTRACT_ADDR = '0xcD3D5E4E498BAb2e0832257569c3Fd4AE439dD6f';

export enum ResponseType {
    SUCCESS,
    RECAST,
    NO_ADDRESS,
    OUT_OF_GAS,
    ERROR,
}


export enum ContractResponse {
    NO_PRIVATE_KEY,
    NO_TO_ADDRESS,
    CONTRACT_WRITE_ERROR,
    CONTRACT_SIMULATE_ERROR,
    SUCCESS
}
