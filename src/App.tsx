import styles from "./initial.module.scss";
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import React from "react";
import {
  ErrorBoundary,
  Facet,
  SearchProvider,
  SearchBox,
  Results,
  PagingInfo,
  ResultsPerPage,
  Paging,
  WithSearch,
} from "@elastic/react-search-ui";
import {
  BooleanFacet,
  Layout,
  SingleLinksFacet,
  SingleSelectFacet,
} from "@elastic/react-search-ui-views";
import "@elastic/react-search-ui-views/lib/styles/styles.css";
import { SearchDriverOptions } from "@elastic/search-ui";

const connector = new AppSearchAPIConnector({
  searchKey: "search-ov7kb5qh27pae116uspivvzu",
  engineName: "newsdex-engine",
  endpointBase: "https://newsdex2.ent.us-east-2.aws.elastic-cloud.com",
});

const config: SearchDriverOptions = {
  alwaysSearchOnInitialLoad: true,
  apiConnector: connector,
  hasA11yNotifications: true,
  searchQuery: {
    result_fields: {
      title: {
        snippet: {
          fallback: true,
        },
      },
      last_crawled_at: { raw: {} },
      url: { raw: {} },
      body_content: { raw: {} },
    },
    search_fields: {
      title: { weight: 2 },
      body_content: { weight: 1 },
    },
    disjunctiveFacets: [""],
    facets: {},
  },
};

export default function App() {
  return (
    <>
      <div style={{width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div className={styles.logo}>
          <div className={styles["logo-3"]}>

              <h3>Open</h3>
              <p>Index Systems</p>

          </div>
        </div>
      </div>

      <SearchProvider config={config}>
        <WithSearch
          mapContextToProps={({ wasSearched }) => ({
            wasSearched,
          })}
        >
          {({ wasSearched }) => {
            return (
              <div className="App">
                <ErrorBoundary>
                  <Layout
                    header={<SearchBox debounceLength={0} />}
                    sideContent={<div></div>}
                    bodyContent={
                      <Results
                        titleField="title"
                        urlField="nps_link"
                        thumbnailField="image_url"
                        shouldTrackClickThrough
                      />
                    }
                    bodyHeader={
                      <React.Fragment>
                        {wasSearched && <PagingInfo />}
                        {wasSearched && <ResultsPerPage />}
                      </React.Fragment>
                    }
                    bodyFooter={<Paging />}
                  />
                </ErrorBoundary>
              </div>
            );
          }}
        </WithSearch>
      </SearchProvider>
    </>
  );
}
