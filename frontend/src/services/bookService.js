import axios from "axios";
import constants from "../common/constants";

const apiPath = constants.BaseUrl + "/books";
const hintApiPath = apiPath + "/hints";

export const GetBooks = function (filter, keyword, pageNumber, booksPerPage) {
  const params = {
    filter: filter,
    keyword: keyword,
    pageNumber: pageNumber,
    pageSize: booksPerPage,
  };

  return axios.get(apiPath, { params: params }).then((response) => {
    return response.data;
  });
};

export const CreateBook = function (bookData) {
  return axios.post(apiPath, bookData).then((response) => {
    return response.data;
  });
};

export const UpdateBook = function (bookId, bookData) {
  return axios.put(apiPath + `/${bookId}`, bookData).then((response) => {
    return response.data;
  });
};

export const DeleteBook = function (bookId) {
  return axios.delete(apiPath + `/${bookId}`).then((response) => {
    return response.data;
  });
};

export const GetBookHints = function (filter, keyword) {
  var hintParams = { filter, keyword };
  return axios.get(hintApiPath, { params: hintParams }).then((response) => {
    return response.data;
  });
};
