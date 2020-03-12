import React, { Component } from 'react'
import config from '../config'; 

class AddFolder extends Component {

    state = {folderName: 
                {value: ''}
            }
    setFolderName= folderName => this.setState({folderName: {value:folderName}})

    handleAddFolder(){
        fetch(`${config.API_ENDPOINT}/folders`)
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

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="folderName">Folder Name</label>
                    <input id="folderName" type='text' value={this.state.folderName.value} onChange={this.handleAddFolder}/>
                </form>
            </div>
        )
    }
    

}

export default AddFolder;