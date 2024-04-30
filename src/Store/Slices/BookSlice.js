import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getbooks = createAsyncThunk('book/getbooks', async (_, thunkApi) => {
    try {
        const res = await fetch('  http://localhost:3000/book');
        const data = await res.json();
        return data;
    }
    catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})

// inserook
export const inserbook = createAsyncThunk('book/insertbook', async (bookdata, thunkApi) => {
    const { getState } = thunkApi;
    try {
        bookdata.username = getState().auth.name;
        const res = await fetch('http://localhost:3000/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookdata)
        })
        const data = await res.json();
        return data;
    }
    catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

// Delete 
export const deletebook = createAsyncThunk('book/deletebook', async (id, thunkApi) => {

    try {
        await fetch(`http://localhost:3000/book/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })

        return id
    }
    catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const BookSlice = createSlice({
    name: "book",
    initialState: { book: null, isLoading: false, error: null },
    reducers: {},
    extraReducers: {
        [getbooks.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getbooks.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.book = action.payload;
            state.error = null;
        },
        [getbooks.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        // Inset
        [inserbook.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [inserbook.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.book.push(action.payload);
            state.error = null;
        },
        [inserbook.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        // Delete
        [deletebook.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [deletebook.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.book = state.book.filter((ele) => ele.id !== action.payload)
            state.error = null;
        },
        [deletebook.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});
export default BookSlice.reducer;