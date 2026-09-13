import { CONFIG } from '../config'
import Icon from './Icon'

export default function Socials() {
  return (
    <div className="socials">
      <a href={CONFIG.github} target="_blank" rel="noopener" title="GitHub"><Icon name="github" /></a>
      {CONFIG.linkedin && <a href={CONFIG.linkedin} target="_blank" rel="noopener" title="LinkedIn"><Icon name="linkedin" /></a>}
      <a href={"mailto:" + CONFIG.email} title="Email"><Icon name="mail" /></a>
    </div>
  )
}
