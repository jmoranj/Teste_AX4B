import React from "react";
import { createRoot } from "react-dom";

import Home from "./pages/Home";

const contentor = document.getElementById("root");
const origin = createRoot(contentor);

origin.render(<Home />);