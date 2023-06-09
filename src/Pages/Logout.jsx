import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Logout = () => {
	const navegar = useNavigate();
	useEffect(() => {
		localStorage.removeItem("datosUsuario");
		navegar("/login");
	}, []);
};

export default Logout;

// const Logout = (props) => {
// 	const { gestionarLogout } = props;

// 	const navegar = useNavigate();
// 	useEffect(() => {
// 		gestionarLogout();
// 		localStorage.removeItem('datosUsuario');
// 		navegar('/login');
// 	}, );
// 	return <h1>Logged out...</h1>;
// };

// export default Logout;