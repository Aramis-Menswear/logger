import { logger } from './config';

const ERROR_EMOJI = "⛔";
const WARNING_EMOJI = "⚠️";
const INFO_EMOJI = "▶️";
const SUCCESS_EMOJI = "✅";

const logConsole = (...msgs: unknown[]) => {
  msgs.forEach((msg: unknown) => {
    logger.info(">> ", msg);
  });
  logger.info("");
};

const info = (...messages: unknown[]) => {
  logger.info(`${INFO_EMOJI} INFORMATION LOGS`)
  messages.forEach((message: unknown) => {
    logger.info(message);
  });
};

const warn = (...msgs: unknown[]) => {
  console.log("");
  console.groupCollapsed("\x1b[33m%s\x1b[0m", `${WARNING_EMOJI} WARNING LOGS`);
  logConsole(...msgs);
  console.groupEnd();
};

const error = (...msgs: unknown[]) => {
  console.log("");
  console.groupCollapsed("\x1b[31m%s\x1b[0m", `${ERROR_EMOJI} ERROR LOGS`);
  logConsole(...msgs);
  console.groupEnd();
};

const success = (...msgs: unknown[]) => {
  console.log("");
  console.groupCollapsed("\x1b[32m%s\x1b[0m", `${SUCCESS_EMOJI} SUCCESS LOGS`);
  logConsole(...msgs);
  console.groupEnd();
};

export const log = {
  info,
  warn,
  error,
  success,
};


export const logFunctionExportedForTesting = {
  logConsole,
};