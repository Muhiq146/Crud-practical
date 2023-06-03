import { useNavigate } from "react-router-dom";

// Components imports
import { SearchSvg } from "../../Helper/SvgComponents";
import CloseSvg from "../../Helper/SvgComponents/CloseSvg";

const Toolbar = ({
  params,
  setparams,
  filterBody,
  action,
  loading,
  addButton,
  path,
}) => {
  const navigate = useNavigate();

  const cancelSearch = () => {
    setparams({ ...params, search: "" });
    action("", params.limit, 1, params.sortBy, params.sort);
  };


  return (
    <div className="card-header border-0">
      <div className="card-title">
        <div className="d-flex align-items-center position-relative my-1">
          <span className="svg-icon svg-icon-1 position-absolute ms-6">
            <SearchSvg />
          </span>
          {params.search && (
            <span
              className="svg-icon svg-icon-1 position-absolute end-0 me-2 cursor-pointer"
              onClick={() => {
                cancelSearch();
              }}
            >
              <CloseSvg />
            </span>
          )}
          <input
            className="form-control form-control-solid w-250px ps-14 pe-10"
            placeholder={("SEARCH")}
            value={params.search}
            onChange={(e) => {
              if (!e.target.value) action("", params.limit, 1, params.sortBy, params.sort);
              if (!/^[?\#\$\%\&\/]+$/.test(e.target.value) && !loading) {
                action(e.target.value, params.limit, 1, params.sortBy, params.sort);
              }
            }}

          />
        </div>

      </div>
      <div className="card-toolbar">
        <div className="d-flex justify-content-end">
          {filterBody}

          <button
            className="btn btn-primary"
            onClick={() => {
              navigate(path);
            }}
          >
            {addButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
