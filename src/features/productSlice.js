import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";


// const productEntity = createEntityAdapter({

// });

const productSlice = createSlice({
    name: "product",
    initialState: {
        title: "Pororo",
        price: "5000"
    },
    reducers: {
        update: (state, action) => {
            state.title = action.payload.title;
            state.price = action.payload.price;
        }
    }
})

// export const productSelectors = productEntity.getSelectors(state => state.product);
export const { update } = productSlice.actions;
export default productSlice.reducer;