import React from "react";
import Navbar from "./components/Navbar";
import BandsList from "./components/BandsList";
import ModalDialog from "./components/Modal";

class App extends React.Component {
	state = {
		bands: [],
		currentBand: {},
		show: false,
	};

	changeCurrentBand = (band) => {
		this.setState({ currentBand: band })
		this.handleShow();
	};

	handleClose = () => {
		this.setState({ show: false });
	};

	handleShow = () => {
		this.setState({ show: true });
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
				<BandsList
					bands={this.state.bands}
					changeCurrentBand={this.changeCurrentBand}
				/>
				<ModalDialog
					show={this.state.show}
					currentBand={this.state.currentBand}
					handleClose={this.handleClose}
				/>
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
