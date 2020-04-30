import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { stringify } from "query-string";
import Feed from "../../components/Feed/Feed";
import Pagination from "../../components/Pagination/Pagination";
import { getPaginator, limit } from "../../utils";
import PopularTags from "../../components/PopularTags/PopularTags";
import Loader from "../UI/Loader/Loader";
import ErrorMessage from "../UI/ErrorMessage/ErrorMessage";
import FeedToggler from "../../components/FeedToggler/FeedToggler";

const TagFeed = ({ location, match }) => {
  const tagName = match.params.slug;
  const { offset, currentPage } = getPaginator(location.search);
  const url = match.url;
  const stringifiedParams = stringify({
    limit,
    offset,
    tag: tagName
  });
  const apiUrl = `/articles?${stringifiedParams}`;
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);

  useEffect(() => {
    doFetch();
  }, [doFetch, currentPage, tagName]);

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1>Medium clone</h1>
          <p>A place to share knowledge</p>
        </div>
      </div>
      <div className="container page">
        <div className="row ">
          <div className="col-md-9">
            <FeedToggler tagName={tagName} />

            {isLoading ? <Loader /> : null}
            {error && <ErrorMessage />}
            {!isLoading && response && (
              <>
                <Feed articles={response.articles} />
                <Pagination
                  total={response.articlesCount}
                  limit={limit}
                  url={url}
                  currentPage={currentPage}
                />
              </>
            )}
          </div>
          <div className="col-md-3">
            <PopularTags />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagFeed;
