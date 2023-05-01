// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {CourseDetails} = props
  const {courseTitle, description, duration, tagsList} = CourseDetails
  return (
    <div className="">
      <div className="row-to-icon-heading">
        <h1 className="course-heading-style">{courseTitle}</h1>
        <div className="row-to-icon-para">
          <AiFillClockCircle />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="para-course-description">{description}</p>
      <ul className="ul-style">
        {tagsList.map(eachItem => (
          <li className="li-style" key={eachItem.id}>
            <p>{eachItem.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
