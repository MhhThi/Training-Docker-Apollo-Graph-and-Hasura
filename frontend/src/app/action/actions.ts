import { RootState } from "../reducer/reducer";

export const SET_PERPAGE = 'SET_PERPAGE';
export const SET_PAPE_COUNT = 'SET_PAPE_COUNT';
export const SET_OFFSET = 'SET_OFFSET';
export const SET_JOBS = 'SET_JOBS';


export function setOffset(offset: RootState['offset']) {
    return {
        type: SET_OFFSET,
        payload: offset
    }
}
