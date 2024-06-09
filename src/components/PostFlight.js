import React, { Component } from 'react'
import axios from 'axios';

class PostFlight extends Component {
  state = {
    plans: [],
    
    origin: "",
    checkinDate: "",
    checkoutDate: ""
  }

  showPlan = () => {
    axios.get('http://127.0.0.1:8000/list/')
      .then((res) => {
        this.setState({ plans: res.data })
      })
  }

  addPlan = () => {
    const {
      origin, checkinDate, checkoutDate
    } = this.state;
  
    const data = {
      origin, checkinDate, checkoutDate
    };
  
    axios.post('http://127.0.0.1:8000/create/', data)
      .then((res) => {
        console.log('Response from server:', res.data); // Print the response data
        this.setState({
          origin: "", checkinDate: "", checkoutDate: ""
        });
        this.showPlan();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }


  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAdd = e => {
    this.addPlan();
  }


  componentDidMount() {
    this.showPlan();
  }

  render() {
    return (
      <div class="bg-gray-500 p-8 rounded-lg shadow-xl">
        <div className="container mx-auto p-4">
          <div className="">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h1 className="text-3xl text-center mb-8 font-bold text-indigo-800">উড়ে যা ডট কম হোটেল বুকিং </h1>
              <div class="mb-5 text-center">
                  
                </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="mb-4">
                  
                  <label htmlFor="origin" className="block text-sm font-medium text-gray-600">Where Do You Go ?  :</label>
                  <input type="text" className="form-input mt-1 block w-full px-4 py-2 border rounded focus:outline-none focus:border-indigo-500 text-black" placeholder="Where Do You Go ?"
                    name="origin" value={this.state.origin} onChange={this.handleChange} />

                  <label htmlFor="checkinDate" className="block text-sm font-medium text-gray-600">checkinDate :</label>
                  <input type="date" className="form-input mt-1 block w-full px-4 py-2 border rounded focus:outline-none focus:border-indigo-500 text-black" placeholder="Enter checkinDate"
                    name="checkinDate" value={this.state.checkinDate} onChange={this.handleChange} />

                  <label htmlFor="checkoutDate" className="block text-sm font-medium text-gray-600">checkoutDate :</label>
                  <input type="date" className="form-input mt-1 block w-full px-4 py-2 border rounded focus:outline-none focus:border-indigo-500 text-black" placeholder="Enter checkoutDate"
                    name="checkoutDate" value={this.state.checkoutDate} onChange={this.handleChange} />
                  
                </div>

                <div class="mb-5 text-center-5">
                  
                </div>

                <div class="mb-5 text-center">
                  <button className="bg-indigo-500 text-white px-6 py-3 font-semibold rounded-full hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo"
                    onClick={this.handleAdd}>Search</button>
                </div>
               
              </div>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PostFlight;