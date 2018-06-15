import React, { Component } from 'react'


export class YelpAPI extends React.Component {
    constructor() { 
        super() 
        this.state= {
            value: ""
        }
    }
    grabAPI(location){
        const request = require('request');
        console.log(location)
        request({
          url: 'https://api.foursquare.com/v2/venues/explore',
          method: 'GET',
          qs: {
            client_id: 'TW4TRBBX0YQESQPMU2ET2TBPZBM51NFSA41MVLT0SRCCK23L',
            client_secret: 'SFYZY2HMRMZ04IT2PRONNLCBG0FH5URVOSY22SS40ZU12LXX',
            ll: location,
            query: 'coffee',
            v: '20180323',
            limit: 10
          }
        }, function(err, res, body) {
          if (err) {
            console.error(err);
          } else {
            console.log(body);
          }
        });
    }
    
    
    handleChange(event){ 
        this.setState({value: event.target.value});    }
    
        handleSubmit(event) {
        this.GMapsAPI(this.state.value)
        event.preventDefault();

        //using 'enter' key
        if (event.keyCode == 13){
       //change state
          console.log('it works')
          this.setState({value: event.target.value});
       }
      }
	render(){
	return(
       
        <div> 
             <h1> Type in a location!</h1> 
        <form onSubmit={this.handleSubmit.bind(this)} >
        <label>
          Location: 
          <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
        </label>
        <input type="submit" value="Submit" />
      </form> 
    </div> 
)}}
