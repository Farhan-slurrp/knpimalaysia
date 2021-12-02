/* eslint-disable react/jsx-no-target-blank */
import React from "react";

interface Props {}

const AduanPMI = (props: Props) => {
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  //   <a
  //     href={`https://api.whatsapp.com/send/?phone=628567537199&text=Halo+kak,+saya+mau+pesan+${
  //       item.name
  //     }+yang+${type.toLocaleLowerCase()}&app_absent=0`}
  //     target="_blank"
  //   ></a>;
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <a href={`https://wa.me/628567537199`} target="_blank">
        <button>Send</button>
      </a>
    </div>
  );
};

export default AduanPMI;
