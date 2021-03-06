/* eslint-disable camelcase,no-plusplus,max-len */
/* ###############################################################################
#
# EOS TestNet Monitor
#
# Created by http://CryptoLions.io
#
# Git Hub: https://github.com/CryptoLions/EOS-Testnet-monitor
#
###############################################################################  */
const { TransactionLastHourModelV2 } = require('../../db');
const { createLogger } = require('../../helpers');
const { ONE_HOUR } = require('../../constants');

const { info: logInfo, error: logError } = createLogger();

module.exports = async () => {
  try {
    await TransactionLastHourModelV2.remove({
      createdAt: { $lte: new Date(Date.now() - ONE_HOUR) },
    }).exec();
    logInfo('TransactionLastHour collection is cleaned');
  } catch (e) {
    logInfo('TransactionLastHour collection is not cleaned');
    logError(e);
  }
};
