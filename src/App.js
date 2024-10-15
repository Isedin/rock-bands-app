import React from "react";
import Navbar from "./components/Navbar";
import BandsList from "./components/BandsList";
import Modal from "./components/Modal";

class App extends React.Component {
	state = {
		bands: [],
	};

	componentDidMount() {
		fetch(
			"https://raw.githubusercontent.com/Danilovesovic/bands/master/bands_with_id.json"
		)
			.then((res) => res.json())
			.then((data) => {
				// ovim this.setState({ bands: data }); kreira state iz data
				this.setState({ bands: data });
			});
	}

	render() {
		return (
			<>
				<Navbar />
				{/* ovim bandslist kreira state iz bands */}
				<BandsList bands={this.state.bands} />
				<Modal />
			</>
		);
	}
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
