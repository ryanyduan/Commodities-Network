'use strict';

const namespace = 'commoditiesnetwork';

async function Trade(tx) {  // eslint-disable-line no-unused-vars
  
    tx.newOwner.accountBalance -= tx.contract.finalPrice;
    
    // if buyer cannot afford, refund the money and reject the transaction
    if (newOwner.accountBalance < 0){
      newOwner.accountBalance += tx.contract.finalPrice;
      throw new Error("Rejecting trade: Buyer has insufficient funds");
    }
    
    const product = tx.contract.product;
    
    tx.contract.product.owner.products.remove(product);
    tx.contract.product.owner = tx.newOwner;
    tx.newOwner.products.push(product);
    
    const assetRegistry = await getAssetRegistry(`${namespace}.ProductType`);
    await assetRegistry.update(tx.contract.product);
    
    const growerRegistry = await getParticipantRegistry(`${namespace}.Grower`);
    const buyerRegistry = await getParticipantRegistry(`${namespace}.Buyer`);
    await growerRegistry.update(tx.contract.grower);
    await buyerRegistry.update(tx.contract.buyer);
    
      // Emit an event for the modified asset.
    let tradeEvent = getFactory().newEvent(namespace, "TradeNotification");
    tradeEvent.product = tx.contract.product;
    emit(event);
  }
  