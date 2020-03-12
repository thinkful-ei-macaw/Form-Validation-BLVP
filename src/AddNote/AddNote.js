import React from 'react'
import config from '../config'; 

class AddNote extends React.Component {
    state = {
        nameNote: {value:''},
        folderId: {value: ''},
        content: {value: ''}
}

    handleAddNote(nameNote, dateCreated, folderId, content) {
        fetch(`${config.API_ENDPOINT}/notes`, {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": nameNote,
                "modified": dateCreated,
                "folderId": folder.id,
                "content": content
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

    validateNoteName(event) {
        event.preventDefault();
        const validNote = this.state.nameNote.value;
        if(validNote === '') {
            return this.handleAddNote()
        } else {
            alert('Note must have a title!')
        }
    }
    
    updateName(nameNote){
        this.setState({nameNote: {value:nameNote}})   
    }
    updateFolderId(folderId){
        this.setState({folderId: {value: folder.id}})
    }
    updateContent(content){
        this.setState({content: {value:content}})
    }
    


    render() {
        return (
            <div>
                <form>
                    <label htmlFor="nameNote">Note Name Here</label>
                    <input id="nameNote" type="text" 
                     value={this.state.nameNote.value} onChange={e => this.updateName(e.target.value)}/>
                    <label htmlFor="folderName">Select Here</label>
                        <select id='folderChange' 
                        onChange={event => this.updateFolderId(event.target.value)}>
                            {this.context.folders.map(folder => {
                            return <option value={folder.id}> {folder.name} </option>}
                        </select>
                    <label htmlFor="content">Content Here</label>
                    <input id="content" type="text" 
                    value={this.state.content.value}
                    onChange={e => this.updateContent(e.target.value)}
                    />
                    <button type="submit" 
                    disabled ={this.validateNoteName()} 
                    onClick={this.handleAddNote()}>Add Note</button>
                </form>
            </div>
        )
    }

}

export default AddNote;