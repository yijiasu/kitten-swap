/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export interface IExchangeAdapter extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): IExchangeAdapter;
  clone(): IExchangeAdapter;
  methods: {
    getName(): NonPayableTransactionObject<string>;

    quote(
      amountA: number | string | BN,
      reserveA: number | string | BN,
      reserveB: number | string | BN
    ): NonPayableTransactionObject<string>;

    getAmountOut(
      amountIn: number | string | BN,
      reserveIn: number | string | BN,
      reserveOut: number | string | BN
    ): NonPayableTransactionObject<string>;

    getAmountIn(
      amountOut: number | string | BN,
      reserveIn: number | string | BN,
      reserveOut: number | string | BN
    ): NonPayableTransactionObject<string>;

    getAmountOutByTokenPair(
      amountIn: number | string | BN,
      tokenIn: string,
      tokenOut: string
    ): NonPayableTransactionObject<string>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}
