import React, { useState, useEffect } from 'react';
import Dropdown from '../components/Dropdown';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Showboat = ({ restBase }) => {
    const pageId = 64; 
    const restPath = `${restBase}pages/${pageId}`;
    const [pageData, setPageData] = useState(null);
    const [icons, setIcons] = useState([]);
    const [projectImage, setProjectImage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath);
            const data = await response.json();
            setPageData(data);

            const projectImageId = 104;
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
            <article className="showboat-wrapper project-page">
                <section className="project-info-wrapper">
                    <div className="project-info-content">
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
                    </div>
                        
                    <div className="project-image">{projectImage && <img src={projectImage.source_url} alt={projectImage.alt_text || 'Project Image'} />}</div>
                </section>

                <section className="project-details">
                    <Dropdown 
                        title="Concept Creation" 
                        content={<div className="project-details-content">
                                    <br />
                                    <p>Objectives:</p>
                                    <ul>
                                        <li>Identified the target audience: burger enthusiasts looking for convenient online ordering.</li>
                                        <li>Designed a user-friendly interface to enhance the online shopping experience.</li>
                                        <li>Brainstormed unique branding elements to differentiate BigBoyBurgers from competitors.</li>
                                    </ul>
                                </div>} 
                    />
                    <Dropdown 
                        title="Features" 
                        content={<div className="project-details-content">
                                    <br />
                                    <p>Describe the challenges you faced during the project:</p>
                                    <ul>
                                        <li>Identified the target audience: burger enthusiasts looking for convenient online ordering.</li>
                                        <li>Designed a user-friendly interface to enhance the online shopping experience.</li>
                                        <li>Brainstormed unique branding elements to differentiate BigBoyBurgers from competitors.</li>
                                    </ul>
                                </div>} 
                    />
                    <Dropdown 
                        title="What I Learned" 
                        content={<div className="project-details-content">
                                    <br />
                                    <p>Objectives:</p>
                                    <ul>
                                        <li>Identified the target audience: burger enthusiasts looking for convenient online ordering.</li>
                                        <li>Designed a user-friendly interface to enhance the online shopping experience.</li>
                                        <li>Brainstormed unique branding elements to differentiate BigBoyBurgers from competitors.</li>
                                    </ul>
                                </div>} 
                    />
                    <Dropdown 
                        title="Conclusion" 
                        content={<div className="project-details-content">
                                    <br />
                                    <p>Objectives:</p>
                                    <ul>
                                        <li>Identified the target audience: burger enthusiasts looking for convenient online ordering.</li>
                                        <li>Designed a user-friendly interface to enhance the online shopping experience.</li>
                                        <li>Brainstormed unique branding elements to differentiate BigBoyBurgers from competitors.</li>
                                    </ul>
                                </div>}  
                    />
                    <Dropdown 
                        title="Future Improvements" 
                        content={<div className="project-details-content">
                                    <br />
                                    <p>Objectives:</p>
                                    <ul>
                                        <li>Identified the target audience: burger enthusiasts looking for convenient online ordering.</li>
                                        <li>Designed a user-friendly interface to enhance the online shopping experience.</li>
                                        <li>Brainstormed unique branding elements to differentiate BigBoyBurgers from competitors.</li>
                                    </ul>
                                </div>}  
                    />
                </section>
            </article>
            <Footer restBase={restBase}/>
        </>
    );
};

export default Showboat;