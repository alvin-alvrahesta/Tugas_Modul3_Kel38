import React, { Fragment } from 'react';
import './Menu1.css'


class Menu2 extends React.Component {
  constructor(props) {
    super(props)
    this.handleChangeMinuman = this.handleChangeMinuman.bind(this)
    this.state = {
      minuman: [
        ['Jus Alpukat', 8000],
        ['Jus Semangka', 7000],
        ['Jus Pisang', 8000],
        ['Es Buah', 10000]
      ],
      menu: {
        minuman1: 0,
        minuman2: 0,
        minuman3: 0,

      },


      TotalHarga: 0
    }
  }

  handleTotal = () => {
    const {
 
      TotalMinuman,
    } = this.state
    this.setState({
      TotalHarga: TotalMinuman
    })
  }

  handleCalculation = () => {
    const {
      minuman1,
      minuman2,
      minuman3,
    } = this.state.menu
    var minuman = minuman1 + minuman2 + minuman3
    this.setState({
      ...this.state.menu,
      TotalMinuman: minuman,
    }, this.handleTotal
    )
  }


  handleChangeMinuman(e) {
    e.preventDefault()
    const { menu } = this.state
    const { name } = e.target
    var index = e.nativeEvent.target.selectedIndex;
    const { value } = e.nativeEvent.target[index];
    this.setState({
      menu: {
        ...menu,
        [name]: Number(value)
      }
    }, this.handleCalculation);
  }

  componentDidMount() {
    alert(`Silahkan Memilih Menu :)`)
    }
    componentWillUnmount() {
    alert('Terima Kasih Sudah Memesan, Silahkan Tunggu')
    }

  render() {
    const {

      minuman,

      TotalHarga
    } = this.state

    return (
      <>
        <div className='tips-container'>
          <div style={{ height: '75%' }} className='tips-content'>
            <div className='calories-calculator'>
              <div className='minuman'>
                <h2>Minuman</h2>
                <select onChange={this.handleChangeMinuman} name='minuman1'>
                  <option value='0'>Pilih</option>
                  <Fragment>
                    {
                      minuman.map(minuman => {
                        return (
                          <option value={minuman[1]}>{minuman[0]}</option>
                        )
                      })
                    }
                  </Fragment>
                </select>
                <h3>+</h3>
                <select onChange={this.handleChangeMinuman} name='minuman2'>
                  <option value='0'>Pilih</option>
                  <Fragment>
                    {
                      minuman.map(minuman => {
                        return (
                          <option value={minuman[1]}>{minuman[0]}</option>
                        )
                      })
                    }
                  </Fragment>
                </select>
                <h3>+</h3>
                <select onChange={this.handleChangeMinuman} name='minuman3'>
                  <option value='0'>Pilih</option>
                  <Fragment>
                    {
                      minuman.map(minuman => {
                        return (
                          <option value={minuman[1]}>{minuman[0]}</option>
                        )
                      })
                    }
                  </Fragment>
                </select>
              </div>
              
              <h2 style={{ color: '#3faf6c', textAlign: 'center', flex: '1 0 100%', margin: '10px 0' }}>Total Harga: {TotalHarga} </h2>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Menu2;
