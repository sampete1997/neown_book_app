import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBooksData, setPagination, setFilters } from "../redux/bookRecommendationSlice";
import { setToast, setLoading } from "../redux/commonSlice";
import BookRow from "../components/BookRow"; // For rendering each book's data
import { recommendationList } from "../services/books/service.books";
import { Button, Pagination } from "@mui/material";
import { statusCode } from "../util/constants";
import NoResultFound from "../components/NoResultFound";



function BooksRecommendation() {
    const dispatch = useDispatch();
    const { booksData, filters, pagination } = useSelector(
        (state) => state.booksRecommend
    );
    const [isSearch, setSearch] = useState(false);

    useEffect(() => {
        const fetchBooks = async () => {
            dispatch(setLoading(true));
            try {
                const response = await recommendationList({
                    ...filters,
                    page: pagination.page,
                });

                if (statusCode.includes(response?.status)) {

                    dispatch(
                        setPagination({
                            ...pagination,
                            pageCount: response?.response?.pages,
                        })
                    );
                    dispatch(setBooksData(response?.response?.data || []));
                    dispatch(setLoading(false));
                } else {
                    dispatch(setLoading(false));
                    dispatch(
                        setToast({
                            isError: true,
                            message: response?.response[0] || "something went wrong",
                        })
                    );
                    throw new Error("something went wrong");
                }

            } catch (error) {
                console.error(error);
            }
        };
        fetchBooks();
    }, [isSearch, pagination.page]);

    const handleSearchChange = (e, key) => {
        dispatch(setFilters({ ...filters, [key]: e.target.value }));
    };


    const handlePageChange = (e, newPage) => {
        console.log('page ---', newPage);
        dispatch(setPagination({
            ...pagination, page: newPage
        }));
    };

    const handleSearch = () => {
        setSearch(!isSearch);
    };

    const handleclearFilters = () => {
        dispatch(setFilters({
            query: '',
        }));
        setSearch(!isSearch);
        window.location.reload()
    }

    return (
        <div className="p-2">
            <div className="m-1 flex justify-between bg-blue-600 py-4 rounded-md">

                <input
                    type="text"
                    placeholder="Search your query"
                    value={filters.query}
                    onChange={(e) => handleSearchChange(e, "query")}
                    className="w-[50%] mx-2 rounded-md px-1 focus:outline-none"
                />
                <div className="flex justify-end">

                    <Button
                        onClick={handleSearch}
                        sx={{ backgroundColor: "white", color: "blue", marginLeft: "5px", marginRight: "5px" }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={handleclearFilters}
                        sx={{ backgroundColor: "snow", color: "blue", marginLeft: "5px", marginRight: "5px" }}
                    >
                        Clear Filters
                    </Button>
                </div>
            </div>

            {booksData?.length > 0 ? (
                <>
                    <div className="flex flex-row flex-wrap justify-start w-[100%] my-3 py-5 pl-5 rounded-md bg-blue-600">
                        {booksData?.map((book) => (
                            <BookRow key={book._id} book={book} />
                        ))}
                    </div>

                    <div className="my-2">
                        <Pagination
                            count={pagination?.pageCount}
                            page={pagination?.page}
                            onChange={handlePageChange}
                            color="primary"
                        />
                    </div>
                </>
            ) : (
                <NoResultFound />
            )}
        </div>
    );
}

export default BooksRecommendation;
