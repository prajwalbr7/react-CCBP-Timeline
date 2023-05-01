// Write your code here
import {Component} from 'react'
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

class TimeLineView extends Component {
  ShiftItem = Item => {
    if (Item.categoryId === 'COURSE') {
      return <CourseTimelineCard CourseDetails={Item} key={Item.id} />
    }
    return <ProjectTimelineCard ProjectDetail={Item} key={Item.id} />
  }

  render() {
    const {timelineItemsList} = this.props

    return (
      <div className="container1">
        <h1 className="heading-style1">
          MY JOURNEY <br />
          <span className="heading-style2">OF CCBP 4.0</span>
        </h1>

        <div className="chrono-container">
          <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
            {timelineItemsList.map(eachItem => this.ShiftItem(eachItem))}
          </Chrono>
        </div>
      </div>
    )
  }
}
export default TimeLineView
