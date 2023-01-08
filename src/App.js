// #1 ps: life cycle: 1, construct, 2, render, 3, Component mount, 4, render
// #2 React event listener
// #3 useState
// #4 function component version (introducing React.useEffect())

// 
const App = () => {
  const [pokemons, setPokemons] = React.useState([]);
  const [filteredPokemons, setFilteredPokemons] = React.useState([]);

  const onChangeHandler = (event) => {
    const comparedPokemons = pokemons.filter((pokemon) => {
      return pokemon.name.includes(event.target.value);
    });

    setFilteredPokemons(comparedPokemons);
  };

  React.useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((json) => {
        json.results.map((result,index)=>{
            result.id = index+1
        })
        setPokemons(json.results)
        setFilteredPokemons(json.results)
      });
  },[])

  return (
    <div>
      <h1>pokemon</h1>
      <Input onChangeHandler={onChangeHandler} />
      <Lists pokemonsLists={filteredPokemons} />
    </div>
  );
};


// class version:
// including state componentDidMount functions
// complex variables assign

/*class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      filteredPokemons: [],
    };
  }

// PS we dont have xxdidmount in function components
  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((json) => {
        json.results.map((result,index)=>{
            result.id = index+1
        })
        this.setState(
          () => {
            return {
              pokemons: json.results,
              filteredPokemons: json.results,
            };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  onChangeHandler = (event) => {
    const comparedPokemons = this.state.pokemons.filter((pokemon) => {
      return pokemon.name.includes(event.target.value);
    });

    this.setState(
      () => {
        return { filteredPokemons: comparedPokemons };
      },
      () => {
        console.log(this.state.searching);
      }
    );
  };

  render() {
    console.log("rendering");
    console.log(this.state);
    return (
      <div>
        <h1>pokemon</h1>
        <Input onChangeHandler={this.onChangeHandler}/>
        <Lists pokemonsLists={this.state.filteredPokemons}/>
      </div>
    );
  }
}
*/
