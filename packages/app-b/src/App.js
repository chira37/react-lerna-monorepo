import React, { useEffect, useState } from "react";
import { subscribe } from "../../../Eventbus";

export default function App() {
    const [value, setValue] = useState(false);

    useEffect(() => {
        const event = subscribe("click-a", () => {
            console.log("toggling")
            setValue((state) => !state);
        });

        return () => {
            event.unsubscribe();
        };
    }, []);

    return (
        <div style={{ padding: 20, backgroundColor: "yellow" }}>
            <h1>APP-B</h1>
            <div>{value ? "ON" : "OFF"}</div>
        </div>
    );
}



