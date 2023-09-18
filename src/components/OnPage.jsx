/* eslint-disable react/prop-types */
import { mapMetaData, filterData } from "../utils/map";
import { True, False } from "./SVG";

function OnPage({ data }) {
  const { meta } = data;
  const metaData = mapMetaData(meta);
  const filteredData = filterData(data);
  return (
    <div className="mb-4">
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4  g-4">
        {metaData
          .filter((i) => i.value)
          .map((item, index) => (
            <div key={index} className="col">
              <div className="card border mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-body text-center">
                  <h5 className="card-title">
                    {" "}
                    {item.value % 1 === 0
                      ? item.value.toFixed(0)
                      : item.value.toFixed(2)}
                  </h5>
                  <p className="card-text">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4  g-4">
        {filteredData.map((item, index) => (
          <div className="col" key={index}>
            <div
              className="card border mb-3 text-center"
              style={{ maxWidth: "18rem" }}
            >
              <span className="card-header fs-3">
                {item.value ? <False /> : <True />}
              </span>
              <div className="card-body">
                <p className="fw-bold">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desciption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OnPage;
