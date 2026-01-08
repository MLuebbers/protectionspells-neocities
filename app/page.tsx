import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div className="red">
      <h2>Protection Spells</h2>
      Maybe there is some honor in keeping this secret but I didn't come up with this name. Protection Spells comes directly from a Songs: Ohia album of the same name. I like Jason Molinas work quite a bit and found the name evocative. My idea was that the music was some sort of ritual we are all partaking in, where the performers casts a protection spell over they're audience. I did not know at the time of choosing the name that the album was entirely improvized. I feel even more strongly about the name now, but I must admit I feel silly saying it outloud.
      <h1>About</h1>
      <p>
        I am a multimedia producer, programmer, and DJ in Chicago interchangeably under the names <a href="https://protectionspells.bandcamp.com/">Max Bowen</a> and <a href="https://soundcloud.com/protection-spells">Protection Spells</a>. This blog is intended as a place to hold writings about all three things, side projects, tutorials for my future self, and documentation of my life here.
      </p>
      <p>
        Line 2
      </p>
      <ul>
        <li>Bandcamp</li>
        <li><a href="https://soundcloud.com/protection-spells">SoundCloud</a></li>
        <li>Are.na</li>
      </ul>
    </div>
  );
}
