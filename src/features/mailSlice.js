import { createSlice } from '@reduxjs/toolkit';


export const mailSlice = createSlice({
  name: 'mail',
  initialState : {
    isSendMessageOpened : false,
  },
  
  reducers: {
    openSendMessage: (state) => {
      state.isSendMessageOpened =  true;
    },
    closeSendMessage: (state) => {
      state.isSendMessageOpened = false;
    },
  },
});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectIsSendMessageOpened = (state) => state.mail.isSendMessageOpened;

export default mailSlice.reducer;
