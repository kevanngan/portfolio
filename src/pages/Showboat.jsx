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
                                    <p>Objectives :</p>
                                    <ul>
                                        <li>Create a React-based movie database application that fetches and displays movie information using The Movie Database (TMDb) API.</li>
                                        <li>Design the web application to be fully responsive, ensuring it works seamlessly across various screen sizes.</li>
                                        <li>Enable users to add their favorite movies to a "My List" feature, utilizing the browser's local storage.</li>
                                    </ul>
                                </div>} 
                    />
                    <Dropdown 
                        title="Features" 
                        content={<div className="project-details-content">
                                    <br />
                                    <p>My List</p>
                                    <ul>
                                        <li>In the "My List" feature of your application, Redux Toolkit is used to manage and persist the list of favorite movies. This setup allows for efficient state updates and synchronization across the app. Actions to add or remove favorites trigger updates to the state, which are seamlessly saved to and retrieved from the browser's local storage, ensuring users' favorites are preserved across sessions. The use of Redux Toolkit ensures that the user interface remains responsive and up-to-date with user interactions.</li>
                                    </ul>
                                    <p>Movie Searching</p>
                                    <ul>
                                        <li>The "Movie Searching" feature in the application leverages The Movie Database (TMDb) API to provide a comprehensive search experience. Users can quickly find movies by title, genre, or release year. The search interface is designed to be intuitive, offering real-time results as users type, enhancing the usability and interaction. This feature makes discovering new and old favorites simple and enjoyable, catering to a wide range of cinematic preferences.</li>
                                    </ul>
                                </div>} 
                    />
                    <Dropdown 
                        title="Conclusion" 
                        content={<div className="project-details-content">
                                    <br />
                                    <p>What I Learned :</p>
                                    <ul>
                                        <li>Utilize Fetch API in React to make HTTP requests and process reponses.</li>
                                        <li>Learned to utilize the browser's local storage for data storage.</li>
                                        <li>Developed skills in managing favorited movies using Redux Toolkit in a React environment.</li>
                                        <li>Acquired knowledge in implementing page routing using React Router.</li>
                                    </ul>
                                    <p>Future Improvements :</p>
                                    <ul>
                                        <li>In the future, I may add a user authentication system.</li>
                                        <li>Social features is also another possiblilty to enchance user experience.</li>
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