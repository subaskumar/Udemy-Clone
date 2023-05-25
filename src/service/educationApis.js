import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import REACT_APP_BASE_URL from "../../.env"

export const educationApi = createApi({
  reducerPath: 'getApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    
    getAllCategory: builder.query({
      query: ({selectCategory}) => `course/api/client/v1/course-category/${selectCategory? "?title="+selectCategory : ""}`,
    }),

    getAllSubCategory: builder.query({
      query: ({cid, sid}) => `course/api/client/v1/course-sub-category/${sid? "?id="+sid : "?category="+cid}`,
    }),

    getAllCourses: builder.query({
      query: ({limit, offset, ratings, categories, languages}) => ({
        url:  `course/api/client/v1/course-all-courses/?limit=${limit}&offset=${offset}&category=${categories}&languages=${languages}`,
        method: 'GET'
      }),
    }),

    // getSingleCategory: builder.query({
    //   query: (slug) => `course/api/client/v1/course-category/${slug}`,
    // }),

    // AddCategory: builder.mutation({
    //   query: (body) => ({
    //     url: 'course/api/client/v1/course-category/',
    //     method: 'POST',
    //     body
    //   }),
    // }),

    // UpdateCategory: builder.query({
    //   query: ({slug, ...body}) => ({
    //     url: `course/api/client/v1/course-category/${slug}`,
    //     method: 'PUT',
    //     body: body
    //   })
    // }),

    // DeleteCategory: builder.query({
    //   query: (slug) => ({
    //     url: `course/api/client/v1/course-category/${slug}`,
    //     method: 'DELETE',
    //   })
    // }),

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCategoryQuery, useGetAllSubCategoryQuery, useGetAllCoursesQuery } = educationApi