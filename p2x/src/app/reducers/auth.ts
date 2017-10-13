import * as fromAction from "../actions/auth";
import { IAccount } from "../models/account";

export interface State {
    account: IAccount;
};

export const initialState: State = {
    account: undefined
};

export function reducer(state = initialState, action: fromAction.Actions): State {
    switch (action.type) {
        default:
            return state;
    }
};

export const getAccount = (state: State) => state.account;