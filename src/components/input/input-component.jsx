// Function component version
const Input = ({onChangeHandler}) =>{
    return(
        <input type="search" onChange={onChangeHandler} />
    );
}

// Class component version
/*
class Input extends React.Component{
 render(){
    const {onChangeHandler} = this.props
    return(
        <input type="search" onChange={onChangeHandler} />
    );
 }   
}
*/