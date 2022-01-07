import { SET_JOBS, SET_OFFSET } from "../action/actions";
import { Job } from "../jobType"
export const initialStare = {
    allJobs: [],
    jobs: [],
    value: '',
    perpage: 10,
    pagecount: 0,
    offset: 0,
}
export interface RootState {
    jobs: Job[],
    allJobs: Job[],
    value: string,
    perpage: number;
    pagecount: number;
    offset: number;
}

export function jobsReducer(state: RootState = initialStare, action: any) {
    switch (action.type) {
        case SET_OFFSET:
            const fromIndex = action.payload * state.perpage;
            const toIndex = action.payload * state.perpage + state.perpage;
            const jobs = state.allJobs.slice(fromIndex, toIndex)
            return {
                ...state,
                offset: action.payload,
                jobs: jobs || []
            }
        
        default:
            return state;
    }
}