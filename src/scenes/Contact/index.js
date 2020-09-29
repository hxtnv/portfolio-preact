import React, { Component } from 'react';

import Button from '../../components/Button';

import styles from './index.module.css';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "", isDisabled: false, success: false };
  }

  handleSubmit = e => {
    this.setState({isDisabled: true});

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        this.setState({success: true, isDisabled: false});
        alert('Your message has been sent!');
      })
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;

    return (
      <section className={styles.contact}>
        <h3>Contact</h3>

        <div className={styles.container}>
          <form name="contact" method="POST" data-netlify="true" onSubmit={this.handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            
            <label>Your name</label>
            <input type="text" required placeholder="John Doe" name="name" value={name} onChange={this.handleChange} />

            <label>Your email</label>
            <input type="email" required placeholder="john@example.net" name="email" value={email} onChange={this.handleChange} />

            <label>Your message</label>
            <textarea required placeholder="Message goes here" name="message" value={message} onChange={this.handleChange}></textarea>

            <Button block primary submit disabled={this.state.isDisabled}>Send now</Button>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
