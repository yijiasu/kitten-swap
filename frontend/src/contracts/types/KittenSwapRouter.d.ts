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

export interface KittenSwapRouter extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): KittenSwapRouter;
  clone(): KittenSwapRouter;
  methods: {
    _adapters(arg0: number | string | BN): NonPayableTransactionObject<string>;

    getAdapterCount(): NonPayableTransactionObject<string>;

    getAdapterNameByIndex(
      idx: number | string | BN
    ): NonPayableTransactionObject<string>;

    getAdapterAddressByIndex(
      idx: number | string | BN
    ): NonPayableTransactionObject<string>;

    addNewAdapter(adapterAddr: string): NonPayableTransactionObject<void>;

    getBestQuote(
      tokenIn: string,
      tokenOut: string,
      amountIn: number | string | BN
    ): NonPayableTransactionObject<{
      bestAmountOut: string;
      adapterIdxUsed: string;
      0: string;
      1: string;
    }>;

    swapExactTokensForTokens(
      amountIn: number | string | BN,
      amountOutMin: number | string | BN,
      path: string[],
      to: string,
      deadline: number | string | BN
    ): NonPayableTransactionObject<string[]>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}
