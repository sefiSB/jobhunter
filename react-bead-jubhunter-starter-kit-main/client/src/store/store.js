import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const initialState = {
  user: null,
  role: null,
  authenticate: {accessToken:null},
  loggedIn: false,
};

const BASE_URL = "http://localhost:3030";
const jobhunterApiSlice = createApi({
  reducerPath: "jobhunterApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (header, { getState }) => {
      header.set("Authorization", getState().states.authenticate.accessToken);
      return header;
    },
  }),
  tagTypes: ["users", "experiences", "jobs", "applicants"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: ({ id }) => `users/${id}`,
    }),
    getJobs: builder.query({
      query: () => `jobs`,
      providesTags: ["job"],
    }),
    getJob: builder.query({
      query: ({id}) => `jobs/${id}`,
      providesTags: ["job"],
    }),
    applicant4Jobs: builder.query({
      query: ({ jobId }) => `applicants?jobId=${jobId}`,
      providesTags: [""],
    }),
    jobs4Applicants: builder.query({
      query: ({ id }) => `applicants?userId=${id}`,
      providesTags: [""],
    }),
    getExperiences: builder.query({
      query: () => `experiences`,
      providesTags:['experience']
    }),
    addJob: builder.mutation({
      query: ({ data }) => ({
        url: "jobs",
        method: "POST",
        body: {
          company: data.company,
          position: data.position,
          description: data.description,
          salaryFrom: data.salaryFrom,
          salaryTo: data.salaryTo,
          type: data.type,
          city: data.city,
          homeOffice: data.homeOffice,
        },
      }),
      invalidatesTags: ["job"],
    }),
    applyJob: builder.mutation({
      query: ({ data }) => ({
        url: "applicants",
        method: "POST",
        body: {
          jobId: data.jobId,
        },
      }),
      invalidatesTags: [""],
    }),
    authenticate: builder.mutation({
      query: ({ data }) => {
        console.log(data);
        return {
          url: "authentication",
          method: "POST",
          body: {
            email: data.email,
            password: data.password,
            strategy: data.strategy,
          },
        };
      },
      invalidatesTags: [""],
    }),
    addUser: builder.mutation({
      query: ({ data }) => ({
        url: "users",
        method: "POST",
        body: {
          email: data.email,
          password: data.password,
          fullname: data.fullname,
          role: data.role,
        },
      }),
      invalidatesTags: ["user"],
    }),
    addExperience: builder.mutation({
      query: ({ data,token }) => {
        console.log(token)
        return (
        {
        url: "experiences",
        method: "POST",
        /* headers:{
          Authorization: token,
        }, */
        body: {
          company: data.company,
          title: data.title,
          interval: data.interval,
        }
      })},
      invalidatesTags: ["experience"],
    }),
    modifyExp: builder.mutation({
      query: ({ data, id }) => ({
        url: `experiences/${id}`,
        method: "PATCH",
        body: {
          company: data.company,
          title: data.title,
          interval: data.interval,
        },
      }),
      invalidatesTags: ["experience"],
    }),
    modifyJob: builder.mutation({
      query: ({ data, id }) => ({
        url: `jobs/${id}`,
        method: "PATCH",
        body: {
          company: data.company,
          position: data.position,
          description: data.description,
          salaryFrom: data.salaryFrom,
          salaryTo: data.salaryTo,
          type: data.type,
          city: data.city,
          homeOffice: data.homeOffice,
        },
      }),
      invalidatesTags: ["job"],
    }),
    deleteExp: builder.mutation({
      query: ({ deleteList }) =>
        deleteList.map((e) => ({
          url: `experiences/${e}`,
          method: "DELETE",
        })),
      invalidatesTags: ["experience"],
    }),
    deleteJob: builder.mutation({
      query: ({id}) => ({
        url: `jobs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["job"],
    }),
    deleteJobs: builder.mutation({
      query: () => ({
        url: "jobs",
        method: "DELETE",
      }),
      invalidatesTags: ["job"],
    }),
    deleteApply: builder.mutation({
      query: ({ id }) => ({
        url: `applicants?jobId=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [""],
    }),
  }),
});

const stateSlice = createSlice({
  name: "states",
  initialState,
  reducers: {
    changeUser(state, action) {
      state.user = action.payload;
    },
    changeRole(state, action) {
      state.role = action.payload;
    },
    changeAuth(state, action) {
      state.authenticate = action.payload;
    },
    changeLoggedIn(state) {
      state.loggedIn=!state.loggedIn
    },
  },
});

export const selectStateData = (state) => state;

export const store = configureStore({
  reducer: {
    jobhunterApi: jobhunterApiSlice.reducer,
    states: stateSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobhunterApiSlice.middleware),
});

export const { changeUser, changeRole, changeAuth, changeLoggedIn } =
  stateSlice.actions;

export const {
  useGetUserQuery,
  useGetJobsQuery,
  useGetJobQuery,
  useApplicant4JobsQuery,
  useJobs4ApplicantsQuery,
  useGetExperiencesQuery,
  useAddJobMutation,
  useApplyJobMutation,
  useAuthenticateMutation,
  useAddUserMutation,
  useAddExperienceMutation,
  useModifyExpMutation,
  useModifyJobMutation,
  useDeleteExpMutation,
  useDeleteJobMutation,
  useDeleteJobsMutation,
  useDeleteApplyMutation,
} = jobhunterApiSlice;
