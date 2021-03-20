export const REPLY_FORM_OPEN = 'REPLY_FORM_OPEN';
export const REPLY_FORM_CLOSE = 'REPLY_FORM_CLOSE';
export const NEW_FORM_OPEN = 'NEW_FORM_OPEN';
export const NEW_FORM_CLOSE = 'NEW_FORM_CLOSE';
export const EDIT_FORM_OPEN = 'EDIT_FORM_OPEN';
export const EDIT_FORM_CLOSE = 'EDIT_FORM_CLOSE';

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

export const editFormOpen = comment => ({
  type: EDIT_FORM_OPEN,
  comment
});

export const editFormClose = () => ({
  type: EDIT_FORM_CLOSE
});
