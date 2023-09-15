import { useContext } from "react";
import { AuditContext } from "../context/AuditContext";

import Spinner from "./Spinner";

function PerformanceBars() {
  const { lightHouseResults, onPageResults, loading } =
    useContext(AuditContext);
  const onpage_score = onPageResults.onpage_score;

  const { finalUrl, categories } = lightHouseResults;

  if (loading) {
    return <Spinner />;
  }

  if (categories) {
    const { performance } = categories;

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
        <div className="">
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
      </div>
    );
  }
}

export default PerformanceBars;
