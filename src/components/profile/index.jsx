import React, { Component } from 'react'
import Moment from 'react-moment'

import { profileService } from '../../common/api.service'
import store from '../../store'
import { startLoading, stopLoading } from '../../actions'
import imgProfile from './../../assets/img/pict.jpg'

class index extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  getProfle = () => {
    store.dispatch(startLoading('Fetching profile data . . .'))
    profileService.get()
    .then((res) => {
      const data = res.data
      const exp = data.workStartDate
      const date = new Date()
      const currentYear = date.getFullYear()
      const currentMonth = date.getMonth()
      const year = parseInt(exp.substring(0,4))
      const month = parseInt(exp.substring(5,7))
      const experience = (currentYear - year) + ' year ' + (currentMonth - month) + ' month'
      this.setState({
        city: data.city,
        company: data.company,
        country: data.country,
        dob: data.dob,
        email: data.email,
        fullname: data.fullname,
        job: data.job,
        status: data.status,
        workStartDate: experience,
      })
    })
    .catch((err) => { console.log(err) })
    .finally(() => { store.dispatch(stopLoading()) })
  }

  componentDidMount() {
    this.getProfle()
  }

	render () {
		return (
			<div id="profile" className="pt-nav pb-nav">
				<div className="container">
					<div className="row">
						<div className="col-md-4 mb-4">
							<img src={imgProfile} width="100%" alt="" className="border" />
						</div>
						<div className="col-md-8">
							<h5><b>Personal Information</b></h5>
							<div className="row text-capitalize">
								<div className="col-md-6">
									<h6 className="mt-3 mb-0 text-muted small">Fullname</h6>
									<h6><b>{this.state.fullname}</b></h6>

									<h6 className="mt-3 mb-0 text-muted small">City / Country</h6>
									<h6><b>{this.state.city} / {this.state.country}</b></h6>

									<h6 className="mt-3 mb-0 text-muted small">Job</h6>
									<h6><b>{this.state.job}</b></h6>

									<h6 className="mt-3 mb-0 text-muted small">Current Company</h6>
									<h6><b>{this.state.company}</b></h6>
									</div>
									<div className="col-md-6">
									<h6 className="mt-3 mb-0 text-muted small">Experience</h6>
									<h6><b>{this.state.workStartDate}</b></h6>

									<h6 className="mt-3 mb-0 text-muted small">Date of Birth</h6>
									<h6><b><Moment format="DD MMMM YYYY">{this.state.dob}</Moment></b></h6>

									<h6 className="mt-3 mb-0 text-muted small">status</h6>
									<h6><b>{this.state.status}</b></h6>
								</div>
							</div>
						</div>
					</div>

					<br />

					<div className="row">
						<div className="col-md">
							<p>I start learn programming languange since senior highschool. I love software engineering and i like to learn something new technology day by day.</p>
							<p>Experienced Full Stack Developer focus on ReactJS & Laravel. Understand Responsive Web Design, Sass, Redux, RESTfull APIs. Strong proficiency in JavaScript, logical thinking and troubleshooting. Passion in software engineering, especially in building rich applications.</p>
						</div>
					</div>
				</div>
				<div className="clearfix"></div>
			</div>
		)
	}
}

export default index;