import React from 'react'
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function socialFactions() {
  return (
    <div>
      <div className="socialFactions">
          <a
            className="socialLinkFactions socialDiscord"
            href="https://discord.gg/meta-life"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="socialDiscordIcone" icon={faDiscord} />
          </a>
          <a
            href="https://twitter.com/metalegendsnft"
            className="socialLinkFactions socialTwitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="socialTwitterIcone" icon={faTwitter} />
          </a>
        </div>
    </div>
  )
}
