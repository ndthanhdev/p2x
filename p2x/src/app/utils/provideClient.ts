import { environment } from '../../environments/environment';
import { ApolloClient, createNetworkInterface } from "apollo-client"
import { SubscriptionClient, addGraphQLSubscriptions, } from 'subscriptions-transport-ws';
import { ClientMap } from 'apollo-angular/build/src/types';


const GRAPHQL_ENDPOINT = `${environment.endPoint}/graphql`;
const GRAPHQL_AUTH_ENDPOINT = `${environment.endPoint}/auth-graphql`;
const GRAPHQL_ADMIN_ENDPOINT = `${environment.endPoint}/admin-graphql`;


const wsClient = new SubscriptionClient(environment.subscriptionEndpoint, {
    reconnect: true,
});

const networkInterface = createNetworkInterface({
    uri: GRAPHQL_ENDPOINT
});
const authNetworkInterface = createNetworkInterface({
    uri: GRAPHQL_AUTH_ENDPOINT
});
const adminNetworkInterface = createNetworkInterface({
    uri: GRAPHQL_ADMIN_ENDPOINT
});

// Extend the network interface with the WebSocket
const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
    networkInterface,
    wsClient
);
const authNetworkInterfaceWithSubscriptions = addGraphQLSubscriptions(
    authNetworkInterface,
    wsClient
);
const adminNetworkInterfaceWithSubscriptions = addGraphQLSubscriptions(
    adminNetworkInterface,
    wsClient
);

// by default, this client will send queries to `/graphql` (relative to the URL of your app)
// const client = new ApolloClient();
const client = new ApolloClient({
    networkInterface: networkInterfaceWithSubscriptions
});
const authClient = new ApolloClient({
    networkInterface: authNetworkInterfaceWithSubscriptions
});
const adminClient = new ApolloClient({
    networkInterface: adminNetworkInterfaceWithSubscriptions
});

/**
 * provide ApolloClient
 */
export function provideClient(): ClientMap {
    return {
        default: client,
        auth: authClient,
        admin: adminClient
    };
}