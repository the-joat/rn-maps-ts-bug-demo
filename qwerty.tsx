import React from "react";
import MapView from "react-native-maps";

class Qwerty extends React.Component {
    public render() {
        return (
            <MapView
                // style={{ flex: 1 }}
                zoomEnabled={true}
            />
        )
    }
}

export default Qwerty