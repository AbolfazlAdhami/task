/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://6797aa2bc2c861de0c6d964c.mockapi.io/domain";

export const fetchDomains = createAsyncThunk("domain/fetchDomains", async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
});

export const addDomain = createAsyncThunk("domain/addDomain", async (domain: any) => {
  const res = await axios.post(BASE_URL, domain);
  return res.data;
});

export const updateDomain = createAsyncThunk("domain/updateDomain", async ({ _id, data }: { _id: string; data: any }) => {
  const res = await axios.put(`${BASE_URL}/${_id}`, data);
  console.log(res);
  return res.data;
});

export const deleteDomain = createAsyncThunk("domain/deleteDomain", async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
  return id;
});

const domainSlice = createSlice({
  name: "domain",
  initialState: {
    all: [],
    filtered: [],
    status: "idle", // 'loading' | 'succeeded' | 'failed'
    error: null,
    searchText: "",
    sortOrder: "asc",
  },
  reducers: {
    setSearchText(state, action) {
      state.searchText = action.payload;
      applyFilterAndSort(state);
    },
    setSortOrder(state, action) {
      state.sortOrder = action.payload;
      applyFilterAndSort(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDomains.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDomains.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.all = action.payload;
        applyFilterAndSort(state);
      })
      .addCase(fetchDomains.rejected, (state: any, action: any) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addDomain.fulfilled, (state: any, action: any) => {
        state.all.push(action.payload);
        applyFilterAndSort(state);
      })
      .addCase(updateDomain.fulfilled, (state: any, action: any) => {
        const index = state.all.findIndex((d: any) => d._id === action.payload._id);
        if (index !== -1) state.all[index] = action.payload;
        applyFilterAndSort(state);
      })
      .addCase(deleteDomain.fulfilled, (state: any, action: any) => {
        state.all = state.all.filter((d: any) => d._id !== action.payload);
        applyFilterAndSort(state);
      });
  },
});

function applyFilterAndSort(state: any) {
  const search = state.searchText.toLowerCase();
  const sorted = [...state.all]
    .filter((d) => d.domain.toLowerCase().includes(search))
    .sort((a, b) => (state.sortOrder === "asc" ? a.domain.localeCompare(b.domain) : b.domain.localeCompare(a.domain)));

  state.filtered = sorted;
}
export const { setSearchText, setSortOrder } = domainSlice.actions;
export default domainSlice.reducer;
