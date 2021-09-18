import { Component } from "react"; import React from "react";
import Menu1 from "./Menu1";
import Menu2 from "./Menu2";


class Parent extends Component {
    state = {
        menu2: false,
        menu1: false
    }


    ubahKomponenMuncul1 = () => {
        this.setState(() => {
            return {
                menu2: !this.state.menu2
            }
        })
    }

    ubahKomponenMuncul2 = () => {
        this.setState(() => {
            return {
                menu1: !this.state.menu1
            }
        })
    }

    render() {
        return (
            <>
                <h1>WARUNG ASOOYY</h1>
                <div style={{ display: "flex" }}>
                    <div style={{ width: "50%" }}>
                        <button onClick={this.ubahKomponenMuncul1}>{this.state.firstChild ? 'Tutup' : 'Tampilkan'}</button>
                        {this.state.menu2 && <Menu2 />}
                    </div>
                    <div style={{ width: "50%" }}>
                        <button onClick={this.ubahKomponenMuncul2}>{this.state.secondChild ? 'Tutup' : 'Tampilkan'} Menu</button>
                        {this.state.menu1 && <Menu1 />}
                    </div>
                </div>
            </>
        );
    }
}

export default Parent;
