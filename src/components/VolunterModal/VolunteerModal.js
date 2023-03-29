import React, { useState } from 'react';
import { Button, Form, Modal, Image, Icon } from 'semantic-ui-react';
import img from '../../background.PNG';
import { useAuth0 } from "@auth0/auth0-react";
import { postDonations, postVolanteer } from '../../http/api';
const VolunteerForm = ({ showModal }) => {
    const [open, setOpen] = useState(showModal);
    const { user } = useAuth0();
    const [formData, setFormData] = useState({
        fullName: "",
        phonnumber: "",
        locationof: "",
        img: ""
    });
    const [errors, setErrors] = useState({});

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e, { name, value }) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        
            // send data to server here
            // formData.email = user.email;
            formData.fullName = user.email || user.nickname;
            console.log(formData);
            async function helper() {
                const res = await postVolanteer(formData);
                console.log(res);
            }
            helper();
            handleClose();
        
    };

    return (

        <Modal
            style={{ height: "950px" }}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
            trigger={<Button color="blue" size="massive" animated>
                <Button.Content visible>Fill out the request from here</Button.Content>
                <Button.Content hidden>
                    <Icon name='edit' />
                </Button.Content>
            </Button>}
        >
            <Modal.Header>Donate to People in Ramadan</Modal.Header>
            <Modal.Content>

                <Image src={img} fluid />

                <Form onSubmit={handleSubmit} >
                    <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                        <Form.Input
                            label="Phone Number"
                            name="phonnumber"
                            value={formData.phonnumber}
                            onChange={handleChange}
                            error={errors.phoneNumber}
                            required
                        />
                        
                        <Form.Input
                            label="Location of Item"
                            name="locationof"
                            value={formData.locationof}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button color="black" onClick={handleClose}>
                    Cancel
                </Button>
                <Button
                    content="Join us now"
                    labelPosition="right"
                    icon="send"
                    onClick={handleSubmit}
                    positive
                />
            </Modal.Actions>
        </Modal>
    );
};

export default VolunteerForm;
