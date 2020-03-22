import React, { Component } from 'react'
import ApiContext from '../ApiContext';
import config from '../config';

class AddFolder extends Component {
    static contextType = ApiContext

    state = {
        folderName: {value:''}
    }

    handleNoteChange = (event)=>{
        this.setState({folderName: {value:event.target.value}});
    }


    handleAddFolder= (folderName) => {
        fetch(`${config.API_ENDPOINT}/folders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": folderName
            })
        })
        .then(res => {
            if(!res.ok){
                throw new Error(res.statusText)
            }
            return res.json()
        })
        .then(data=>{
            console.log(data)
            console.log('note added!')
            console.log(this.context)
            this.context.getNotes();
            console.log(this.context.getNotes)
        })
        .catch(err => err.message)
    }

    validateFolderName = (event) => {
        event.preventDefault();
        const validFolder = this.state.folderName.value;
        if(validFolder) {
            return this.handleAddFolder(validFolder);
        } else {
            return alert('Folder name is required');
        }
    }

    

    render() {
        const styleText={color:"#A9A9A9"}
        return (
            <div>
                <form onSubmit={this.validateFolderName}>
                    <label htmlFor="folderName"><span style={styleText}>Folder Name:</span></label>
                    <input type="text" id="folderName" value={this.state.folderName.value} onChange={this.handleNoteChange}/>
                    <button type="submit" >Add Folder</button>
                </form>
            </div>
        )
    }


}

export default AddFolder;