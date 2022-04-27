import { u64 } from "@solana/spl-token";
import Decimal from "decimal.js";
import { OrcaToken, OrcaU64 } from "../..";
import { OrcaFarmParams } from "../../../model/orca/farm/farm-types";
import { OrcaPoolParams } from "../../../model/orca/pool/pool-types";
export declare const ZERO: any;
export declare const ONE: any;
export declare class U64Utils {
    static toTokenU64(input: Decimal | OrcaU64, token: OrcaToken, varName: string): any;
    static toPoolU64(input: Decimal | OrcaU64, pool: OrcaPoolParams, varName: string): any;
    static toFarmU64(input: Decimal | OrcaU64, farm: OrcaFarmParams, varName: string): any;
    static ceilingDivision(dividend: u64, divisor: u64): [u64, u64];
}
