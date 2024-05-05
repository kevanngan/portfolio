import React, { useState, useEffect } from 'react';
import Dropdown from '../components/Dropdown';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const BigBoyBurgers = ({ restBase }) => {
    const pageId = 62;
    const restPath = `${restBase}pages/${pageId}`;
    const [pageData, setPageData] = useState(null);
    const [icons, setIcons] = useState([]);
    const [projectImage, setProjectImage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath);
            const data = await response.json();
            setPageData(data);

            const projectImageId = 43;
            const projectImageResponse = await fetch(`${restBase}media/${projectImageId}`);
            const projectImageData = await projectImageResponse.json();
            setProjectImage(projectImageData);

            if (data.acf && Array.isArray(data.acf.stack_icons)) {
                const iconDetails = await Promise.all(data.acf.stack_icons.map(id => 
                    fetch(`${restBase}media/${id}`).then(res => res.json())
                ));
                setIcons(iconDetails);
            }
        };

        fetchData();
    }, [restPath]);

    if (!pageData) {
        return null;
    }

    return (
        <>
            <Header restBase={restBase}/>
            <article className="bigboyburgers-wrapper">
                <section>
                    <h1>{pageData.title.rendered}</h1>
                    <p>{pageData.acf.project_description}</p>
                    {pageData.acf.stack_and_tech && <h3>{pageData.acf.stack_and_tech}</h3>}
                    <div className="icons-container">
                        {icons.map((img, index) => (
                            <img key={img.id || index} src={img.source_url} alt={img.alt_text || 'Stack Icon'} />
                        ))}
                    </div>
                    {pageData.acf.github && (
                        <a href={pageData.acf.github.url} target="_blank" rel="noopener noreferrer">View GitHub</a>
                    )}
                    {pageData.acf.live && (
                        <a href={pageData.acf.live.url} target="_blank" rel="noopener noreferrer">View Live</a>
                    )}

                    <div className="project-image">{projectImage && <img src={projectImage.source_url} alt={projectImage.alt_text || 'Project Image'} />}</div>
                </section>

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
            <Footer restBase={restBase}/>
        </>
    );
};

export default BigBoyBurgers;