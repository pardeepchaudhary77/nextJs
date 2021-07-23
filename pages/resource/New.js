import React, { useState } from 'react'
import Layout from '../../components/Layout';
import axios from 'axios'

const DEFAULT_DATA ={
    title: '',
    desc:'',
    link:'',
    priority:'2',
    timeToFinish:60
}

export default function New() {
    const [form, setForm]=useState(DEFAULT_DATA)

    const saveData = () =>{
        axios.post("/api/resource", form)
            .then(()=> {})
            .catch((err) => {alert(err.message)})
    }
    const handleChange=(e)=>{
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }
    const resetForm=()=> setForm(DEFAULT_DATA)
    return (
        <Layout>
            <br/>
            <div className="container is-max-desktop">
                <div className="card ">
                    <div className="card-content">
                        <div className="content">
                            <h3 className="title is-3">Add new Resource</h3>
                                <form>
                                    <div className="field">
                                        <label className="label">Title</label>
                                        <div className="control">
                                            <input className="input" 
                                                value={form.title}
                                                name="title"
                                                onChange={handleChange}
                                                type="text" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Description</label>
                                        <div className="control">
                                            <textarea className="textarea" 
                                                value={form.desc} 
                                                name="desc"
                                                onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Link</label>
                                        <div className="control">
                                            <input className="input" 
                                                name="link"
                                                value={form.link} 
                                                onChange={handleChange}
                                                type="text" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Priority</label>
                                        <div className="control">
                                            <div className="select">
                                            <select value={form.priority}
                                                onChange={handleChange} name="priority">
                                                <option>Select</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Time to finish</label>
                                        <div className="control">
                                            <input className="input" value={form.timeToFinish} 
                                                onChange={handleChange}
                                                name="timeToFinish"
                                                type="number" />
                                        </div>
                                    </div>
                                    <div className="field is-grouped">
                                        <div className="control">
                                            <button type="button" onClick={saveData} className="button is-link">Submit</button>
                                        </div>
                                        <div className="control">
                                            <button type="button" onClick={resetForm} className="button is-link is-light">Reset</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
            <br/><br/>
        </Layout>
    )
}
