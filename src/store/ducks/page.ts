import produce from 'immer';

export const Types = {
  PAGE_SUCCESS: '@page/PAGE_SUCCESS',
  PAGE_FAILURE: '@page/PAGE_FAILURE',
};

export const INITIAL_STATE = {
  page: '',
  error: false,
};

export const Creators = {
  pageSuccess: (page: string) => ({
    type: Types.PAGE_SUCCESS,
    payload: { page },
  }),
  pageFailure: () => ({
    type: Types.PAGE_FAILURE,
  }),
};

const page = (state = INITIAL_STATE, { type, payload }: any) => {
  return produce(state, draft => {
    switch (type) {
      case Types.PAGE_SUCCESS: {
        draft.page = payload.page;
        draft.error = false;
        break;
      }
      case Types.PAGE_FAILURE: {
        draft.error = true;
        break;
      }
      default:
    }
  });
};

export default page;
