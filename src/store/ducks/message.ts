import produce from 'immer';

export const Types = {
  MESSAGE_SUCCESS: '@message/MESSAGE_SUCCESS',
  MESSAGE_FAILURE: '@message/MESSAGE_FAILURE',
};

export const INITIAL_STATE = {
  message: '',
  error: false,
};

export const Creators = {
  messageSuccess: (message: string) => ({
    type: Types.MESSAGE_SUCCESS,
    payload: { message },
  }),
  messageFailure: (message: string) => ({
    type: Types.MESSAGE_FAILURE,
    payload: { message },
  }),
};

const message = (state = INITIAL_STATE, { type, payload }: any) => {
  return produce(state, draft => {
    switch (type) {
      case Types.MESSAGE_SUCCESS: {
        draft.message = payload.message;
        draft.error = false;
        break;
      }
      case Types.MESSAGE_FAILURE: {
        draft.message = payload.message;
        draft.error = true;
        break;
      }
      default:
    }
  });
};

export default message;
