import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectIsLoading = createSelector(
  [selectUser],
  (user) => user.isLoading
);

export const selectError = createSelector([selectUser], (user) => user.error);
