import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import './contact.css'

const pgp_key = `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: OpenPGP.js v4.10.8
Comment: https://openpgpjs.org

xsBNBFmFQK8BCADgTjJD1HcCypSN3xbsEzARz82MVJdjAErsC1XcLJZflMiy
Cfcau1BNPkIPs6cAfPXwAT1xP5IWUm14GfuzGGy23BTTmxSmJi8od1IzRGQB
2Q2bxwWqgXJBy+9Q8MgaI33UpB7XgQzNKqn6CN1cbQJQ5BC3bgTYehrAVQom
HyKHwF8M/Uz1gkd1f0wPQT/luqIobdZDBMQ6XP/CWtYzJw8oUbQ8bvmp0x4D
uX6QVckdGR3tcDAi5W+fRHhEfKEHXT1TL/hL2r+nKCMiM4mP+f90RgILtwWT
0dw3h0RrAP4r9rhdz4m6lVtnkWcvV+g+c0VAGtefw9MUGztv5/KJQ6wvABEB
AAHNI3dvcmtAYnJ1bm9wYy5uZXQgPHdvcmtAYnJ1bm9wYy5uZXQ+wsB/BBAB
CAApBQJZhUCwBgsJBwgDAgkQvpkN2zg8uV0EFQgKAgMWAgECGQECGwMCHgEA
CgkQvpkN2zg8uV0wcAf9HX4AAYqbZYr8ooOmyZ3oNk/Alkt3wEgscPlz2bGx
hNA6a2hO9G6OduCrjY4EiLVnGhx6fd3axwPrnXjS3KwZxhbUY0/AHEqX4CIj
fmHj410DHsrl7iQyyvidjJKQpuddwez+VurouMDHMXLzfdEmQgXhr4xeJoe5
PJq3DKVsIJvFeM0wN02H9jOruC2dtVs5hc2/eY6r2VwzaNF56jeBP13uRYer
yU9mUFieoEg0j1K+AsbXymnlakcSLOiJhNfv/i+zG9G4HST4mG7L7n4ALaD9
4mStT+/QlJDrbyLJUbAbwN0HrJ3wToBggRc2NeNlrKPWZqNddwA7Qxopgn2F
387ATQRZhUCvAQgAuTI/NIlDHKUQ+kNt/oUvBqcTGg0PKII+inCr2F0rhove
j/dsEEWq/miBcM+Npt36VLvftH5XsB9DSavfZS3eaKW0ZIOnFY6XfL2SNlbW
68l0b4rdUpDRFyLD3IKtk8QLEgY90whxwjl4O+LvDZvpYKkcyFNWKRUvCnal
IBkteskMK+UD/dXSRdcuulJiUnURS4P6db5QWm94rYgc904vnXFXkPLMrRjt
aupqHTdCPrez6FlNzmUK/SEA47c53OYLCs1wjknnJQCfB9BIJwIOTEVMpF2G
3t8oiTas6w9r9tS3PnT3bsRbI9pUydEQRvFHRs3e6kxLYRYUfqi/el434wAR
AQABwsBpBBgBCAATBQJZhUCwCRC+mQ3bODy5XQIbDAAKCRC+mQ3bODy5XUnp
CACUZDZXwElsQT+QqJOcnTvPJFjxyTd7SxtVoNj0ZULtJC8AWXwjdWXRSfJm
cWCc/gycwi9XBrOMpcKl4dwg1M1GAlcR1m61yn4PvuTWsb9S5CLMUf7+HfRR
rfIwDW1V2jonC+W65MtsKFKG1E3DyP7JA5M+bc4jvjEXhZarAIV9z1k0/856
mzojpzW0QNBoL2v9ZdkIozcXtYdH6u7m7D8ZaeV4xUvJAPpQtNPjbGGq21sf
KNQw9lXKRqO/xrKk0b/rPLAirm19yUlbWFUXJiR6hXRlTxIce6qPaK6txV6H
o7Cdtii3o608dwPrDGnTtchulbvMXD8Y5QFe0Dj4abN7
=mKCF
-----END PGP PUBLIC KEY BLOCK-----`;

function ContactMePage() {
  
  const actions = {
    encrypt: 'Encrypt',
    reset: 'Reset'
  }

  const [inputEmail, setInputEmail] = useState('')
  const [inputMessage, setInputMessage] = useState('')
  //Initialy, action button is set to Encrypt the message
  const [action, setAction] = useState(actions.encrypt)
  //Initialy, message is editable 
  const [msgInputDisabled, setMsgInputDisabled] = useState(false)
  //Initialy, message is not senable because it's not encrypted yet
  const [submitDisabled, setSubmitDisabled] = useState(true)

  function handleAction() {
    if (!window.crypto?.getRandomValues) {
      alert("Sorry, the web browser you're using is not supported");
      return;
    }
    switch (action) {
      case actions.encrypt:
        const openpgp = require('openpgp');
        (async () => {
          const encryptedMsg = await openpgp.encrypt({
            message: await openpgp.createMessage({ text: inputMessage }),
            encryptionKeys: await openpgp.readKey({ armoredKey: pgp_key })
            //signingKeys: privateKey // optional
          });
          setInputMessage(encryptedMsg);
          setAction(actions.reset);
          setMsgInputDisabled(true);
          setSubmitDisabled(false);
        })();
        break;
      case actions.reset:
        setInputMessage('')
        setAction(actions.encrypt);
        setMsgInputDisabled(false);
        setSubmitDisabled(true);
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://faas-tor1-70ca848e.doserverless.co/api/v1/web/fn-f564cb62-ce7b-4734-99a2-1fc47d375713/cher-ami/cher-ami", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: inputEmail,
        message: inputMessage,
      })
    }).then(response => {
      if (response.status >= 200 && response.status < 300) {
        alert("It worked - I'll get back to you asap. Thanks for reaching me!")
        window.location.reload();
      }
    }).catch(err => {
      if (window.confirm("Sorry, there was a problem sending the message. May you submit the issue on Github so I can fix it?")){
        window.open('https://github.com/brunopc-net/Docusaurus-Blog/issues');
      };
    });
  }

  return (
    <Layout
      title={'Contact me'}
      description='You can send me a OpenPGP encrypted message from this page'
    >
      <main>
        <div className="container">
          <div className="contactForm">
            <h1>Contact me</h1>
            <div className="formGroup">
              <h2>Send me an encrypted message</h2>
              <form onSubmit={handleSubmit}>
                  <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Your email address"
                      onChange={(e) => setInputEmail(e.target.value)}
                      required
                  />
                  <textarea
                    className="form-control"
                    id="message"
                    name="msg"
                    placeholder='Your message'
                    onChange={(e) => setInputMessage(e.target.value)} 
                    value={inputMessage}
                    disabled={msgInputDisabled && "disabled"}
                    required
                  />
                  <button id="action" type="button" onClick={handleAction}>
                    {action}
                  </button>
                  <button id="submit" type="submit" disabled={submitDisabled && "disabled"}>
                    Send
                  </button>
              </form>
            </div>
            <p style={{marginTop: 20}}>
              You can also contact me a <Link to="mailto:work@brunopc.net">work@brunopc.net</Link>, with or without my public key listed below.
            </p>  
            <listing style={{marginTop: 30}}>
              {pgp_key}
            </listing>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default ContactMePage;
