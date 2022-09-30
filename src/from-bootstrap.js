import React from 'react'

function FormBootstrap() {
    return (
        <div className='mt-3 mx-auto p-3' style={{ width: '600px', background: '#cee' }}>
            <from>
                <div className="form-group mb-3">
                    <label htmlFor="login">Email</label>
                    <input type="email" className="form-control" id="login" name="login" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group mb-3 ">
                    <label htmlFor="pswd">Password</label>
                    <input type="password" className="form-control" id="pswd" name="pswd" placeholder="Enter password" />
                </div>
                <div class="form-group mb-4">
                    <label htmlFor="select1">Select</label>
                    <select class="form-control" id="select1" name='select1'>
                        <option value="1">item 1</option>
                        <option value="2">item 2</option>
                        <option value="3">item 3</option>
                    </select>
                </div>
                <button  class="btn btn-success">OK</button>
            </from>
        </div>
    )
}

export default FormBootstrap