import React, { Component } from 'react'

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
      this.setState({
        city: data.city,
        company: data.company,
        country: data.country,
        dob: data.dob,
        email: data.email,
        fullname: data.fullname,
        job: data.job,
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
			<div id="profile" className="h-100 pt-nav">
        <div className="container">
          <div className="row">
            <div className="col-4 pl-5 pr-5">
              <img src={imgProfile}
              width="100%" height="360px" alt="" className="border" />
            </div>
            <div className="col-8">
              <h5><b>Personal Information</b></h5>

              <div className="row text-capitalize">
                <div className="col-6">
                  <h6 className="mt-3 mb-0 text-muted small">Fullname</h6>
                  <h6><b>{this.state.fullname}</b></h6>

                  <h6 className="mt-3 mb-0 text-muted small">City / Country</h6>
                  <h6><b>{this.state.city} / {this.state.country}</b></h6>

                  <h6 className="mt-3 mb-0 text-muted small">Job</h6>
                  <h6><b>{this.state.job}</b></h6>

                  <h6 className="mt-3 mb-0 text-muted small">Current Company</h6>
                  <h6><b>{this.state.company}</b></h6>
                </div>
                <div className="col-6">
                  <h6 className="mt-3 mb-0 text-muted small">Experience</h6>
                  <h6><b>1 year 10 month</b></h6>

                  <h6 className="mt-3 mb-0 text-muted small">Fullname</h6>
                  <h6><b>Irfan Maulana</b></h6>

                  <h6 className="mt-3 mb-0 text-muted small">Fullname</h6>
                  <h6><b>Irfan Maulana</b></h6>

                  <h6 className="mt-3 mb-0 text-muted small">Fullname</h6>
                  <h6><b>Irfan Maulana</b></h6>
                </div>
              </div>

            </div>
          </div>

          <br />

          <div className="row">
            <div className="col">
              <p>
                hello there, my name is <b>Irfan</b>, <strike>some people call me <b>gembel</b></strike> ... 
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae tenetur architecto, distinctio repellat, voluptate impedit dolor ad veritatis nam ratione maiores ea dicta iusto modi ipsa magni. Nulla, qui minus.
              </p>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
		)
	}
}

export default index;