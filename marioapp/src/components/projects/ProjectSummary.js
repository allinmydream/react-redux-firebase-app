import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-su">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by Daeun</p>
                <p className="grey-text">first July, 1pm</p>
            </div>
        </div>
    )
}

export default ProjectSummary