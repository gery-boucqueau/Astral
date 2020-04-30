import React from "react";

class Desert extends React.Component {  
    styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            padding : '20px',
            width: '70px',
        },
        cadre: {
            padding : '5px',
            textAlign: 'center',
            color: 'white',
            border: '3px white solid',
            padding: '15px 15px',
            borderRadius: '20px',
            textDecoration: 'none',
        }
    }

    render () {
        return (
        <div style={this.styles.container} onClick={(event)=>this.props.showIslandWebcam(event)}>
            <p style={this.styles.cadre} >ISLAND</p>
        </div>
        )
    }
}

export default Desert