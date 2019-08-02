import React, { Component } from 'react';

class DataComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mysubscription: [],
      item:[]
    };
  }

  componentDidMount() {
    fetch('https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&sort=full-name-asc&skip=0&limit=10&user_key=c8bac3b6cd699d99e588526175ed3db2',{
            method: "GET",
            "Content-type": "application/json"
        })
      .then(response => response.json())
      .then(result => {
         
        this.setState({
            data:result.data, 
        });
        console.log("hiirrr",this.state.data);
        data.map((this.state.data.profile.first_name));
        let ap=this.state.data.map((item,index)=>{
            console.log("hii",item.profile.middle_name);
            return item.profile.first_name;
            
        });
  });
 }
 
showData=data=>{
    let ap=this.state.data.map((item,index)=>{
        console.log("hii",item.profile.middle_name);
        return (item.profile.first_name);
        
    });

}

render(){
 return(
    <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">{this.showData}</th>
        <td></td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    </tbody>
  </table>
 );
}
}


export default DataComponent;