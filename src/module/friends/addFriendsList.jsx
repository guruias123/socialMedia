import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFriends, addFriend } from "../../store/action/userAction";
import "./addFriendsList.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import FormField from "../../components/form/FormField";

const AddFriendsList = () => {
  const dispatch = useDispatch();
  const { friends, loading } = useSelector((state) => state.user);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
    mobile: "",
    address: "",
    bio: "",
    pincode: "",
    logo: "assest/avatar/photo-men.jpg"
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setErrors({});
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const validate = () => {
    const newErrors = {};
    const requiredFields = ['name', 'role', 'email', 'password', 'mobile', 'address', 'bio', 'pincode'];

    requiredFields.forEach(field => {
      if (!formData[field] || !formData[field].trim()) {
        newErrors[field] = "This field is Mandatory";
      }
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      dispatch(addFriend(formData)).then(() => {
        handleClose();
        // Reset form
        setFormData({
          name: "",
          email: "",
          role: "",
          password: "",
          mobile: "",
          address: "",
          bio: "",
          pincode: "",
          logo: "assest/avatar/photo-men.jpg"
        });
        setErrors({});
      });
    }
  };

  const isSpecial = (id) => id === 1;

  return (
    <div className="friends-list-card">
      <div className="friends-header">
        <h5 className="friends-title">Friends</h5>
      </div>

      <hr className="friends-divider" />

      <div className="friends-body">
        {loading ? <p>Loading...</p> : (
          friends.map((friend) => (
            <div className="friend-item" key={friend.id}>
              <div className={`friend-avatar ${isSpecial(friend.id) ? 'bg-red' : ''}`}>
                <img src={friend.logo || friend.img || "assest/avatar/photo-men.jpg"} alt={friend.name} />
              </div>
              <div className="friend-info">
                <h6 className="friend-name">{friend.name}</h6>
                <p className="friend-role">{friend.role}</p>
              </div>
              <button className="btn-follow">Follow</button>
            </div>
          ))
        )}
      </div>

      <div className="friends-footer">
        <button className="btn-add-users" onClick={handleShow}>
          <span className="plus-icon">+</span> Add Users
        </button>
      </div>

      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header className="d-flex justify-content-between align-items-center">
          <Modal.Title>Add User</Modal.Title>
          <i
            className="bi bi-x-lg"
            style={{ cursor: "pointer", fontSize: "1.2rem" }}
            onClick={handleClose}
          ></i>
        </Modal.Header>
        <Modal.Body className="p-4">
          <Form onSubmit={handleSubmit}>
            <FormField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />

            <FormField
              label="Role"
              name="role"
              type="select"
              value={formData.role}
              onChange={handleChange}
              error={errors.role}
              options={[
                { value: "Developer", label: "Developer" },
                { value: "Tester", label: "Tester" },
                { value: "Designer", label: "Designer" },
                { value: "Manager", label: "Manager" }
              ]}
            />

            <FormField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />

            <FormField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />

            <FormField
              label="Mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              error={errors.mobile}
            />

            <FormField
              label="Address"
              name="address"
              type="textarea"
              value={formData.address}
              onChange={handleChange}
              error={errors.address}
            />

            <FormField
              label="Bio"
              name="bio"
              type="textarea"
              value={formData.bio}
              onChange={handleChange}
              error={errors.bio}
            />

            <FormField
              label="Pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              error={errors.pincode}
            />

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">Logo:</Form.Label>
              <Col sm="9">
                <div className="border rounded p-2 text-center bg-light text-muted">
                  <i className="bi bi-image" style={{ marginRight: '5px', color: 'green' }}></i> Photo
                </div>
              </Col>
            </Form.Group>

            <div className="d-flex justify-content-end mt-4">
              <Button variant="primary" type="submit" className="px-4" style={{ marginRight: '20px' }}>
                Submit
              </Button>
              <Button variant="primary" onClick={handleClose} className="px-4">
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddFriendsList;