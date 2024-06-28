import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProjectData {
  id: number;
  name: string;
  project: string;
  domain: string;
  backendTech: string;
}

interface UserState {
  projectData: ProjectData[];
}

const initialState: UserState = {
  projectData: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<ProjectData>) => {
      state.projectData.push(action.payload);
    },
  },
});

export const { addProject } = userSlice.actions;
export default userSlice.reducer;
