import { useState, useContext } from "react";

import { AuditContext } from "../context/AuditContext";

import {
  createOnPageAPITask,
  waitForOnPageAPITaskCompletion,
} from "../apis/OnPage/getTask";

import {
  createLighthouseTask,
  waitForLighthouseTaskCompletion,
} from "../apis/Lighthouse/getTask";

function AuditForm() {
  const [url, setURL] = useState("");

  const { setLighthouseResults, setOnPageResults, setLoading, setError } =
    useContext(AuditContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate the URL
    var urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    if (urlPattern.test(url)) {
      setLoading(true);
      try {
        // OnPage API
        const domainName = url.replace(/(^\w+:|^)\/\//, "");
        const onPageTaskId = await createOnPageAPITask(domainName);
        const onPageResults = await waitForOnPageAPITaskCompletion(
          onPageTaskId
        );

        const items = onPageResults[0].items;
        setOnPageResults({
          onpage_score: items[0].onpage_score,
          meta: items[0].meta,
        });

        // Lighthouse Task API
        const lightHouseTaskId = await createLighthouseTask(
          `https://${domainName}`,
          true
        );
        const lightHouseResults = await waitForLighthouseTaskCompletion(
          lightHouseTaskId
        );

        const lightHouseData = {
          audits: lightHouseResults[0].audits,
          categories: lightHouseResults[0].categories,
          fetchTime: lightHouseResults[0].fetchTime,
          finalUrl: decodeURIComponent(lightHouseResults[0].finalUrl),
          loading: false,
        };
        setLighthouseResults(lightHouseData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
        console.log(error);
      }
    } else {
      alert("Please enter a valid URL!");
      return;
    }
  };

  return (
    <form
      className="d-flex flex-wrap justify-content-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={url}
        className="form-control m-2 w-50"
        onChange={({ target }) => setURL(target.value)}
        placeholder="Website URL"
      />
      <button type="submit" className="btn btn-danger text-white fw-bold m-2">
        Get a free SEO Audit Report
      </button>
    </form>
  );
}

export default AuditForm;
