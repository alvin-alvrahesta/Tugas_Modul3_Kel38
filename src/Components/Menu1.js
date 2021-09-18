import React, { Fragment } from 'react';
import './Menu1.css'


class Menu1 extends React.Component {
  constructor(props) {
    super(props)
    this.handleChangeAsupan = this.handleChangeAsupan.bind(this)
    
    this.state = {
      asupan: [
        ['Gado-gado', 18000],
        ['Tahu Gimbal', 12000],
        ['Nasi Goreng', 16000],
        ['Mie Ayam', 15000],

      ],

      menu: {
        makanan1: 0,
        makanan2: 0,
        makanan3: 0,


      },
      TotalMakanan: 0,
      TotalHarga: 0
    }
  }

  handleTotal = () => {
    const {
      TotalMakanan,
    } = this.state
    this.setState({
      TotalHarga:  TotalMakanan
    })
  }

  handleCalculation = () => {
    const {
      makanan1,
      makanan2,
      makanan3,

    } = this.state.menu
    var makanan = makanan1 + makanan2 + makanan3

    this.setState({
      ...this.state.menu,
      TotalMakanan: makanan,

    }, this.handleTotal
    )
  }

  handleChangeAsupan(e) {
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
    alert('Terima Kasih Silahkan Tunggu')
    }

  render() {
    const {
      asupan,
      
      TotalHarga
    } = this.state

    return (
      <>
        <div className='tips-container'>
          <div style={{ height: '75%' }} className='tips-content'>
            <div className='calories-calculator'>
              <div className='makanan'>
                <h2>Makanan</h2>
                <select onChange={this.handleChangeAsupan} name='makanan1'>
                  <option value='0'>Pilih</option>
                  <Fragment>
                    {
                      asupan.map(makanan => {
                        return (
                          <option value={makanan[1]}>{makanan[0]}</option>
                        )
                      })
                    }
                  </Fragment>
                </select>
                <h3>+</h3>
                <select onChange={this.handleChangeAsupan} name='makanan2'>
                  <option value='0'>Pilih</option>
                  <Fragment>
                    {
                      asupan.map(makanan => {
                        return (
                          <option value={makanan[1]}>{makanan[0]}</option>
                        )
                      })
                    }
                  </Fragment>
                </select>
                <h3>+</h3>
                <select onChange={this.handleChangeAsupan} name='makanan3'>
                  <option value='0'>Pilih</option>
                  <Fragment>
                    {
                      asupan.map(makanan => {
                        return (
                          <option value={makanan[1]}>{makanan[0]}</option>
                        )
                      })
                    }
                  </Fragment>
                </select>
              </div>
              
              <h2 style={{ color: '#ff0000', textAlign: 'center', flex: '1 0 100%', margin: '10px 0' }}>Total Harga: {TotalHarga} </h2>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Menu1;
