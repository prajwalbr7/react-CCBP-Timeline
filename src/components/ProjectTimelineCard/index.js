// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {ProjectDetail} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = ProjectDetail
  return (
    <div className="">
      <img src={imageUrl} alt="project" className="project-img-sizing" />
      <div className="row-container">
        <h1 className="project-heading-style">{projectTitle}</h1>
        <div className="row-container-icon">
          <AiFillCalendar className="" />
          <p className="para-duration-style">{duration}</p>
        </div>
      </div>
      <p className="para-description-project">{description}</p>
      <a className="hyperlink" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
