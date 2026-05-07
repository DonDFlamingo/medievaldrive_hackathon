// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";

/* ************************************************************************* */

import App from "./App";

import Home from "./pages/Home/Home";
import Destination from "./pages/destination/Destination";
import Profil from "./pages/Profil/Profil";
import DetailsDuVoyage from "./pages/DetailsDuVoyage/detailsDuVoyage";
import Vehicules from "./pages/Vehicules/Vehicules";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/destination",
				element: <Destination />,
			},
			{
				path: "/profil",
				element: <Profil />,
			},
			{
				path: "/detailsduvoyage",
				element: <DetailsDuVoyage />,
			},
			{
				path: "/vehicules",
				element: <Vehicules />,
			}
		],
	},
]);

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
	throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
