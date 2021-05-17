import React from "react";

import AppA from "@monorepo/app-a";
import AppB from "@monorepo/app-b";

export default function App() {

    return(
         <div style={ { display: 'flex'}}>
             <AppA/>
             <AppB/>
         </div>
         );
}
