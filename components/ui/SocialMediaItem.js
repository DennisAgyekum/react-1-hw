import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function SocialMediaItem({ title, icon, url }) {
  return (
    <div>
      <FontAwesomeIcon icon={icon} style={{ color: "black" , borderRadius: "50%", fontSize : "1.5rem" , width: "1rem" , height: "1rem" , margin : "1px" }} />
      <span>
        <Link href={url}>{title}</Link>
      </span>   
    </div>
  );
}