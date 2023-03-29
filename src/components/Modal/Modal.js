import React, { useState } from 'react';
import { Button, Form, Modal, Image, Icon } from 'semantic-ui-react';
import img from '../../background.PNG';
import { useAuth0 } from "@auth0/auth0-react";
import { postDonations } from '../../http/api';
const DonationForm = ({ showModal }) => {
    const [open, setOpen] = useState(showModal);
    const { user } = useAuth0();
    const [formData, setFormData] = useState({
        phonNumber: '',
        item: '',
        quantity: '',
        img: "https://files.fm/u/ntagav5p2",
        locationof:"",
        email: "",
        fullName: ""
    });
    const [errors, setErrors] = useState({});

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e, { name, value }) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        const newErrors = {};
        if (!/^[0-9]{10}$/.test(formData.phonNumber)) {
            newErrors.phoneNumber = 'Phone number must be a 10-digit number';
        }
        if (formData.quantity <= 0) {
            newErrors.quantity = 'Quantity must be a positive number';
        }
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            // send data to server here
            formData.email = user.email;
            formData.fullName = user.name || user.nickname;;
            console.log(formData);
            async function helper() {
                const res = await postDonations(formData);
                console.log(res);
            }
            helper();
            handleClose();
        }
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
                            name="phonNumber"
                            value={formData.phonNumber}
                            onChange={handleChange}
                            error={errors.phoneNumber}
                            required
                        />
                        <Form.Input
                            label="Item"
                            name="item"
                            value={formData.item}
                            onChange={handleChange}
                            required
                        />
                        <Form.Input
                            label="Quantity"
                            name="quantity"
                            type="number"
                            value={formData.quantity}
                            onChange={handleChange}
                            error={errors.quantity}
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
                    content="Donate"
                    labelPosition="right"
                    icon="heart"
                    onClick={handleSubmit}
                    positive
                />
            </Modal.Actions>
        </Modal>
    );
};

export default DonationForm;
