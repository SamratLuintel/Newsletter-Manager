import React, { Component } from 'react';
import Modal from '../../../components/Modal/Modal';

class CreateCampaign extends Component {
    state = {  
        campaignName:null,
        error:null
    }

    onCampaignSubmit =(event)=>{
        event.preventDefault();
        const {campaignName,error} = this.state;

        //checks to see if user has entered any name
        if(!campaignName){
            this.setState({error:"Please enter some name"})
        }

        //checks to see if given campaign name already exist in the server
        
    }

    onInputChange = (e)=>{
        this.setState({
            campaignName:e.target.value
        })
    }
    render() {
        const {campaignName,error} = this.state

        return (
            <Modal triggerText="Create Campaign">
                <h1>Create an Email</h1>
                <p>Keep your subscribers engaged by sharing your latest news, promoting a line of products, or announcing an event.</p>
                <br />
                <p>Campaign Name</p>
                {error && <p>{error}</p>}
                <form onSubmit={this.onCampaignSubmit} >
                    <input type="text" placeholder="Name" value={campaignName} onChange={this.onInputChange}/>
                    <button type="Submit">Submit</button>
                </form>      
            </Modal>
        );
    }
}

export default CreateCampaign;