export const START_INDEX_LOADING = 'START_INDEX_LOADING';
export const STOP_INDEX_LOADING = 'STOP_INDEX_LOADING';
export const START_ITEM_LOADING = 'START_ITEM_LOADING';
export const STOP_ITEM_LOADING = 'STOP_ITEM_LOADING';

export const startIndexLoading = () => ({
  type: START_INDEX_LOADING,
});

export const stopIndexLoading = () => ({
  type: STOP_INDEX_LOADING,
});

export const startItemLoading = () => ({
  type: START_ITEM_LOADING,
});

export const stopItemLoading = () => ({
  type: STOP_ITEM_LOADING,
});
