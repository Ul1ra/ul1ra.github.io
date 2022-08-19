import React from 'react';
import Projects from '../../api/project'


const RelatedProject = () => {

    return (
        <div className="wpo-project-single-item">
            <div className="wpo-project-single-title">
                <h3>Related Projects</h3>
            </div>
            <div className="wpo-project-area-s2">
                <div className="wpo-project-wrap">
                    <div className="row">
                        {Projects.slice(0, 3).map((project, pot) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={pot}>
                                <div className="wpo-project-item">
                                    <div className="wpo-project-img">
                                        <img src={project.pImg} alt=""/>
                                    </div>
                                    <div className="wpo-project-text">
                                        <h2>{project.title}</h2>
                                        <span>{project.subTitle}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};
export default RelatedProject;

