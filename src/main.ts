import { logger } from '@papi/backend';

export async function activate() {
  logger.debug('Reload Extension Host is activating!');
}

export async function deactivate() {
  logger.debug('Reload Extension Host is deactivating!');
  return true;
}
