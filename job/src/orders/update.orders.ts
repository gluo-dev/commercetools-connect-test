import { Order } from "@commercetools/platform-sdk";
import { createApiRoot } from "../client/create.client";
import { logger } from "../utils/logger.utils";
import { readConfiguration } from "../utils/config.utils";

const updateOrderSet = async ({order}: {order: Order}): Promise<Order> => {
  // Return all the orders
  const { body } = await createApiRoot().orders().withId({ID: order.id}).post({
    body: {
      version: order.version,
      actions: [
        {
          action: 'changeOrderState',
          orderState: readConfiguration().orderStatus
        }
      ]
    }
  }).execute()
  return body;
};

export const updateOrders = async ({orders}: {orders: Order[]}) => {
  for (let i = 0; i < orders.length; i++) {
    await updateOrderSet({order: orders[i]})
    logger.info(`Order ${orders[i].id} updated`);
  }
}