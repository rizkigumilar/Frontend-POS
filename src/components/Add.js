import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Col,
    Input
} from 'reactstrap';
import { postitem } from '../publics/redux/action/item';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            book: [],
            dropdownOpen: false
        };

        this.toggle = this.toggle.bind(this);
        this.toggleDrop = this.toggleDrop.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    toggleDrop() {
        this.setState((prevState) => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    onChangeFile = (e) => {
        console.log(e.target.files[0])
        this.setState({
            file: e.target.files[0],
        })
    }

    render() {
        const itemAdd = () => {
            let category = '';
            switch (this.state.category) {
                case 'Drink':
                    category = 'Drink';
                    break;
                case 'Main Course':
                    category = 'Main Course';
                    break;
                case 'Dessert':
                    category = 'Dessert';
                    break;
                default:
                    category = 1;
            }
            const dataFile = new FormData()
            dataFile.append('image', this.state.file)
            dataFile.append('name', this.state.name)
            dataFile.append('price', this.state.price)
            dataFile.append('category', this.state.category)
            add(dataFile)
            this.setState((prevState) => ({
                modal: !prevState.modal
            }));
            console.log(this.state.book);
        };
        let add = async (data) => {
            await this.props.dispatch(postitem(data)).then(() => {
                swal({
                    title: "Succes",
                    text: "Add Success !!",
                    icon: "success",
                    button: "OK"
                }).then(() => {
                    window.location.href = '/menu';
                })
            })
                .catch(() => {
                    swal({
                        title: "Failed",
                        text: "Add Failed",
                        icon: "warning",
                        buttons: "OK"
                    }).then(() => {
                        window.location.href = '/menu';
                    })
                })
        };
        return (
            <div>
                <a onClick={this.toggle}>
                    <img src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/04-512.png" style={{ height: '45px', width: '45px', float: 'left', marginLeft: '20px', marginTop: '50px' }} />
                </a>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="{this.props.className} modal-lg">
                    <b style={{ fontSize: '25px', textAlign: 'center' }}>Add Item</b>
                    <ModalBody>
                        <Form>
                            <FormGroup row>
                                <Label sm={3} size="lg">
                                    name
								</Label>
                                <Col sm={9}>
                                    <Input
                                        type="text"
                                        name="title"
                                        style={{ width: '500px', height: '67px', boxShadow: '0px 4px  10px  rgba(0,0,0,0.25', borderRadius: '10px' }}
                                        onChange={(e) => this.setState({ name: e.target.value })}
                                        id="title"
                                        placeholder="Title..."
                                        bsSize="lg"
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={3} size="lg">
                                    Image
								</Label>
                                <Col sm={9}>
                                    <Input
                                        type="file"
                                        name="title"
                                        onChange={this.onChangeFile}
                                        id="title"
                                        placeholder="Image..."
                                        bsSize="lg"
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={3} size="lg">
                                    Price
                                </Label>
                                <Col sm={9}>
                                    <Input
                                        type="text"
                                        name="title"
                                        style={{ width: '500px', height: '67px', boxShadow: '0px 4px  10px  rgba(0,0,0,0.25', borderRadius: '10px' }}
                                        onChange={(e) => this.setState({ price: e.target.value })}
                                        id="title"
                                        placeholder="Price..."
                                        bsSize="lg"
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={3} size="lg">
                                    Category
								</Label>
                                <Col sm={9}>
                                    <Input
                                        type="select"
                                        name="select"
                                        style={{ width: '500px', height: '67px', boxShadow: '0px 4px  10px  rgba(0,0,0,0.25', borderRadius: '10px' }}
                                        onChange={(e) => this.setState({ category: e.target.value })}
                                        id="exampleSelect"
                                        placeholder="Category..."
                                        bsSize="lg"
                                    >
                                        <option>Drink</option>
                                        <option>Dessert</option>
                                        <option>Main Course</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                        </Form>
                        <button onClick={itemAdd.bind(this)} style={{ width: '150px', height: '66px', float: 'right', top: '739', backgroundColor: '#57CAD5', borderRadius: '10px' }}>
                            SAVE
                    </button>
                        <button style={{ width: '150px', height: '66px', float: 'right', top: '739', backgroundColor: '#F24F8A', borderRadius: '10px', marginRight: '15px' }}>
                            CANCEL
                        </button>
                    </ModalBody>

                </Modal>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        item: state.item
    };
};
export default connect(mapStateToProps)(Add);