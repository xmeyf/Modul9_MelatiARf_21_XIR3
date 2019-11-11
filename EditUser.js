import React from 'react'
import axios from 'axios'
import {Link } from 'react-router-dom'

class EditUser extends React.Component{
constructor(){
    super()
    this.state={
        id : '',
        nama : '',
        alamat : '',
        }
}

componentDidMount = async () => {
    const id = this.props.match.params.id
    const res = await axios.get("http://localhost/reactapi/getUser.php?id="+id
)
 this.setState({
    id: res.data.id,
    nama : res.data.nama,
    alamat : res.data.alamat
    })
}
  handleChange = (e) =>{
      this.setState({ [e.target.name] : e.target.value })
}
  handleSubmit = async(e) => {
      e.preventDefault()
      console.log(this.state)
      await axios.post("http://localhost/reactapi/editUser.php", this.state)
      this.props.history.push('/user');
}
  render(){
      const {id,nama,alamat} = this.state

      return(
        <div className="container">
        <form onSubmit={this.handleSubmit}>
        <h5>𝐄𝐝𝐢𝐭 𝐔𝐬𝐞𝐫</h5>

          <div className="form-group">
          <label for="id">𝗜𝗱</label>
          <input type="text" className="form-control" name="id" value={id} placeholder="𝐸𝑛𝑡𝑒𝑟 𝑌𝑜𝑢𝑟 𝐼𝑑" onChange={this.handleChange}/>
          </div>


          <div className="form-group">
          <label for="nama">𝗡𝗮𝗺𝗲</label>
          <input type="text" className="form-control" name="nama" value={nama} placeholder="𝐸𝑛𝑡𝑒𝑟 𝑌𝑜𝑢𝑟 𝑁𝑎𝑚𝑒" onChange={this.handleChange} />
          </div>

          <div className="form-group">
          <label for="alamat">𝗔𝗱𝗱𝗿𝗲𝘀𝘀</label>
          <input type="text" className="form-control" name="alamat" value={alamat} placeholder="𝐸𝑛𝑡𝑒𝑟 𝑌𝑜𝑢𝑟 𝐴𝑑𝑑𝑟𝑒𝑠𝑠" onChange={this.handleChange} />
          </div>

          <button type="submit" className="btn btn-outline-warning">𝗦𝘂𝗯𝗺𝗶𝘁</button>
          <a href="Home" class="btn btn-outline-warning" role="button" aria-pressed="true">𝐁𝐚𝐜𝐤</a>

          </form>
          </div>


 )
}
}
export default EditUser
