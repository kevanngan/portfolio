import React, { useState, useEffect } from 'react';

const BigBoyBurgers = ({ restBase }) => {

    const pageId = 62;
    const restPath = `${restBase}pages/${pageId}`;
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        const fetchPageData = async () => {
          const response = await fetch(restPath);
          if (response.ok) {
            const data = await response.json();
            setPageData(data);
          }
        };
    
      fetchPageData();
    }, [restPath]);

    return (
      <>
        {pageData && (
          <div className="bigboyburgers-wrapper">
            <h1>{pageData.title.rendered}</h1>
              <div className="bigboyburgers-content" dangerouslySetInnerHTML={{ __html: pageData.content.rendered }}></div>
          </div>
        )}
      </>
    );
};

export default BigBoyBurgers;