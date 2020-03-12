import React from 'react'
import config from '../config'; 

class AddNote extends React.Component {

    handleAddNote() {
        fetch(`${config.API_ENDPOINT}/notes`)
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
                    <label htmlFor="name-note">Note Name Here</label>
                    <input id="name-note" type="text" value="placeholder" />
                </form>
            </div>
        )
    }

}

export default AddNote;