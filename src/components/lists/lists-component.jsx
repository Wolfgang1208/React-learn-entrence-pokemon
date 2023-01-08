// Function component version
const Lists = ({pokemonsLists}) => {
  const imgCSS = {
    border: "1px solid darkorange",
    borderRadius: "10px",
  };

  return (
    <ul className="ul-container">
      {pokemonsLists.map((pokemon) => {
        return (
          <div key={pokemon.url}>
            <li>{pokemon.name}</li>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                pokemon.id + 1
              }.png`}
              style={imgCSS}
            />
          </div>
        );
      })}
    </ul>
  );
};

// Class component version
/*
class Lists extends React.Component {
  render() {
    const imgCSS = {
        border: "1px solid darkorange",
        borderRadius: "10px"
    }

    // console.log("The props are:"+this.props)
    const { pokemonsLists } = this.props;
    return (
      <ul className="ul-container">
        {pokemonsLists.map((pokemon) => {
          return (
            <div key={pokemon.url}>
              <li >{pokemon.name}</li>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id+1}.png`} 
              style = {imgCSS}/>
            </div>
          );
        })}
      </ul>
    );
  }
}
*/
