import React, { Component } from 'react'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      gambar: ''
    }
  }

  render() {

    let klik = (e) => {
      let nama = document.getElementById('masukan').value
      this.setState({
        gambar: `https://robohash.org/${nama}`
      })
    }

    return (
      <React.Fragment>
        <div className='container' >
          <div className="card" style={{ width: '18rem' }}>

            <div className="card-body ">
              <div className='input-group'>
                <input id='masukan' type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
              </div>
              <button className="btn btn-danger" href="/" onClick={klik}>Generate!</button>
            </div>
            <img className="card-img-top" src={this.state.gambar ? this.state.gambar : ''} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

