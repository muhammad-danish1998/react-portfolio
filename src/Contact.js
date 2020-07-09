import React from 'react'

export const Contact = () => {
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Contact page</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name . . ." />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Phone</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Mobile number" />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            
                            <div className='col-12'>
                                <button class="btn btn-outline-primary" type="submit">Submit form </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
