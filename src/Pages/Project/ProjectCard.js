import React from 'react'

function ProjectCard(props) {
    return (
        <>
            <div className="col">
                <div className="card">
                    <img src={props.src} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title ">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-warning d-flex align-items-center" href={props.view} target='_blank' rel="noreferrer">
                                View
                                <ion-icon name="eye-outline" style={{ marginLeft: "4px" }}></ion-icon>
                            </a>
                            <a className="btn btn-warning d-flex align-items-center"  href={props.code} target='_blank' rel="noreferrer">
                                Code
                                <ion-icon name="code-slash-outline" style={{ marginLeft: "4px" }}></ion-icon>
                            </a>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default ProjectCard
