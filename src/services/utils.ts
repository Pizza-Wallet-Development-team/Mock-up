import BigNumber from "bignumber.js";
import { Token } from "../types";
import { message } from "antd";

export const formatTokenAmount = (token: Token, amount: string | undefined) => {
  if (!amount) {
    return "- " + token.symbol;
  }

  return formatTokenAmountOnly(token, amount) + " " + token.symbol;
};

export const formatTokenAmountOnly = (
  token: Token,
  amount: string | BigNumber | undefined,
) => {
  if (!amount) {
    return "0.0";
  }

  let floated;
  if (typeof amount === "string") {
    if (amount === "0") {
      return "0.0";
    }

    floated = new BigNumber(amount).shiftedBy(-token.decimals);
  } else {
    floated = amount;

    if (floated.isZero()) {
      return "0.0";
    }
  }

  // show at least 4 decimal places and at least two non-zero digests
  let decimalPlaces = 3;
  // since values can in theory be negative we need to use the absolute value to determine the decimal places
  while (floated.absoluteValue().lt(1 / 10 ** decimalPlaces)) decimalPlaces++;
  return floated.toFixed(decimalPlaces + 1, 1);
};

/**
 * Parses seconds as time string in the format "02:25"
 * @param seconds
 */
export const parseSecondsAsTime = (seconds: number): string => {
  if (isNaN(seconds) || seconds < 0) {
    return " - ";
  }
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.ceil(seconds % 60);
  const prefix = remainingSeconds < 10 ? "0" : "";
  return `${minutes}:${prefix}${remainingSeconds}`;
};

export const deepClone = (src: any) => {
  return JSON.parse(JSON.stringify(src));
};

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    message.success("Message copied to clipboard!");
  } catch {
    message.error("Copying failed!");
  }
};