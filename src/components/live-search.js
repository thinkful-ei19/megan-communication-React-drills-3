import React from 'react';

import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          searchTerm: ''
        }
      }

      updateSearchTerm(val){
          this.setState({searchTerm: val})
      }

   
    render(){
        const filteredChar=this.props.characters.filter(character=> {
                return character.name.toLowerCase()
                .includes(this.state.searchTerm.toLowerCase())
            })
        return (
            <div className="live-search">
                <SearchForm changeThings={val=>this.updateSearchTerm(val)}/>
                <CharacterCount count={filteredChar.length} />
                <CharacterList characters={filteredChar} />
            </div>
        );
    }
}
