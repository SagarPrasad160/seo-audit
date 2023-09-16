import { useContext } from "react";
import { AuditContext } from "../context/AuditContext";

import Spinner from "./Spinner";

function PerformanceBars() {
  const { lightHouseResults, onPageResults, loading, error } =
    useContext(AuditContext);
  const onpage_score = onPageResults.onpage_score;

  const { finalUrl, categories } = lightHouseResults;

  if (loading) {
    return <Spinner />;
  }

  if (!loading && error) {
    return (
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <h1 className="display-1 fw-bold">500</h1>
          <p className="fs-3">
            {" "}
            <span className="text-danger">Oops!</span>
          </p>
          <p className="lead">Something went wrong.</p>
        </div>
      </div>
    );
  }

  if (categories) {
    const {
      performance,
      accessibility,
      seo,
      "best-practices": bp,
    } = categories;

    console.log(performance);
    return (
      <div className="w-75 mx-auto">
        <div className="mb-4">
          <h1 className="mb-3">Results for {finalUrl}</h1>
          <h2>On-Page Score: {Math.round(onpage_score)}</h2>
          <div
            className="progress"
            role="progressbar"
            aria-label="Success example"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar bg-success"
              style={{ width: `${Math.floor(onpage_score)}%` }}
            >
              {onpage_score}
            </div>
          </div>
        </div>
        <div className="mb-5">
          <h2>
            {performance.title}: {Math.floor(performance.score * 100)}
          </h2>
          <div
            className="progress"
            role="progressbar"
            aria-label="Success example"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar bg-success"
              style={{ width: `${Math.floor(performance.score * 100)}%` }}
            >
              {Math.floor(performance.score * 100)}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar bg-success"
                style={{ width: `${Math.floor(accessibility.score * 100)}%` }}
              >
                {Math.floor(accessibility.score * 100)}
              </div>
            </div>
            <h2>
              {accessibility.title}:{accessibility.score * 100}
            </h2>
          </div>

          <div className="col-md-4">
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar bg-success"
                style={{ width: `${Math.floor(seo.score * 100)}%` }}
              >
                {Math.floor(seo.score * 100)}
              </div>
            </div>
            <h2>
              {seo.title}: {seo.score * 100}
            </h2>
          </div>

          <div className="col-md-4">
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar bg-success"
                style={{ width: `${Math.floor(bp.score * 100)}%` }}
              >
                {Math.floor(bp.score * 100)}
              </div>
            </div>
            <h2>
              {bp.title}: {bp.score * 100}
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default PerformanceBars;
