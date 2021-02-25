import { createSlice, createAction } from '@reduxjs/toolkit';

const sliceName = 'userAddress';

const initialState = {
  userAddress: {
    isLoadingFetch: false,
    isLoadingPatch: false,
    error: null,
    data: {},
    returnBackToProfile: false,
  },
};

const userAddressSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    fetchUserAddressStart(state) {
      state.userAddress.isLoadingFetch = true;
      state.userAddress.error = null;
    },
    fetchUserAddressSuccess(state, action) {
      state.userAddress.data = action.payload;
      state.userAddress.error = null;
      state.userAddress.isLoadingFetch = false;
    },
    fetchUserAddressFailure(state, action) {
      state.userAddress.error = action.payload;
      state.userAddress.isLoadingFetch = false;
    },
    patchUserAddressStart(state) {
      state.userAddress.isLoading = true;
      state.userAddress.isLoadingPatch = true;
    },
    patchUserAddressSuccess(state) {
      state.userAddress.error = null;
      state.userAddress.isLoadingPatch = false;
    },
    patchUserAddressFailure(state) {
      state.userAddress.error = true;
      state.userAddress.isLoadingPatch = false;
    },
    resetState(state) {
      state.userAddress.error = false;
      state.userAddress.data = {};
      state.userAddress.isLoadingPatch = false;
    },
    updateSelectedState(state, action) {
      state.userAddress.data = action.payload;
      state.userAddress.error = null;
      state.userAddress.isLoadingFetch = false;
    },
    setReturnBackToProfile(state, action) {
      state.userAddress.returnBackToProfile = action.payload;
    },
  },
});

const { actions, reducer } = userAddressSlice;

export const {
  fetchUserAddressStart,
  fetchUserAddressSuccess,
  fetchUserAddressFailure,
  patchUserAddressStart,
  patchUserAddressSuccess,
  patchUserAddressFailure,
  updateSelectedState,
  resetState,
  setReturnBackToProfile,
} = actions;
export const fetchUserAddress = createAction(`${sliceName}/fetchUserAddress`);
export const patchUserAddress = createAction(`${sliceName}/patchUserAddress`);
export const clearUserAddress = createAction(`${sliceName}/clearUserAddress`);
export const selectedUserAddress = createAction(
  `${sliceName}/selectedUserAddress`,
);

export default reducer;
