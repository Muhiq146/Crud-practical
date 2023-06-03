import { useEffect, useState } from "react";

const Pagination = ({ action, totalPages, params, setparams }) => {
  const [displayPage, setdisplayPage] = useState(2);

  useEffect(() => {
    if (params.page <= 1) {
      setdisplayPage(2);
    } else if (params.page === totalPages) {
      setdisplayPage(params.page - 1);
    } else {
      setdisplayPage(params.page);
    }
  }, [params.page, totalPages]);

  const pageNumber = (page) => {
    if (page !== params.page) {
      if (page <= 1) {
        setdisplayPage(2);
      } else if (page === totalPages) {
        setdisplayPage(page - 1);
      } else {
        setdisplayPage(page);
      }
      action(params.search, params.limit, page, params.sortBy, params.sort);
    }
  };

  const changeLimit = (limit) => {
    setparams({ ...params, limit: Number(limit) });
    action(params.search, Number(limit), 1, params.sortBy, params.sort);
  };

  return (
    <>
      {totalPages >= 1 ? (
        <div className="row">
          {/* Limit */}
          <div className="mt-5 col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
            <select
              className="form-select form-select-solid w-100px cursor-pointer"
              onChange={(e) => changeLimit(e.target.value)}
              value={params.limit}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>

          {/* Pages */}
          <div className=" mt-5 col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
            <ul className="pagination">
              {/* Previous */}
              {params.page > 1 && (
                <li className="page-item previous">
                  <button
                    className="page-link cursor-pointer"
                    disabled={params.page <= 1}
                    onClick={() => {
                      pageNumber(params.page - 1);
                    }}
                  >
                    « {("PREVIOUS")}
                  </button>
                </li>
              )}

              {/* First */}
              {displayPage - 1 > 0 && (
                <li
                  className={`page-item${params.page === displayPage - 1 ? " active" : ""}`}
                  disabled={displayPage - 1 === params.page}
                  onClick={() => {
                    pageNumber(displayPage - 1);
                  }}
                >
                  <button className="page-link cursor-pointer">{displayPage - 1}</button>
                </li>
              )}

              {/* Middle */}
              {displayPage <= totalPages && (
                <li
                  className={`page-item${params.page === displayPage ? " active" : ""}`}
                  disabled={displayPage === params.page}
                  onClick={() => {
                    pageNumber(displayPage);
                  }}
                >
                  <button className="page-link cursor-pointer">{displayPage}</button>
                </li>
              )}

              {/* Last */}
              {displayPage + 1 <= totalPages && (
                <li
                  className={`page-item${params.page === displayPage + 1 ? " active" : ""}`}
                  disabled={displayPage + 1 === params.page}
                  onClick={() => {
                    pageNumber(displayPage + 1);
                  }}
                >
                  <button className="page-link cursor-pointer">{displayPage + 1}</button>
                </li>
              )}

              {/* Next */}
              {totalPages !== params.page && (
                <li className="page-item next">
                  <button
                    className="page-link cursor-pointer"
                    disabled={params.page >= totalPages}
                    onClick={() => {
                      pageNumber(params.page + 1);
                    }}
                  >
                    {("NEXT")} »
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Pagination;
