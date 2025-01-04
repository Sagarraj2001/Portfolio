import React from 'react'

function SkillCard(props) {
  return (
    <>
     <div className="col">
            <div className="card h-100">
              <img
                src={props.src}
                className="card-img-top"
                alt={props.alt}
                style={{ objectFit: 'cover', height: '100px', width: '100px', margin: 'auto' }}
              />
              <div className="card-body text-center">
                <h3 className="card-title">{props.title}</h3>
              </div>
            </div>
          </div>
    </>
  )
}

export default SkillCard
