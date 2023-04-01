import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {fetchReciepts} from './receiptsThunk';

export interface IRECEIPTS {
  receiptsLoader: 'idle' | 'pending' | 'succeeded' | 'failed';
  receipts: Array<recieptType>;
}

export interface recieptType {
  id: number;
  name: string;
  brand: string;
  price: number;
  description: string;
  image_url: string;
  status: string;
}

export const initialReceiptsState: IRECEIPTS = {
  receiptsLoader: 'idle',
  receipts: [],
};

export const receiptsSlice = createSlice({
  name: 'receipts',
  initialState: initialReceiptsState,
  reducers: {
    removeReceipts: (state, action: PayloadAction<number[]>) => {
      const filteredArray = state.receipts.filter(ele => {
        if (!action.payload.includes(ele.id)) {
          return ele;
        }
      });
      state.receipts = [...filteredArray];
    },
    addReceipt: (state, action: PayloadAction<recieptType>) => {
      state.receipts = [action.payload, ...state.receipts];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReciepts.pending, state => {
        state.receiptsLoader = 'pending';
      })
      .addCase(
        fetchReciepts.fulfilled,
        (state, action: PayloadAction<Array<recieptType>>) => {
          state.receiptsLoader = 'succeeded';
          state.receipts = [...action.payload];
        },
      )
      .addCase(fetchReciepts.rejected, state => {
        state.receiptsLoader = 'failed';
        state.receipts = [];
      });
  },
});

export const {removeReceipts, addReceipt} = receiptsSlice.actions;
export default receiptsSlice.reducer;
