import logo from './logo.svg';
import './App.css';
import { useQuery, gql } from '@apollo/client';
import MissionCard from "./Components/MissionCard";
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Navbar from './Components/Navbar';





function App() {
  return (

    <div className="App">
      <Navbar></Navbar>
      <Grid container  columns={12}>
        
      <MissionCard/>

      </Grid>
        <h1>HELOU</h1>
        
      
    </div>
  );
};

// let GET_LOCATIONS = '';

// let launches = '';




// async function TestComponent () {
//   GET_LOCATIONS = gql`
//  {
//    missions {
//      name
//    }
//  }
//  `;
//   const { loading, error, razer } = useQuery(GET_LOCATIONS) ;

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   return (
//   razer.rockets.map(({name}) => {
  
//     console.log({name});  
    
    
    
//   }));
    
    
//   }
  
  
//   function LaunchesF (name) {
//   const { loading, error, mission_name } = useQuery(launches) ;
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;
  
//   launches = gql`{
//     launches(find: {mission_name: `+{name}+`}) {
//       mission_name
//       id
//     }
//   }
//   `
//   mission_name.map((id, name) => {
//       return (
//         console.log({name}),
//       <div key={name}>
//       <p>{id}</p>
//       <p>{name}</p>

//     </div>

//     )}
//   )
// };




export default App;
