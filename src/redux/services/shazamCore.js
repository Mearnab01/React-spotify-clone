import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
/* const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "8771c185c1msh7d31cea4b36605dp109edbjsnc9990b378c32",
    "x-rapidapi-host": "shazam-core.p.rapidapi.com",
  },
};

fetch(
  "https://shazam-core.p.rapidapi.com/v1/charts/world?country_code=IN",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err)); */

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        "8771c185c1msh7d31cea4b36605dp109edbjsnc9990b378c32"
      );
      headers.set("x-rapidapi-host", "shazam-core.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => "/charts/world?country_code=US",
    }),
  }),
});
export const { useGetTopChartsQuery } = shazamCoreApi;
