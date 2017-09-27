import { IKiosk } from "../../../models/kiosk";
import { ISafeStatus } from "../../../models/ISafeStatus";
import * as fromAction from "../actions/overview";

export interface State {
    kiosk: IKiosk;
    safeStatus: ISafeStatus;
}

export const initialState: State = {
    kiosk: { ICNo: "" },
    safeStatus: { IdNo: 0, Lock: false }
};

export function reducer(state = initialState, action: fromAction.Actions): State {
    switch (action.type) {
        case fromAction.LOAD_SUCCESS:
            const safeStatuss = action.payload.kiosk.LatestStatus.SafeStatuss.filter((safeStatus) => safeStatus.IdNo == action.payload.iDNo);
            return { ...state, kiosk: action.payload.kiosk, safeStatus: safeStatuss[0] };
        default:
            return state;
    }
}

export const getKiosk = (state: State) => state.kiosk;
export const getSafeStatus = (state: State) => state.safeStatus;