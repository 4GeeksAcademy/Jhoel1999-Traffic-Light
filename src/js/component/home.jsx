import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState ("red");
	const [divPurpura, setDivPurpura] = useState(false);

	const handleColor = () => {
		if (color === "red") {
			setColor("yellow")
		} else if(color === "yellow"){
			setColor("green")
		}else if (color === "green" && divPurpura === true) {
			setColor("purpura")
		}else{
			setColor("red")
		}
	}

	const handlePurpura = () => {
		if (divPurpura === false){
			setDivPurpura(true)
		}else{
			setDivPurpura(false)
		}
		
	}

	return (
		<>
			<div className="d-inline-block bg-dark p-2 m-2 rounded">
				<div onClick={()=> setColor("red")} 
					className={" light bg-danger rounded-circle mb-2" + (color === "red" ? " glow" : "")} 
				>
				</div>
				<div onClick={()=> setColor("yellow")}
					className={"light bg-warning rounded-circle mb-2" + (color === "yellow" ? " glow" : "")} 
				>
				</div>
				<div onClick={()=> setColor("green")}
					className={"light bg-success rounded-circle mb-2" + (color === "green" ? " glow" : "")} 
				>
				</div>
				{divPurpura && (
						<div
							onClick={() => setColor("purpura")}
							className={
								"light rounded-circle mb-2" +
								(color === "purpura" ? " glow" : "")
							}
							style={{ backgroundColor: "#6f42c1" }}
						></div>
					)}
			</div>
			<div className="d-flex p-2">
				<button onClick={handleColor} className="btn btn-secondary">Cambiar</button>
				<button onClick={handlePurpura} className="btn btn-primary ms-2">Boton Purpura</button>
			</div>
		</>
		
	);
};

export default Home;
