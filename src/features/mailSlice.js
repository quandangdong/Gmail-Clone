import { createSlice } from '@reduxjs/toolkit';


export const mailSlice = createSlice({
  name: 'mail',
  initialState : {
    selectedMail : null,
    isSendMessageOpened : false,
  },
  
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.isSendMessageOpened = true;
    },
    closeSendMessage: (state) => {
      state.isSendMessageOpened = false;
    },
  },
});

export const { selectMail, openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectOpenMail = (state) => state.mail.selectedMail;
export const selectIsSendMessageOpened = (state) => state.mail.isSendMessageOpened;

export default mailSlice.reducer;
