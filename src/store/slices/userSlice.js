import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from '../../api/services/userService';

export const getMyProfile = createAsyncThunk('user/getMyProfile', async (_, { rejectWithValue }) => {
	try {
		const response = await userService.getUser();
		console.log("response", response);
		return response;
	} catch (error) {
		return rejectWithValue(error);
	}
});

const initialState = {
	user: null,
	loading: false,
	error: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getMyProfile.pending, (state) => {
			state.loading = true;
		})
		.addCase(getMyProfile.fulfilled, (state, action) => {
			state.loading = false;
			state.user = action.payload.data;
		})
		.addCase(getMyProfile.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload;
		});
	}
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
