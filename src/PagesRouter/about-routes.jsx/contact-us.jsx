import React from "react";
export default function ContactUs() {
    const handleMessage = (e) => {
        window.location.href='https://wa.me/996553118002';
    }
  return (
    <div>
      <h2>Contact Us</h2>
      <div>
        <article>
          <h3>Panel Members</h3>
          <p>For questions regarding surveys or rewards:</p>
          <button>Help Me!</button>
        </article>
        <article>
          <h3>General</h3>
          <p>I want to contact YouGov about something else:</p>
          <button><a href="mailto:appsmillana@gmail.com">Send email to nowhere</a></button>
        </article>
        <article>
          <h3>Research</h3>
          <p>I'd like to inquire about products or services:</p>
          <button onClick={(e) => handleMessage()}>Contact Us</button>
        </article>
      </div>
    </div>
  );
}
