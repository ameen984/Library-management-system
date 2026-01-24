import { apislice } from "./apiSlice";

export const bookApi = apislice.injectEndpoints({
  endpoints: (builder) => ({
    /* =========================
       GET ALL BOOKS (with filters)
    ========================== */
    getBooks: builder.query({
      query: ({ category = "", search = "" ,limit=10} = {}) => {
        const params = new URLSearchParams();

        if (category) params.append("category", category);
        if (search) params.append("search", search);
        if (limit) params.append("limit", limit); // 

        const qs = params.toString();
        return qs ? `/books?${qs}` : "/books";
      },

      /* =========================
         TAGS FOR CACHE CONTROL
      ========================== */
      providesTags: (result) =>
        result?.result
          ? [
              // Represents the whole list
              { type: "BOOKS", id: "LIST" },

              // Represents each individual book
              ...result.result.map((book) => ({
                type: "BOOKS",
                id: book._id,
              })),
            ]
          : [{ type: "BOOKS", id: "LIST" }],
    }),

    /* =========================
       GET SINGLE BOOK BY ID
    ========================== */
    getBookById: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: (result, error, id) => [
        { type: "BOOKS", id },
      ],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
} = bookApi;
