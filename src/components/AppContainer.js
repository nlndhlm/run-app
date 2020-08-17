import React from "react"

class AppContainer extends React.Component {
    state = {
        maxHR : 120
    }

    render() {
        return (
            <div id="container-fluid">
                <h5><i>Olympiatoppens intensitetsskala</i></h5>
                <br></br>
                
                <h3>Din makspuls</h3>
                <h1>{this.state.maxHR}</h1>

                <input
                    type="range"
                    min="1"
                    max="240"
                    step="1"
                    value={this.sliderValue}
                    id="heart-rate-range"
                    onChange={e => this.setState({maxHR : e.target.value})}
                >
                </input>


                <table>
                    <thead>
                        <tr>
                            <td>Sone</td>
                            <td>Nedre puls</td>
                            <td>Øvre puls</td>
                            <td>Varighet</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="s1">
                            <td>1</td>
                            <td>{Math.floor(this.state.maxHR * 0.6)}</td>
                            <td>{Math.floor(this.state.maxHR * 0.72)}</td>
                            <td>1 - 6 timer</td>
                        </tr>
                        <tr id="s2">
                            <td>2</td>
                            <td>{Math.floor(this.state.maxHR * 0.72)}</td>
                            <td>{Math.floor(this.state.maxHR * 0.82)}</td>
                            <td>1 - 3 timer</td>
                        </tr>
                        <tr id="s3">
                            <td>3</td>
                            <td>{Math.floor(this.state.maxHR * 0.82)}</td>
                            <td>{Math.floor(this.state.maxHR * 0.87)}</td>
                            <td>50 - 90 min</td>
                        </tr>
                        <tr id="s4">
                            <td>4</td>
                            <td>{Math.floor(this.state.maxHR * 0.87)}</td>
                            <td>{Math.floor(this.state.maxHR * 0.92)}</td>
                            <td>30 - 50 min</td>
                        </tr>
                        <tr id="s5">
                            <td>5</td>
                            <td>{Math.floor(this.state.maxHR * 0.92)}</td>
                            <td>{Math.floor(this.state.maxHR * 0.97)}</td>
                            <td>15 - 30 min</td>
                        </tr>
                        <tr id="s6">
                            <td>6</td>
                            <td>--</td>
                            <td>--</td>
                            <td>6 - 15 min</td>
                        </tr>
                        <tr id="s7">
                            <td>7</td>
                            <td>--</td>
                            <td>--</td>
                            <td>3 - 6 min</td>
                        </tr>
                        <tr id="s8">
                            <td>8</td>
                            <td>--</td>
                            <td>--</td>
                            <td>1 - 3 min</td>
                        </tr>
                    </tbody>
                </table>

                <p>Kilde: <a href="https://www.olympiatoppen.no/fagstoff/utholdenhet/oltsintensitetsskala/page594.html">Olympiatoppen</a></p>







            </div>
        )
    }
}

export default AppContainer