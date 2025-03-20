import { logger } from '@papi/backend';

export async function activate() {
  logger.info('Reload Extension Host is activating!');
}

export async function deactivate() {
  logger.info('Reload Extension Host is deactivating!');
  return true;
}
