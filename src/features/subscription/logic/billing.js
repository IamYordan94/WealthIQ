import { getItem, setItem, KEYS } from '../../../core/storage';

let initialized = false;

export async function initialize() {
  initialized = true;
  return true;
}

export async function hasSubscription() {
  const value = await getItem(KEYS.IS_PREMIUM);
  return value === 'true';
}

export async function getProduct() {
  return { productId: 'wealthiq_full_unlock', localizedPrice: '€4.99', price: 4.99, currency: 'EUR' };
}

export async function purchaseFullUnlock() {
  await unlockPremium();
  return { success: true };
}

export async function unlockPremium() {
  await setItem(KEYS.IS_PREMIUM, 'true');
  return true;
}

export async function restorePurchases() {
  const isPremium = await hasSubscription();
  return { success: true, restored: isPremium };
}

export function cleanup() {
  initialized = false;
}
