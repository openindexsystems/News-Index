import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import React from "react";
import { useState } from "react";
import {
  ErrorBoundary,
  Facet,
  SearchProvider,
  SearchBox,
  Results,
  Result,
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
  alwaysSearchOnInitialLoad: false,
  apiConnector: connector,
  hasA11yNotifications: true,
  debug: false,
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
      body_content: { weight: 2 },
    },
    disjunctiveFacets: [""],
    facets: {},
  },
};

const Search = () => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <>
      <div className="news-index">
        <div>
          <div>
            <h3>Open</h3>
            <p>Index Systems</p>

            {!searchActive && (<>
              initial load
            </>)}

            {searchActive && (<>
              search payload
            </>)}
          </div>
        </div>
      </div>

      {/* <SearchProvider config={config}>
        <SearchBox />
      </SearchProvider> */}

      <SearchProvider config={config}>
        <WithSearch
          mapContextToProps={({ wasSearched }) => ({
            wasSearched,
          })}
        >
          {({ wasSearched }) => {
            return (
              <div className="es">
                  <ErrorBoundary>

                    <Layout
                      header={<SearchBox debounceLength={0} />}
                      // sideContent={<div></div>}
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
};

export default Search;