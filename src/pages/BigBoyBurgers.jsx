import React, { useState, useEffect } from 'react';

const BigBoyBurgers = ({ restBase }) => {
    const pageId = 62;
    const restPath = `${restBase}pages/${pageId}`;
    const [pageData, setPageData] = useState(null);
    const [images, setImages] = useState([]);

    useEffect(() => {
        
        const fetchPageData = async () => {
            const response = await fetch(restPath);
            if (response.ok) {
                const data = await response.json();
                setPageData(data);
                if (data.acf && Array.isArray(data.acf.stack_icons)) {
                    fetchImages(data.acf.stack_icons);
                }
            }
        };
        
        const fetchImages = async (imageIds) => {
            const imageDetails = await Promise.all(imageIds.map(id => 
                fetch(`${restBase}media/${id}`).then(response => response.json())
            ));
            setImages(imageDetails);
        };

        fetchPageData();
    }, [restPath]);

    return (
        <>
            {pageData && (
                <div className="bigboyburgers-wrapper">
                    <h1>{pageData.title.rendered}</h1>
                    <p>{pageData.acf.project_description}</p>
                    <h3>{typeof pageData.acf.stack_and_tech === 'string' ? pageData.acf.stack_and_tech : null}</h3>
                    <div className="images-container">
                        {images.map((img, index) => (
                            <img key={img.id || index} src={img.source_url} alt={img.alt_text || 'Technology Icon'} />
                        ))}
                    </div>
                    <div>
                        {pageData.acf.github && <a href={pageData.acf.github.url} target="_blank" rel="noopener noreferrer">View GitHub</a>}
                    </div>
                    <div>
                        {pageData.acf.live && <a href={pageData.acf.live.url} target="_blank" rel="noopener noreferrer">View Live</a>}
                    </div>
                    <div className="bigboyburgers-content" dangerouslySetInnerHTML={{ __html: pageData.content.rendered }}></div>
                </div>
            )}
        </>
    );
};

export default BigBoyBurgers;