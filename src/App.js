import React, { Component } from 'react';

const reportTablePlugin = global.reportTablePlugin;
const chartPlugin = global.chartPlugin;

const url = 'http://localhost:8080';
const username = 'admin';
const password = 'district';

class App extends Component {
    constructor() {
        super();

        this.state = {
            table: 'C0rhAq1oklh',
            chart: 'LW0O27b7TdD'
        };

        this.runPlugin = this.runPlugin.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    runPlugin() {
        reportTablePlugin.load({
            id: this.state.table,
            el: 'table1'
        });

        reportTablePlugin.load({
            columns: [
                {
                    dimension: 'dx',
                    items: [
                        {
                            id: 'Uvn6LCg7dVU'
                        }
                    ]
                }
            ],
            rows: [
                {
                    dimension: 'pe',
                    items: [
                        {
                            id: 'LAST_12_MONTHS'
                        }
                    ]
                }
            ],
            el: 'table2'
        });

        chartPlugin.load({
            id: this.state.chart,
            el: 'chart1'
        });
    }
    handleClick(e) {
        this.setState({
            table: 'KJFbpIymTAo',
            chart: 'Tun9tJb3sQt'
        });
    }
    componentDidMount() {
        reportTablePlugin.url = url;
        reportTablePlugin.username = username;
        reportTablePlugin.password = password;

        chartPlugin.url = url;
        chartPlugin.username = username;
        chartPlugin.password = password;

        this.runPlugin();

//         reportTablePlugin.load();
        //
        // chartPlugin.load({
        //     id: 'DkPKc1EUmC2',
        //     el: 'chart1'
        // });
    }
    componentDidUpdate() {
        console.log("did update");
        this.runPlugin();
    }
    render() {
        return (
            <div>
                <h1>My web portal</h1>
                <button onClick={this.handleClick}>update</button>
                <section>
                    <h2>Pivot table by id</h2>
                    <div id="table1"></div>
                    <h2>Pivot table by config</h2>
                    <div id="table2"></div>
                </section>
                <section>
                    <h2>Chart</h2>
                    <div id="chart1"></div>
                </section>
            </div>
        );
    }
}

export default App;
