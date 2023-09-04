import React, { useEffect, useRef, useState } from 'react';
import {
    Button, TextField, Box, FormControl, FormLabel, RadioGroup, Radio,
    FormControlLabel, Select, MenuItem, InputLabel
} from '@mui/material';
import './App.css'
import emailjs from "@emailjs/browser";
import "./Form.css";
import swal from 'sweetalert';
 



// const url = "http://localhost:3000";

const FormBase = () => {

    const initialFormData = {
        Email: '',
        Name: '',
        Age: '',
        selectedOption: '',
        College: '',
        Course: '',
        CanadaCollege: '',
        CanadaCourse: '',
        Country: '',
        Goals: '',
        Listening: '',
        Reading: '',
        Speaking: '',
        Writing: '',
        tuitionPayment: '',
        TutionFee: '',
        gicstatus: '',
        GICFee: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(value);
    };

    


    useEffect(() => emailjs.init("YOUR-PUBLIC-KEY-HERE"), []);
  // Add these
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
        service_id: 'service_8jb0hta',
        template_id: 'template_q3npnfu',
        user_id: '9FpY3W5DRdxjqFHgd',
        template_params: formData
    };

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data)
    })

    .then((result) => {
        console.log(result.statusText);
        swal("Good job!", "You have Sucessfully Submited the form!", "success");
        setFormData(initialFormData);
        
    }, (error) => {
        console.log(error.statusText);
    });
    
    e.target.reset();
    
  };
    


    return (
        <div className='main'>
            <div className="m-3">
                <p className="formheaderpara mb-5">
                    <span className="formheaderspan"> <h2 className='formheader'>Customized SOP Generator</h2>
                    </span> Fill this questionnaire for the student. After submitting, you will receive an email at the email address that you have provided with a Statement of Purpose customized for you. You can use and modify that as per your needs. 

                    <h2>EFFIZIENT</h2>
                </p>
            </div>
            

            <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection="column" gap={2}>
                    {/* Email */}
                    <TextField
                        label="Email"
                        variant="outlined"
                        name="Email"
                        value={formData.Email}
                        onChange={handleChange}
                        required
                    />

                    {/* Name */}
                    <TextField
                        label="Full Name"
                        variant="outlined"
                        name="Full Name"
                        value={formData.Name}
                        onChange={handleChange}
                        required
                    />
                    {/* Age */}
                    <TextField
                        label="Age"
                        variant="outlined"
                        name="Age"
                        type="number"
                        value={formData.Age}
                        onChange={handleChange}
                        required
                    />
                    {/* Education Level */}
                    <Box style={{ border: '1px solid #ced4da', borderRadius: '4px', padding: '15px 15px' }}>
                        <FormControl variant="outlined" style={{ display: 'flex', alignItems: 'start' }}>
                            <FormLabel htmlFor="selectedOption" required>Highest Level of Education</FormLabel>
                            <Select
                                id="selectedOption"
                                name="selectedOption"
                                value={formData.selectedOption}
                                onChange={handleChange}
                                // label="Select an Option"
                                style={{ width: '200px' }}
                                required
                            >
                                <MenuItem value="">
                                    <em>Choose</em>
                                </MenuItem>
                                <MenuItem value="Grade 12">Grade 12</MenuItem>
                                <MenuItem value="Diploma">Diploma</MenuItem>
                                <MenuItem value="Bachlors Degree">Bachlors Degree</MenuItem>
                                <MenuItem value="Masters Degree">Masters Degree</MenuItem>
                                <MenuItem value="Phd">Phd</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <TextField
                        label="Institute where you completed your highest level of education"
                        variant="outlined"
                        name="College"
                        value={formData.College}
                        onChange={handleChange}
                        required
                    />

                    <TextField
                        label="What did you study?"
                        variant="outlined"
                        name="Course"
                        value={formData.Course}
                        onChange={handleChange}
                        required
                    />

                    <Box style={{ border: '1px solid #ced4da', borderRadius: '4px', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                        <div style={{ marginBottom: '5px', width: '100%' }}>
                            <InputLabel htmlFor="workExperience" style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                Do you have any relevant work experience? *
                                <div>1. Job Title</div>
                                <div>2. Company Name</div>
                                <div>3. Job Duties</div>
                            </InputLabel>
                        </div>
                        <FormControl variant="outlined" style={{ width: '20rem' }}>
                            <TextField
                                id="workExperience"
                                name="workExperience"
                                variant="outlined"
                                fullWidth
                                placeholder="Write 'None' if no work experience"
                                value={formData.workExperience}
                                onChange={handleChange}
                                required
                            />
                        </FormControl>
                    </Box>
                    <TextField
                        label="What institute did you get admitted to in Canada?"
                        variant="outlined"
                        name="CanadaCollege"
                        value={formData.CanadaCollege}
                        onChange={handleChange}
                        required
                    />

                    <TextField
                        label="What is your program of study in Canada?"
                        variant="outlined"
                        name="CanadaCourse"
                        value={formData.CanadaCourse}
                        onChange={handleChange}
                        required
                    />

                    <TextField
                        label="Which country are you applying from?"
                        variant="outlined"
                        name="Country"
                        value={formData.Country}
                        onChange={handleChange}
                        required
                    />

                    <TextField
                        label="What are your future goals?"
                        variant="outlined"
                        name="Goals"
                        value={formData.Goals}
                        onChange={handleChange}
                        required
                    />

                    <TextField
                        label="English Scores - Listening"
                        variant="outlined"
                        name="Listening"
                        value={formData.Listening}
                        onChange={handleChange}
                        required
                    />

                    <TextField
                        label="English Scores - Reading"
                        variant="outlined"
                        name="Reading"
                        value={formData.Reading}
                        onChange={handleChange}
                        required
                    />

                    <TextField
                        label="English Scores - Speaking"
                        variant="outlined"
                        name="Speaking"
                        value={formData.Speaking}
                        onChange={handleChange}
                        required
                    />

                    <TextField
                        label="English Scores - Writing"
                        variant="outlined"
                        name="Writing"
                        value={formData.Writing}
                        onChange={handleChange}
                        required
                    />

                    <Box display="flex" flexDirection="column" gap={2} style={{ border: '1px solid #ced4da', borderRadius: '4px', padding: '10px' }}>
                        <FormControl component="fieldset" required>
                            <FormLabel component="legend" style={{ textAlign: 'left', marginLeft: '1%' }}>Did you pay your first year tuition?</FormLabel>
                            <RadioGroup
                                name="tuitionPayment"
                                value={formData.tuitionPayment}
                                onChange={handleChange}
                                style={{ textAlign: 'left', marginLeft: '2%' }}
                                required
                            >
                                <FormControlLabel
                                    value="yes"
                                    control={<Radio />}
                                    label="Yes"
                                />
                                <FormControlLabel
                                    value="no"
                                    control={<Radio />}
                                    label="No"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Box>


                    <TextField
                        label="How much tuition fee did you pay?"
                        variant="outlined"
                        name="TutionFee"
                        value={formData.TutionFee}
                        onChange={handleChange}
                        required
                    />

                    <Box display="flex" flexDirection="column" gap={2} style={{ border: '1px solid #ced4da', borderRadius: '4px', padding: '10px' }}>
                        <FormControl component="fieldset" required>
                            <FormLabel component="legend" style={{ textAlign: 'left', marginLeft: '1%', width: 'max-content' }}>Did you do a GIC?</FormLabel>
                            <RadioGroup
                                name="gicstatus"
                                value={formData.gicstatus}
                                onChange={handleChange}
                                style={{ textAlign: 'left', marginLeft: '2%' }}
                            >
                                <FormControlLabel
                                    value="yes"
                                    control={<Radio />}
                                    label="Yes"
                                />
                                <FormControlLabel
                                    value="no"
                                    control={<Radio />}
                                    label="No"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Box>


                    <TextField
                        label="How much did you pay towards GIC?"
                        variant="outlined"
                        name="GICFee"
                        value={formData.GICFee}
                        onChange={handleChange}
                        required
                    />
                </Box>

                <Box display="flex" justifyContent="center" marginTop={2} padding={2}>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </Box>
                
            </form>

        </div>
    )
}

export default FormBase