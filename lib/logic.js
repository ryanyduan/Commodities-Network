"use strict";

const namespace = "commoditiesnetwork";

/**
 * Add product
 * @param {commoditiesnetwork.NewProduct} tx Add new product
 * @transaction
 */

async function NewProduct(tx) {
  const participantRegistry = await getParticipantRegistry(
    `${namespace}.Business`
  );

  tx.product.owner.products.push(tx.product);
  await participantRegistry.update(tx.product.owner);
}

/**
 * Trade asset
 * @param {commoditiesnetwork.Trade} tx Trade asset
 * @transaction
 */
async function Trade(tx) {
  tx.newOwner.accountBalance -= tx.contract.finalPrice;

  // if buyer cannot afford, refund the money and reject the transaction
  if (newOwner.accountBalance < 0) {
    newOwner.accountBalance += tx.contract.finalPrice;
    throw new Error("Rejecting trade: Buyer has insufficient funds");
  }

  const product = tx.contract.product;

  tx.contract.product.owner.products.remove(product);
  tx.contract.product.owner = tx.newOwner;
  tx.newOwner.products.push(product);

  const assetRegistry = await getAssetRegistry(`${namespace}.Product`);
  await assetRegistry.update(tx.contract.product);

  const growerRegistry = await getParticipantRegistry(`${namespace}.Business`);
  const buyerRegistry = await getParticipantRegistry(`${namespace}.Business`);
  await growerRegistry.update(tx.contract.grower);
  await buyerRegistry.update(tx.contract.buyer);

  // Emit an event for the modified asset.
  let tradeEvent = getFactory().newEvent(namespace, "TradeNotification");
  tradeEvent.product = tx.contract.product;
  emit(event);
}
