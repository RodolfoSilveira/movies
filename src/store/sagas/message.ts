import { toast } from 'react-toastify';

export function* messageSuccess({ payload }: any) {
  yield toast.success(payload.message);
}

export function* messageError({ payload }: any) {
  yield toast.error(payload.message);
}
