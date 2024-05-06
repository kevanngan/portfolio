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

            const projectImageId = 103;
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
            <article className="bigboyburgers-wrapper project-page">
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
                                        <li>Develop a WooCommerce store website as a group of 4 for our capstone project.</li>
                                        <li>Design a mockup website and bring it to life.</li>
                                        <li>Create online ordering for delivery and pickup.</li>
                                    </ul>
                                </div>} 
                    />
                    <Dropdown 
                        title="Features" 
                        content={<div className="project-details-content">
                                    <br />
                                    <p>Build Your Own Burger</p>
                                    <ul>
                                        <li>Customers may create their own burger with this feature, from adding bacon, extra cheese or removing a patty, there are a variety of options.</li>
                                    </ul>
                                    <p>Online Ordering</p>
                                    <ul>
                                        <li>This online ordering feature allows users to look through the menu and order from ther website itself. They may also qualify for coupons and combos and purchase other items such as gift cards.</li>
                                    </ul>
                                </div>} 
                    />
                    <Dropdown 
                        title="Conclusion" 
                        content={<div className="project-details-content">
                                    <br />
                                    <p>What I Learned :</p>
                                    <ul>
                                        <li>Gained experience in implementing e-commerce principles such as product listings, shopping cards, and payment gateways on WordPress.</li>
                                        <li>Developed skills and knowledge to customize the store to specific branding and funtionality.</li>
                                        <li>Gained insight into the significance of user experience from the customers' perspective, emphasizing smooth and clear navigation, detailed product information in menus, and more.</li>
                                    </ul>
                                    <p>Future Improvements :</p>
                                    <ul>
                                        <li>Perhaps a survey, ratings or review mechanism would be valuable to gain insights from customers and improve overall quality of products and services.</li>
                                    </ul>
                                </div>} 
                    />
                </section>
            </article>
            <Footer restBase={restBase}/>
        </>
    );
};

export default BigBoyBurgers;