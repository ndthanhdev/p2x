import { PubSub } from "graphql-subscriptions";

export const pubsub = new PubSub();

export const EVENT_KIOSKS_CHANGED = "kiosksChanged";
export const EVENT_KIOSK_CHANGED = "kioskChanged";
export const EVENT_STATUS_ADDED = "statusAdded";