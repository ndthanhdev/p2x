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

// by default, this client will send queries to `/graphql` (relative to the URL of your app)
// const client = new ApolloClient();
const client = genereateApolloClient(GRAPHQL_ENDPOINT, wsClient);
const authClient = genereateApolloClient(GRAPHQL_AUTH_ENDPOINT, wsClient, true);
const adminClient = genereateApolloClient(GRAPHQL_ADMIN_ENDPOINT, wsClient, true);

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

function genereateApolloClient(endPoint: string, subscriptionClient: SubscriptionClient, isAuthorization: boolean = false): ApolloClient {
    const networkInterface = createNetworkInterface({
        uri: endPoint
    });
    if (isAuthorization) {
        networkInterface.use([{
            applyMiddleware(req, next) {
                if (!req.options.headers) {
                    req.options.headers = {};  // Create the header object if needed.
                }
                // get the authentication token from local storage if it exists
                req.options.headers.authorization = localStorage.getItem('token') || null;
                next();
            }
        }]);
    }

    // Extend the network interface with the WebSocket
    const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
        networkInterface,
        subscriptionClient
    );
    const client = new ApolloClient({
        networkInterface: networkInterfaceWithSubscriptions
    });
    return client;
}