import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'app/store'

interface ProjectHeaderState {
  isEditProjectInfoModalOpen: boolean
}

const initialState: ProjectHeaderState = {
  isEditProjectInfoModalOpen: false,
}

const projectHeaderSlice = createSlice({
  name: 'projectHeader',
  initialState,
  reducers: {
    setIsEditProjectInfoModalOpen(state, action: PayloadAction<boolean>) {
      state.isEditProjectInfoModalOpen = action.payload
    },
  },
})

export const { setIsEditProjectInfoModalOpen } = projectHeaderSlice.actions

export const selectIsEditProjectInfoModalOpen = (state: RootState) =>
  state.projectHeader.isEditProjectInfoModalOpen

export default projectHeaderSlice.reducer
