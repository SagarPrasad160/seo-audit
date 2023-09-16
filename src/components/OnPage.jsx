/* eslint-disable react/prop-types */
import { mapMetaData } from "../utils/map";

function OnPage({ meta }) {
  const metaData = mapMetaData(meta);
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
    </div>
  );
}

export default OnPage;
