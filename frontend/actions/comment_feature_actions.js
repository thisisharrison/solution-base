export const REPLY_FORM_OPEN = 'REPLY_FORM_OPEN';
export const REPLY_FORM_CLOSE = 'REPLY_FORM_CLOSE';
export const NEW_FORM_OPEN = 'NEW_FORM_OPEN';
export const NEW_FORM_CLOSE = 'NEW_FORM_CLOSE';

export const replyFormOpen = id => ({
  type: REPLY_FORM_OPEN,
  id
});

export const newFormOpen = () => ({
  type: NEW_FORM_OPEN,
});

export const replyFormClose = () => ({
  type: REPLY_FORM_CLOSE
});

export const newFormClose = () => ({
  type: NEW_FORM_CLOSE,
});