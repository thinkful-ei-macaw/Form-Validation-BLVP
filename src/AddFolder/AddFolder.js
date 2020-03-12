import React, { Component } from 'react'
import config from '../config';

class AddFolder extends Component {
    state = {folderName: {value:''}}
    setNameNote = folderName =>{
        this.setState({folder: {value:folderName}})
    }

    handleNoteChange(event){
        this.setState({folderName: event.target.value});
    }


    handleAddFolder(folderId, folderName) {
        fetch(`${config.API_ENDPOINT}/notes`, {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": folderId,
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
        })
        .catch(err => err.message)
    }

    validateFolderName(event) {
        event.preventDefault();
        const validFolder = this.state.folderName.value;
        if(validFolder === '') {
            return this.handleAddFolder();
        } else {
            return alert('Folder name is required');
        }
    }

    render() {
        return (
            <div>
                <form>
                    {/* </form>/* <label htmlFor="nameNote">Note Name Here</label>
                    <input id="nameNote" type="text" 
                     value={this.state.nameNote.value}/>
                    <label htmlFor="folderName">Folder Here</label>
                    <input id="folderName" type="text" 
                    value={this.state.folderName.value}/>
                    <label htmlFor="content">Content Here</label>
                    <input id="content" type="text" 
                    value={this.state.content.value}/> */ }
                    <label htmlFor="folderName"></label>
                    <button type="submit" 
                    disabled ={this.validateFolderName()} 
                    onClick={this.handleAddFolder()}>Add Folder</button>
                </form>
            </div>
        )
    }


}

export default AddFolder;