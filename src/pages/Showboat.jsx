import React, { useState, useEffect } from 'react';
import Dropdown from '../components/Dropdown';

const Showboat = ({ restBase }) => {
    const pageId = 64; 
    const restPath = `${restBase}pages/${pageId}`;
    const [pageData, setPageData] = useState(null);
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath);
            const data = await response.json();
            setPageData(data);
            if (data.acf && Array.isArray(data.acf.stack_icons)) {
                const imageDetails = await Promise.all(data.acf.stack_icons.map(id => 
                    fetch(`${restBase}media/${id}`).then(res => res.json())
                ));
                setImages(imageDetails);
            }
        };

        fetchData();
    }, [restPath]);

    if (!pageData) {
        return null;
    }

    return (
        <article className="showboat-wrapper">
            <h1>{pageData.title.rendered}</h1>
            <p>{pageData.acf.project_description}</p>
            {pageData.acf.stack_and_tech && <h3>{pageData.acf.stack_and_tech}</h3>}
            <div className="images-container">
                {images.map((img, index) => (
                    <img key={img.id || index} src={img.source_url} alt={img.alt_text || 'Stack Icon'} />
                ))}
            </div>
            {pageData.acf.github && (
                <a href={pageData.acf.github.url} target="_blank" rel="noopener noreferrer">View GitHub</a>
            )}
            {pageData.acf.live && (
                <a href={pageData.acf.live.url} target="_blank" rel="noopener noreferrer">View Live</a>
            )}
            <div className="showboat-content" dangerouslySetInnerHTML={{ __html: pageData.content.rendered }}></div>

            <section className="project-details">
                <Dropdown 
                    title="Challenges Faced" 
                    content={<p>Describe the challenges you faced during the project.</p>} 
                />
                <Dropdown 
                    title="Solutions Implemented" 
                    content={<p>Detail the solutions you implemented to overcome the challenges.</p>} 
                />
                <Dropdown 
                    title="What I Learned" 
                    content={<p>Reflect on what you learned from this project.</p>} 
                />
                <Dropdown 
                    title="Results" 
                    content={<p>Summarize the results and success metrics of the project.</p>} 
                />
                <Dropdown 
                    title="Future Improvements" 
                    content={<p>Discuss potential future improvements or next steps.</p>} 
                />
            </section>
        </article>
    );
};

export default Showboat;