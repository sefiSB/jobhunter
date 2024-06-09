import { configureStore } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isEmployer: null,
};

const BASE_URL = "http://localhost:3030";
const jobhunterApiSlice = createApi({
  reducerPath: "jobhunterApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    tagTypes: ["users", "experiences", "jobs", "applicants"],
    getUser: builder.query({
      query: ({ id }) => `users/${id}`,
      providesTags: ["user"],
    }),
    getJobs: builder.query({
      query: () => `jobs`,
      providesTags: ["job"],
    }),
    applicant4jobs: builder.query({
      query: ({ id }) => `applicants?jobId=${id}`,
      providesTags: [""],
    }),
    jobs4applicants: builder.query({
      query: ({ id }) => `applicants?userId=${id}`,
      providesTags: [""],
    }),
    getExperiences: builder.query({
      query: ({ id }) => `experiences/${id}`,
      providesTags: ["experience"],
    }),
    addJob: builder.mutation({
      query: ({ data, id }) => {
        return {
          url: "users",
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
        };
      },
      invalidatesTags: ["job"],
    }),
    applyJob: builder.mutation({
      query: ({ data, id }) => {
        return {
          url: "applicants",
          method: "POST",
          body: {
            jobId: data.jobId,
          },
        };
      },
      invalidatesTags: [""],
    }),

    addUser: builder.mutation({
      query: ({ data, id }) => {
        return {
          url: "users",
          method: "POST",
          body: {
            email: data.email,
            password: data.password,
            fullname: data.fullname,
            role: data.role,
          },
        };
      },
      invalidatesTags: ["user"],
    }),

    addExperience: builder.mutation({
      query: ({ dataList, id }) => {
        dataList.map((data) => {
          return {
            url: "experiences",
            method: "POST",
            body: {
              company: data.company,
              title: data.title,
              interval: data.interval,
            },
          };
        });
      },
      invalidatesTags: ["experience"],
    }),
    modifyExp: builder.mutation({
      query: ({ data, id }) => {
        return {
          url: `experiences/${id}`,
          method: "PATCH",
          body: {
            company: data.company,
            title: data.title,
            interval: data.interval,
          },
        };
      },
      invalidatesTags: ["experience"],
    }),
    modifyJob: builder.mutation({
      query: ({ data, id }) => {
        return {
          url: `experiences/${id}`,
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
        };
      },
      invalidatesTags: ["job"],
    }),
    deleteExp: builder.mutation({
      query: ({ deleteList }) => {
        deleteList.map((e) => {
          return {
            url: `experiences/${e}`,
            method: "DELETE",
          };
        });
      },
      invalidatesTags: ["experience"],
    }),
    deleteJobs: builder.mutation({
      query: ({ deleteList }) => {
        deleteList.map((e) => {
          return {
            url: `jobs/${e}`,
            method: "DELETE",
          };
        });
      },
      invalidatesTags: ["job"],
    }),
    deleteApply: builder.mutation({
      query: ({ id }) => {
        return {
          url: `applicants?jobId=${id}`,
          method: "DELETE",
        };
      },
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
    changeIsEmployer(state, action) {
      state.isEmployer = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    jobhunterApi: jobhunterApiSlice.reducer,
    states: stateSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobhunterApiSlice.middleware),
});

export const { changeUser, changeIsEmployer } = stateSlice.actions;

export const {
  useGetUserQuery,
  useGetJobsQuery,
  useApplicants4JobsQuery,
  useJobs4ApplicantsQuery,
  useGetExperiencesQuery,
  useAddJobMutation,
  useApplyJobMutation,
  useAddUserMutation,
  useAddExerciseMutation,
  useModifyExpMutation,
  useModifyJobMutation,
  useDeleteExpMutation,
  useDeleteJobsMutation,
  useDeleteApplyMutation,
} = resultsApiSlice;
